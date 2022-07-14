from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods # tell liam
from .models import Account, ParkVO
from .encoders import AccountEncoder, ParkVOEncoder
import json

# Create your views here.
@require_http_methods(["GET","POST"])
def accounts_list(request):
    if request.method == "GET":
        accounts = Account.objects.all()
        return JsonResponse(
            {"accounts": accounts},
            encoder = AccountEncoder,
        )
    # else: 
    #     content = json.loads(request.body)
    #     try:
    #         account = content["account"]
    #         account = Account.objects.all()
            
    #         return JsonResponse(
    #             accounts_list,
    #             encoder=AccountEncoder,
    #             safe=False
    #         )