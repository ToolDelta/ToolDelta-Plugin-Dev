'use strict';

goog.provide('Blockly.Python.base');

goog.require('Blockly.Python');
// ok



Blockly.Python.forBlock['inout_input'] = function() {
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  return ['input(' + str+')', Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.forBlock['inout_print'] = function(block) {
  Blockly.Python.definitions_.import_blocktool = "import blocktool";
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "blocktool.highlight(\'"+block.id+"\')\n"+"print("+str+")\n";
  return code;
};

Blockly.Python.forBlock['inout_print_inline'] = function(block) {
  Blockly.Python.definitions_.import_blocktool = "import blocktool";
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "blocktool.highlight(\'"+block.id+"\')\n" + "print("+str+',end ="")\n';
  return code;
};

Blockly.Python.forBlock['inout_print_end'] = function(block) {
  Blockly.Python.definitions_.import_blocktool = "import blocktool";
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var end = Blockly.Python.valueToCode(this, 'END', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "blocktool.highlight(\'"+block.id+"\')\n" +"print("+str+',end =' + end + ')\n';
  return code;
};

Blockly.Python.forBlock['inout_type_input'] = function() {
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var type = this.getFieldValue('DIR');
  var num = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  if (type=='str') {var code = 'input(' + str +')'}
  	else if (type=='int') {var code = 'int(input(' + str +'))'}
  		else if (type=='float') {var code = 'float(input(' + str +'))'}
  //var code=varname+"." + type + "("   + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.forBlock['inout_print_many'] = function(block) {
  Blockly.Python.definitions_.import_blocktool = "import blocktool";
  var dropdown_type = this.getFieldValue('TYPE');
  
  var code = new Array(this.itemCount_);
  var default_value = '0';


  for (var n = 0; n < this.itemCount_; n++) {

  code[n] = Blockly.Python.valueToCode(this, 'ADD' + n,
    Blockly.Python.ORDER_NONE) || default_value;
  }

  var code = "blocktool.highlight(\'"+block.id+"\')\n" +'print(' + code.join(', ') + ')\n';
  return code;
};