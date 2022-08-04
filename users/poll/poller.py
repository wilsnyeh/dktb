import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "users_project.settings")
django.setup()

# import model after setting up database settings
from users_rest.models import ParkVO


def get_parks():
    response = requests.get("http://parks:8000/parks/list")
    print("------------------------------------------>",response)
    content = json.loads(response.content)
    print("------------------------------------------>",content)
    for park in content["park"]:
        ParkVO.objects.update_or_create(id=park["id"],
        )

def poll():
    while True:
        print('Users poller polling for data')
        try:
            get_parks(),
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(20)

if __name__ == "__main__":
    poll()