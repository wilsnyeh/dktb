from json import JSONDecoder
from selectors import EpollSelector
from urllib.robotparser import RequestRate
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Park
import json
# Create your views here.
@require_http_methods(["GET", "POST"])
def parks_list(request):
    if request.method == "GET":
        parks = Park.objects.all()
        return JsonResponse(
            {"parks": parks},
            encoder=ParkEncoder,
        )
    else:
        response = JsonResponse