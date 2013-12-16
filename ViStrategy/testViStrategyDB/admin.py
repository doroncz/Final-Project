from django.contrib import admin
from testViStrategyDB.models import Stock

class StockAdmin(admin.ModelAdmin):
	list_display = ('date', 'base_value', 'open_value', 'lock_value', 'high_value', 'low_value', 'overall_market_value')

admin.site.register(Stock, StockAdmin)