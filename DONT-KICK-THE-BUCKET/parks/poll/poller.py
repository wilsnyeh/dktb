import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "parks_project.settings")
django.setup()

# Import models from park_rest, here.
import parks_rest.models
# from park_rest.models import Something
from parks_rest.models import Park

def get_parks():
<<<<<<< HEAD
<<<<<<< HEAD
    response = requests.get("https://developer.nps.gov/api/v1/parks?parkCode=all&api_key=${NPS_API_KEY}")
    content = json.loads(response.content)
    for park in content["data"]:
        Park.objects.update_or_create(
            defaults={
                "name": park["fullName"],
                "state": park["states"],
                "city": park.addresses[0].city,
                "address": park.addresses[0].line1,
=======
    response = requests.get("https://developer.nps.gov/api/v1/parks?parkCode=1&api_key=uxgDw6XIywVawiRxM2cbgQhzU9UZEfVrBgFdMtvz")
=======
    response = requests.get("https://developer.nps.gov/api/v1/parks?parkCode=&api_key=uxgDw6XIywVawiRxM2cbgQhzU9UZEfVrBgFdMtvz")
>>>>>>> 77241d0df5d151a23f06378cc71b185893bd653c
    content = json.loads(response.content)
    for park in content["data"]:
        Park.objects.update_or_create(defaults={
                "name": park["fullName"],
                "state": park["states"],
<<<<<<< HEAD
                # "city": park.addresses[0].city,
                # "address": park.addresses[0].line1,
>>>>>>> 16b18b51afaa7ab3966825106fa8e463dbe9d4e7
                "description": park["description"],
                "weather_info": park["weatherInfo"],
                "entrance_fee": park.entranceFees[0].cost,
                "contact_num": park.contacts.phoneNumbers[0].phoneNumber,
                "image_url": park.images[0].url,
            }
<<<<<<< HEAD
            print(defaults)
=======
>>>>>>> 16b18b51afaa7ab3966825106fa8e463dbe9d4e7
        )
=======
                "city": park["addresses"][0]["city"],
                "address": park["addresses"][0]["line1"],
                "description": park["description"],
                "weather_info": park["weatherInfo"],
                "entrance_fee": park["entranceFees"][0]["cost"],
                # "contact_num": park["contacts"]["phoneNumbers"][0]["phoneNumber"],
                "image_url": park["images"][0]["url"],
                }
            )
        # except TypeError:
        #     print("error")
>>>>>>> 77241d0df5d151a23f06378cc71b185893bd653c

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_parks()
        except Exception as e:
            print(e, file=sys.stderr)
<<<<<<< HEAD
<<<<<<< HEAD
        time.sleep(36000)


if __name__ == "__main__":
    poll()
=======
        time.sleep(60)
=======
        time.sleep(5)
>>>>>>> 77241d0df5d151a23f06378cc71b185893bd653c

if __name__ == "__main__":
    poll()
>>>>>>> 16b18b51afaa7ab3966825106fa8e463dbe9d4e7
