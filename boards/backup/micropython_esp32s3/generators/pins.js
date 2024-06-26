'use strict';
goog.provide('Blockly.Python.pins');
goog.require('Blockly.Python');

Blockly.Python.forBlock['pins_digital'] = function() {
  var code = this.getFieldValue('PIN');
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.forBlock.pins_button=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_buttonB=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_digital_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_input_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_output_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_pwm_input=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.espnow_channel=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.haskylens_model=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.analog_input=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pwm_output=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.analog_output=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.i2c_A_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.i2c_B_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.spi_A_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.spi_B_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.spi_C_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.spi_D_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_analog_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_analog=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_pwm_pin=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_pwm=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_dac_pin = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_dac = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_touch_pin = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_touch = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_interrupt=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_serial=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_builtinimg=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_builtinimg_extern=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_imglist=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_playlist=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_playlist_extern=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_axis=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_exlcdh = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_exlcdv = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_brightness=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_tts_voice=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_tts_builtin_music=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_tts_bgmusic=Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_tone_notes = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_radio_power = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_radio_datarate = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_one_more = Blockly.Python.forBlock.pins_digital;
Blockly.Python.forBlock.pins_digital_dot = Blockly.Python.forBlock.pins_digital;