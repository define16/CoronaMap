from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('status', views.status, name='status'),
    path('board.mask', views.board_mask, name='board.mask'),
    path('nearby.clinic', views.nearby_clinic, name='nearby.clinic'),
    path('prevent', views.prevent, name='prevent'),
    # path('mapTest', views.mapTest, name='mapTest'),
    # path('mapTest2', views.mapTest2, name='mapTest2'),
	path('sokgo', views.sokgo, name='sokgo'),
	path('dongsam', views.dongsam, name='dongsam'),
	path('gang', views.gang, name='gang'),
	path('chun', views.chun, name='chun'),
	# path(views.search()[0], views.ssl, name=views.search()[0]) # ssl 인증
]