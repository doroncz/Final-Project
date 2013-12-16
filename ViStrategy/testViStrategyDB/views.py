from django.http import HttpResponse
import datetime
from django.db.models import Avg
from testViStrategyDB.models import Stock

def slide_window(request, name):
	start_date = datetime.date(2013, 11, 17)
	end_date = datetime.date(2013, 11, 19)
	res_dict = Stock.objects.filter(date__range=(start_date, end_date)).aggregate(Avg('base_value'))
	return_res = '%s %s' % (name, res_dict['base_value__avg'])
	return HttpResponse(return_res)