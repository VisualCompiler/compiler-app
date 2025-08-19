import {
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  protoOf180f3jzyo7rfj as protoOf,
  defineProp3hxgpk2knu2px as defineProp,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  getKClass1s3j9wy1cofik as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3hlj875zwihx0 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString1pkumu07cwy4m as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  arrayOf1akklvh2at202 as arrayOf,
  createKType1lgox3mzhchp5 as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  Exceptiondt2hlxn7j7vw as Exception,
  copyToArray2j022khrow2yi as copyToArray,
  repeat2w4c6j8zoq09o as repeat,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  NotImplementedErrorfzlkpv14xxr8 as NotImplementedError,
  listOf1jh22dvmctj1r as listOf,
  joinToString1cxrrlmo0chqs as joinToString,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  Exception_init_$Init$33ewqhqmjrfx6 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  charCodeAt1yspne1d8erbm as charCodeAt,
  println2shhhgwwt4c61 as println,
  substringiqarkczpya5m as substring,
  KtMap140uvy3s5zad8 as KtMap,
  to2cs3ny02qtbcb as to,
  mapOf1xd03cq9cnmy8 as mapOf,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3bxttkj3v1mea as ArrayList_init_$Create$_0,
  firstOrNull1982767dljvdy as firstOrNull,
  removeFirst1io7eo7dqtj5o as removeFirst,
  first58ocm7j58k3q as first,
  toInt2q8uldh7sc951 as toInt,
  toMutableList20rdgwi7d3cwi as toMutableList,
  mapOf2zpbbmyqk8xpf as mapOf_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  SealedClassSerializer_init_$Create$1mlsiaxbm1nge as SealedClassSerializer_init_$Create$,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  createSimpleEnumSerializer2guioz11kk1m0 as createSimpleEnumSerializer,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstance2wffkbpdux3h9 as StringSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  IntSerializer_getInstance2q7s8kvk1il5u as IntSerializer_getInstance,
  BooleanSerializer_getInstance1t8habeqgiyq1 as BooleanSerializer_getInstance,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  Default_getInstance363hicrc7jsft as Default_getInstance,
  JsonPrimitive2fp8648nd60dn as JsonPrimitive,
  JsonPrimitiveolttw629wj53 as JsonPrimitive_0,
  JsonObjectee06ihoeeiqj as JsonObject,
  JsonArray2urf8ey7u44sd as JsonArray,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(ErrorType, 'ErrorType', VOID, Enum);
initMetadataForClass(CompilationStage, 'CompilationStage', VOID, Enum);
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass(CompilationOutput, 'CompilationOutput', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LexerOutput, 'LexerOutput', VOID, CompilationOutput, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ParserOutput, 'ParserOutput', VOID, CompilationOutput, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CodeGeneratorOutput, 'CodeGeneratorOutput', VOID, CompilationOutput, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CompilationError, 'CompilationError', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CompilationResult, 'CompilationResult', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForClass(CompilerExport, 'CompilerExport', CompilerExport);
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
initMetadataForCompanion(Companion_5);
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
var ErrorType_LEXICAL_instance;
var ErrorType_SYNTAX_instance;
var ErrorType_CODE_GENERATION_instance;
var ErrorType_RUNTIME_instance;
var ErrorType_GENERAL_instance;
function values() {
  return [ErrorType_LEXICAL_getInstance(), ErrorType_SYNTAX_getInstance(), ErrorType_CODE_GENERATION_getInstance(), ErrorType_RUNTIME_getInstance(), ErrorType_GENERAL_getInstance()];
}
function valueOf(value) {
  switch (value) {
    case 'LEXICAL':
      return ErrorType_LEXICAL_getInstance();
    case 'SYNTAX':
      return ErrorType_SYNTAX_getInstance();
    case 'CODE_GENERATION':
      return ErrorType_CODE_GENERATION_getInstance();
    case 'RUNTIME':
      return ErrorType_RUNTIME_getInstance();
    case 'GENERAL':
      return ErrorType_GENERAL_getInstance();
    default:
      ErrorType_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
var ErrorType_entriesInitialized;
function ErrorType_initEntries() {
  if (ErrorType_entriesInitialized)
    return Unit_instance;
  ErrorType_entriesInitialized = true;
  ErrorType_LEXICAL_instance = new ErrorType('LEXICAL', 0);
  ErrorType_SYNTAX_instance = new ErrorType('SYNTAX', 1);
  ErrorType_CODE_GENERATION_instance = new ErrorType('CODE_GENERATION', 2);
  ErrorType_RUNTIME_instance = new ErrorType('RUNTIME', 3);
  ErrorType_GENERAL_instance = new ErrorType('GENERAL', 4);
}
function ErrorType(name, ordinal) {
  Enum.call(this, name, ordinal);
}
var CompilationStage_LEXER_instance;
var CompilationStage_PARSER_instance;
var CompilationStage_CODE_GENERATOR_instance;
function values_0() {
  return [CompilationStage_LEXER_getInstance(), CompilationStage_PARSER_getInstance(), CompilationStage_CODE_GENERATOR_getInstance()];
}
function valueOf_0(value) {
  switch (value) {
    case 'LEXER':
      return CompilationStage_LEXER_getInstance();
    case 'PARSER':
      return CompilationStage_PARSER_getInstance();
    case 'CODE_GENERATOR':
      return CompilationStage_CODE_GENERATOR_getInstance();
    default:
      CompilationStage_initEntries();
      THROW_IAE('No enum constant value.');
      break;
  }
}
var CompilationStage_entriesInitialized;
function CompilationStage_initEntries() {
  if (CompilationStage_entriesInitialized)
    return Unit_instance;
  CompilationStage_entriesInitialized = true;
  CompilationStage_LEXER_instance = new CompilationStage('LEXER', 0);
  CompilationStage_PARSER_instance = new CompilationStage('PARSER', 1);
  CompilationStage_CODE_GENERATOR_instance = new CompilationStage('CODE_GENERATOR', 2);
}
function CompilationStage(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function _get_$cachedSerializer__te6jhj($this) {
  return $this.js_1.f1();
}
function CompilationOutput$Companion$_anonymous__cqw10r() {
  var tmp = getKClass(CompilationOutput);
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = [getKClass(CodeGeneratorOutput), getKClass(LexerOutput), getKClass(ParserOutput)];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = [$serializer_getInstance_1(), $serializer_getInstance(), $serializer_getInstance_0()];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$8 = [];
  return SealedClassSerializer_init_$Create$('org.example.CompilationOutput', tmp, tmp_0, tmp_1, tmp$ret$8);
}
function Companion() {
  Companion_instance = this;
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  tmp.js_1 = lazy(tmp_0, CompilationOutput$Companion$_anonymous__cqw10r);
}
protoOf(Companion).np = function () {
  return _get_$cachedSerializer__te6jhj(this);
};
protoOf(Companion).ik = function (typeParamsSerializers) {
  return this.np();
};
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
function CompilationOutput() {
  Companion_getInstance();
}
function LexerOutput$Companion$$childSerializers$_anonymous__tpq9tp() {
  return createSimpleEnumSerializer('org.example.CompilationStage', values_0());
}
function LexerOutput$Companion$$childSerializers$_anonymous__tpq9tp_0() {
  return new ReferenceArraySerializer(getKClass(CompilationError), $serializer_getInstance_2());
}
function Companion_0() {
  Companion_instance_0 = this;
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  var tmp_1 = lazy(tmp_0, LexerOutput$Companion$$childSerializers$_anonymous__tpq9tp);
  var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.ms_1 = [tmp_1, null, lazy(tmp_2, LexerOutput$Companion$$childSerializers$_anonymous__tpq9tp_0)];
}
protoOf(Companion_0).np = function () {
  return $serializer_getInstance();
};
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function $serializer() {
  $serializer_instance = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('org.example.LexerOutput', this, 3);
  tmp0_serialDesc.ij('stage', true);
  tmp0_serialDesc.ij('tokens', true);
  tmp0_serialDesc.ij('errors', false);
  this.ns_1 = tmp0_serialDesc;
}
protoOf($serializer).os = function (encoder, value) {
  var tmp0_desc = this.ns_1;
  var tmp1_output = encoder.re(tmp0_desc);
  var tmp2_cached = Companion_getInstance_0().ms_1;
  if (tmp1_output.yf(tmp0_desc, 0) ? true : !value.ps_1.equals(CompilationStage_LEXER_getInstance())) {
    tmp1_output.rf(tmp0_desc, 0, tmp2_cached[0].f1(), value.ps_1);
  }
  if (tmp1_output.yf(tmp0_desc, 1) ? true : !(value.tokens == null)) {
    tmp1_output.tf(tmp0_desc, 1, StringSerializer_getInstance(), value.tokens);
  }
  tmp1_output.rf(tmp0_desc, 2, tmp2_cached[2].f1(), value.qs_1);
  tmp1_output.se(tmp0_desc);
};
protoOf($serializer).ec = function (encoder, value) {
  return this.os(encoder, value instanceof LexerOutput ? value : THROW_CCE());
};
protoOf($serializer).dc = function () {
  return this.ns_1;
};
protoOf($serializer).xj = function () {
  var tmp0_cached = Companion_getInstance_0().ms_1;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [tmp0_cached[0].f1(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].f1()];
};
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance == null)
    new $serializer();
  return $serializer_instance;
}
function LexerOutput(stage, tokens, errors) {
  Companion_getInstance_0();
  stage = stage === VOID ? CompilationStage_LEXER_getInstance() : stage;
  tokens = tokens === VOID ? null : tokens;
  CompilationOutput.call(this);
  this.ps_1 = stage;
  this.tokens = tokens;
  this.qs_1 = errors;
}
protoOf(LexerOutput).ks = function () {
  return this.ps_1;
};
protoOf(LexerOutput).rs = function () {
  return this.tokens;
};
protoOf(LexerOutput).ls = function () {
  return this.qs_1;
};
protoOf(LexerOutput).d9 = function () {
  return this.ps_1;
};
protoOf(LexerOutput).e9 = function () {
  return this.tokens;
};
protoOf(LexerOutput).ss = function () {
  return this.qs_1;
};
protoOf(LexerOutput).ts = function (stage, tokens, errors) {
  return new LexerOutput(stage, tokens, errors);
};
protoOf(LexerOutput).copy = function (stage, tokens, errors, $super) {
  stage = stage === VOID ? this.ps_1 : stage;
  tokens = tokens === VOID ? this.tokens : tokens;
  errors = errors === VOID ? this.qs_1 : errors;
  return $super === VOID ? this.ts(stage, tokens, errors) : $super.ts.call(this, stage, tokens, errors);
};
protoOf(LexerOutput).toString = function () {
  return 'LexerOutput(stage=' + this.ps_1.toString() + ', tokens=' + this.tokens + ', errors=' + toString(this.qs_1) + ')';
};
protoOf(LexerOutput).hashCode = function () {
  var result = this.ps_1.hashCode();
  result = imul(result, 31) + (this.tokens == null ? 0 : getStringHashCode(this.tokens)) | 0;
  result = imul(result, 31) + hashCode(this.qs_1) | 0;
  return result;
};
protoOf(LexerOutput).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof LexerOutput))
    return false;
  var tmp0_other_with_cast = other instanceof LexerOutput ? other : THROW_CCE();
  if (!this.ps_1.equals(tmp0_other_with_cast.ps_1))
    return false;
  if (!(this.tokens == tmp0_other_with_cast.tokens))
    return false;
  if (!equals(this.qs_1, tmp0_other_with_cast.qs_1))
    return false;
  return true;
};
function ParserOutput$Companion$$childSerializers$_anonymous__j5vpre() {
  return createSimpleEnumSerializer('org.example.CompilationStage', values_0());
}
function ParserOutput$Companion$$childSerializers$_anonymous__j5vpre_0() {
  return new ReferenceArraySerializer(getKClass(CompilationError), $serializer_getInstance_2());
}
function Companion_1() {
  Companion_instance_1 = this;
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  var tmp_1 = lazy(tmp_0, ParserOutput$Companion$$childSerializers$_anonymous__j5vpre);
  var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.us_1 = [tmp_1, null, lazy(tmp_2, ParserOutput$Companion$$childSerializers$_anonymous__j5vpre_0)];
}
protoOf(Companion_1).np = function () {
  return $serializer_getInstance_0();
};
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function $serializer_0() {
  $serializer_instance_0 = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('org.example.ParserOutput', this, 3);
  tmp0_serialDesc.ij('stage', true);
  tmp0_serialDesc.ij('ast', true);
  tmp0_serialDesc.ij('errors', false);
  this.vs_1 = tmp0_serialDesc;
}
protoOf($serializer_0).ws = function (encoder, value) {
  var tmp0_desc = this.vs_1;
  var tmp1_output = encoder.re(tmp0_desc);
  var tmp2_cached = Companion_getInstance_1().us_1;
  if (tmp1_output.yf(tmp0_desc, 0) ? true : !value.xs_1.equals(CompilationStage_PARSER_getInstance())) {
    tmp1_output.rf(tmp0_desc, 0, tmp2_cached[0].f1(), value.xs_1);
  }
  if (tmp1_output.yf(tmp0_desc, 1) ? true : !(value.ast == null)) {
    tmp1_output.tf(tmp0_desc, 1, StringSerializer_getInstance(), value.ast);
  }
  tmp1_output.rf(tmp0_desc, 2, tmp2_cached[2].f1(), value.ys_1);
  tmp1_output.se(tmp0_desc);
};
protoOf($serializer_0).ec = function (encoder, value) {
  return this.ws(encoder, value instanceof ParserOutput ? value : THROW_CCE());
};
protoOf($serializer_0).dc = function () {
  return this.vs_1;
};
protoOf($serializer_0).xj = function () {
  var tmp0_cached = Companion_getInstance_1().us_1;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [tmp0_cached[0].f1(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].f1()];
};
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 == null)
    new $serializer_0();
  return $serializer_instance_0;
}
function ParserOutput(stage, ast, errors) {
  Companion_getInstance_1();
  stage = stage === VOID ? CompilationStage_PARSER_getInstance() : stage;
  ast = ast === VOID ? null : ast;
  CompilationOutput.call(this);
  this.xs_1 = stage;
  this.ast = ast;
  this.ys_1 = errors;
}
protoOf(ParserOutput).ks = function () {
  return this.xs_1;
};
protoOf(ParserOutput).zs = function () {
  return this.ast;
};
protoOf(ParserOutput).ls = function () {
  return this.ys_1;
};
protoOf(ParserOutput).d9 = function () {
  return this.xs_1;
};
protoOf(ParserOutput).e9 = function () {
  return this.ast;
};
protoOf(ParserOutput).ss = function () {
  return this.ys_1;
};
protoOf(ParserOutput).ts = function (stage, ast, errors) {
  return new ParserOutput(stage, ast, errors);
};
protoOf(ParserOutput).copy = function (stage, ast, errors, $super) {
  stage = stage === VOID ? this.xs_1 : stage;
  ast = ast === VOID ? this.ast : ast;
  errors = errors === VOID ? this.ys_1 : errors;
  return $super === VOID ? this.ts(stage, ast, errors) : $super.ts.call(this, stage, ast, errors);
};
protoOf(ParserOutput).toString = function () {
  return 'ParserOutput(stage=' + this.xs_1.toString() + ', ast=' + this.ast + ', errors=' + toString(this.ys_1) + ')';
};
protoOf(ParserOutput).hashCode = function () {
  var result = this.xs_1.hashCode();
  result = imul(result, 31) + (this.ast == null ? 0 : getStringHashCode(this.ast)) | 0;
  result = imul(result, 31) + hashCode(this.ys_1) | 0;
  return result;
};
protoOf(ParserOutput).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ParserOutput))
    return false;
  var tmp0_other_with_cast = other instanceof ParserOutput ? other : THROW_CCE();
  if (!this.xs_1.equals(tmp0_other_with_cast.xs_1))
    return false;
  if (!(this.ast == tmp0_other_with_cast.ast))
    return false;
  if (!equals(this.ys_1, tmp0_other_with_cast.ys_1))
    return false;
  return true;
};
function CodeGeneratorOutput$Companion$$childSerializers$_anonymous__ixgxb1() {
  return createSimpleEnumSerializer('org.example.CompilationStage', values_0());
}
function CodeGeneratorOutput$Companion$$childSerializers$_anonymous__ixgxb1_0() {
  return new ReferenceArraySerializer(getKClass(CompilationError), $serializer_getInstance_2());
}
function Companion_2() {
  Companion_instance_2 = this;
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  var tmp_1 = lazy(tmp_0, CodeGeneratorOutput$Companion$$childSerializers$_anonymous__ixgxb1);
  var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.at_1 = [tmp_1, null, lazy(tmp_2, CodeGeneratorOutput$Companion$$childSerializers$_anonymous__ixgxb1_0)];
}
protoOf(Companion_2).np = function () {
  return $serializer_getInstance_1();
};
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 == null)
    new Companion_2();
  return Companion_instance_2;
}
function $serializer_1() {
  $serializer_instance_1 = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('org.example.CodeGeneratorOutput', this, 3);
  tmp0_serialDesc.ij('stage', true);
  tmp0_serialDesc.ij('assembly', true);
  tmp0_serialDesc.ij('errors', false);
  this.bt_1 = tmp0_serialDesc;
}
protoOf($serializer_1).ct = function (encoder, value) {
  var tmp0_desc = this.bt_1;
  var tmp1_output = encoder.re(tmp0_desc);
  var tmp2_cached = Companion_getInstance_2().at_1;
  if (tmp1_output.yf(tmp0_desc, 0) ? true : !value.dt_1.equals(CompilationStage_CODE_GENERATOR_getInstance())) {
    tmp1_output.rf(tmp0_desc, 0, tmp2_cached[0].f1(), value.dt_1);
  }
  if (tmp1_output.yf(tmp0_desc, 1) ? true : !(value.assembly == null)) {
    tmp1_output.tf(tmp0_desc, 1, StringSerializer_getInstance(), value.assembly);
  }
  tmp1_output.rf(tmp0_desc, 2, tmp2_cached[2].f1(), value.et_1);
  tmp1_output.se(tmp0_desc);
};
protoOf($serializer_1).ec = function (encoder, value) {
  return this.ct(encoder, value instanceof CodeGeneratorOutput ? value : THROW_CCE());
};
protoOf($serializer_1).dc = function () {
  return this.bt_1;
};
protoOf($serializer_1).xj = function () {
  var tmp0_cached = Companion_getInstance_2().at_1;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [tmp0_cached[0].f1(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].f1()];
};
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 == null)
    new $serializer_1();
  return $serializer_instance_1;
}
function CodeGeneratorOutput(stage, assembly, errors) {
  Companion_getInstance_2();
  stage = stage === VOID ? CompilationStage_CODE_GENERATOR_getInstance() : stage;
  assembly = assembly === VOID ? null : assembly;
  CompilationOutput.call(this);
  this.dt_1 = stage;
  this.assembly = assembly;
  this.et_1 = errors;
}
protoOf(CodeGeneratorOutput).ks = function () {
  return this.dt_1;
};
protoOf(CodeGeneratorOutput).ft = function () {
  return this.assembly;
};
protoOf(CodeGeneratorOutput).ls = function () {
  return this.et_1;
};
protoOf(CodeGeneratorOutput).d9 = function () {
  return this.dt_1;
};
protoOf(CodeGeneratorOutput).e9 = function () {
  return this.assembly;
};
protoOf(CodeGeneratorOutput).ss = function () {
  return this.et_1;
};
protoOf(CodeGeneratorOutput).ts = function (stage, assembly, errors) {
  return new CodeGeneratorOutput(stage, assembly, errors);
};
protoOf(CodeGeneratorOutput).copy = function (stage, assembly, errors, $super) {
  stage = stage === VOID ? this.dt_1 : stage;
  assembly = assembly === VOID ? this.assembly : assembly;
  errors = errors === VOID ? this.et_1 : errors;
  return $super === VOID ? this.ts(stage, assembly, errors) : $super.ts.call(this, stage, assembly, errors);
};
protoOf(CodeGeneratorOutput).toString = function () {
  return 'CodeGeneratorOutput(stage=' + this.dt_1.toString() + ', assembly=' + this.assembly + ', errors=' + toString(this.et_1) + ')';
};
protoOf(CodeGeneratorOutput).hashCode = function () {
  var result = this.dt_1.hashCode();
  result = imul(result, 31) + (this.assembly == null ? 0 : getStringHashCode(this.assembly)) | 0;
  result = imul(result, 31) + hashCode(this.et_1) | 0;
  return result;
};
protoOf(CodeGeneratorOutput).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CodeGeneratorOutput))
    return false;
  var tmp0_other_with_cast = other instanceof CodeGeneratorOutput ? other : THROW_CCE();
  if (!this.dt_1.equals(tmp0_other_with_cast.dt_1))
    return false;
  if (!(this.assembly == tmp0_other_with_cast.assembly))
    return false;
  if (!equals(this.et_1, tmp0_other_with_cast.et_1))
    return false;
  return true;
};
function CompilationError$Companion$$childSerializers$_anonymous__dhlpln() {
  return createSimpleEnumSerializer('org.example.ErrorType', values());
}
function Companion_3() {
  Companion_instance_3 = this;
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.gt_1 = [lazy(tmp_0, CompilationError$Companion$$childSerializers$_anonymous__dhlpln), null, null, null];
}
protoOf(Companion_3).np = function () {
  return $serializer_getInstance_2();
};
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 == null)
    new Companion_3();
  return Companion_instance_3;
}
function $serializer_2() {
  $serializer_instance_2 = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('org.example.CompilationError', this, 4);
  tmp0_serialDesc.ij('type', false);
  tmp0_serialDesc.ij('message', false);
  tmp0_serialDesc.ij('line', false);
  tmp0_serialDesc.ij('column', false);
  this.ht_1 = tmp0_serialDesc;
}
protoOf($serializer_2).it = function (encoder, value) {
  var tmp0_desc = this.ht_1;
  var tmp1_output = encoder.re(tmp0_desc);
  var tmp2_cached = Companion_getInstance_3().gt_1;
  tmp1_output.rf(tmp0_desc, 0, tmp2_cached[0].f1(), value.type);
  tmp1_output.pf(tmp0_desc, 1, value.message);
  tmp1_output.kf(tmp0_desc, 2, value.line);
  tmp1_output.kf(tmp0_desc, 3, value.column);
  tmp1_output.se(tmp0_desc);
};
protoOf($serializer_2).ec = function (encoder, value) {
  return this.it(encoder, value instanceof CompilationError ? value : THROW_CCE());
};
protoOf($serializer_2).dc = function () {
  return this.ht_1;
};
protoOf($serializer_2).xj = function () {
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [Companion_getInstance_3().gt_1[0].f1(), StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
};
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 == null)
    new $serializer_2();
  return $serializer_instance_2;
}
function CompilationError(type, message, line, column) {
  Companion_getInstance_3();
  this.type = type;
  this.message = message;
  this.line = line;
  this.column = column;
}
protoOf(CompilationError).jt = function () {
  return this.type;
};
protoOf(CompilationError).p6 = function () {
  return this.message;
};
protoOf(CompilationError).kt = function () {
  return this.line;
};
protoOf(CompilationError).lt = function () {
  return this.column;
};
protoOf(CompilationError).d9 = function () {
  return this.type;
};
protoOf(CompilationError).e9 = function () {
  return this.message;
};
protoOf(CompilationError).ss = function () {
  return this.line;
};
protoOf(CompilationError).mt = function () {
  return this.column;
};
protoOf(CompilationError).nt = function (type, message, line, column) {
  return new CompilationError(type, message, line, column);
};
protoOf(CompilationError).copy = function (type, message, line, column, $super) {
  type = type === VOID ? this.type : type;
  message = message === VOID ? this.message : message;
  line = line === VOID ? this.line : line;
  column = column === VOID ? this.column : column;
  return $super === VOID ? this.nt(type, message, line, column) : $super.nt.call(this, type, message, line, column);
};
protoOf(CompilationError).toString = function () {
  return 'CompilationError(type=' + this.type.toString() + ', message=' + this.message + ', line=' + this.line + ', column=' + this.column + ')';
};
protoOf(CompilationError).hashCode = function () {
  var result = this.type.hashCode();
  result = imul(result, 31) + getStringHashCode(this.message) | 0;
  result = imul(result, 31) + this.line | 0;
  result = imul(result, 31) + this.column | 0;
  return result;
};
protoOf(CompilationError).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CompilationError))
    return false;
  var tmp0_other_with_cast = other instanceof CompilationError ? other : THROW_CCE();
  if (!this.type.equals(tmp0_other_with_cast.type))
    return false;
  if (!(this.message === tmp0_other_with_cast.message))
    return false;
  if (!(this.line === tmp0_other_with_cast.line))
    return false;
  if (!(this.column === tmp0_other_with_cast.column))
    return false;
  return true;
};
function CompilationResult$Companion$$childSerializers$_anonymous__ofek46() {
  return new ReferenceArraySerializer(getKClass(CompilationOutput), Companion_getInstance().np());
}
function CompilationResult$Companion$$childSerializers$_anonymous__ofek46_0() {
  return new ReferenceArraySerializer(getKClass(CompilationError), $serializer_getInstance_2());
}
function Companion_4() {
  Companion_instance_4 = this;
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  var tmp_1 = lazy(tmp_0, CompilationResult$Companion$$childSerializers$_anonymous__ofek46);
  var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.ot_1 = [tmp_1, null, lazy(tmp_2, CompilationResult$Companion$$childSerializers$_anonymous__ofek46_0)];
}
protoOf(Companion_4).np = function () {
  return $serializer_getInstance_3();
};
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 == null)
    new Companion_4();
  return Companion_instance_4;
}
function $serializer_3() {
  $serializer_instance_3 = this;
  var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('org.example.CompilationResult', this, 3);
  tmp0_serialDesc.ij('outputs', false);
  tmp0_serialDesc.ij('overallSuccess', false);
  tmp0_serialDesc.ij('overallErrors', false);
  this.pt_1 = tmp0_serialDesc;
}
protoOf($serializer_3).qt = function (encoder, value) {
  var tmp0_desc = this.pt_1;
  var tmp1_output = encoder.re(tmp0_desc);
  var tmp2_cached = Companion_getInstance_4().ot_1;
  tmp1_output.rf(tmp0_desc, 0, tmp2_cached[0].f1(), value.outputs);
  tmp1_output.hf(tmp0_desc, 1, value.overallSuccess);
  tmp1_output.rf(tmp0_desc, 2, tmp2_cached[2].f1(), value.overallErrors);
  tmp1_output.se(tmp0_desc);
};
protoOf($serializer_3).ec = function (encoder, value) {
  return this.qt(encoder, value instanceof CompilationResult ? value : THROW_CCE());
};
protoOf($serializer_3).dc = function () {
  return this.pt_1;
};
protoOf($serializer_3).xj = function () {
  var tmp0_cached = Companion_getInstance_4().ot_1;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return [tmp0_cached[0].f1(), BooleanSerializer_getInstance(), tmp0_cached[2].f1()];
};
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 == null)
    new $serializer_3();
  return $serializer_instance_3;
}
function CompilationResult(outputs, overallSuccess, overallErrors) {
  Companion_getInstance_4();
  this.outputs = outputs;
  this.overallSuccess = overallSuccess;
  this.overallErrors = overallErrors;
}
protoOf(CompilationResult).rt = function () {
  return this.outputs;
};
protoOf(CompilationResult).st = function () {
  return this.overallSuccess;
};
protoOf(CompilationResult).tt = function () {
  return this.overallErrors;
};
protoOf(CompilationResult).toJsonString = function () {
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(CompilationResult), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, this);
};
protoOf(CompilationResult).d9 = function () {
  return this.outputs;
};
protoOf(CompilationResult).e9 = function () {
  return this.overallSuccess;
};
protoOf(CompilationResult).ss = function () {
  return this.overallErrors;
};
protoOf(CompilationResult).ut = function (outputs, overallSuccess, overallErrors) {
  return new CompilationResult(outputs, overallSuccess, overallErrors);
};
protoOf(CompilationResult).copy = function (outputs, overallSuccess, overallErrors, $super) {
  outputs = outputs === VOID ? this.outputs : outputs;
  overallSuccess = overallSuccess === VOID ? this.overallSuccess : overallSuccess;
  overallErrors = overallErrors === VOID ? this.overallErrors : overallErrors;
  return $super === VOID ? this.ut(outputs, overallSuccess, overallErrors) : $super.ut.call(this, outputs, overallSuccess, overallErrors);
};
protoOf(CompilationResult).toString = function () {
  return 'CompilationResult(outputs=' + toString(this.outputs) + ', overallSuccess=' + this.overallSuccess + ', overallErrors=' + toString(this.overallErrors) + ')';
};
protoOf(CompilationResult).hashCode = function () {
  var result = hashCode(this.outputs);
  result = imul(result, 31) + getBooleanHashCode(this.overallSuccess) | 0;
  result = imul(result, 31) + hashCode(this.overallErrors) | 0;
  return result;
};
protoOf(CompilationResult).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CompilationResult))
    return false;
  var tmp0_other_with_cast = other instanceof CompilationResult ? other : THROW_CCE();
  if (!equals(this.outputs, tmp0_other_with_cast.outputs))
    return false;
  if (!(this.overallSuccess === tmp0_other_with_cast.overallSuccess))
    return false;
  if (!equals(this.overallErrors, tmp0_other_with_cast.overallErrors))
    return false;
  return true;
};
function ErrorType_LEXICAL_getInstance() {
  ErrorType_initEntries();
  return ErrorType_LEXICAL_instance;
}
function ErrorType_SYNTAX_getInstance() {
  ErrorType_initEntries();
  return ErrorType_SYNTAX_instance;
}
function ErrorType_CODE_GENERATION_getInstance() {
  ErrorType_initEntries();
  return ErrorType_CODE_GENERATION_instance;
}
function ErrorType_RUNTIME_getInstance() {
  ErrorType_initEntries();
  return ErrorType_RUNTIME_instance;
}
function ErrorType_GENERAL_getInstance() {
  ErrorType_initEntries();
  return ErrorType_GENERAL_instance;
}
function CompilationStage_LEXER_getInstance() {
  CompilationStage_initEntries();
  return CompilationStage_LEXER_instance;
}
function CompilationStage_PARSER_getInstance() {
  CompilationStage_initEntries();
  return CompilationStage_PARSER_instance;
}
function CompilationStage_CODE_GENERATOR_getInstance() {
  CompilationStage_initEntries();
  return CompilationStage_CODE_GENERATOR_instance;
}
function CompilerExport() {
}
protoOf(CompilerExport).exportCompilationResults = function (code) {
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.isEmpty' call
  var this_0 = toString(trim(isCharSequence(code) ? code : THROW_CCE()));
  if (charSequenceLength(this_0) === 0) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$2 = [];
    var tmp = new LexerOutput(VOID, VOID, tmp$ret$2);
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$3 = [];
    var tmp_0 = new ParserOutput(VOID, VOID, tmp$ret$3);
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$4 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [tmp, tmp_0, new CodeGeneratorOutput(VOID, VOID, tmp$ret$4)];
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$8 = [];
    var result = new CompilationResult(tmp_1, true, tmp$ret$8);
    return result.toJsonString();
  }
  // Inline function 'kotlin.collections.mutableListOf' call
  var outputs = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.mutableListOf' call
  var overallErrors = ArrayList_init_$Create$();
  var tokens = null;
  var ast = null;
  var tmp_2;
  try {
    var lexer = new Lexer(code);
    tokens = lexer.cu();
    var tmp_3 = lexer.du();
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$11 = [];
    tmp_2 = new LexerOutput(VOID, tmp_3, tmp$ret$11);
  } catch ($p) {
    var tmp_4;
    if ($p instanceof Exception) {
      var e = $p;
      var tmp_5 = ErrorType_LEXICAL_getInstance();
      var tmp0_elvis_lhs = e.message;
      var error = new CompilationError(tmp_5, tmp0_elvis_lhs == null ? 'Unknown lexical error' : tmp0_elvis_lhs, -1, -1);
      overallErrors.d(error);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$14 = [error];
      tmp_4 = new LexerOutput(VOID, VOID, tmp$ret$14);
    } else {
      throw $p;
    }
    tmp_2 = tmp_4;
  }
  var lexerOutput = tmp_2;
  outputs.d(lexerOutput);
  var tmp_6;
  var tmp_7;
  // Inline function 'kotlin.collections.isEmpty' call
  if (lexerOutput.qs_1.length === 0) {
    tmp_7 = !(tokens == null);
  } else {
    tmp_7 = false;
  }
  if (tmp_7) {
    var tmp_8;
    try {
      var parser = new Parser();
      ast = parser.fu(tokens);
      // Inline function 'kotlin.emptyArray' call
      var tmp1_errors = [];
      var tmp2_ast = ast.du();
      tmp_8 = new ParserOutput(VOID, tmp2_ast, tmp1_errors);
    } catch ($p) {
      var tmp_9;
      if ($p instanceof SyntaxError) {
        var e_0 = $p;
        var tmp_10 = ErrorType_SYNTAX_getInstance();
        var tmp3_elvis_lhs = e_0.message;
        var tmp_11 = tmp3_elvis_lhs == null ? 'Unknown syntax error' : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = e_0.gu_1;
        var tmp_12 = tmp4_elvis_lhs == null ? -1 : tmp4_elvis_lhs;
        var tmp5_elvis_lhs = e_0.hu_1;
        var error_0 = new CompilationError(tmp_10, tmp_11, tmp_12, tmp5_elvis_lhs == null ? -1 : tmp5_elvis_lhs);
        overallErrors.d(error_0);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$19 = [error_0];
        tmp_9 = new ParserOutput(VOID, VOID, tmp$ret$19);
      } else {
        throw $p;
      }
      tmp_8 = tmp_9;
    }
    tmp_6 = tmp_8;
  } else {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$20 = [];
    tmp_6 = new ParserOutput(VOID, VOID, tmp$ret$20);
  }
  var parserOutput = tmp_6;
  outputs.d(parserOutput);
  var tmp_13;
  var tmp_14;
  // Inline function 'kotlin.collections.isEmpty' call
  if (parserOutput.ys_1.length === 0) {
    tmp_14 = !(ast == null);
  } else {
    tmp_14 = false;
  }
  if (tmp_14) {
    var tmp_15;
    try {
      var codeGenerator = new CodeGenerator();
      var asm = codeGenerator.iu(ast instanceof SimpleProgram ? ast : THROW_CCE());
      // Inline function 'kotlin.emptyArray' call
      var tmp6_errors = [];
      var tmp7_assembly = asm.ju();
      tmp_15 = new CodeGeneratorOutput(VOID, tmp7_assembly, tmp6_errors);
    } catch ($p) {
      var tmp_16;
      if ($p instanceof Exception) {
        var e_1 = $p;
        var tmp_17 = ErrorType_CODE_GENERATION_getInstance();
        var tmp8_elvis_lhs = e_1.message;
        var error_1 = new CompilationError(tmp_17, tmp8_elvis_lhs == null ? 'Unknown code generation error' : tmp8_elvis_lhs, -1, -1);
        overallErrors.d(error_1);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$25 = [error_1];
        tmp_16 = new CodeGeneratorOutput(VOID, VOID, tmp$ret$25);
      } else {
        throw $p;
      }
      tmp_15 = tmp_16;
    }
    tmp_13 = tmp_15;
  } else {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$26 = [];
    tmp_13 = new CodeGeneratorOutput(VOID, VOID, tmp$ret$26);
  }
  var codeGeneratorOutput = tmp_13;
  outputs.d(codeGeneratorOutput);
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp_18 = copyToArray(outputs);
  var tmp_19 = overallErrors.n();
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp$ret$28 = copyToArray(overallErrors);
  var result_0 = new CompilationResult(tmp_18, tmp_19, tmp$ret$28);
  return result_0.toJsonString();
};
function AsmConstruct() {
}
protoOf(AsmConstruct).ju = function (indentationLevel, $super) {
  indentationLevel = indentationLevel === VOID ? 0 : indentationLevel;
  return $super === VOID ? this.ku(indentationLevel) : $super.ku.call(this, indentationLevel);
};
protoOf(AsmConstruct).lu = function (level) {
  return repeat('  ', level);
};
function generateFunction($this, func) {
  if (func instanceof SimpleFunction) {
    var bodyInstructions = generateInstructions($this, func.nu_1);
    return new AsmFunction(func.mu_1.ou_1, bodyInstructions);
  } else {
    noWhenBranchMatchedException();
  }
}
function generateInstructions($this, body) {
  if (body instanceof ReturnStatement)
    return generateReturn($this, body.pu_1);
  else {
    noWhenBranchMatchedException();
  }
}
function generateReturn($this, expression) {
  if (expression instanceof IntExpression) {
    var imm = new Imm(expression.qu_1);
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
protoOf(CodeGenerator).iu = function (program) {
  if (program instanceof SimpleProgram) {
    var asmFunction = generateFunction(this, program.ru_1);
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
    return it.ku($indentationLevel + 1 | 0);
  };
}
function AsmFunction(name, body) {
  Function.call(this);
  this.su_1 = name;
  this.tu_1 = body;
}
protoOf(AsmFunction).ku = function (indentationLevel) {
  var bodyAsm = joinToString(this.tu_1, '\n', VOID, VOID, VOID, VOID, AsmFunction$toAsm$lambda(indentationLevel));
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = this.lu(indentationLevel + 1 | 0) + '.globl ' + this.su_1;
  // Inline function 'kotlin.text.appendLine' call
  this_0.f6(value).g6(_Char___init__impl__6a9atx(10));
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = this.lu(indentationLevel) + this.su_1 + ':';
  // Inline function 'kotlin.text.appendLine' call
  this_0.f6(value_0).g6(_Char___init__impl__6a9atx(10));
  this_0.f6(bodyAsm);
  return this_0.toString();
};
protoOf(AsmFunction).toString = function () {
  return 'AsmFunction(name=' + this.su_1 + ', body=' + toString(this.tu_1) + ')';
};
protoOf(AsmFunction).hashCode = function () {
  var result = getStringHashCode(this.su_1);
  result = imul(result, 31) + hashCode(this.tu_1) | 0;
  return result;
};
protoOf(AsmFunction).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof AsmFunction))
    return false;
  var tmp0_other_with_cast = other instanceof AsmFunction ? other : THROW_CCE();
  if (!(this.su_1 === tmp0_other_with_cast.su_1))
    return false;
  if (!equals(this.tu_1, tmp0_other_with_cast.tu_1))
    return false;
  return true;
};
function Instruction() {
  AsmConstruct.call(this);
}
function Ret() {
  Instruction.call(this);
}
protoOf(Ret).ku = function (indentationLevel) {
  return this.lu(indentationLevel) + 'ret';
};
function Mov(src, dest, line, column) {
  line = line === VOID ? 0 : line;
  column = column === VOID ? 0 : column;
  Instruction.call(this);
  this.uu_1 = src;
  this.vu_1 = dest;
  this.wu_1 = line;
  this.xu_1 = column;
}
protoOf(Mov).ku = function (indentationLevel) {
  return this.lu(indentationLevel) + 'movl ' + this.uu_1.ju() + ', ' + this.vu_1.ju();
};
protoOf(Mov).toString = function () {
  return 'Mov(src=' + toString(this.uu_1) + ', dest=' + toString(this.vu_1) + ', line=' + this.wu_1 + ', column=' + this.xu_1 + ')';
};
protoOf(Mov).hashCode = function () {
  var result = hashCode(this.uu_1);
  result = imul(result, 31) + hashCode(this.vu_1) | 0;
  result = imul(result, 31) + this.wu_1 | 0;
  result = imul(result, 31) + this.xu_1 | 0;
  return result;
};
protoOf(Mov).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Mov))
    return false;
  var tmp0_other_with_cast = other instanceof Mov ? other : THROW_CCE();
  if (!equals(this.uu_1, tmp0_other_with_cast.uu_1))
    return false;
  if (!equals(this.vu_1, tmp0_other_with_cast.vu_1))
    return false;
  if (!(this.wu_1 === tmp0_other_with_cast.wu_1))
    return false;
  if (!(this.xu_1 === tmp0_other_with_cast.xu_1))
    return false;
  return true;
};
function Operand() {
  AsmConstruct.call(this);
}
function Imm(value) {
  Operand.call(this);
  this.yu_1 = value;
}
protoOf(Imm).ku = function (indentationLevel) {
  return this.lu(indentationLevel) + this.yu_1;
};
protoOf(Imm).toString = function () {
  return 'Imm(value=' + this.yu_1 + ')';
};
protoOf(Imm).hashCode = function () {
  return this.yu_1;
};
protoOf(Imm).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Imm))
    return false;
  var tmp0_other_with_cast = other instanceof Imm ? other : THROW_CCE();
  if (!(this.yu_1 === tmp0_other_with_cast.yu_1))
    return false;
  return true;
};
function Register(name) {
  Operand.call(this);
  this.zu_1 = name;
}
protoOf(Register).ku = function (indentationLevel) {
  return this.lu(indentationLevel) + this.zu_1;
};
protoOf(Register).toString = function () {
  return 'Register(name=' + this.zu_1 + ')';
};
protoOf(Register).hashCode = function () {
  return getStringHashCode(this.zu_1);
};
protoOf(Register).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Register))
    return false;
  var tmp0_other_with_cast = other instanceof Register ? other : THROW_CCE();
  if (!(this.zu_1 === tmp0_other_with_cast.zu_1))
    return false;
  return true;
};
function Program() {
  AsmConstruct.call(this);
}
function SimpleAsmProgram(function_0) {
  Program.call(this);
  this.av_1 = function_0;
}
protoOf(SimpleAsmProgram).ku = function (indentationLevel) {
  return this.av_1.ku(indentationLevel);
};
protoOf(SimpleAsmProgram).toString = function () {
  return 'SimpleAsmProgram(function=' + this.av_1.toString() + ')';
};
protoOf(SimpleAsmProgram).hashCode = function () {
  return this.av_1.hashCode();
};
protoOf(SimpleAsmProgram).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SimpleAsmProgram))
    return false;
  var tmp0_other_with_cast = other instanceof SimpleAsmProgram ? other : THROW_CCE();
  if (!this.av_1.equals(tmp0_other_with_cast.av_1))
    return false;
  return true;
};
function buildMessage($this, message, line, column) {
  return !(line == null) && !(column == null) ? 'Syntax error at line ' + line + ', column ' + column + ': ' + message : !(line == null) ? 'Syntax error at line ' + line + ': ' + message : 'Syntax error: ' + message;
}
function Companion_5() {
}
var Companion_instance_5;
function Companion_getInstance_5() {
  return Companion_instance_5;
}
function SyntaxError(message, line, column) {
  line = line === VOID ? null : line;
  column = column === VOID ? null : column;
  Exception_init_$Init$(buildMessage(Companion_instance_5, message, line, column), this);
  captureStack(this, SyntaxError);
  this.gu_1 = line;
  this.hu_1 = column;
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
  var tmp0_elvis_lhs = getKClassFromExpression(this).t6();
  return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
};
function Token(type, lexeme, line, column) {
  this.bv_1 = type;
  this.cv_1 = lexeme;
  this.dv_1 = line;
  this.ev_1 = column;
}
protoOf(Token).toString = function () {
  return 'Token(type=' + this.bv_1.toString() + ', lexeme=' + this.cv_1 + ', line=' + this.dv_1 + ', column=' + this.ev_1 + ')';
};
protoOf(Token).hashCode = function () {
  var result = hashCode(this.bv_1);
  result = imul(result, 31) + getStringHashCode(this.cv_1) | 0;
  result = imul(result, 31) + this.dv_1 | 0;
  result = imul(result, 31) + this.ev_1 | 0;
  return result;
};
protoOf(Token).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Token))
    return false;
  var tmp0_other_with_cast = other instanceof Token ? other : THROW_CCE();
  if (!equals(this.bv_1, tmp0_other_with_cast.bv_1))
    return false;
  if (!(this.cv_1 === tmp0_other_with_cast.cv_1))
    return false;
  if (!(this.dv_1 === tmp0_other_with_cast.dv_1))
    return false;
  if (!(this.ev_1 === tmp0_other_with_cast.ev_1))
    return false;
  return true;
};
function isAtEnd($this) {
  var tmp;
  if ($this.xt_1 >= $this.vt_1.length) {
    tmp = true;
  } else {
    tmp = false;
  }
  return tmp;
}
function advance($this) {
  var _unary__edvuaz = $this.xt_1;
  $this.xt_1 = _unary__edvuaz + 1 | 0;
  return charCodeAt($this.vt_1, _unary__edvuaz);
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
      $this.zt_1 = $this.zt_1 + 1 | 0;
      $this.au_1 = $this.xt_1;
    } else {
      if (isDigit($this, char)) {
        number($this);
      } else if (isAlphabetic($this, char)) {
        identifier($this);
      } else {
        println('Invalid character at line ' + $this.zt_1);
      }
    }
}
function identifier($this) {
  while (isAlphaNumeric($this, peek($this))) {
    advance($this);
  }
  var text = substring($this.vt_1, $this.yt_1, $this.xt_1);
  // Inline function 'kotlin.collections.get' call
  var this_0 = $this.bu_1;
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
  if (!(charCodeAt($this.vt_1, $this.xt_1) === expected))
    return false;
  $this.xt_1 = $this.xt_1 + 1 | 0;
  return true;
}
function peek($this) {
  return isAtEnd($this) ? _Char___init__impl__6a9atx(0) : charCodeAt($this.vt_1, $this.xt_1);
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
  var text = substring($this.vt_1, $this.yt_1, $this.xt_1);
  var column = ($this.yt_1 - $this.au_1 | 0) + 1 | 0;
  $this.wt_1.d(new Token(type, text, $this.zt_1, column));
}
function Lexer(source) {
  this.vt_1 = source;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.wt_1 = ArrayList_init_$Create$();
  this.xt_1 = 0;
  this.yt_1 = 0;
  this.zt_1 = 1;
  this.au_1 = 0;
  this.bu_1 = mapOf([to('int', KEYWORD_INT_getInstance()), to('void', KEYWORD_VOID_getInstance()), to('return', KEYWORD_RETURN_getInstance())]);
}
protoOf(Lexer).cu = function () {
  while (!isAtEnd(this)) {
    this.yt_1 = this.xt_1;
    scanToken(this);
  }
  this.wt_1.d(new Token(EOF_getInstance(), '', this.zt_1, (this.xt_1 - this.au_1 | 0) + 1 | 0));
  return this.wt_1;
};
protoOf(Lexer).du = function () {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.wt_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.i();
  while (_iterator__ex2g4s.j()) {
    var item = _iterator__ex2g4s.k();
    var tmp$ret$0 = new JsonObject(mapOf([to('line', JsonPrimitive(item.dv_1)), to('column', JsonPrimitive(item.ev_1)), to('type', JsonPrimitive_0(item.bv_1.toString())), to('lexeme', JsonPrimitive_0(item.cv_1))]));
    destination.d(tmp$ret$0);
  }
  var jsonTokens = destination;
  var tmp0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.encodeToString' call
  var value = new JsonArray(jsonTokens);
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = tmp0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonArray), arrayOf([]), false));
  var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return tmp0.po(tmp$ret$4, value);
};
function ASTNode() {
}
function Expression() {
  ASTNode.call(this);
}
function IntExpression(value) {
  Expression.call(this);
  this.qu_1 = value;
}
protoOf(IntExpression).du = function () {
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).t6())), to('label', JsonPrimitive(this.qu_1))]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, jsonNode);
};
protoOf(IntExpression).toString = function () {
  return 'IntExpression(value=' + this.qu_1 + ')';
};
protoOf(IntExpression).hashCode = function () {
  return this.qu_1;
};
protoOf(IntExpression).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof IntExpression))
    return false;
  var tmp0_other_with_cast = other instanceof IntExpression ? other : THROW_CCE();
  if (!(this.qu_1 === tmp0_other_with_cast.qu_1))
    return false;
  return true;
};
function UnaryExpression(operator, expression) {
  Expression.call(this);
  this.fv_1 = operator;
  this.gv_1 = expression;
}
protoOf(UnaryExpression).du = function () {
  var children = new JsonObject(mapOf([to('operator', JsonPrimitive_0(this.fv_1.toString())), to('expression', JsonPrimitive_0(this.gv_1.du()))]));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).t6())), to('label', JsonPrimitive_0('operator, expression')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, jsonNode);
};
protoOf(UnaryExpression).toString = function () {
  return 'UnaryExpression(operator=' + this.fv_1.toString() + ', expression=' + toString(this.gv_1) + ')';
};
protoOf(UnaryExpression).hashCode = function () {
  var result = this.fv_1.hashCode();
  result = imul(result, 31) + hashCode(this.gv_1) | 0;
  return result;
};
protoOf(UnaryExpression).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof UnaryExpression))
    return false;
  var tmp0_other_with_cast = other instanceof UnaryExpression ? other : THROW_CCE();
  if (!this.fv_1.equals(tmp0_other_with_cast.fv_1))
    return false;
  if (!equals(this.gv_1, tmp0_other_with_cast.gv_1))
    return false;
  return true;
};
function BinaryExpression(left, operator, right) {
  Expression.call(this);
  this.hv_1 = left;
  this.iv_1 = operator;
  this.jv_1 = right;
}
protoOf(BinaryExpression).du = function () {
  var children = new JsonObject(mapOf([to('left', JsonPrimitive_0(this.hv_1.du())), to('operator', JsonPrimitive_0(this.iv_1.toString())), to('right', JsonPrimitive_0(this.jv_1.du()))]));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).t6())), to('label', JsonPrimitive_0('operator, left, right')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, jsonNode);
};
protoOf(BinaryExpression).toString = function () {
  return 'BinaryExpression(left=' + toString(this.hv_1) + ', operator=' + this.iv_1.toString() + ', right=' + toString(this.jv_1) + ')';
};
protoOf(BinaryExpression).hashCode = function () {
  var result = hashCode(this.hv_1);
  result = imul(result, 31) + this.iv_1.hashCode() | 0;
  result = imul(result, 31) + hashCode(this.jv_1) | 0;
  return result;
};
protoOf(BinaryExpression).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BinaryExpression))
    return false;
  var tmp0_other_with_cast = other instanceof BinaryExpression ? other : THROW_CCE();
  if (!equals(this.hv_1, tmp0_other_with_cast.hv_1))
    return false;
  if (!this.iv_1.equals(tmp0_other_with_cast.iv_1))
    return false;
  if (!equals(this.jv_1, tmp0_other_with_cast.jv_1))
    return false;
  return true;
};
function FunctionDefinition() {
  ASTNode.call(this);
}
function SimpleFunction(name, body) {
  FunctionDefinition.call(this);
  this.mu_1 = name;
  this.nu_1 = body;
}
protoOf(SimpleFunction).du = function () {
  var children = new JsonObject(mapOf([to('name', JsonPrimitive_0(this.mu_1.du())), to('body', JsonPrimitive_0(this.nu_1.du()))]));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).t6())), to('label', JsonPrimitive_0("'main', body'")), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, jsonNode);
};
protoOf(SimpleFunction).toString = function () {
  return 'SimpleFunction(name=' + this.mu_1.toString() + ', body=' + toString(this.nu_1) + ')';
};
protoOf(SimpleFunction).hashCode = function () {
  var result = this.mu_1.hashCode();
  result = imul(result, 31) + hashCode(this.nu_1) | 0;
  return result;
};
protoOf(SimpleFunction).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SimpleFunction))
    return false;
  var tmp0_other_with_cast = other instanceof SimpleFunction ? other : THROW_CCE();
  if (!this.mu_1.equals(tmp0_other_with_cast.mu_1))
    return false;
  if (!equals(this.nu_1, tmp0_other_with_cast.nu_1))
    return false;
  return true;
};
function Identifier(value) {
  ASTNode.call(this);
  this.ou_1 = value;
}
protoOf(Identifier).du = function () {
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).t6())), to('label', JsonPrimitive_0(this.ou_1))]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, jsonNode);
};
protoOf(Identifier).toString = function () {
  return 'Identifier(value=' + this.ou_1 + ')';
};
protoOf(Identifier).hashCode = function () {
  return getStringHashCode(this.ou_1);
};
protoOf(Identifier).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Identifier))
    return false;
  var tmp0_other_with_cast = other instanceof Identifier ? other : THROW_CCE();
  if (!(this.ou_1 === tmp0_other_with_cast.ou_1))
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
  if (!equals(token.bv_1, expected)) {
    var tmp0_line = token.dv_1;
    var tmp1_column = token.ev_1;
    var tmp2_message = 'Expected token: ' + expected.toString() + ', got ' + token.bv_1.toString();
    throw new SyntaxError(tmp2_message, tmp0_line, tmp1_column);
  }
  return token;
}
function parseIdentifier($this, tokens) {
  var token = removeFirst(tokens);
  if (!equals(token.bv_1, IDENTIFIER_getInstance())) {
    var tmp0_line = token.dv_1;
    var tmp1_column = token.ev_1;
    var tmp2_message = 'Expected token: ' + IDENTIFIER_getInstance().toString() + ', got ' + token.bv_1.toString();
    throw new SyntaxError(tmp2_message, tmp0_line, tmp1_column);
  }
  return new Identifier(token.cv_1);
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
    if (!!tokens.n()) {
      break $l$loop_1;
    }
    var nextToken = first(tokens);
    var tmp0_elvis_lhs = $this.eu_1.h1(nextToken.bv_1);
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
  if (equals(nextToken.bv_1, INT_LITERAL_getInstance())) {
    nextToken = removeFirst(tokens);
    return new IntExpression(toInt(nextToken.cv_1));
  } else if (equals(nextToken.bv_1, TILDE_getInstance()) || equals(nextToken.bv_1, NEGATION_getInstance())) {
    var operator = removeFirst(tokens);
    var factor = parseFactor($this, tokens);
    return new UnaryExpression(operator, factor);
  } else if (equals(nextToken.bv_1, LEFT_PAREN_getInstance())) {
    expect($this, LEFT_PAREN_getInstance(), tokens);
    var expression = parseExpression($this, 45, tokens);
    expect($this, RIGHT_PAREN_getInstance(), tokens);
    return expression;
  } else {
    var nToken = removeFirst(tokens);
    var tmp0_line = nToken.dv_1;
    var tmp1_column = nToken.ev_1;
    var tmp2_message = "Unexpected token in expression: expected literal, unary operator, or '(', got " + nToken.bv_1.toString();
    throw new SyntaxError(tmp2_message, tmp0_line, tmp1_column);
  }
}
function Parser() {
  this.eu_1 = mapOf([to(PLUS_getInstance(), 45), to(NEGATION_getInstance(), 45), to(MULTIPLY_getInstance(), 50), to(DIVIDE_getInstance(), 50), to(REMAINDER_getInstance(), 50)]);
}
protoOf(Parser).fu = function (tokens) {
  var tokenSet = toMutableList(tokens);
  var ast = parseProgram(this, tokenSet);
  var lastToken = removeFirst(tokenSet);
  if (!equals(lastToken.bv_1, EOF_getInstance()) || !tokenSet.n()) {
    var tmp0_line = lastToken.dv_1;
    var tmp1_column = lastToken.ev_1;
    throw new SyntaxError('Expected end of file', tmp0_line, tmp1_column);
  }
  return ast;
};
function Program_0() {
  ASTNode.call(this);
}
function SimpleProgram(functionDefinition) {
  Program_0.call(this);
  this.ru_1 = functionDefinition;
}
protoOf(SimpleProgram).du = function () {
  var children = new JsonObject(mapOf_0(to('functionDefinition', JsonPrimitive_0(this.ru_1.du()))));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).t6())), to('label', JsonPrimitive_0('function definition')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, jsonNode);
};
protoOf(SimpleProgram).toString = function () {
  return 'SimpleProgram(functionDefinition=' + toString(this.ru_1) + ')';
};
protoOf(SimpleProgram).hashCode = function () {
  return hashCode(this.ru_1);
};
protoOf(SimpleProgram).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof SimpleProgram))
    return false;
  var tmp0_other_with_cast = other instanceof SimpleProgram ? other : THROW_CCE();
  if (!equals(this.ru_1, tmp0_other_with_cast.ru_1))
    return false;
  return true;
};
function Statement() {
  ASTNode.call(this);
}
function ReturnStatement(expression) {
  Statement.call(this);
  this.pu_1 = expression;
}
protoOf(ReturnStatement).du = function () {
  var children = new JsonObject(mapOf_0(to('expression', JsonPrimitive_0(this.pu_1.du()))));
  var jsonNode = new JsonObject(mapOf([to('type', JsonPrimitive_0(getKClassFromExpression(this).t6())), to('label', JsonPrimitive_0('return expression')), to('children', children)]));
  // Inline function 'kotlinx.serialization.encodeToString' call
  var this_0 = Default_getInstance();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.vf();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return this_0.po(tmp$ret$1, jsonNode);
};
protoOf(ReturnStatement).toString = function () {
  return 'ReturnStatement(expression=' + toString(this.pu_1) + ')';
};
protoOf(ReturnStatement).hashCode = function () {
  return hashCode(this.pu_1);
};
protoOf(ReturnStatement).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof ReturnStatement))
    return false;
  var tmp0_other_with_cast = other instanceof ReturnStatement ? other : THROW_CCE();
  if (!equals(this.pu_1, tmp0_other_with_cast.pu_1))
    return false;
  return true;
};
//region block: post-declaration
defineProp(protoOf(ErrorType), 'name', protoOf(ErrorType).o1);
defineProp(protoOf(ErrorType), 'ordinal', protoOf(ErrorType).p1);
defineProp(protoOf(CompilationStage), 'name', protoOf(CompilationStage).o1);
defineProp(protoOf(CompilationStage), 'ordinal', protoOf(CompilationStage).p1);
defineProp(protoOf(CompilationOutput), 'stage', function () {
  return this.ks();
});
defineProp(protoOf(CompilationOutput), 'errors', function () {
  return this.ls();
});
protoOf($serializer).yj = typeParametersSerializers;
protoOf($serializer_0).yj = typeParametersSerializers;
protoOf($serializer_1).yj = typeParametersSerializers;
protoOf($serializer_2).yj = typeParametersSerializers;
protoOf($serializer_3).yj = typeParametersSerializers;
//endregion
//region block: init
Companion_instance_5 = new Companion_5();
//endregion
//region block: exports
ErrorType.values = values;
ErrorType.valueOf = valueOf;
defineProp(ErrorType, 'LEXICAL', ErrorType_LEXICAL_getInstance);
defineProp(ErrorType, 'SYNTAX', ErrorType_SYNTAX_getInstance);
defineProp(ErrorType, 'CODE_GENERATION', ErrorType_CODE_GENERATION_getInstance);
defineProp(ErrorType, 'RUNTIME', ErrorType_RUNTIME_getInstance);
defineProp(ErrorType, 'GENERAL', ErrorType_GENERAL_getInstance);
CompilationStage.values = values_0;
CompilationStage.valueOf = valueOf_0;
defineProp(CompilationStage, 'LEXER', CompilationStage_LEXER_getInstance);
defineProp(CompilationStage, 'PARSER', CompilationStage_PARSER_getInstance);
defineProp(CompilationStage, 'CODE_GENERATOR', CompilationStage_CODE_GENERATOR_getInstance);
defineProp(CompilationOutput, 'Companion', Companion_getInstance);
defineProp(LexerOutput, 'Companion', Companion_getInstance_0);
defineProp(ParserOutput, 'Companion', Companion_getInstance_1);
defineProp(CodeGeneratorOutput, 'Companion', Companion_getInstance_2);
defineProp(CompilationError, 'Companion', Companion_getInstance_3);
defineProp(CompilationResult, 'Companion', Companion_getInstance_4);
export {
  ErrorType as ErrorType,
  CompilationStage as CompilationStage,
  CompilationOutput as CompilationOutput,
  LexerOutput as LexerOutput,
  ParserOutput as ParserOutput,
  CodeGeneratorOutput as CodeGeneratorOutput,
  CompilationError as CompilationError,
  CompilationResult as CompilationResult,
  CompilerExport as CompilerExport,
};
//endregion

//# sourceMappingURL=CompilerLogic.mjs.map
