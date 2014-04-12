from django.db import models

class Stock(models.Model):
	StockName = models.CharField(max_length=50)
	date = models.DateField()
	value = models.FloatField(default=0)
	
	
class Strategy(models.Model):
	UserID = models.IntegerField()
	StrategyName = models.CharField(max_length=50)
	StrategyCode = models.TextField()
	CreationDate = models.DateTimeField(default=datetime.now,blank=True) #each insert will automatically saves the current date 
	lastExecutionDate = models.DateField()


class User(models.Model):
	UserID = models.IntegerField()
	FirstName = models.FloatField(default=50)
	LastName = models.FloatField(default=50)
	EMailAddress = models.EmailField(max_length=75)
	Type = models.CharField(max_length=50)
	Gender = models.CharField(max_length=50)
	Birthdate = models.DateField()
	UserName = models.CharField(max_length=50)
	Password = models.CharField(max_length=50)
	securityQuestion = models.CharField(max_length=100)
	securityAnswer = models.CharField(max_length=50)
	IsConnected = models.IntegerField()



