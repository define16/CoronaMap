from django.contrib import admin
from . models import InfectedPeople
# Register your models here.

# class InfectedPeopleAdmin(admin.ModelAdmin):
#     list_display = ['person', 'place', 'address', 'latitude', 'longitude'] # 커스터마이징 코드

admin.site.register(InfectedPeople)