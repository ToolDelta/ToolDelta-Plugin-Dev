'use strict';

goog.require('Blockly.Python');

Blockly.Python.forBlock['tooldelta_frame_class_import'] = function() {
    var code = "from tooldelta import Frame, Plugin, PluginAPI, Config, Print, Builtins, plugins\n";
    return code;
};

Blockly.Python.forBlock['tooldelta_frame'] = function(block) {
    var statements_frame_body = Blockly.Python.statementToCode(block, 'FRAME_BODY');
    var text_name = block.getFieldValue('name');
    var text_author = block.getFieldValue('author');
    var text_version = block.getFieldValue('version');
    var code = "# __init__.py\n# In Mixly-ToolDelta is developed\ntry:\n"+statements_frame_body+"\nexcept Exception as err:\n    Print.print_err('插件["+text_name+"]运行时出现异常'+str(err))\n";
    return code;
};

Blockly.Python.forBlock['tooldelta_frame_class_inbuilt_lib_import'] = function(block) {
    var statements_import_inbuilt_lib = Blockly.Python.statementToCode(block, 'import_inbuilt_lib').slice(4).slice(0, -2);
    // TODO: Assemble JavaScript into code variable.
    var code = 'import '+statements_import_inbuilt_lib+'\n';
    return code;
  };

Blockly.Python.forBlock['tooldelta_frame_import_lib'] = function(block) {
    var text_lib_name = block.getFieldValue('lib_name');
    // TODO: Assemble JavaScript into code variable.
    var code = text_lib_name+", ";
    return code;
  };

Blockly.Python.forBlock['tooldelta_frame_class_add_plugin'] = function(block) {
    var code = "@plugins.add_plugin\n";
    return code;
  };

Blockly.Python.forBlock['tooldelta_frame_class_class_frame'] = function(block) {
    var text_name = block.getFieldValue('name');
    var text_inherited = block.getFieldValue('inherited');
    var statements_body = Blockly.Python.statementToCode(block, 'Body');
    var value_name = Blockly.Python.statementToCode(block, 'Decorators').slice(4);
    var dropdown_class_type = block.getFieldValue('class_type');
    if (dropdown_class_type == 'plugin_class_main') {
        var initfunc = "def __init__(self, frame: Frame):\nself.frame = frame\nself.game_ctrl = frame.get_game_control()\n";
        var text_inherited = "Plugin";
    }
    else{
        var initfunc = "def __init__(self):\n";
    }
    if (text_inherited == '' || text_inherited == '继承') {
        var code = value_name+'class '+(text_name+':\n'+initfunc)+statements_body;
    }
    else {
        var code = value_name+'class '+(text_name+'('+text_inherited+'):\n'+initfunc)+statements_body;
    }
    return code;
  };

