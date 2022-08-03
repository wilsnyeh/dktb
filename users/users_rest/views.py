import re
from django.shortcuts import render
from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods # tell liam
from .models import Account, ParkVO
from .encoders import AccountEncoder, ParkVOEncoder
import json



# Create your views here.
@require_http_methods(["GET", "POST"])
def accounts_list(request):
    if request.method == "GET":
        accounts = Account.objects.all()
        return JsonResponse(
            {"accounts": accounts},
            encoder=AccountEncoder,
        )
    else:
        request.method == "POST"
        try:
            content = json.loads(request.body)
            print(content)
            account = Account.objects.create_user(
                username=content["username"],
                password=content["password"],
                email=content["email"],
                first_name=content["first_name"],
                last_name=content["last_name"],
            )
            Account.objects.create(account=account)
            return JsonResponse(
                {"account": account},
                encoder=AccountEncoder,
            )
        except IntegrityError:
            response = JsonResponse(
                {"detail": "Please enter a different username and email"}
            )
            response.status_code = 409
            return response



@require_http_methods(["GET", "PUT"])
def account_detail(request, id):
    if request.method == "GET":
        # content = json.loads(request.body)
        account = Account.objects.get(id=id)
        return JsonResponse(
            {
                "id": account.id,
                "username": account.username,
                "email": account.email,
                "parks": account.parks
            }, safe=False
        )
    else:
        account=Account.objects.get(id=id)
        print("---------------------------------->",account) 
        content = json.loads(request.body)
        print("---------------------------------->",content) 
        print("---------------------------------->",account.id) 
        # account.parks.add(content)
        # account = Account.objects.filter(id=id).update(parks=content)
        return JsonResponse(
            content
        )


@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response
