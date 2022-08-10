from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from .models import ParkVO, Account


class ParkVOSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkVO
        fields = "__all__"


class AccountSerializer(serializers.ModelSerializer):
    parks = ParkVOSerializer(many=True, read_only=True)

    class Meta:
        model = Account
        fields = "__all__"
        depth = 2
