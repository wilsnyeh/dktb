FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

COPY requirements.txt requirements.txt
COPY manage.py manage.py

COPY DONT-KICK-THE-BUCKET DONT-KICK-THE-BUCKET
COPY users users

RUN pip install -r requirements.txt
CMD /wait && python manage.py migrate && python manage.py runserver "0.0.0.0:8000"