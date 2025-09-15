import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  STRING_getInstance2ou4lro9xn2qn as STRING_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  SEALED_getInstance3nsev85ow9059 as SEALED_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  ENUM_getInstance22lfbrqor0c0a as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SerializationException_init_$Init$nhp5tm45z5re as SerializationException_init_$Init$,
  CLASS_getInstance14ex35co4jkrb as CLASS_getInstance,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  ENUMlmq49cvwy4ow as ENUM,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  CONTEXTUAL_getInstance1845118lbzky0 as CONTEXTUAL_getInstance,
  LIST_getInstancey7k5h8d5cvxt as LIST_getInstance,
  MAP_getInstance3s1t6byguxmp9 as MAP_getInstance,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  KtMap140uvy3s5zad8 as KtMap,
  asJsReadonlyArrayView237cu3jwn119s as asJsReadonlyArrayView,
  KtList3hktaavzmj137 as KtList,
  LazyThreadSafetyMode_PUBLICATION_getInstance3hlj875zwihx0 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance1puqqwzccfvrg as Companion_getInstance,
  _ULong___get_data__impl__fggpzb2qlkrfp9zs48z as _ULong___get_data__impl__fggpzb,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy_0,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  toLongw1zpgk99d84b as toLong,
  _UInt___init__impl__l7qpdltd1eeof8nsuj as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl213fqto411a11p0 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k1p6qzv0dh0bvg as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7kivnvhcxkib53 as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc43ude1dscg1q30 as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg2vnfngefiworp as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne2jag2u7194ozm as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee3e5ovvzk9wm4f as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  toString3o7ifthqydp6e as toString_1,
  Companion_getInstanceuedpedmz4g65 as Companion_getInstance_0,
  Companion_getInstance1trnkq9cty7vr as Companion_getInstance_1,
  Companion_getInstance2du03jiluw9jj as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toByte4i43936u611k as toByte,
  Enum3alwj03lh1n41 as Enum,
  StringBuilder_init_$Create$2ujvu6cqvzuyn as StringBuilder_init_$Create$_0,
  HashMap_init_$Create$36kepqnl5avn5 as HashMap_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(Json, 'Json');
initMetadataForObject(Default, 'Default', VOID, Json);
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
initMetadataForClass(PolymorphismValidator, 'PolymorphismValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
//endregion
function Default() {
  Default_instance = this;
  Json.call(this, new JsonConfiguration(), EmptySerializersModule());
}
var Default_instance;
function Default_getInstance() {
  if (Default_instance == null)
    new Default();
  return Default_instance;
}
function Json(configuration, serializersModule) {
  Default_getInstance();
  this.wo_1 = configuration;
  this.xo_1 = serializersModule;
  this.yo_1 = new DescriptorSchemaCache();
}
protoOf(Json).qg = function () {
  return this.xo_1;
};
protoOf(Json).zo = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.bp();
  }
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.rp();
  return new JsonImpl(conf, builder.qp_1);
}
function JsonBuilder(json) {
  this.cp_1 = json.wo_1.sp_1;
  this.dp_1 = json.wo_1.xp_1;
  this.ep_1 = json.wo_1.tp_1;
  this.fp_1 = json.wo_1.up_1;
  this.gp_1 = json.wo_1.vp_1;
  this.hp_1 = json.wo_1.wp_1;
  this.ip_1 = json.wo_1.yp_1;
  this.jp_1 = json.wo_1.zp_1;
  this.kp_1 = json.wo_1.aq_1;
  this.lp_1 = json.wo_1.bq_1;
  this.mp_1 = json.wo_1.cq_1;
  this.np_1 = json.wo_1.dq_1;
  this.op_1 = json.wo_1.eq_1;
  this.pp_1 = json.wo_1.fq_1;
  this.qp_1 = json.qg();
}
protoOf(JsonBuilder).rp = function () {
  if (this.kp_1) {
    // Inline function 'kotlin.require' call
    if (!(this.lp_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  if (!this.hp_1) {
    // Inline function 'kotlin.require' call
    if (!(this.ip_1 === '    ')) {
      var message_0 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  } else if (!(this.ip_1 === '    ')) {
    var tmp0 = this.ip_1;
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(tmp0)) {
        var element = charSequenceGet(tmp0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
          tmp$ret$5 = false;
          break $l$block;
        }
      }
      tmp$ret$5 = true;
    }
    var allWhitespaces = tmp$ret$5;
    // Inline function 'kotlin.require' call
    if (!allWhitespaces) {
      var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.ip_1;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  return new JsonConfiguration(this.cp_1, this.ep_1, this.fp_1, this.gp_1, this.hp_1, this.dp_1, this.ip_1, this.jp_1, this.kp_1, this.lp_1, this.mp_1, this.np_1, this.op_1, this.pp_1);
};
function validateConfiguration($this) {
  if (equals($this.qg(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.wo_1.aq_1, $this.wo_1.bq_1);
  $this.qg().fo(collector);
}
function JsonImpl(configuration, module_0) {
  Json.call(this, configuration, module_0);
  validateConfiguration(this);
}
function JsonClassDiscriminator() {
}
function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive) {
  encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
  ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
  isLenient = isLenient === VOID ? false : isLenient;
  allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
  prettyPrint = prettyPrint === VOID ? false : prettyPrint;
  explicitNulls = explicitNulls === VOID ? true : explicitNulls;
  prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
  coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
  useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
  classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
  allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
  useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
  namingStrategy = namingStrategy === VOID ? null : namingStrategy;
  decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
  this.sp_1 = encodeDefaults;
  this.tp_1 = ignoreUnknownKeys;
  this.up_1 = isLenient;
  this.vp_1 = allowStructuredMapKeys;
  this.wp_1 = prettyPrint;
  this.xp_1 = explicitNulls;
  this.yp_1 = prettyPrintIndent;
  this.zp_1 = coerceInputValues;
  this.aq_1 = useArrayPolymorphism;
  this.bq_1 = classDiscriminator;
  this.cq_1 = allowSpecialFloatingPointValues;
  this.dq_1 = useAlternativeNames;
  this.eq_1 = namingStrategy;
  this.fq_1 = decodeEnumsCaseInsensitive;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.sp_1 + ', ignoreUnknownKeys=' + this.tp_1 + ', isLenient=' + this.up_1 + ', ' + ('allowStructuredMapKeys=' + this.vp_1 + ', prettyPrint=' + this.wp_1 + ', explicitNulls=' + this.xp_1 + ', ') + ("prettyPrintIndent='" + this.yp_1 + "', coerceInputValues=" + this.zp_1 + ', useArrayPolymorphism=' + this.aq_1 + ', ') + ("classDiscriminator='" + this.bq_1 + "', allowSpecialFloatingPointValues=" + this.cq_1 + ', useAlternativeNames=' + this.dq_1 + ', ') + ('namingStrategy=' + toString_0(this.eq_1) + ', decodeEnumsCaseInsensitive=' + this.fq_1 + ')');
};
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
function Companion() {
}
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
  // Inline function 'kotlin.collections.component1' call
  var k = _name_for_destructuring_parameter_0__wldtmu.k1();
  // Inline function 'kotlin.collections.component2' call
  var v = _name_for_destructuring_parameter_0__wldtmu.l1();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  printQuoted(this_0, k);
  this_0.c7(_Char___init__impl__6a9atx(58));
  this_0.a7(v);
  return this_0.toString();
}
function JsonObject(content) {
  JsonElement.call(this);
  this.gq_1 = content;
}
protoOf(JsonObject).p1 = function () {
  return this.gq_1.p1();
};
protoOf(JsonObject).o1 = function () {
  return this.gq_1.o1();
};
protoOf(JsonObject).l = function () {
  return this.gq_1.l();
};
protoOf(JsonObject).hq = function (key) {
  return this.gq_1.m1(key);
};
protoOf(JsonObject).m1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.hq((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).iq = function (key) {
  return this.gq_1.n1(key);
};
protoOf(JsonObject).n1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.iq((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).o = function () {
  return this.gq_1.o();
};
protoOf(JsonObject).equals = function (other) {
  return equals(this.gq_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.gq_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.gq_1.p1();
  return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
};
function Companion_0() {
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
function JsonPrimitive() {
  JsonElement.call(this);
}
protoOf(JsonPrimitive).toString = function () {
  return this.jq();
};
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function Companion_1() {
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function JsonElement() {
}
function JsonPrimitive_1(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function Companion_2() {
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonArray(content) {
  JsonElement.call(this);
  this.kq_1 = content;
}
protoOf(JsonArray).l = function () {
  return this.kq_1.l();
};
protoOf(JsonArray).lq = function (element) {
  return this.kq_1.d1(element);
};
protoOf(JsonArray).d1 = function (element) {
  if (!(element instanceof JsonElement))
    return false;
  return this.lq(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).mq = function (elements) {
  return this.kq_1.e1(elements);
};
protoOf(JsonArray).e1 = function (elements) {
  return this.mq(elements);
};
protoOf(JsonArray).n = function (index) {
  return this.kq_1.n(index);
};
protoOf(JsonArray).nq = function (element) {
  return this.kq_1.f1(element);
};
protoOf(JsonArray).f1 = function (element) {
  if (!(element instanceof JsonElement))
    return -1;
  return this.nq(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).o = function () {
  return this.kq_1.o();
};
protoOf(JsonArray).i = function () {
  return this.kq_1.i();
};
protoOf(JsonArray).oq = function (element) {
  return this.kq_1.g1(element);
};
protoOf(JsonArray).g1 = function (element) {
  if (!(element instanceof JsonElement))
    return -1;
  return this.oq(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).h1 = function () {
  return this.kq_1.h1();
};
protoOf(JsonArray).i1 = function (index) {
  return this.kq_1.i1(index);
};
protoOf(JsonArray).j1 = function (fromIndex, toIndex) {
  return this.kq_1.j1(fromIndex, toIndex);
};
protoOf(JsonArray).equals = function (other) {
  return equals(this.kq_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.kq_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.kq_1, ',', '[', ']');
};
function JsonPrimitive_2(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function _get_$cachedSerializer__te6jhj($this) {
  return $this.qq_1.l1();
}
function JsonNull$_anonymous__enib48() {
  return JsonNullSerializer_getInstance();
}
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.pq_1 = 'null';
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  tmp.qq_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
}
protoOf(JsonNull).jq = function () {
  return this.pq_1;
};
protoOf(JsonNull).rq = function () {
  return _get_$cachedSerializer__te6jhj(this);
};
protoOf(JsonNull).kk = function (typeParamsSerializers) {
  return this.rq();
};
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance == null)
    new JsonNull();
  return JsonNull_instance;
}
function JsonLiteral(body, isString, coerceToInlineType) {
  coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
  JsonPrimitive.call(this);
  this.sq_1 = isString;
  this.tq_1 = coerceToInlineType;
  this.uq_1 = toString(body);
  if (!(this.tq_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.tq_1.pe()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).jq = function () {
  return this.uq_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.sq_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.uq_1);
    tmp = this_0.toString();
  } else {
    tmp = this.uq_1;
  }
  return tmp;
};
protoOf(JsonLiteral).equals = function (other) {
  if (this === other)
    return true;
  if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
    return false;
  if (!(other instanceof JsonLiteral))
    THROW_CCE();
  if (!(this.sq_1 === other.sq_1))
    return false;
  if (!(this.uq_1 === other.uq_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.sq_1);
  result = imul(31, result) + getStringHashCode(this.uq_1) | 0;
  return result;
};
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function JsonObjectDescriptor() {
  JsonObjectDescriptor_instance = this;
  this.vq_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).cd();
  this.wq_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).ne = function () {
  return this.vq_1.ne();
};
protoOf(JsonObjectDescriptor).oe = function () {
  return this.vq_1.oe();
};
protoOf(JsonObjectDescriptor).pe = function () {
  return this.vq_1.pe();
};
protoOf(JsonObjectDescriptor).je = function () {
  return this.vq_1.je();
};
protoOf(JsonObjectDescriptor).qe = function () {
  return this.vq_1.qe();
};
protoOf(JsonObjectDescriptor).re = function (index) {
  return this.vq_1.re(index);
};
protoOf(JsonObjectDescriptor).se = function (index) {
  return this.vq_1.se(index);
};
protoOf(JsonObjectDescriptor).be = function () {
  return this.wq_1;
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.xq_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).cd = function () {
  return this.xq_1;
};
protoOf(JsonObjectSerializer).yq = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).dd(encoder, value);
};
protoOf(JsonObjectSerializer).dd = function (encoder, value) {
  return this.yq(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonPrimitiveSerializer() {
  JsonPrimitiveSerializer_instance = this;
  this.zq_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).cd = function () {
  return this.zq_1;
};
protoOf(JsonPrimitiveSerializer).ar = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.ng(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.ng(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).dd = function (encoder, value) {
  return this.ar(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance == null)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.md('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.md('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.md('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.md('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.md('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().zq_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().br_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().cr_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().xq_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().dr_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.er_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).cd = function () {
  return this.er_1;
};
protoOf(JsonElementSerializer).fr = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.ng(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.ng(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.ng(JsonArraySerializer_getInstance(), value);
      }
    }
  }
};
protoOf(JsonElementSerializer).dd = function (encoder, value) {
  return this.fr(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance == null)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function JsonArrayDescriptor() {
  JsonArrayDescriptor_instance = this;
  this.gr_1 = ListSerializer(JsonElementSerializer_getInstance()).cd();
  this.hr_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).ne = function () {
  return this.gr_1.ne();
};
protoOf(JsonArrayDescriptor).oe = function () {
  return this.gr_1.oe();
};
protoOf(JsonArrayDescriptor).pe = function () {
  return this.gr_1.pe();
};
protoOf(JsonArrayDescriptor).je = function () {
  return this.gr_1.je();
};
protoOf(JsonArrayDescriptor).qe = function () {
  return this.gr_1.qe();
};
protoOf(JsonArrayDescriptor).re = function (index) {
  return this.gr_1.re(index);
};
protoOf(JsonArrayDescriptor).se = function (index) {
  return this.gr_1.se(index);
};
protoOf(JsonArrayDescriptor).be = function () {
  return this.hr_1;
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.dr_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).cd = function () {
  return this.dr_1;
};
protoOf(JsonArraySerializer).ir = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).dd(encoder, value);
};
protoOf(JsonArraySerializer).dd = function (encoder, value) {
  return this.ir(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance == null)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function JsonNullSerializer() {
  JsonNullSerializer_instance = this;
  this.br_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).cd = function () {
  return this.br_1;
};
protoOf(JsonNullSerializer).jr = function (encoder, value) {
  verify(encoder);
  encoder.rf();
};
protoOf(JsonNullSerializer).dd = function (encoder, value) {
  return this.jr(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance == null)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function JsonLiteralSerializer() {
  JsonLiteralSerializer_instance = this;
  this.cr_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).cd = function () {
  return this.cr_1;
};
protoOf(JsonLiteralSerializer).kr = function (encoder, value) {
  verify(encoder);
  if (value.sq_1) {
    return encoder.ag(value.uq_1);
  }
  if (!(value.tq_1 == null)) {
    return encoder.bg(value.tq_1).ag(value.uq_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.uq_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.wf(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.uq_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).mc_1;
    var tmp_1 = encoder.bg(serializer_0(Companion_getInstance()).cd());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.wf(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.uq_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.yf(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.uq_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.sf(tmp3_safe_receiver);
  }
  encoder.ag(value.uq_1);
};
protoOf(JsonLiteralSerializer).dd = function (encoder, value) {
  return this.kr(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance == null)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.lr_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.l1();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function defer$1($deferred) {
  this.lr_1 = lazy_0($deferred);
}
protoOf(defer$1).be = function () {
  return _get_original__l7ku1m(this).be();
};
protoOf(defer$1).qe = function () {
  return _get_original__l7ku1m(this).qe();
};
protoOf(defer$1).oe = function () {
  return _get_original__l7ku1m(this).oe();
};
protoOf(defer$1).se = function (index) {
  return _get_original__l7ku1m(this).se(index);
};
protoOf(defer$1).re = function (index) {
  return _get_original__l7ku1m(this).re(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.nr_1 = writer;
  this.or_1 = true;
}
protoOf(Composer).pr = function () {
  this.or_1 = true;
};
protoOf(Composer).qr = function () {
  return Unit_instance;
};
protoOf(Composer).rr = function () {
  this.or_1 = false;
};
protoOf(Composer).sr = function () {
  return Unit_instance;
};
protoOf(Composer).tr = function (v) {
  return this.nr_1.ur(v);
};
protoOf(Composer).vr = function (v) {
  return this.nr_1.wr(v);
};
protoOf(Composer).xr = function (v) {
  return this.nr_1.wr(v.toString());
};
protoOf(Composer).yr = function (v) {
  return this.nr_1.wr(v.toString());
};
protoOf(Composer).zr = function (v) {
  return this.nr_1.as(toLong(v));
};
protoOf(Composer).bs = function (v) {
  return this.nr_1.as(toLong(v));
};
protoOf(Composer).cs = function (v) {
  return this.nr_1.as(toLong(v));
};
protoOf(Composer).ds = function (v) {
  return this.nr_1.as(v);
};
protoOf(Composer).es = function (v) {
  return this.nr_1.wr(v.toString());
};
protoOf(Composer).fs = function (value) {
  return this.nr_1.gs(value);
};
function Composer_0(sb, json) {
  return json.wo_1.wp_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.js_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).cs = function (v) {
  if (this.js_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.fs(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.vr(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).ds = function (v) {
  if (this.js_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.fs(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.vr(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).zr = function (v) {
  if (this.js_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.fs(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.vr(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).bs = function (v) {
  if (this.js_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.fs(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.vr(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.ms_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).fs = function (value) {
  if (this.ms_1) {
    protoOf(Composer).fs.call(this, value);
  } else {
    protoOf(Composer).vr.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.ps_1 = json;
  this.qs_1 = 0;
}
protoOf(ComposerWithPrettyPrint).pr = function () {
  this.or_1 = true;
  this.qs_1 = this.qs_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).qr = function () {
  this.qs_1 = this.qs_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).rr = function () {
  this.or_1 = false;
  this.vr('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.qs_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.vr(this.ps_1.wo_1.yp_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).sr = function () {
  this.tr(_Char___init__impl__6a9atx(32));
};
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.be() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.qe().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function JsonException(message) {
  SerializationException_init_$Init$(message, this);
  captureStack(this, JsonException);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function InvalidFloatingPointEncoded(value, output) {
  return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.se(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.qe(), CLASS_getInstance()) ? json.wo_1.eq_1 : null;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.ss(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return function () {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.oe();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.se(tmp_2);
      tmp_1[tmp_2] = $strategy.ts($this_serializationNamesIndices, tmp_2, baseName);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = values().length;
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
  encoder.ng(serializer, value);
}
function classDiscriminator(_this__u8e3s4, json) {
  var tmp0_iterator = _this__u8e3s4.ne().i();
  while (tmp0_iterator.j()) {
    var annotation = tmp0_iterator.k();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.ct_1;
  }
  return json.wo_1.bq_1;
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.cd()).d1(classDiscriminator)) {
    var baseName = serializer.cd().be();
    var actualName = actualSerializer.cd().be();
    // Inline function 'kotlin.error' call
    var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
    throw IllegalStateException_init_$Create$(toString(message));
  }
}
function checkKind(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
}
function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
  return validateIfSealed(serializer, actualSerializer, classDiscriminator);
}
function checkKind_0($this, descriptor, actualClass) {
  var kind = descriptor.qe();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.p7() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.dt_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.p7() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.oe();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.se(i);
      if (name === $this.et_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.dt_1 = useArrayPolymorphism;
  this.et_1 = discriminator;
}
protoOf(PolymorphismValidator).no = function (kClass, provider) {
};
protoOf(PolymorphismValidator).qo = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.cd();
  checkKind_0(this, descriptor, actualClass);
  if (!this.dt_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).ro = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).so = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.rs_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).ft = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.rs_1;
  var value_0 = this_0.n1(descriptor);
  var tmp;
  if (value_0 == null) {
    var answer = createMapForCache(2);
    this_0.s1(descriptor, answer);
    tmp = answer;
  } else {
    tmp = value_0;
  }
  var tmp0 = tmp;
  var tmp2 = key instanceof Key ? key : THROW_CCE();
  // Inline function 'kotlin.collections.set' call
  var value_1 = !(value == null) ? value : THROW_CCE();
  tmp0.s1(tmp2, value_1);
};
protoOf(DescriptorSchemaCache).ss = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.gt(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.ft(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).gt = function (descriptor, key) {
  var tmp0_safe_receiver = this.rs_1.n1(descriptor);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = tmp0_safe_receiver.n1(key instanceof Key ? key : THROW_CCE());
  }
  var tmp_0 = tmp;
  return !(tmp_0 == null) ? tmp_0 : null;
};
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
  StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
  return $this;
}
function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
  return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
}
function encodeTypeInfo($this, descriptor) {
  $this.us_1.rr();
  $this.ag(ensureNotNull($this.bt_1));
  $this.us_1.tr(_Char___init__impl__6a9atx(58));
  $this.us_1.sr();
  $this.ag(descriptor.be());
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.us_1 = composer;
  this.vs_1 = json;
  this.ws_1 = mode;
  this.xs_1 = modeReuseCache;
  this.ys_1 = this.vs_1.qg();
  this.zs_1 = this.vs_1.wo_1;
  this.at_1 = false;
  this.bt_1 = null;
  var i = this.ws_1.v1_1;
  if (!(this.xs_1 == null)) {
    if (!(this.xs_1[i] === null) || !(this.xs_1[i] === this)) {
      this.xs_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).mr = function () {
  return this.vs_1;
};
protoOf(StreamingJsonEncoder).qg = function () {
  return this.ys_1;
};
protoOf(StreamingJsonEncoder).tg = function (descriptor, index) {
  return this.zs_1.sp_1;
};
protoOf(StreamingJsonEncoder).ng = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.mr().wo_1.aq_1;
    }
    if (tmp) {
      serializer.dd(this, value);
      break $l$block;
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.cd(), this.mr());
    var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
    access$validateIfSealed$tPolymorphicKt(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.cd().qe());
    this.bt_1 = baseClassDiscriminator;
    actualSerializer.dd(this, value);
  }
};
protoOf(StreamingJsonEncoder).nf = function (descriptor) {
  var newMode = switchMode(this.vs_1, descriptor);
  if (!(newMode.jt_1 === _Char___init__impl__6a9atx(0))) {
    this.us_1.tr(newMode.jt_1);
    this.us_1.pr();
  }
  if (!(this.bt_1 == null)) {
    encodeTypeInfo(this, descriptor);
    this.bt_1 = null;
  }
  if (this.ws_1.equals(newMode)) {
    return this;
  }
  var tmp0_safe_receiver = this.xs_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.v1_1];
  return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.us_1, this.vs_1, newMode, this.xs_1) : tmp1_elvis_lhs;
};
protoOf(StreamingJsonEncoder).of = function (descriptor) {
  if (!(this.ws_1.kt_1 === _Char___init__impl__6a9atx(0))) {
    this.us_1.qr();
    this.us_1.rr();
    this.us_1.tr(this.ws_1.kt_1);
  }
};
protoOf(StreamingJsonEncoder).pf = function (descriptor, index) {
  switch (this.ws_1.v1_1) {
    case 1:
      if (!this.us_1.or_1) {
        this.us_1.tr(_Char___init__impl__6a9atx(44));
      }

      this.us_1.rr();
      break;
    case 2:
      if (!this.us_1.or_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.us_1.tr(_Char___init__impl__6a9atx(44));
          this.us_1.rr();
          tmp_0 = true;
        } else {
          this.us_1.tr(_Char___init__impl__6a9atx(58));
          this.us_1.sr();
          tmp_0 = false;
        }
        tmp.at_1 = tmp_0;
      } else {
        this.at_1 = true;
        this.us_1.rr();
      }

      break;
    case 3:
      if (index === 0)
        this.at_1 = true;
      if (index === 1) {
        this.us_1.tr(_Char___init__impl__6a9atx(44));
        this.us_1.sr();
        this.at_1 = false;
      }

      break;
    default:
      if (!this.us_1.or_1) {
        this.us_1.tr(_Char___init__impl__6a9atx(44));
      }

      this.us_1.rr();
      this.ag(getJsonElementName(descriptor, this.vs_1, index));
      this.us_1.tr(_Char___init__impl__6a9atx(58));
      this.us_1.sr();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).og = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.zs_1.xp_1) {
    protoOf(AbstractEncoder).og.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).bg = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.us_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.us_1;
    } else {
      var tmp0 = this.us_1.nr_1;
      var p1 = this.at_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.vs_1, this.ws_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.us_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.us_1;
    } else {
      var tmp0_0 = this.us_1.nr_1;
      var p1_0 = this.at_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.vs_1, this.ws_1, null);
  } else {
    tmp = protoOf(AbstractEncoder).bg.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).rf = function () {
  this.us_1.vr('null');
};
protoOf(StreamingJsonEncoder).sf = function (value) {
  if (this.at_1) {
    this.ag(value.toString());
  } else {
    this.us_1.es(value);
  }
};
protoOf(StreamingJsonEncoder).tf = function (value) {
  if (this.at_1) {
    this.ag(value.toString());
  } else {
    this.us_1.zr(value);
  }
};
protoOf(StreamingJsonEncoder).uf = function (value) {
  if (this.at_1) {
    this.ag(value.toString());
  } else {
    this.us_1.bs(value);
  }
};
protoOf(StreamingJsonEncoder).vf = function (value) {
  if (this.at_1) {
    this.ag(value.toString());
  } else {
    this.us_1.cs(value);
  }
};
protoOf(StreamingJsonEncoder).wf = function (value) {
  if (this.at_1) {
    this.ag(value.toString());
  } else {
    this.us_1.ds(value);
  }
};
protoOf(StreamingJsonEncoder).xf = function (value) {
  if (this.at_1) {
    this.ag(value.toString());
  } else {
    this.us_1.xr(value);
  }
  if (!this.zs_1.cq_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.us_1.nr_1));
  }
};
protoOf(StreamingJsonEncoder).yf = function (value) {
  if (this.at_1) {
    this.ag(value.toString());
  } else {
    this.us_1.yr(value);
  }
  if (!this.zs_1.cq_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.us_1.nr_1));
  }
};
protoOf(StreamingJsonEncoder).zf = function (value) {
  this.ag(toString_1(value));
};
protoOf(StreamingJsonEncoder).ag = function (value) {
  return this.us_1.fs(value);
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.pe() && get_unsignedNumberDescriptors().d1(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.pe() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).cd(), serializer_0(Companion_getInstance()).cd(), serializer_2(Companion_getInstance_1()).cd(), serializer_3(Companion_getInstance_2()).cd()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.c7(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.y8(value, lastPos, i);
        _this__u8e3s4.b7(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0)) {
    _this__u8e3s4.y8(value, lastPos, value.length);
  } else {
    _this__u8e3s4.b7(value);
  }
  _this__u8e3s4.c7(_Char___init__impl__6a9atx(34));
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$1);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$12);
    ESCAPE_MARKERS = this_7;
  }
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
function WriteMode(name, ordinal, begin, end) {
  Enum.call(this, name, ordinal);
  this.jt_1 = begin;
  this.kt_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.qe();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.re(0), _this__u8e3s4.qg());
        var keyKind = keyDescriptor.qe();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.wo_1.vp_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.qe(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.pe()) {
    tmp = carrierDescriptor(_this__u8e3s4.re(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.yo_1;
}
function JsonToStringWriter() {
  this.ap_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).as = function (value) {
  this.ap_1.a7(value);
};
protoOf(JsonToStringWriter).ur = function (char) {
  this.ap_1.c7(char);
};
protoOf(JsonToStringWriter).wr = function (text) {
  this.ap_1.b7(text);
};
protoOf(JsonToStringWriter).gs = function (text) {
  printQuoted(this.ap_1, text);
};
protoOf(JsonToStringWriter).bp = function () {
  this.ap_1.d9();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.ap_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(JsonArray).asJsReadonlyArrayView = asJsReadonlyArrayView;
protoOf(defer$1).je = get_isNullable;
protoOf(defer$1).pe = get_isInline;
protoOf(defer$1).ne = get_annotations;
protoOf(PolymorphismValidator).po = contextual;
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
//endregion
//region block: exports
export {
  Default_getInstance as Default_getInstance363hicrc7jsft,
  JsonArray as JsonArray2urf8ey7u44sd,
  JsonObject as JsonObjectee06ihoeeiqj,
  JsonPrimitive_0 as JsonPrimitiveolttw629wj53,
  JsonPrimitive_2 as JsonPrimitive2fp8648nd60dn,
  JsonPrimitive_1 as JsonPrimitive1xkjzc5d7ihuv,
  Json_0 as Jsonsmkyu9xjl7fv,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
