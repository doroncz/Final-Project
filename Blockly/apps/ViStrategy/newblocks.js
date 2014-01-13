Blockly.Blocks['vis_stock'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(260);
    this.appendValueInput("sotcks")
        .setCheck("String")
        .appendTitle(new Blockly.FieldTextInput("Teva"), "stock");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['vis_stock'] = function(block) {
  var value_sotcks = Blockly.JavaScript.valueToCode(block, 'sotcks', Blockly.JavaScript.ORDER_ATOMIC);
  var text_stock = block.getTitleValue('stock');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['vis_stock'] = function(block) {
  var value_sotcks = Blockly.Python.valueToCode(block, 'sotcks', Blockly.Python.ORDER_ATOMIC);
  var text_stock = block.getTitleValue('stock');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
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
