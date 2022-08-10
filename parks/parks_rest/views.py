from json import JSONDecoder
from selectors import EpollSelector
from urllib.robotparser import RequestRate
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Park
from .encoders import ParkEncoder
import json
from django.conf import settings
import djwto.authentication as auth

# Create your views here.


@auth.jwt_login_required
@require_http_methods(["GET", "POST"])
def parks_list(request):
    if request.method == "GET":
        parks = Park.objects.all()
        return JsonResponse(
            {"parks": parks},
            encoder=ParkEncoder,
        )
    else:
        pass


@require_http_methods(["GET", "DELETE"])
def park_detail(request, id):
    if request.method == "GET":
        try:
            park = Park.objects.get(id=id)
            return JsonResponse(park, encoder=ParkEncoder, safe=False)
        except Park.DoesNotExist:
            response = JsonResponse({"message": "Park does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            park = Park.objects.get(id=id)
            park.delete()
            return JsonResponse(
                park,
                encoder=ParkEncoder,
                safe=False,
            )
        except Park.DoesNotExist:
            return JsonResponse({"message": "Park does not exist"})
