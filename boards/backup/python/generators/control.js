'use strict';

goog.provide('Blockly.Python.loops');

goog.require('Blockly.Python');


Blockly.Python.forBlock['controls_main'] = function (a) {
    var d = Blockly.Python.statementToCode(a, "DO"),
        d = Blockly.Python.addLoopTrap(d, a.id) || Blockly.Python.PASS;
    return "if __name__ == '__main__':\n" + d;
};

Blockly.Python.forBlock['base_setup'] = function () {
    var branch = Blockly.Python.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "").replace(/\n    /g, '\n');//去除两端空格
    if(branch.endsWith('\n')){
        Blockly.Python.setups_['setup_setup'] = branch;
    }
    else{
        Blockly.Python.setups_['setup_setup'] = branch + '\n';
    }
    return '';
};

//ok
Blockly.Python.forBlock['controls_if'] = function (a) {
    var b = 0,
    c = "",
    d,
    e;
    do
        e = Blockly.Python.valueToCode(a, "IF" + b, Blockly.Python.ORDER_NONE) || "False", d = Blockly.Python.statementToCode(a, "DO" + b) || Blockly.Python.PASS, c += (0 == b ? "if " : "elif ") + e + ":\n" + d, ++b;
    while (a.getInput("IF" + b));
    a.getInput("ELSE") && (d = Blockly.Python.statementToCode(a, "ELSE") || Blockly.Python.PASS, c += "else:\n" + d);
    return c
};

Blockly.Python.forBlock['controls_try_finally'] = function () {
    var n = 0;
    var argument = Blockly.Python.valueToCode(this, 'IF' + n,
        Blockly.Python.ORDER_NONE) || 'null';
    var branch = '';
    var t = Blockly.Python.statementToCode(this, 'try') || '    pass\n';
    var code = 'try:\n' + t;
    for (n = 1; n <= this.elseifCount_; n++) {
        argument = Blockly.Python.valueToCode(this, 'IF' + n,
          Blockly.Python.ORDER_NONE) || '';
        if (argument !== '')
            argument = ' ' + argument
        branch = Blockly.Python.statementToCode(this, 'DO' + n) || '    pass\n';
        code += 'except' + argument + ': \n' + branch;
    }
    if (this.elseCount_) {
        branch = Blockly.Python.statementToCode(this, 'ELSE') || '    pass\n';
        code += 'finally:\n' + branch;
    }
    // code += '}';
    return code;
};

//ok
Blockly.Python.forBlock['controls_for'] = function (a) {
    var b = Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
    //var b = Blockly.Python.valueToCode(a, "VAR", Blockly.Python.ORDER_MEMBER) || "''",
    c = Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE) || "0",
    d = Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE) || "0",
    e = Blockly.Python.valueToCode(a, "STEP", Blockly.Python.ORDER_NONE) || "1",
    f = Blockly.Python.statementToCode(a, "DO"),
    f = Blockly.Python.addLoopTrap(f, a.id) || Blockly.Python.PASS,
    g = "",
    h = function () {
        return Blockly.Python.provideFunction_("upRange",
            ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(start, stop, step):", "  while start <= stop:", "    yield start", "    start += abs(step)"])
    },
    k = function () {
        return Blockly.Python.provideFunction_("downRange", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(start, stop, step):", "  while start >= stop:", "    yield start", "    start -= abs(step)"])
    };
    a = function (a, b, c) {
        return "(" + a + " <= " + b + ") and " + h() + "(" + a + ", " + b + ", " + c + ") or " + k() + "(" + a + ", " + b + ", " + c + ")"
    };
    if (Blockly.isNumber(c) && Blockly.isNumber(d) &&
        Blockly.isNumber(e))
        c = parseFloat(c), d = parseFloat(d), e = Math.abs(parseFloat(e)), 0 === c % 1 && 0 === d % 1 && 0 === e % 1 ? (c <= d ? (d++, a = 0 == c && 1 == e ? d : c + ", " + d, 1 != e && (a += ", " + e)) : (d--, a = c + ", " + d + ", -" + e), a = "range(" + a + ")") : (a = c < d ? h() : k(), a += "(" + c + ", " + d + ", " + e + ")");
    else {
        var l = function (a, c) {
            if (Blockly.isNumber(a))
                a = parseFloat(a);
            else if (a.match(/^\w+$/))
                a = a;
            else {
                var d = Blockly.Python.variableDB_.getDistinctName(b + c, Blockly.Variables.NAME_TYPE);
                g += d + " = " + a + "\n";
                a = d
            }
            return a
        },
        c = l(c, "_start"),
        d = l(d, "_end");
        l(e, "_inc");
        a = "number" == typeof c && "number" == typeof d ? c < d ? h(c, d, e) : k(c, d, e) : a(c, d, e)
    }
    return g += "for " + b + " in " + a + ":\n" + f
};

Blockly.Python.forBlock['controls_for_range'] = function (block) {
    var iter = Blockly.Python.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
    from = Blockly.Python.valueToCode(block, "FROM", Blockly.Python.ORDER_NONE) || "0",
    end = Blockly.Python.valueToCode(block, "TO", Blockly.Python.ORDER_NONE) || "0",
    step = Blockly.Python.valueToCode(block, "STEP", Blockly.Python.ORDER_NONE) || "1",
    dostatement = Blockly.Python.statementToCode(block, "DO"),
    pass = Blockly.Python.addLoopTrap(dostatement, block.id) || Blockly.Python.PASS;
    Blockly.Python.setups_["mixly_range"] = "def mixly_range(start, stop, step):\n" +
                                            "    for i in range(start, stop + 1, step):\n" +
                                            "        yield i\n\n";
    return "for " + iter + " in mixly_range(" + from + ", " + end + ", " + step + "):\n" + pass;
};

//ok
Blockly.Python.forBlock.controls_repeat = Blockly.Python.forBlock.controls_repeat_ext;
Blockly.Python.forBlock['controls_whileUntil'] = function (a) {
    var b = "UNTIL" == a.getFieldValue("MODE"),
    c = Blockly.Python.valueToCode(a, "BOOL", Blockly.Python.ORDER_NONE) || "False",
    d = Blockly.Python.statementToCode(a, "DO"),
    d = Blockly.Python.addLoopTrap(d, a.id) || Blockly.Python.PASS;
    b && (c = "not " + c);
    return "while " + c + ":\n" + d
};

// Blockly.Python.forBlock['controls_flow_statements'] = function () {
//     // Flow statements: continue, break.
//     switch (this.getFieldValue('FLOW')) {
//         case 'BREAK':
//             return 'break;\n';
//         case 'CONTINUE':
//             return 'continue;\n';
//     }
//     throw 'Unknown flow statement.';
// };

//ok
Blockly.Python.forBlock['controls_flow_statements'] = function (a) {
    switch (a.getFieldValue("FLOW")) {
    case "BREAK":
        return "break\n";
    case "CONTINUE":
        return "continue\n"
    }
    throw "Unknown flow statement.";
};

//ok
Blockly.Python.forBlock['controls_delay'] = function () {
    var delay_time = Blockly.Python.valueToCode(this, 'DELAY_TIME', Blockly.Python.ORDER_ATOMIC) || '1000'
    var code = 'sleep(' + delay_time + ')\n';
    return code;
};
//ok
Blockly.Python.forBlock['Panic_with_status_code'] = function () {
    var status_code = Blockly.Python.valueToCode(this, 'STATUS_CODE', Blockly.Python.ORDER_ATOMIC) || '1000'
    var code = 'panic(' + status_code + ')\n';
    return code;
};
//ok
Blockly.Python.forBlock['controls_millis'] = function () {
    Blockly.Python.definitions_.import_time = "import time";
    var code = 'time.time()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//ok
Blockly.Python.forBlock['reset'] = function () {
    Blockly.Python.definitions_['import_microbit'] = 'from microbit import *'
    return 'reset()\n';
};
Blockly.Python.forBlock['controls_interrupts'] = function () {
    return 'interrupts();\n';
};

Blockly.Python.forBlock['controls_nointerrupts'] = function () {
    return 'noInterrupts();\n';
};


Blockly.Python.forBlock['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC) || '\'\'';
  var argument0 = Blockly.Python.valueToCode(block, 'LIST',
      Blockly.Python.ORDER_RELATIONAL) || '[]';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var code = 'for ' + variable0 + ' in ' + argument0 + ':\n' + branch;
  return code;
};


Blockly.Python.forBlock['controls_range'] = function () {
    var from = Blockly.Python.valueToCode(this, "FROM", Blockly.Python.ORDER_NONE) || "0";
    var end = Blockly.Python.valueToCode(this, "TO", Blockly.Python.ORDER_NONE) || "0";
    var step = Blockly.Python.valueToCode(this, "STEP", Blockly.Python.ORDER_NONE) || "1";
    var code = "range(" + from + ", " + end + ", " + step + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.forBlock['controls_lambda'] = function (a) {
    var c = Blockly.Python.valueToCode(a, "BOOL", Blockly.Python.ORDER_NONE) || "None",
    d = Blockly.Python.statementToCode(a, "DO") || "pass";
    var code = "lambda " + c + ": " + d;
    code = code.replace('\n','').replace('    ','')
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.forBlock['time_sleep'] = function () {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var delay_time = Blockly.Python.valueToCode(this, 'DELAY_TIME', Blockly.Python.ORDER_ATOMIC) || '1000'
    var code = 'time.sleep(' + delay_time + ')\n';
    return code;
};

Blockly.Python.forBlock['controls_pass'] = function () {
    return 'pass\n';
};

Blockly.Python.forBlock['controls_thread'] = function () {
    Blockly.Python.definitions_['import__thread'] = 'import _thread';
    var v = Blockly.Python.valueToCode(this, "VAR", Blockly.Python.ORDER_NONE) || "None";
    var callback = Blockly.Python.variableDB_.getName(
        Blockly.Python.valueToCode(this, "callback", Blockly.Python.ORDER_NONE) || "None",
        Blockly.Procedures.NAME_TYPE
    );
    var code = "_thread.start_new_thread("+ callback +", "+ v +")\n";
    return code;
};

//do-while循环
Blockly.Python.forBlock['do_while'] = function() {
    var value_select_data = Blockly.Python.valueToCode(this, 'select_data', Blockly.Python.ORDER_NONE) || "False";
    var statements_input_data = Blockly.Python.statementToCode(this, 'input_data')
    var dropdown_type = this.getFieldValue('type');
    if(dropdown_type == 'true'){
        statements_input_data = statements_input_data +'    if ('+value_select_data+'):\n' + '        break\n';  
    }
    else{
        statements_input_data = statements_input_data +'    if not ('+value_select_data+'):\n' + '        break\n';  
    }
    statements_input_data = Blockly.Python.addLoopTrap(statements_input_data, this.id) || Blockly.Python.PASS;
    //var dropdown_type = this.getFieldValue('type');
    var code = 'while True:\n' + statements_input_data;
    return code;
};

Blockly.Python.forBlock.base_type=Blockly.Python.forBlock.controls_type;
Blockly.Python.forBlock.controls_TypeLists=Blockly.Python.forBlock.controls_typeLists;

Blockly.Python.forBlock['controls_repeat_ext'] = function (a) {
    var times = Blockly.Python.valueToCode(this, 'TIMES', Blockly.Python.ORDER_ATOMIC);
    var d = Blockly.Python.statementToCode(a, "DO"),
        d = Blockly.Python.addLoopTrap(d, a.id) || Blockly.Python.PASS;
    return 'for _my_variable in range(' + times + '):\n' + d;
};