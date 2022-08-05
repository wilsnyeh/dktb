from enum import unique
from django.forms import ModelMultipleChoiceField
from django.test import TestCase, Client
from ..models import Account
from django.urls import reverse
from django.db import models


class FeatureTests(TestCase):
    def test_black_installed(self):
        try:
            import black
        except ModuleNotFoundError:
            self.fail("Could not find 'black' installed in the environment")

    def test_flake8_installed(self):
        try:
            import flake8
        except ModuleNotFoundError:
            self.fail("Could not find 'flake8' installed in the environment")

    def test_gunicorn_installed(self):
        try:
            import gunicorn
        except ModuleNotFoundError:
            self.fail("Could not find 'gunicorn' installed in the environment")

    def test_djwto_installed(self):
        try:
            import djwto
        except ModuleNotFoundError:
            self.fail("Could not find 'djwto' installed in the environment")
            
    def test_psycopg2_installed(self):
        try:
            import psycopg2
        except ModuleNotFoundError:
            self.fail("Could not find 'psycopg2' installed in the environment")

    def test_pclick_installed(self):
        try:
            import click
        except ModuleNotFoundError:
            self.fail("Could not find 'click' installed in the environment")

    def test_users_model_exists(self):
        try:
            from ..models import Account
        except ModuleNotFoundError:
            self.fail("could not find '..models.Account")

    def test_parks_model_exists(self):
        try:
            from ..models import ParkVO
        except ModuleNotFoundError:
            self.fail("could not find '..models.ParkVO")

    def test_unique_username(self):
        try:
            from ..models import Account
            username = Account.username
            self.assertTrue(username.field.unique)
        except ModuleNotFoundError:
            self.fail("username is not unique")
    
    def test_unique_email(self):
        email = Account.email
        self.assertTrue(email.field.unique)
    
    def test_username_field(self):
        try:
            username = Account.username
            self.assertIsInstance(
                username.field,
                models.CharField,
                msg="Account.username should be a character field",
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'account.models'")
        except ImportError:
            self.fail("Could not find '..models.Acccount'")
        except AttributeError:
            self.fail("Could not find 'Account.username'")


# class TestViews(TestCase):
#     def setUp(self):
#         Account.objects.create(
#             username='testusername',
#             email='test@email.com',
#             password='testpassword',
#             parks='testpark'
#         )

#     def TestParks(self):
#         client= Client()
#         response= client.get(reverse("accounts_list"))
#         self.assertEquals(response.status_code, 200)