var Stocks = [['Teva','Teva'],['IDB','IDB'],['IBM','IBM']];
var Years = [['2010','2010'],['2011','2011'],['2012','2012'],['2013','2013'],['2014','2014']];
var Days = [['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15'],['16','16'],['17','17'],['18','18'],['19','19'],['20','20'],['21','21'],['22','22'],['23','23'],['24','24'],['25','25'],['26','26'],['27','27'],['28','28'],['29','29'],['30','30'],['31','31']];
var Months = [['January','1'],['February','2'],['March','3'],['April','4'],['May','5'],['June','6'],['July','7'],['August','8'],['September','9'],['October','10'],['November','11'],['December','12']];

//buy stock
Blockly.Blocks['buy_stock'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(100);
	this.appendDummyInput().appendTitle("Buy Stock");
	//var Stocks = [['Teva','Teva'],['IDB','IDB'],['IBM','IBM']];
    this.appendDummyInput().appendTitle("Stock").appendTitle(new Blockly.FieldDropdown(Stocks), 'stocks lists');
    this.appendValueInput("Amount1").setCheck("Number").appendTitle("Amount");
	this.setPreviousStatement(true);
	//this.setInputsInline(true);
	this.setTooltip('');
  }
};
Blockly.JavaScript['buy_stock'] = function(block) {
var value_amount1 = Blockly.JavaScript.valueToCode(block, 'Amount1', Blockly.JavaScript.ORDER_NONE);
    return 'buy('+ block.getTitleValue('stocks lists') +','+value_amount1+')';
};

//sell stock
Blockly.Blocks['sell_stock'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(10);
	this.appendDummyInput().appendTitle("Sell Stock");
	//var Stocks = [['Teva','Teva'],['IDB','IDB'],['IBM','IBM']];
    this.appendDummyInput().appendTitle("Stock").appendTitle(new Blockly.FieldDropdown(Stocks), 'stocks lists');
    this.appendValueInput("Amount1").setCheck("Number").appendTitle("Amount");
	this.setPreviousStatement(true);
	//this.setInputsInline(true);
	this.setTooltip('');
  }
};
Blockly.JavaScript['sell_stock'] = function(block) {
var value_amount1 = Blockly.JavaScript.valueToCode(block, 'Amount1', Blockly.JavaScript.ORDER_NONE);
    return 'sell('+ block.getTitleValue('stocks lists') +','+value_amount1+')';
};

//get stock avarege val
Blockly.Blocks['stock_average_value'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
	this.appendDummyInput().appendTitle("Get Stock Average Value");
	//var Stocks = [['Teva','Teva'],['IDB','IDB'],['IBM','IBM']];
    this.appendDummyInput()
	.appendTitle("Stock				")
        .appendTitle(new Blockly.FieldDropdown(Stocks), 'stocks lists');
    this.appendDummyInput("Date").appendTitle("Start Date:").appendTitle("Day				").appendTitle(new Blockly.FieldDropdown(Days), 'start day lists')
	.appendTitle("Month		").appendTitle(new Blockly.FieldDropdown(Months), 'start month lists').appendTitle("Year				").appendTitle(new Blockly.FieldDropdown(Years), 'start year lists');
	this.appendDummyInput("Date").appendTitle("End Date :").appendTitle("Day				").appendTitle(new Blockly.FieldDropdown(Days), 'end day lists')
	.appendTitle("Month		").appendTitle(new Blockly.FieldDropdown(Months), 'end month lists').appendTitle("Year				").appendTitle(new Blockly.FieldDropdown(Years), 'end year lists');
	this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['stock_average_value'] = function(block) {
    //var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'get_stock_avg_val(' + block.getTitleValue('stocks lists') +','+block.getTitleValue('start day lists')+'.'+block.getTitleValue('start month lists')+'.'+block.getTitleValue('start year lists')+
  ','+block.getTitleValue('end day lists')+'.'+block.getTitleValue('end month lists')+'.'+block.getTitleValue('end year lists')+')';
};

//get stock min value
Blockly.Blocks['stock_minimum_value'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(310);
	this.appendDummyInput().appendTitle("Get Stock Minimum Value");
	//var Stocks = [['Teva','Teva'],['IDB','IDB'],['IBM','IBM']];
    this.appendDummyInput()
	.appendTitle("Stock				")
        .appendTitle(new Blockly.FieldDropdown(Stocks), 'stocks lists');
    
    this.appendDummyInput("Date").appendTitle("Start Date:").appendTitle("Day				").appendTitle(new Blockly.FieldDropdown(Days), 'start day lists')
	.appendTitle("Month		").appendTitle(new Blockly.FieldDropdown(Months), 'start month lists').appendTitle("Year				").appendTitle(new Blockly.FieldDropdown(Years), 'start year lists');
	this.appendDummyInput("Date").appendTitle("End Date :").appendTitle("Day				").appendTitle(new Blockly.FieldDropdown(Days), 'end day lists')
	.appendTitle("Month		").appendTitle(new Blockly.FieldDropdown(Months), 'end month lists').appendTitle("Year				").appendTitle(new Blockly.FieldDropdown(Years), 'end year lists');
	this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['stock_minimum_value'] = function(block) {
   return 'get_stock_min_val(' + block.getTitleValue('stocks lists') +','+block.getTitleValue('start day lists')+'.'+block.getTitleValue('start month lists')+'.'+block.getTitleValue('start year lists')+
  ','+block.getTitleValue('end day lists')+'.'+block.getTitleValue('end month lists')+'.'+block.getTitleValue('end year lists')+')';
};

//get Max value
Blockly.Blocks['stock_maximum_value'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
	this.appendDummyInput().appendTitle("Get Stock Maximum Value");
	//var Stocks = [['Teva','Teva'],['IDB','IDB'],['IBM','IBM']];
    this.appendDummyInput()
	.appendTitle("Stock				")
        .appendTitle(new Blockly.FieldDropdown(Stocks), 'stocks lists');
    
    this.appendDummyInput("Date").appendTitle("Start Date:").appendTitle("Day				").appendTitle(new Blockly.FieldDropdown(Days), 'start day lists')
	.appendTitle("Month		").appendTitle(new Blockly.FieldDropdown(Months), 'start month lists').appendTitle("Year				").appendTitle(new Blockly.FieldDropdown(Years), 'start year lists');
	this.appendDummyInput("Date").appendTitle("End Date :").appendTitle("Day				").appendTitle(new Blockly.FieldDropdown(Days), 'end day lists')
	.appendTitle("Month		").appendTitle(new Blockly.FieldDropdown(Months), 'end month lists').appendTitle("Year				").appendTitle(new Blockly.FieldDropdown(Years), 'end year lists');
	this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['stock_maximum_value'] = function(block) {
   return 'get_stock_max_val(' + block.getTitleValue('stocks lists') +','+block.getTitleValue('start day lists')+'.'+block.getTitleValue('start month lists')+'.'+block.getTitleValue('start year lists')+
  ','+block.getTitleValue('end day lists')+'.'+block.getTitleValue('end month lists')+'.'+block.getTitleValue('end year lists')+')';
};
//get stock value
Blockly.Blocks['stock_value'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
	this.appendDummyInput().appendTitle("Get Stock Value");
	//var Stocks = [['Teva','Teva'],['IDB','IDB'],['IBM','IBM']];
    this.appendDummyInput()
	.appendTitle("Stock				")
        .appendTitle(new Blockly.FieldDropdown(Stocks), 'stocks lists');
    this.appendDummyInput("Date").appendTitle("Date:");
	this.appendDummyInput("Day").appendTitle("Day				").appendTitle(new Blockly.FieldDropdown(Days), 'day lists');
	this.appendDummyInput("Month").appendTitle("Month		").appendTitle(new Blockly.FieldDropdown(Months), 'month lists');
	this.appendDummyInput("Year").appendTitle("Year				").appendTitle(new Blockly.FieldDropdown(Years), 'year lists');
	
       
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['stock_value'] = function(block) {
   return 'get_stock_value(' + block.getTitleValue('stocks lists') +','+block.getTitleValue('day lists')+'.'+block.getTitleValue('month lists')+'.'+block.getTitleValue('year lists')+')';
};
Blockly.Python['stock_value'] = function(block) {
  
  return [code, Blockly.Python.ORDER_NONE];
};

//slide
Blockly.Blocks['slide'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.slide_HELPURL);
    this.setColour(240);
    this.appendValueInput("fromDate")
        .setCheck("String")
        .appendTitle("Sliding Window:   From Date");
    this.appendValueInput("toDate")
        .setCheck("String")
        .appendTitle("                             To Date");
    this.appendValueInput("stock")
        .setCheck("String")
        .appendTitle("                             Stock");
    this.setTooltip('');
  }
};

Blockly.Python['slide'] = function(block) {
  var value_fromdate = Blockly.Python.valueToCode(block, 'fromDate', Blockly.Python.ORDER_ATOMIC);
  var value_todate = Blockly.Python.valueToCode(block, 'toDate', Blockly.Python.ORDER_ATOMIC);
  var value_stock = Blockly.Python.valueToCode(block, 'stock', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  // var code = 'Stock.objects.filter(date__range=('
  //  code = code.concat(value_fromdate, ',', value_todate,')).aggregate(Avg(\'base_value\'))');
var code = 'Stock.objects.filter(stock_name = ' + value_stock + ', date__range=(' + value_fromdate 
  + ',' + value_todate + ')).aggregate(Avg(\'base_value\'))';
  return code;
};

Blockly.JavaScript['slide'] = function(block) {
  /*var value_fromdate = Blockly.JavaScript.valueToCode(block, 'fromDate', Blockly.JavaScript.ORDER_ATOMIC);
  var value_todate = Blockly.JavaScript.valueToCode(block, 'toDate', Blockly.JavaScript.ORDER_ATOMIC);
  var value_stock = Blockly.JavaScript.valueToCode(block, 'stock', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Stock.objects.filter(stockName = ' + value_stock + ' date__range=(' + value_fromdate + ',' + value_todate + ')).aggregate(Avg(\'base_value\'))';
  // code = code.concat(value_fromdate, ',', value_todate,')).aggregate(Avg(\'base_value\'))');
 //$.getJSON('/url/to/ajax/view/', {foo: 'bar'}, function(data, jqXHR){// do something with response });
  // TODO: Change ORDER_NONE to the correct strength.*/
  window.alert("Please copy the code from Python Tab to the Url: 127.0.0.1:8000/testViStrategyDB/execute_code/");
 /*$.getJSON('/url/to/ajax/view/', {foo: 'bar'}, function(data, jqXHR){
    // do something with response

});*/
 var code='127.0.0.1:8000/testViStrategyDB/execute_code/';
  return code;//[code, Blockly.JavaScript.ORDER_NONE];
};
