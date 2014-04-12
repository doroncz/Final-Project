from django.db import models
from datetime import datetime
# Create your models here.
class Stock(models.Model):
	StockName = models.CharField(max_length=50)
	date = models.DateField()
	value = models.FloatField(default=-1)

class Strategy(models.Model):
	Strategy_id = models.AutoField(primary_key=True)
	UserID = models.IntegerField() #foreignKey(Users)
	StrategyName = models.CharField(max_length=50)
	StrategyCode = models.TextField()
	CreationDate = models.DateTimeField(default=datetime.now(),blank=True) #each insert will automatically saves the current date 
	lastExecutionDate = models.DateField()

class Strategy_results(models.Model):
	strategy_id = models.ForeignKey(Strategy)
	dateTime = models.DateTimeField()
	action = models.CharField(max_length = 10) #buy \ sell
	amount = models.IntegerField()

# class Poll(models.Model):
#     question = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')

# class Choice(models.Model):
#     poll = models.ForeignKey(Poll)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)


#sql:

def get_stock_value(input_name, input_date):
	res_dict = Stock.objects.filter(date=input_date,StockName=input_name)
	return_res = (res_dict['value'])
	return return_res
# shell:
 #Stock.objects.filter(date=input_date,StockName=input_name)[0].value

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