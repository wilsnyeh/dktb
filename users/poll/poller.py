import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# import model after setting up database settings
from users_rest.models import ParkVO


def get_parks():
    response = requests.get("http://localhost:8080/parks/list/")
    content = json.loads(response.content)
    for park in content["park"]:
        ParkVO.objects.update_or_create(id=park["id"],
        )

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_parks(),
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(20)

if __name__ == "__main__":
    poll()