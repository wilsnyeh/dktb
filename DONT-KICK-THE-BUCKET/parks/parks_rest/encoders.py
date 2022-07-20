from .common.json import ModelEncoder
from .models import Park

class ParkEncoder(ModelEncoder):
    model = Park
    properties = [
        "id",
        "name",
        "state",
        "city",
        "description",
        "weather_info",
        "entrance_fee",
        "contact_num",
        "image_url",
    ]