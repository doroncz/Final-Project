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