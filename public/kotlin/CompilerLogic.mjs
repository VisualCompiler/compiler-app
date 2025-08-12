import {
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  padEnd2jv3jyj2267cs as padEnd,
  println2shhhgwwt4c61 as println,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  repeat2w4c6j8zoq09o as repeat,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  NotImplementedErrorfzlkpv14xxr8 as NotImplementedError,
  listOf1jh22dvmctj1r as listOf,
  joinToString1cxrrlmo0chqs as joinToString,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  toString1pkumu07cwy4m as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$33ewqhqmjrfx6 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  charCodeAt1yspne1d8erbm as charCodeAt,
  substringiqarkczpya5m as substring,
  KtMap140uvy3s5zad8 as KtMap,
  isInterface3d6p8outrmvmk as isInterface,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  to2cs3ny02qtbcb as to,
  mapOf1xd03cq9cnmy8 as mapOf,
  copyToArray2j022khrow2yi as copyToArray,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3bxttkj3v1mea as ArrayList_init_$Create$_0,
  getKClass1s3j9wy1cofik as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType1lgox3mzhchp5 as createKType,
  firstOrNull1982767dljvdy as firstOrNull,
  removeFirst1io7eo7dqtj5o as removeFirst,
  first58ocm7j58k3q as first,
  toInt2q8uldh7sc951 as toInt,
  toMutableList3ewlpx8m5ca2q as toMutableList,
  mapOf2zpbbmyqk8xpf as mapOf_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  JsonPrimitive2fp8648nd60dn as JsonPrimitive,
  JsonPrimitiveolttw629wj53 as JsonPrimitive_0,
  JsonObjectee06ihoeeiqj as JsonObject,
  Default_getInstance363hicrc7jsft as Default_getInstance,
  JsonArray2urf8ey7u44sd as JsonArray,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(JsonExport, 'JsonExport', JsonExport);
initMetadataForClass(AsmConstruct, 'AsmConstruct');
initMetadataForClass(CodeGenerator, 'CodeGenerator', CodeGenerator);
initMetadataForClass(Function, 'Function', VOID, AsmConstruct);
initMetadataForClass(AsmFunction, 'AsmFunction', VOID, Function);
initMetadataForClass(Instruction, 'Instruction', VOID, AsmConstruct);
initMetadataForClass(Ret, 'Ret', Ret, Instruction);
initMetadataForClass(Mov, 'Mov', VOID, Instruction);
initMetadataForClass(Operand, 'Operand', VOID, AsmConstruct);
initMetadataForClass(Imm, 'Imm', VOID, Operand);
initMetadataForClass(Register, 'Register', VOID, Operand);
initMetadataForClass(Program, 'Program', VOID, AsmConstruct);
initMetadataForClass(SimpleAsmProgram, 'SimpleAsmProgram', VOID, Program);
initMetadataForCompanion(Companion);
initMetadataForClass(SyntaxError, 'SyntaxError', VOID, Exception);
initMetadataForClass(TokenType, 'TokenType');
initMetadataForObject(KEYWORD_INT, 'KEYWORD_INT', VOID, TokenType);
initMetadataForObject(KEYWORD_VOID, 'KEYWORD_VOID', VOID, TokenType);
initMetadataForObject(KEYWORD_RETURN, 'KEYWORD_RETURN', VOID, TokenType);
initMetadataForObject(IDENTIFIER, 'IDENTIFIER', VOID, TokenType);
initMetadataForObject(INT_LITERAL, 'INT_LITERAL', VOID, TokenType);
initMetadataForObject(PLUS, 'PLUS', VOID, TokenType);
initMetadataForObject(MULTIPLY, 'MULTIPLY', VOID, TokenType);
initMetadataForObject(DIVIDE, 'DIVIDE', VOID, TokenType);
initMetadataForObject(REMAINDER, 'REMAINDER', VOID, TokenType);
initMetadataForObject(TILDE, 'TILDE', VOID, TokenType);
initMetadataForObject(NEGATION, 'NEGATION', VOID, TokenType);
initMetadataForObject(DECREMENT, 'DECREMENT', VOID, TokenType);
initMetadataForObject(ASSIGN, 'ASSIGN', VOID, TokenType);
initMetadataForObject(SEMICOLON, 'SEMICOLON', VOID, TokenType);
initMetadataForObject(LEFT_PAREN, 'LEFT_PAREN', VOID, TokenType);
initMetadataForObject(RIGHT_PAREN, 'RIGHT_PAREN', VOID, TokenType);
initMetadataForObject(LEFT_BRACK, 'LEFT_BRACK', VOID, TokenType);
initMetadataForObject(RIGHT_BRACK, 'RIGHT_BRACK', VOID, TokenType);
initMetadataForObject(EOF, 'EOF', VOID, TokenType);
initMetadataForClass(Token, 'Token');
initMetadataForClass(Lexer, 'Lexer');
initMetadataForClass(ASTNode, 'ASTNode');
initMetadataForClass(Expression, 'Expression', VOID, ASTNode);
initMetadataForClass(IntExpression, 'IntExpression', VOID, Expression);
initMetadataForClass(UnaryExpression, 'UnaryExpression', VOID, Expression);
initMetadataForClass(BinaryExpression, 'BinaryExpression', VOID, Expression);
initMetadataForClass(FunctionDefinition, 'FunctionDefinition', VOID, ASTNode);
initMetadataForClass(SimpleFunction, 'SimpleFunction', VOID, FunctionDefinition);
initMetadataForClass(Identifier, 'Identifier', VOID, ASTNode);
initMetadataForClass(Parser, 'Parser', Parser);
initMetadataForClass(Program_0, 'Program', VOID, ASTNode);
initMetadataForClass(SimpleProgram, 'SimpleProgram', VOID, Program_0);
initMetadataForClass(Statement, 'Statement', VOID, ASTNode);
initMetadataForClass(ReturnStatement, 'ReturnStatement', VOID, Statement);
//endregion
function JsonExport() {
}
protoOf(JsonExport).exportCompilationResults = function (code) {
  var lexer = new Lexer(code);
  var tokens = lexer.ar();
  var parser = new Parser();
  var ast = parser.cr(tokens);
  var codeGenerator = new CodeGenerator();
  var asm = codeGenerator.dr(ast instanceof SimpleProgram ? ast : THROW_CCE());
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [lexer.er(), ast.er(), asm.hr(0)];
};
function main() {
  var code = 'int main(void){\nreturn 5;\n}';
  var lexer = new Lexer(code);
  var tokens = lexer.ar();
  // Inline function 'kotlin.collections.forEach' call
  var inductionVariable = 0;
  var last = tokens.length;
  while (inductionVariable < last) {
    var element = tokens[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    println('Type: ' + padEnd(element.ir_1.toString(), 18) + ' ' + ("Lexeme: '" + padEnd(element.jr_1, 6) + "' ") + ('Position: [L:' + element.kr_1 + ', C:' + element.lr_1 + ']'));
  }
  var parser = new Parser();
  var ast = parser.cr(tokens);
  println(ast.mr());
  var codeGenerator = new CodeGenerator();
  println(codeGenerator.dr(ast instanceof SimpleProgram ? ast : THROW_CCE()).nr());
}
function mainWrapper() {
  main();
}
function AsmConstruct() {
}
protoOf(AsmConstruct).nr = function (indentationLevel, $super) {
  indentationLevel = indentationLevel === VOID ? 0 : indentationLevel;
  return $super === VOID ? this.hr(indentationLevel) : $super.hr.call(this, indentationLevel);
};
protoOf(AsmConstruct).or = function (level) {
  return repeat('  ', level);
};
function generateFunction($this, func) {
  if (func instanceof SimpleFunction) {
    var bodyInstructions = generateInstructions($this, func.qr_1);
    return new AsmFunction(func.pr_1.rr_1, bodyInstructions);
  } else {
    noWhenBranchMatchedException();
  }
}
function generateInstructions($this, body) {
  if (body instanceof ReturnStatement)
    return generateReturn($this, body.sr_1);
  else {
    noWhenBranchMatchedException();
  }
}
function generateReturn($this, expression) {
  if (expression instanceof IntExpression) {
    var imm = new Imm(expression.tr_1);
    var retReg = new Register('EAX');
    return listOf([new Mov(imm, retReg), new Ret()]);
  } else {
    if (expression instanceof BinaryExpression) {
      // Inline function 'kotlin.TODO' call
      throw new NotImplementedError();
    } else {
      if (expression instanceof UnaryExpression) {
        // Inline function 'kotlin.TODO' call
        throw new NotImplementedError();
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
}
function CodeGenerator() {
}
protoOf(CodeGenerator).dr = function (program) {
  if (program instanceof SimpleProgram) {
    var asmFunction = generateFunction(this, program.fr_1);
    return new SimpleAsmProgram(asmFunction);
  } else {
    noWhenBranchMatchedException();
  }
};
function Function() {
  AsmConstruct.call(this);
}
function AsmFunction$toAsm$lambda($indentationLevel) {
  return function (it) {
    return it.hr($indentationLevel + 1 | 0);
  };
}
function AsmFunction(name, body) {
  Function.call(this);
  this.ur_1 = name;
  this.vr_1 = body;
}
protoOf(AsmFunction).hr = function (indentationLevel) {
  var bodyAsm = joinToString(this.vr_1, '\n', VOID, VOID, VOID, VOID, AsmFunction$toAsm$lambda(indentationLevel));
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.or(indentationLevel + 1 | 0) + '.globl ' + this.ur_1;
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value).e6(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = this.or(indentationLevel) + this.ur_1 + ':';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value_0).e6(_Char___init__impl__6a9atx(10));
  this_0.d6(bodyAsm);
  return this_0.toString();
};
protoOf(AsmFunction).toString = function () {
  return 'AsmFunction(name=' + this.ur_1 + ', body=' + toString(this.vr_1) + ')';
};
protoOf(AsmFunction).hashCode = function () {
  var result = getStringHashCode(this.ur_1);
  result = imul(result, 31) + hashCode(this.vr_1) | 0;
  return result;
};
protoOf(AsmFunction).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof AsmFunction))
    return false;
  var tmp0_other_with_cast = other instanceof AsmFunction ? other : THROW_CCE();
  if (!(this.ur_1 === tmp0_other_with_cast.ur_1))
    return false;
  if (!equals(this.vr_1, tmp0_other_with_cast.vr_1))
    return false;
  return true;
};
function Instruction() {
  AsmConstruct.call(this);
}
function Ret() {
  Instruction.call(this);
}
protoOf(Ret).hr = function (indentationLevel) {
  return this.or(indentationLevel) + 'ret';
};
function Mov(src, dest, line, column) {
  line = line === VOID ? 0 : line;
  column = column === VOID ? 0 : column;
  Instruction.call(this);
  this.wr_1 = src;
  this.xr_1 = dest;
  this.yr_1 = line;
  this.zr_1 = column;
}
protoOf(Mov).hr = function (indentationLevel) {
  return this.or(indentationLevel) + 'movl ' + this.wr_1.nr() + ', ' + this.xr_1.nr();
};
protoOf(Mov).toString = function () {
  return 'Mov(src=' + toString(this.wr_1) + ', dest=' + toString(this.xr_1) + ', line=' + this.yr_1 + ', column=' + this.zr_1 + ')';
};
protoOf(Mov).hashCode = function () {
  var result = hashCode(this.wr_1);
  result = imul(result, 31) + hashCode(this.xr_1) | 0;
  result = imul(result, 31) + this.yr_1 | 0;
  result = imul(result, 31) + this.zr_1 | 0;
  return result;
};
protoOf(Mov).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Mov))
    return false;
  var tmp0_other_with_cast = other instanceof Mov ? other : THROW_CCE();
  if (!equals(this.wr_1, tmp0_other_with_cast.wr_1))
    return false;
  if (!equals(this.xr_1, tmp0_other_with_cast.xr_1))
    return false;
  if (!(this.yr_1 === tmp0_other_with_cast.yr_1))
    return false;
  if (!(this.zr_1 === tmp0_other_with_cast.zr_1))
    return false;
  return true;
};
function Operand() {
  AsmConstruct.call(this);
}
function Imm(value) {
  Operand.call(this);
  this.as_1 = value;
}
protoOf(Imm).hr = function (indentationLevel) {
  return this.or(indentationLevel) + this.as_1;
};
protoOf(Imm).toString = function () {
  return 'Imm(value=' + this.as_1 + ')';
};
protoOf(Imm).hashCode = function () {
  return this.as_1;
};
protoOf(Imm).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Imm))
    return false;
  var tmp0_other_with_cast = other instanceof Imm ? other : THROW_CCE();
  if (!(this.as_1 === tmp0_other_with_cast.as_1))
    return false;
  return true;
};
function Register(name) {
  Operand.call(this);
  this.bs_1 = name;
}
protoOf(Register).hr = function (indentationLevel) {
  return this.or(indentationLevel) + this.bs_1;
};
protoOf(Register).toString = function () {
  return 'Register(name=' + this.bs_1 + ')';
};
protoOf(Register).hashCode = function () {
  return getStringHashCode(this.bs_1);
};
protoOf(Register).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Register))
    return false;
  var tmp0_other_with_cast = other instanceof Register ? other : THROW_CCE();
  if (!(this.bs_1 === tmp0_other_with_cast.bs_1))
    return false;
  return true;
};
function Program() {
  AsmConstruct.call(this);
}
function SimpleAsmProgram(function_0) {
  Program.call(this);
  this.gr_1 = function_0;
}
protoOf(SimpleAsmProgram).hr = function (indentationLevel) {
  return this.gr_1.hr(indentationLevel);
};
protoOf(SimpleAsmProgram).toString = function () {
  return 'SimpleAsmProgram(function=' + this.gr_1.toString() + ')';
};
protoOf(SimpleAsmProgram).hashCode = function () {
  return this.gr_1.hashCode();
};
protoOf(SimpleAsmProgram).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SimpleAsmProgram))
    return false;
  var tmp0_other_with_cast = other instanceof SimpleAsmProgram ? other : THROW_CCE();
  if (!this.gr_1.equals(tmp0_other_with_cast.gr_1))
    return false;
  return true;
};
function buildMessage($this, message, line, column) {
  return !(line == null) && !(column == null) ? 'Syntax error at line ' + line + ', column ' + column + ': ' + message : !(line == null) ? 'Syntax error at line ' + line + ': ' + message : 'Syntax error: ' + message;
}
function Companion() {
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function SyntaxError(message, line, column) {
  line = line === VOID ? null : line;
  column = column === VOID ? null : column;
  Exception_init_$Init$(buildMessage(Companion_instance, message, line, column), this);
  captureStack(this, SyntaxError);
  this.cs_1 = line;
  this.ds_1 = column;
}
function KEYWORD_INT() {
  KEYWORD_INT_instance = this;
  TokenType.call(this);
}
var KEYWORD_INT_instance;
function KEYWORD_INT_getInstance() {
  if (KEYWORD_INT_instance == null)
    new KEYWORD_INT();
  return KEYWORD_INT_instance;
}
function KEYWORD_VOID() {
  KEYWORD_VOID_instance = this;
  TokenType.call(this);
}
var KEYWORD_VOID_instance;
function KEYWORD_VOID_getInstance() {
  if (KEYWORD_VOID_instance == null)
    new KEYWORD_VOID();
  return KEYWORD_VOID_instance;
}
function KEYWORD_RETURN() {
  KEYWORD_RETURN_instance = this;
  TokenType.call(this);
}
var KEYWORD_RETURN_instance;
function KEYWORD_RETURN_getInstance() {
  if (KEYWORD_RETURN_instance == null)
    new KEYWORD_RETURN();
  return KEYWORD_RETURN_instance;
}
function IDENTIFIER() {
  IDENTIFIER_instance = this;
  TokenType.call(this);
}
var IDENTIFIER_instance;
function IDENTIFIER_getInstance() {
  if (IDENTIFIER_instance == null)
    new IDENTIFIER();
  return IDENTIFIER_instance;
}
function INT_LITERAL() {
  INT_LITERAL_instance = this;
  TokenType.call(this);
}
var INT_LITERAL_instance;
function INT_LITERAL_getInstance() {
  if (INT_LITERAL_instance == null)
    new INT_LITERAL();
  return INT_LITERAL_instance;
}
function PLUS() {
  PLUS_instance = this;
  TokenType.call(this);
}
var PLUS_instance;
function PLUS_getInstance() {
  if (PLUS_instance == null)
    new PLUS();
  return PLUS_instance;
}
function MULTIPLY() {
  MULTIPLY_instance = this;
  TokenType.call(this);
}
var MULTIPLY_instance;
function MULTIPLY_getInstance() {
  if (MULTIPLY_instance == null)
    new MULTIPLY();
  return MULTIPLY_instance;
}
function DIVIDE() {
  DIVIDE_instance = this;
  TokenType.call(this);
}
var DIVIDE_instance;
function DIVIDE_getInstance() {
  if (DIVIDE_instance == null)
    new DIVIDE();
  return DIVIDE_instance;
}
function REMAINDER() {
  REMAINDER_instance = this;
  TokenType.call(this);
}
var REMAINDER_instance;
function REMAINDER_getInstance() {
  if (REMAINDER_instance == null)
    new REMAINDER();
  return REMAINDER_instance;
}
function TILDE() {
  TILDE_instance = this;
  TokenType.call(this);
}
var TILDE_instance;
function TILDE_getInstance() {
  if (TILDE_instance == null)
    new TILDE();
  return TILDE_instance;
}
function NEGATION() {
  NEGATION_instance = this;
  TokenType.call(this);
}
var NEGATION_instance;
function NEGATION_getInstance() {
  if (NEGATION_instance == null)
    new NEGATION();
  return NEGATION_instance;
}
function DECREMENT() {
  DECREMENT_instance = this;
  TokenType.call(this);
}
var DECREMENT_instance;
function DECREMENT_getInstance() {
  if (DECREMENT_instance == null)
    new DECREMENT();
  return DECREMENT_instance;
}
function ASSIGN() {
  ASSIGN_instance = this;
  TokenType.call(this);
}
var ASSIGN_instance;
function ASSIGN_getInstance() {
  if (ASSIGN_instance == null)
    new ASSIGN();
  return ASSIGN_instance;
}
function SEMICOLON() {
  SEMICOLON_instance = this;
  TokenType.call(this);
}
var SEMICOLON_instance;
function SEMICOLON_getInstance() {
  if (SEMICOLON_instance == null)
    new SEMICOLON();
  return SEMICOLON_instance;
}
function LEFT_PAREN() {
  LEFT_PAREN_instance = this;
  TokenType.call(this);
}
var LEFT_PAREN_instance;
function LEFT_PAREN_getInstance() {
  if (LEFT_PAREN_instance == null)
    new LEFT_PAREN();
  return LEFT_PAREN_instance;
}
function RIGHT_PAREN() {
  RIGHT_PAREN_instance = this;
  TokenType.call(this);
}
var RIGHT_PAREN_instance;
function RIGHT_PAREN_getInstance() {
  if (RIGHT_PAREN_instance == null)
    new RIGHT_PAREN();
  return RIGHT_PAREN_instance;
}
function LEFT_BRACK() {
  LEFT_BRACK_instance = this;
  TokenType.call(this);
}
var LEFT_BRACK_instance;
function LEFT_BRACK_getInstance() {
  if (LEFT_BRACK_instance == null)
    new LEFT_BRACK();
  return LEFT_BRACK_instance;
}
function RIGHT_BRACK() {
  RIGHT_BRACK_instance = this;
  TokenType.call(this);
}
var RIGHT_BRACK_instance;
function RIGHT_BRACK_getInstance() {
  if (RIGHT_BRACK_instance == null)
    new RIGHT_BRACK();
  return RIGHT_BRACK_instance;
}
function EOF() {
  EOF_instance = this;
  TokenType.call(this);
}
var EOF_instance;
function EOF_getInstance() {
  if (EOF_instance == null)
    new EOF();
  return EOF_instance;
}
function TokenType() {
}
protoOf(TokenType).toString = function () {
  var tmp0_elvis_lhs = getKClassFromExpression(this).r6();
  return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
};
function Token(type, lexeme, line, column) {
  this.ir_1 = type;
  this.jr_1 = lexeme;
  this.kr_1 = line;
  this.lr_1 = column;
}
protoOf(Token).toString = function () {
  return 'Token(type=' + this.ir_1.toString() + ', lexeme=' + this.jr_1 + ', line=' + this.kr_1 + ', column=' + this.lr_1 + ')';
};
protoOf(Token).hashCode = function () {
  var result = hashCode(this.ir_1);
  result = imul(result, 31) + getStringHashCode(this.jr_1) | 0;
  result = imul(result, 31) + this.kr_1 | 0;
  result = imul(result, 31) + this.lr_1 | 0;
  return result;
};
protoOf(Token).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Token))
    return false;
  var tmp0_other_with_cast = other instanceof Token ? other : THROW_CCE();
  if (!equals(this.ir_1, tmp0_other_with_cast.ir_1))
    return false;
  if (!(this.jr_1 === tmp0_other_with_cast.jr_1))
    return false;
  if (!(this.kr_1 === tmp0_other_with_cast.kr_1))
    return false;
  if (!(this.lr_1 === tmp0_other_with_cast.lr_1))
    return false;
  return true;
};
function isAtEnd($this) {
  var tmp;
  if ($this.vq_1 >= $this.tq_1.length) {
    tmp = true;
  } else {
    tmp = false;
  }
  return tmp;
}
function advance($this) {
  var _unary__edvuaz = $this.vq_1;
  $this.vq_1 = _unary__edvuaz + 1 | 0;
  return charCodeAt($this.tq_1, _unary__edvuaz);
}
function scanToken($this) {
  var char = advance($this);
  if (char === _Char___init__impl__6a9atx(40)) {
    addToken($this, LEFT_PAREN_getInstance());
  } else if (char === _Char___init__impl__6a9atx(41)) {
    addToken($this, RIGHT_PAREN_getInstance());
  } else if (char === _Char___init__impl__6a9atx(123)) {
    addToken($this, LEFT_BRACK_getInstance());
  } else if (char === _Char___init__impl__6a9atx(125)) {
    addToken($this, RIGHT_BRACK_getInstance());
  } else if (char === _Char___init__impl__6a9atx(59)) {
    addToken($this, SEMICOLON_getInstance());
  } else if (char === _Char___init__impl__6a9atx(43)) {
    addToken($this, PLUS_getInstance());
  } else if (char === _Char___init__impl__6a9atx(37)) {
    addToken($this, REMAINDER_getInstance());
  } else if (char === _Char___init__impl__6a9atx(42)) {
    addToken($this, MULTIPLY_getInstance());
  } else if (char === _Char___init__impl__6a9atx(47)) {
    addToken($this, DIVIDE_getInstance());
  } else if (char === _Char___init__impl__6a9atx(61)) {
    addToken($this, ASSIGN_getInstance());
  } else if (char === _Char___init__impl__6a9atx(126)) {
    addToken($this, TILDE_getInstance());
  } else if (char === _Char___init__impl__6a9atx(45)) {
    if (match($this, _Char___init__impl__6a9atx(45))) {
      addToken($this, DECREMENT_getInstance());
    } else {
      addToken($this, NEGATION_getInstance());
    }
  } else if (char !== _Char___init__impl__6a9atx(32))
    if (char === _Char___init__impl__6a9atx(10)) {
      $this.xq_1 = $this.xq_1 + 1 | 0;
      $this.yq_1 = $this.vq_1;
    } else {
      if (isDigit($this, char)) {
        number($this);
      } else if (isAlphabetic($this, char)) {
        identifier($this);
      } else {
        println('Invalid character at line ' + $this.xq_1);
      }
    }
}
function identifier($this) {
  while (isAlphaNumeric($this, peek($this))) {
    advance($this);
  }
  var text = substring($this.tq_1, $this.wq_1, $this.vq_1);
  // Inline function 'kotlin.collections.get' call
  var this_0 = $this.zq_1;
  var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).h1(text);
  var type = tmp0_elvis_lhs == null ? IDENTIFIER_getInstance() : tmp0_elvis_lhs;
  addToken($this, type);
}
function number($this) {
  while (isDigit($this, peek($this))) {
    advance($this);
  }
  addToken($this, INT_LITERAL_getInstance());
}
function match($this, expected) {
  if (isAtEnd($this))
    return false;
  if (!(charCodeAt($this.tq_1, $this.vq_1) === expected))
    return false;
  $this.vq_1 = $this.vq_1 + 1 | 0;
  return true;
}
function peek($this) {
  return isAtEnd($this) ? _Char___init__impl__6a9atx(0) : charCodeAt($this.tq_1, $this.vq_1);
}
function isDigit($this, c) {
  return _Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false;
}
function isAlphabetic($this, c) {
  return (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(122) : false) || (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false) || c === _Char___init__impl__6a9atx(95);
}
function isAlphaNumeric($this, c) {
  return isDigit($this, c) || isAlphabetic($this, c);
}
function addToken($this, type) {
  var text = substring($this.tq_1, $this.wq_1, $this.vq_1);
  var column = ($this.wq_1 - $this.yq_1 | 0) + 1 | 0;
  $this.uq_1.d(new Token(type, text, $this.xq_1, column));
}
function Lexer(source) {
  this.tq_1 = source;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.uq_1 = ArrayList_init_$Create$();
  this.vq_1 = 0;
  this.wq_1 = 0;
  this.xq_1 = 1;
  this.yq_1 = 0;
  this.zq_1 = mapOf([to('int', KEYWORD_INT_getInstance()), to('void', KEYWORD_VOID_getInstance()), to('return', KEYWORD_RETURN_getInstance())]);
}
protoOf(Lexer).ar = function () {
  while (!isAtEnd(this)) {
    this.wq_1 = this.vq_1;
    scanToken(this);
  }
  this.uq_1.d(new Token(EOF_getInstance(), '', this.xq_1, (this.vq_1 - this.yq_1 | 0) + 1 | 0));
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = this.uq_1;
  return copyToArray(this_0);
};
protoOf(Lexer).er = function () {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.uq_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.f();
  while (_iterator__ex2g4s.g()) {
    var item = _iterator__ex2g4s.h();
    var tmp$ret$0 = new JsonObject(mapOf([to('line', JsonPrimitive(item.kr_1)), to('column', JsonPrimitive(item.lr_1)), to('type', JsonPrimitive_0(item.ir_1.toString())), to('lexeme', JsonPrimitive_0(item.jr_1))]));
    destination.d(tmp$ret$0);
  }
  var jsonTokens = destination;
  var tmp0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.encodeToString' call
  var value = new JsonArray(jsonTokens);
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = tmp0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonArray), arrayOf([]), false));
  var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return tmp0.dn(tmp$ret$4, value);
};
function ASTNode() {
}
protoOf(ASTNode).mr = function (indent, $super) {
  indent = indent === VOID ? 0 : indent;
  return $super === VOID ? this.es(indent) : $super.es.call(this, indent);
};
protoOf(ASTNode).or = function (level) {
  return repeat('    ', level);
};
function Expression() {
  ASTNode.call(this);
}
function IntExpression(value) {
  Expression.call(this);
  this.tr_1 = value;
}
protoOf(IntExpression).es = function (indent) {
  return this.or(indent) + 'Int(' + this.tr_1 + ')';
};
protoOf(IntExpression).er = function () {
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).r6())), to('label', JsonPrimitive(this.tr_1))]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.dn(tmp$ret$1, jsonNode);
};
protoOf(IntExpression).toString = function () {
  return 'IntExpression(value=' + this.tr_1 + ')';
};
protoOf(IntExpression).hashCode = function () {
  return this.tr_1;
};
protoOf(IntExpression).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof IntExpression))
    return false;
  var tmp0_other_with_cast = other instanceof IntExpression ? other : THROW_CCE();
  if (!(this.tr_1 === tmp0_other_with_cast.tr_1))
    return false;
  return true;
};
function UnaryExpression(operator, expression) {
  Expression.call(this);
  this.fs_1 = operator;
  this.gs_1 = expression;
}
protoOf(UnaryExpression).es = function (indent) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.or(indent) + "UnaryExpression(operator='" + this.fs_1.jr_1 + "')";
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value).e6(_Char___init__impl__6a9atx(10));
  this_0.d6(this.gs_1.es(indent + 1 | 0));
  return this_0.toString();
};
protoOf(UnaryExpression).er = function () {
  var children = new JsonObject(mapOf([to('operator', JsonPrimitive_0(this.fs_1.toString())), to('expression', JsonPrimitive_0(this.gs_1.er()))]));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).r6())), to('label', JsonPrimitive_0('operator, expression')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.dn(tmp$ret$1, jsonNode);
};
protoOf(UnaryExpression).toString = function () {
  return 'UnaryExpression(operator=' + this.fs_1.toString() + ', expression=' + toString(this.gs_1) + ')';
};
protoOf(UnaryExpression).hashCode = function () {
  var result = this.fs_1.hashCode();
  result = imul(result, 31) + hashCode(this.gs_1) | 0;
  return result;
};
protoOf(UnaryExpression).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof UnaryExpression))
    return false;
  var tmp0_other_with_cast = other instanceof UnaryExpression ? other : THROW_CCE();
  if (!this.fs_1.equals(tmp0_other_with_cast.fs_1))
    return false;
  if (!equals(this.gs_1, tmp0_other_with_cast.gs_1))
    return false;
  return true;
};
function BinaryExpression(left, operator, right) {
  Expression.call(this);
  this.hs_1 = left;
  this.is_1 = operator;
  this.js_1 = right;
}
protoOf(BinaryExpression).es = function (indent) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.or(indent) + "BinaryExpression(operator='" + this.is_1.jr_1 + "')";
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value).e6(_Char___init__impl__6a9atx(10));
  this_0.d6(this.hs_1.es(indent + 1 | 0));
  this_0.d6(this.js_1.es(indent + 1 | 0));
  return this_0.toString();
};
protoOf(BinaryExpression).er = function () {
  var children = new JsonObject(mapOf([to('left', JsonPrimitive_0(this.hs_1.er())), to('operator', JsonPrimitive_0(this.is_1.toString())), to('right', JsonPrimitive_0(this.js_1.er()))]));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).r6())), to('label', JsonPrimitive_0('operator, left, right')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.dn(tmp$ret$1, jsonNode);
};
protoOf(BinaryExpression).toString = function () {
  return 'BinaryExpression(left=' + toString(this.hs_1) + ', operator=' + this.is_1.toString() + ', right=' + toString(this.js_1) + ')';
};
protoOf(BinaryExpression).hashCode = function () {
  var result = hashCode(this.hs_1);
  result = imul(result, 31) + this.is_1.hashCode() | 0;
  result = imul(result, 31) + hashCode(this.js_1) | 0;
  return result;
};
protoOf(BinaryExpression).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BinaryExpression))
    return false;
  var tmp0_other_with_cast = other instanceof BinaryExpression ? other : THROW_CCE();
  if (!equals(this.hs_1, tmp0_other_with_cast.hs_1))
    return false;
  if (!this.is_1.equals(tmp0_other_with_cast.is_1))
    return false;
  if (!equals(this.js_1, tmp0_other_with_cast.js_1))
    return false;
  return true;
};
function FunctionDefinition() {
  ASTNode.call(this);
}
function SimpleFunction(name, body) {
  FunctionDefinition.call(this);
  this.pr_1 = name;
  this.qr_1 = body;
}
protoOf(SimpleFunction).es = function (indent) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.or(indent) + 'SimpleFunction(';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value).e6(_Char___init__impl__6a9atx(10));
  this_0.d6(this.or(indent + 1 | 0) + 'name=' + this.pr_1.es(0));
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = this.or(indent + 1 | 0) + 'body=';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value_0).e6(_Char___init__impl__6a9atx(10));
  this_0.d6(this.or(indent) + this.qr_1.es(indent + 1 | 0));
  // Inline function 'kotlin.text.appendLine' call
  var value_1 = this.or(indent) + ')';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value_1).e6(_Char___init__impl__6a9atx(10));
  return this_0.toString();
};
protoOf(SimpleFunction).er = function () {
  var children = new JsonObject(mapOf([to('name', JsonPrimitive_0(this.pr_1.er())), to('body', JsonPrimitive_0(this.qr_1.er()))]));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).r6())), to('label', JsonPrimitive_0('function definition')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.dn(tmp$ret$1, jsonNode);
};
protoOf(SimpleFunction).toString = function () {
  return 'SimpleFunction(name=' + this.pr_1.toString() + ', body=' + toString(this.qr_1) + ')';
};
protoOf(SimpleFunction).hashCode = function () {
  var result = this.pr_1.hashCode();
  result = imul(result, 31) + hashCode(this.qr_1) | 0;
  return result;
};
protoOf(SimpleFunction).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SimpleFunction))
    return false;
  var tmp0_other_with_cast = other instanceof SimpleFunction ? other : THROW_CCE();
  if (!this.pr_1.equals(tmp0_other_with_cast.pr_1))
    return false;
  if (!equals(this.qr_1, tmp0_other_with_cast.qr_1))
    return false;
  return true;
};
function Identifier(value) {
  ASTNode.call(this);
  this.rr_1 = value;
}
protoOf(Identifier).es = function (indent) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.or(indent) + '"' + this.rr_1 + '"';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value).e6(_Char___init__impl__6a9atx(10));
  return this_0.toString();
};
protoOf(Identifier).er = function () {
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).r6())), to('label', JsonPrimitive_0(this.rr_1))]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.dn(tmp$ret$1, jsonNode);
};
protoOf(Identifier).toString = function () {
  return 'Identifier(value=' + this.rr_1 + ')';
};
protoOf(Identifier).hashCode = function () {
  return getStringHashCode(this.rr_1);
};
protoOf(Identifier).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Identifier))
    return false;
  var tmp0_other_with_cast = other instanceof Identifier ? other : THROW_CCE();
  if (!(this.rr_1 === tmp0_other_with_cast.rr_1))
    return false;
  return true;
};
function parseProgram($this, tokens) {
  var function_0 = parseFunction($this, tokens);
  return new SimpleProgram(function_0);
}
function parseFunction($this, tokens) {
  var first = firstOrNull(tokens);
  expect($this, KEYWORD_INT_getInstance(), tokens);
  var name = parseIdentifier($this, tokens);
  expect($this, LEFT_PAREN_getInstance(), tokens);
  expect($this, KEYWORD_VOID_getInstance(), tokens);
  expect($this, RIGHT_PAREN_getInstance(), tokens);
  expect($this, LEFT_BRACK_getInstance(), tokens);
  var body = parseStatement($this, tokens);
  expect($this, RIGHT_BRACK_getInstance(), tokens);
  return new SimpleFunction(name, body);
}
function expect($this, expected, tokens) {
  var token = removeFirst(tokens);
  if (!equals(token.ir_1, expected)) {
    var tmp0_line = token.kr_1;
    var tmp1_column = token.lr_1;
    var tmp2_message = 'Expected token: ' + expected.toString() + ', got ' + token.ir_1.toString();
    throw new SyntaxError(tmp2_message, tmp0_line, tmp1_column);
  }
  return token;
}
function parseIdentifier($this, tokens) {
  var token = removeFirst(tokens);
  if (!equals(token.ir_1, IDENTIFIER_getInstance())) {
    var tmp0_line = token.kr_1;
    var tmp1_column = token.lr_1;
    var tmp2_message = 'Expected token: ' + IDENTIFIER_getInstance().toString() + ', got ' + token.ir_1.toString();
    throw new SyntaxError(tmp2_message, tmp0_line, tmp1_column);
  }
  return new Identifier(token.jr_1);
}
function parseStatement($this, tokens) {
  var first = firstOrNull(tokens);
  expect($this, KEYWORD_RETURN_getInstance(), tokens);
  var expression = parseExpression($this, 45, tokens);
  expect($this, SEMICOLON_getInstance(), tokens);
  return new ReturnStatement(expression);
}
function parseExpression($this, minPrec, tokens) {
  var left = parseFactor($this, tokens);
  $l$loop_1: while (true) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!!tokens.k()) {
      break $l$loop_1;
    }
    var nextToken = first(tokens);
    var tmp0_elvis_lhs = $this.br_1.h1(nextToken.ir_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      break $l$loop_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var prec = tmp;
    if (prec < minPrec) {
      break $l$loop_1;
    }
    var operator = removeFirst(tokens);
    var right = parseExpression($this, prec + 5 | 0, tokens);
    left = new BinaryExpression(left, operator, right);
  }
  return left;
}
function parseFactor($this, tokens) {
  var nextToken = first(tokens);
  if (equals(nextToken.ir_1, INT_LITERAL_getInstance())) {
    nextToken = removeFirst(tokens);
    return new IntExpression(toInt(nextToken.jr_1));
  } else if (equals(nextToken.ir_1, TILDE_getInstance()) || equals(nextToken.ir_1, NEGATION_getInstance())) {
    var operator = removeFirst(tokens);
    var factor = parseFactor($this, tokens);
    return new UnaryExpression(operator, factor);
  } else if (equals(nextToken.ir_1, LEFT_PAREN_getInstance())) {
    expect($this, LEFT_PAREN_getInstance(), tokens);
    var expression = parseExpression($this, 45, tokens);
    expect($this, RIGHT_PAREN_getInstance(), tokens);
    return expression;
  } else {
    var nToken = removeFirst(tokens);
    var tmp0_line = nToken.kr_1;
    var tmp1_column = nToken.lr_1;
    var tmp2_message = "Unexpected token in expression: expected literal, unary operator, or '(', got " + nToken.ir_1.toString();
    throw new SyntaxError(tmp2_message, tmp0_line, tmp1_column);
  }
}
function Parser() {
  this.br_1 = mapOf([to(PLUS_getInstance(), 45), to(NEGATION_getInstance(), 45), to(MULTIPLY_getInstance(), 50), to(DIVIDE_getInstance(), 50), to(REMAINDER_getInstance(), 50)]);
}
protoOf(Parser).cr = function (tokens) {
  var tokenSet = toMutableList(tokens);
  var ast = parseProgram(this, tokenSet);
  var lastToken = removeFirst(tokenSet);
  if (!equals(lastToken.ir_1, EOF_getInstance()) || !tokenSet.k()) {
    var tmp0_line = lastToken.kr_1;
    var tmp1_column = lastToken.lr_1;
    throw new SyntaxError('Expected end of file', tmp0_line, tmp1_column);
  }
  return ast;
};
function Program_0() {
  ASTNode.call(this);
}
function SimpleProgram(functionDefinition) {
  Program_0.call(this);
  this.fr_1 = functionDefinition;
}
protoOf(SimpleProgram).es = function (indent) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.or(indent) + 'SimpleProgram(';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value).e6(_Char___init__impl__6a9atx(10));
  this_0.d6(this.fr_1.es(indent + 1 | 0));
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = this.or(indent) + ')';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value_0).e6(_Char___init__impl__6a9atx(10));
  return this_0.toString();
};
protoOf(SimpleProgram).er = function () {
  var children = new JsonObject(mapOf_0(to('functionDefinition', JsonPrimitive_0(this.fr_1.er()))));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).r6())), to('label', JsonPrimitive_0('program')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.dn(tmp$ret$1, jsonNode);
};
protoOf(SimpleProgram).toString = function () {
  return 'SimpleProgram(functionDefinition=' + toString(this.fr_1) + ')';
};
protoOf(SimpleProgram).hashCode = function () {
  return hashCode(this.fr_1);
};
protoOf(SimpleProgram).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SimpleProgram))
    return false;
  var tmp0_other_with_cast = other instanceof SimpleProgram ? other : THROW_CCE();
  if (!equals(this.fr_1, tmp0_other_with_cast.fr_1))
    return false;
  return true;
};
function Statement() {
  ASTNode.call(this);
}
function ReturnStatement(expression) {
  Statement.call(this);
  this.sr_1 = expression;
}
protoOf(ReturnStatement).es = function (indent) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.or(indent) + 'ReturnStatement(';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value).e6(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = this.sr_1.es(indent + 1 | 0);
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value_0).e6(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_1 = this.or(indent) + ')';
  // Inline function 'kotlin.text.appendLine' call
  this_0.d6(value_1).e6(_Char___init__impl__6a9atx(10));
  return this_0.toString();
};
protoOf(ReturnStatement).er = function () {
  var children = new JsonObject(mapOf_0(to('expression', JsonPrimitive_0(this.sr_1.er()))));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).r6())), to('label', JsonPrimitive_0('return expression')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.ef();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.dn(tmp$ret$1, jsonNode);
};
protoOf(ReturnStatement).toString = function () {
  return 'ReturnStatement(expression=' + toString(this.sr_1) + ')';
};
protoOf(ReturnStatement).hashCode = function () {
  return hashCode(this.sr_1);
};
protoOf(ReturnStatement).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ReturnStatement))
    return false;
  var tmp0_other_with_cast = other instanceof ReturnStatement ? other : THROW_CCE();
  if (!equals(this.sr_1, tmp0_other_with_cast.sr_1))
    return false;
  return true;
};
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  JsonExport as JsonExport,
};
//endregion
mainWrapper();

//# sourceMappingURL=CompilerLogic.mjs.map
