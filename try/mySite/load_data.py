#!/usr/bin/env python
import manage


# Full path and name to your csv file
csv_filepathname="C:/University/Final Project Git/Final-Project/try/mySite/Stocks.csv"
# Full path to your django project directory
your_djangoproject_home="C:/University/Final Project Git/Final-Project/try/mySite"
os_path="C:/University/Final Project Git/Final-Project/try/mySite/mySite"



from myApp.models import Stock

import csv
dataReader = csv.reader(open(csv_filepathname), delimiter=',', quotechar='"')

for row in dataReader:
	if row[0] != 'StockName': # Ignore the header row, import everything else
		stock = Stock()
		stock.StockName = row[0]
		stock.date = row[1]
		stock.value = row[2]
		stock.save()

