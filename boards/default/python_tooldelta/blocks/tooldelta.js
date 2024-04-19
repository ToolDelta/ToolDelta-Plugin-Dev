'use strict';

goog.provide('Blockly.Blocks.data');

goog.require('Blockly.Blocks');


Blockly.Msg['DATA_HUE'] = 230;//230;

Blockly.Blocks['tooldelta_frame'] = {
    init: function() {
        this.setColour(Blockly.Msg['SYSTEM_HUE']);  
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.appendDummyInput()
           .appendField("ToolDelta插件开发框架头")
        this.appendDummyInput()
           .appendField(new Blockly.FieldTextInput("插件名"), "name")
           .appendField(new Blockly.FieldTextInput("作者"), "author")
           .appendField(new Blockly.FieldTextInput("版本号"), "version");
        this.appendStatementInput("FRAME_BODY")
            .setCheck(null);
    this.setTooltip("ToolDelta插件开发框架头");
    this.setHelpUrl("https://tooldelta-wiki.tblstudio.cn/");
    }
};

Blockly.Blocks['tooldelta_frame_class_import'] = {
    init: function() {
        this.setColour("250");  
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput()
           .appendField("加载ToolDelta基础库")
    this.setTooltip("加载ToolDelta基础库");
    this.setHelpUrl("https://tooldelta-wiki.tblstudio.cn/");
    }
};

Blockly.Blocks['tooldelta_frame_class_inbuilt_lib_import'] = {
init: function() {
    this.setColour("290");  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
    .appendField("加载ToolDelta内置库")
    this.appendStatementInput("import_inbuilt_lib")
    .setCheck(null);
    this.setTooltip("加载ToolDelta内置库");
    this.setHelpUrl("https://tooldelta-wiki.tblstudio.cn/");
    }
};

Blockly.Blocks['tooldelta_frame_import_lib'] = {
    init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
        .appendField("载入库")
        .appendField(new Blockly.FieldTextInput("库名"), "lib_name");
    this.setColour(210);
    this.setTooltip("载入库");
    this.setHelpUrl("https://github.com/ToolDelta/ToolDelta");
    }
  };

Blockly.Blocks['tooldelta_frame_class_add_plugin'] = {
    init: function() {
      this.setNextStatement(true);
      this.appendDummyInput()
        .appendField("注册插件类")
      this.setOutput(true);
      this.setColour(240);
      this.setTooltip("注册插件类");
      this.setHelpUrl("https://github.com/ToolDelta/ToolDelta");
    }
  };

Blockly.Blocks['tooldelta_frame_class_class_frame'] = {
    init: function() {
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.appendDummyInput()
        .appendField("类框架")
        .appendField(new Blockly.FieldTextInput("类名"), "name")
        .appendField(new Blockly.FieldTextInput("继承"), "inherited");
      this.appendDummyInput()
        .appendField("class类型")
        .appendField(new Blockly.FieldDropdown([["插件主类","plugin_class_main"], ["自定义类","custom_class"]]), "class_type");
      this.appendValueInput("Decorators")
      .appendField("装饰器")
      .setCheck(null);
      this.appendStatementInput("Body")
          .setCheck(null);
      this.setColour(230);
      this.setTooltip("类框架");
      this.setHelpUrl("https://github.com/ToolDelta/ToolDelta");
    }
  };

// Blockly.Blocks['tooldelta_frame_create_variable'] = {
//     init: function() {
//       this.setPreviousStatement(true);
//       this.setNextStatement(true);
//       this.appendDummyInput()
//           .appendField("类型")
//           .appendField(new Blockly.FieldDropdown([["str","type_str"], ["int","type_int"], ["float","type_float"], ["bool","type_bool"], ["bytes","type_bytes"], ["dict","type_dict"], ["list","type_list"], ["set","type_set"], ["tuple","type_tuple"], ["complex","type_complex"], ["any","type_any"]]), "type");
//       this.appendValueInput("NAME")
//           .setCheck(null)
//           .appendField("数据内容");
//       this.setColour(230);
//    this.setTooltip("");
//    this.setHelpUrl("");
//     }
//   };