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
<<<<<<< HEAD:DONT-KICK-THE-BUCKET/parks/poll/poller.py
    response = requests.get("https://developer.nps.gov/api/v1/parks?parkCode=&api_key={api_key}")
=======
    response = requests.get(f'https://developer.nps.gov/api/v1/parks?parkCode=&api_key={["NPS_API_KEY"]}')
>>>>>>> 444faa6477c90885212497c316c7179313e4aa87:parks/poll/poller.py
    content = json.loads(response.content)
    for park in content["data"]:
        phoneNumber = ""
        try:
            phoneNumber = park["contacts"]["phoneNumbers"][0]["phoneNumber"]
        except IndexError:
            pass

        Park.objects.update_or_create(
            name=park["fullName"], ## unique identifier
            defaults={
                "state": park["states"],
                "city": park["addresses"][0]["city"],
<<<<<<< HEAD:DONT-KICK-THE-BUCKET/parks/poll/poller.py
                # "address": park["addresses"][0]["line1"],
=======
>>>>>>> 444faa6477c90885212497c316c7179313e4aa87:parks/poll/poller.py
                "description": park["description"],
                "weather_info": park["weatherInfo"],
                "entrance_fee": park["entranceFees"][0]["cost"],
                "contact_num": phoneNumber,
                "image_url": park["images"][0]["url"],
                }
            )

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_parks()
        except Exception as e:
            print( e, file=sys.stderr)
        time.sleep(86400)

if __name__ == "__main__":
    poll()