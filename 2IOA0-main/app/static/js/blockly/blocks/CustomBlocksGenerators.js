Blockly.JavaScript['inout_digital_write'] = function(block) {
    var dropdown_writepins = block.getFieldValue('WritePins');
    var dropdown_stat = block.getFieldValue('Stat');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['inout_digital_read'] = function(block) {
    var dropdown_pins = block.getFieldValue('Pins');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };