from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('status', views.status, name='status'),
    path('board.mask', views.board_mask, name='board.mask'),
    path('nearby.clinic', views.nearby_clinic, name='nearby.clinic'),
    path('prevent', views.prevent, name='prevent'),

	# path(views.search()[0], views.ssl, name=views.search()[0]) # ssl 인증
]