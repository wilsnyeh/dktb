from django.test import TestCase

# Create your tests here.
class FeatureTestCase(TestCase):
    def test_park_model(self):
        try:
            from .models import Park
        except ModuleNotFoundError:
            self.fail("Model not found")