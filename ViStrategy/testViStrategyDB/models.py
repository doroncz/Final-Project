from django.db import models

class Stock(models.Model):
	date = models.DateField()
	base_value = models.FloatField(default=0)
	open_value = models.FloatField(default=0)
	lock_value = models.FloatField(default=0)
	high_value = models.FloatField(default=0)
	low_value = models.FloatField(default=0)
	overall_market_value = models.FloatField(default=0)
	
