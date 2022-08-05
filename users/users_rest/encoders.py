from common.json import ModelEncoder
from .models import Account, ParkVO

class ParkVOEncoder(ModelEncoder):
    model = ParkVO
    properties = [
        "name",
        "city",
        "state",
        "image_url",
    ]
    def get_extra_data(self, o):
        return {
            "id": o.id
        }

class AccountEncoder(ModelEncoder):
    model = Account
    properties = [
        "username",
        "first_name",
        "last_name",
        "email",
        "password",
    ]

    encoder = {
        "parks" : ParkVOEncoder(),
    }