# Views for the testViStrategyDB application only
from django.conf.urls import patterns, url

from testViStrategyDB import views

urlpatterns = patterns('',
	# ex: /testViStrategy/
	# url(r'^$', views.index, name='index'),		
	# ex: /polls/5/
	url(r'^getmeta/$', views.display_meta),
	url(r'^mystring/$', views.mystring),
	url(r'^yourstring/$', views.yourstring),
	url(r'^get_stock_value/$', views.get_stock_value),
	
	# ex: /polls/5/results/
	# url(r'^(?P<question_id>\d+)/results/$', views.results, name='results'),
	# ex: /polls/5/vote/
	# url(r'^(?P<question_id>\d+)/vote/$', views.vote, name='vote'),
	
)

