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

# Import models from park_rest, here.
import parks_rest.models
# from park_rest.models import Something
from parks_rest.models import Park
import os



def get_parks():
    response = requests.get(f'https://developer.nps.gov/api/v1/parks?id=&limit=466&start=0&api_key={NPS_API_KEY}')
    content = json.loads(response.content)
    for park in content["data"]:
        phoneNumber = ""
        try:
            phoneNumber = park["contacts"]["phoneNumbers"][0]["phoneNumber"]           
        except IndexError:
            pass
        try:
            url = park["images"][0]["url"]
            if url.rfind("(") > -1:
                image_url = url[2:len(url)-4]
            else:
                image_url = url
        except IndexError:
            pass

        Park.objects.update_or_create(
            name=park["fullName"], ## unique identifier
            defaults={
                "state": park["states"],
                "city": park["addresses"][0]["city"],
                "description": park["description"],
                "weather_info": park["weatherInfo"],
                "entrance_fee": (park["entranceFees"])[0]["cost"],
                "image_url": park["images"][0]["url"],
                "contact_num": phoneNumber,                
                }
            )


def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_parks()
        except Exception as e:
            print( e, file=sys.stderr)
        time.sleep(600)

if __name__ == "__main__":
    poll()
