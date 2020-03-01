from django.urls import path
from django.views.generic import TemplateView
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
	path('wonju', views.wonju, name='wonju'),
	path('test', views.test, name='test'),
	path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain"), name="project_robots_file")

]