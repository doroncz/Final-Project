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
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("fromDate")
        .setCheck("String");
    this.appendValueInput("toDate")
        .setCheck("String");
    this.appendValueInput("stock")
        .setCheck("String");
    this.setTooltip('');
  }
};

Blockly.Python['slide'] = function(block) {
  var value_fromdate = Blockly.Python.valueToCode(block, 'fromDate', Blockly.Python.ORDER_ATOMIC);
  var value_todate = Blockly.Python.valueToCode(block, 'toDate', Blockly.Python.ORDER_ATOMIC);
  var value_stock = Blockly.Python.valueToCode(block, 'stock', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  

  var code = 'Stock.objects.filter(date__range=('
   code = code.concat(value_fromdate, ',', value_todate,')).aggregate(Avg(\'base_value\'))');
  //var code = value_fromdate;
  return code;
};