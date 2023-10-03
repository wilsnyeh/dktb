import re
from django.shortcuts import render
from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .serializers import AccountSerializer # tell liam
from .models import Account, ParkVO
from .encoders import AccountEncoder, ParkVOEncoder
import json

@require_http_methods(["GET"])
def park_vo_list(request):
    if request.method == "GET":
        parks=ParkVO.objects.all()
        return JsonResponse(
            {"parks": parks},
            encoder=ParkVOEncoder,
        )
    else:
        pass

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
            account = Account.objects.create_user(**content)
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
        account = Account.objects.get(id=id)
        serializer=AccountSerializer(account) 
        return JsonResponse(serializer.data)
    else:
        account=Account.objects.get(id=id)
        content=json.loads(request.body)
        park=ParkVO.objects.get(id=content["park"])
        account.parks.add(park)
        serializer=AccountSerializer(account) 
        return JsonResponse(serializer.data)


@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response
