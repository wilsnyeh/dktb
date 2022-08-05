# from django.test import TestCase, Client
# from django.urls import reverse

# from .models import Park

# class TestViews(TestCase):
#     def setUp(self):
#         Park.objects.create(
#             name="test park",
#             state="test state",
#             city="test city",
#             description="test description",
#             weather_info="test weather",
#             entrance_fee="test fee",
#             contact_num="test num",
#             img_url='testurl.com',
#         )

#     def TestParks(self):
#         client= Client()
#         response= client.get(reverse("parks_list"))
#         self.assertEquals(response.status_code, 200)

<<<<<<< HEAD
# Create your tests here.
class FeatureTestCase(TestCase):
    def test_park_model(self):
        try:
            from .models import Park
        except ModuleNotFoundError:
            self.fail("Model not found")
=======
>>>>>>> origin
