from common.json import ModelEncoder
from .models import Account, ParkVO

class ParkVOEncoder(ModelEncoder):
    model = ParkVO
    properties = [
        "name",
        "state",
        "parks_visited",
    ]

class AccountEncoder(ModelEncoder):
    model = Account
    properties = [
        "username",
        "first_name",
        "last_name",
        "email",
        "park",
    ]
    encoder = {
        "park" : ParkVOEncoder(),
    }