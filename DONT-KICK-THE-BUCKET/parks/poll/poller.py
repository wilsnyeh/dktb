import django
import sys
import time
import json
import requests
import os

sys.path.append("") 
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "parks_project.settings")
django.setup()

NPS_API_KEY = os.environ["NPS_API_KEY"]
<<<<<<< HEAD
=======
print("HEEELLLLOOOOOOOOO~!!!!!!", type(NPS_API_KEY))

>>>>>>> 0a47ad804269bad10972c7081de8414b3e2a8ced
# Import models from park_rest, here.
import parks_rest.models

# from park_rest.models import Something
from parks_rest.models import Park
import os


def get_parks():
<<<<<<< HEAD
    response = requests.get(
        f"https://developer.nps.gov/api/v1/parks?parkCode=all&api_key={['NPS_API_KEY']}"
    )
=======
    response = requests.get(f'https://developer.nps.gov/api/v1/parks?parkCode=&api_key={["NPS_API_KEY"]}')
>>>>>>> 0a47ad804269bad10972c7081de8414b3e2a8ced
    content = json.loads(response.content)
    for park in content["data"]:
        phoneNumber = ""
        try:
            phoneNumber = park["contacts"]["phoneNumbers"][0]["phoneNumber"]
        except IndexError:
            pass

        Park.objects.update_or_create(
            name=park["fullName"],  ## unique identifier
            defaults={
                "state": park["states"],
                "city": park["addresses"][0]["city"],
                "description": park["description"],
                "weather_info": park["weatherInfo"],
                "entrance_fee": park["entranceFees"][0]["cost"],
                "contact_num": phoneNumber,
                "image_url": park["images"][0]["url"],
            },
        )


def poll():
    while True:
        print("Service poller polling for data")
        try:
            get_parks()
        except Exception as e:
<<<<<<< HEAD
            print(e, file=sys.stderr)
        time.sleep(20)  ## 86400

=======
            print( e, file=sys.stderr)
        time.sleep(20) ## 86400
>>>>>>> 0a47ad804269bad10972c7081de8414b3e2a8ced

if __name__ == "__main__":
    poll()
