from .common.json import ModelEncoder
from .models import Park

class ParkEncoder(ModelEncoder):
    model = Park
    properties = [
        "id",
        "name",
        "state",
        "city",
<<<<<<< HEAD:DONT-KICK-THE-BUCKET/parks/parks_rest/encoders.py
        # "address",
=======
>>>>>>> 444faa6477c90885212497c316c7179313e4aa87:parks/parks_rest/encoders.py
        "description",
        "weather_info",
        "entrance_fee",
        "contact_num",
        "image_url",
    ]