from django.urls import path, re_path
from .views import FrontendTemplate
urlpatterns = [
  re_path("^.*$", FrontendTemplate.as_view()),
  # path("", FrontendTemplate.as_view()),
]
