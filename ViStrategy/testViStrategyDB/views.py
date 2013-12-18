from django.http import HttpResponse
import datetime
from django.db.models import Avg
from testViStrategyDB.models import Stock
from django.shortcuts import render

def slide_window(request, name):
	start_date = datetime.date(2013, 11, 17)
	end_date = datetime.date(2013, 11, 19)
	res_dict = Stock.objects.filter(date__range=(start_date, end_date)).aggregate(Avg('base_value'))
	return_res = '%s %s' % (name, res_dict['base_value__avg'])
	return HttpResponse(return_res)

def display_meta(request):
	values = request.META.items()
	values.sort()
	html = []
	for k,v in values:
		html.append('<tr><td>%s</td><td>%s</td></tr>' % (k, v))

	return HttpResponse('<table>%s</table>' % '\n'.join(html))

def mystring(request):
	return render(request, 'string_form.html')

def yourstring(request):
	response_msg = request.GET['given_string']
	return render(request, 'string_res.html')
