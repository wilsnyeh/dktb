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
    response = requests.get("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${NPS_API_KEY}")
    content = json.loads(response.content)
    for park in content["parks"]:
        Park.objects.update_or_create(
            vin=car["vin"],
            defaults={"vin": car["vin"], "year": car["year"]},
        )

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_parks()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()