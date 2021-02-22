from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class FrontendTemplate(TemplateView):
    # template_name = 'base-vue.html'
    template_name = 'index2.html'
