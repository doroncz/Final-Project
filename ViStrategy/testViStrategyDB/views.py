from django.http import HttpResponse
import datetime
from django.db.models import Avg
from django.db.models import Max
from django.db.models import Min
from testViStrategyDB.models import Stock, Strategy
from django.shortcuts import render


# math functions:
def slide_window(request, name, start_date, end_date):
	# start_date = datetime.date(2013, 11, 17)
	# end_date = datetime.date(2013, 11, 19)
	res_dict = Stock.objects.filter(date__range=(start_date, end_date)).aggregate(Avg('value'))
	return_res = '%s %s' % (name, res_dict['value__avg'])
	return HttpResponse(return_res)

def get_stock_value(request, input_name, input_date):
	res_dict = Stock.objects.filter(date=input_date,StockName=input_name)
	return_res = '%s' % (res_dict['value'])
	return HttpResponse(return_res)

def get_user_strategies(request,input_userId):
	res_dict = Strategy.objects.filter(userId=input_userId)
	return_res = '%s %s %s' % (res_dict['StrategyName','CreationDate','lastExecutionDate'])	
	return HttpResponse(return_res)

def get_stock_min_val (request, name, start_date, end_date):
	res_dict = Stock.objects.filter(date__range=(start_date, end_date),StockName=input_name).aggregate(Min('value'))
	return_res = '%s' % (res_dict['value'])
	return HttpResponse(return_res)

def get_stock_max_val (request, name, start_date, end_date):
	res_dict = Stock.objects.filter(date__range=(start_date, end_date),StockName=input_name).aggregate(Max('value'))
	return_res = '%s' % (res_dict['value'])
	return HttpResponse(return_res)

def get_stock_avg_val (request, name, start_date, end_date):
	res_dict = Stock.objects.filter(date__range=(start_date, end_date),StockName=input_name).aggregate(Avg('value'))
	return_res = '%s' % (res_dict['value'])
	return HttpResponse(return_res)

# DDL functions:
def add_strategy(input_UserID, input_StrategyName, input_StrategyCode):
	s = Strategy(UserID=input_UserID, StrategyName = input_StrategyName, StrategyCode = input_StrategyCode, lastExecutionDate = None)
	s.save()


def add_user(input_UserID, input_FirstName, input_LastName, input_Email, input_Type, input_Gender, input_Birthdate, 
			input_UserName,input_Password,input_Password,input_securityQuestion,input_securityAnswer):

	u = User(UserID=input_UserID, FirstName = input_FirstName, LastName = input_LastName, =input_Email,
	 Type=input_Type,Gender =input_Gender, Birthdate=input_Birthdate, UserName=input_UserName,Password=input_Password,
	 securityQuestion=input_securityQuestion,securityAnswer=input_securityAnswer, IsConnected = 0)
	u.save()	







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

