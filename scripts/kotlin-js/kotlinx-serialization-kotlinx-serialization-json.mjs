import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SEALED_getInstance3nsev85ow9059 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  STRING_getInstance2ou4lro9xn2qn as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  ENUM_getInstance22lfbrqor0c0a as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SerializationException_init_$Init$nhp5tm45z5re as SerializationException_init_$Init$,
  SerializationException_init_$Create$1b97dv9p64p50 as SerializationException_init_$Create$,
  CLASS_getInstance14ex35co4jkrb as CLASS_getInstance,
  LIST_getInstancey7k5h8d5cvxt as LIST_getInstance,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  ENUMlmq49cvwy4ow as ENUM,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  CONTEXTUAL_getInstance1845118lbzky0 as CONTEXTUAL_getInstance,
  MAP_getInstance3s1t6byguxmp9 as MAP_getInstance,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
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
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  KtMap140uvy3s5zad8 as KtMap,
  KtList3hktaavzmj137 as KtList,
  LazyThreadSafetyMode_PUBLICATION_getInstance3hlj875zwihx0 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  NumberFormatException_init_$Create$361k2w325ylq7 as NumberFormatException_init_$Create$,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  isInterface3d6p8outrmvmk as isInterface,
  contains2c50nlxg7en7o as contains,
  toDouble1kn912gjoizjp as toDouble,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance1puqqwzccfvrg as Companion_getInstance,
  _ULong___get_data__impl__fggpzb2qlkrfp9zs48z as _ULong___get_data__impl__fggpzb,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy_0,
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
  LinkedHashMap_init_$Create$1f9mb1z5f3dxn as LinkedHashMap_init_$Create$,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  copyOf3rutauicler23 as copyOf_0,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  DeepRecursiveScope1pqaydvh4vdcu as DeepRecursiveScope,
  Unitkvevlwgzwiuc as Unit,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  getKClass1s3j9wy1cofik as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  contains3ue2qo8xhmpf1 as contains_0,
  plus17rl43at52ays as plus,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw13y1a2xkii3dn as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qr2p2xx2i2jvnz8 as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g0245hlms5v6vgvnl as _UShort___get_data__impl__g0245,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  toString3o7ifthqydp6e as toString_1,
  Companion_getInstanceuedpedmz4g65 as Companion_getInstance_0,
  Companion_getInstance1trnkq9cty7vr as Companion_getInstance_1,
  Companion_getInstance2du03jiluw9jj as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  equals2v6cggk171b6e as equals_0,
  toByte4i43936u611k as toByte,
  IllegalArgumentException_init_$Create$3vjwoodhlckbo as IllegalArgumentException_init_$Create$_0,
  toShort36kaw0zjdq3ex as toShort,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  Enum3alwj03lh1n41 as Enum,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Long2qws0ah9gnpki as Long,
  Char__minus_impl_a2frrh3548ixwefqxih as Char__minus_impl_a2frrh,
  numberToLong1a4cndvg6c52s as numberToLong,
  charArray2ujmm1qusno00 as charArray,
  indexOf1xbs558u7wr52 as indexOf,
  substringiqarkczpya5m as substring,
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
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
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
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(PolymorphismValidator, 'PolymorphismValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
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
  this.s10_1 = configuration;
  this.t10_1 = serializersModule;
  this.u10_1 = new DescriptorSchemaCache();
}
protoOf(Json).mk = function () {
  return this.t10_1;
};
protoOf(Json).v10 = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.y10();
  }
};
protoOf(Json).w10 = function (deserializer, string) {
  var lexer = new StringJsonLexer(string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.pg(), null);
  var result = input.wj(deserializer);
  lexer.l11();
  return result;
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.b12();
  return new JsonImpl(conf, builder.a12_1);
}
function JsonBuilder(json) {
  this.m11_1 = json.s10_1.c12_1;
  this.n11_1 = json.s10_1.h12_1;
  this.o11_1 = json.s10_1.d12_1;
  this.p11_1 = json.s10_1.e12_1;
  this.q11_1 = json.s10_1.f12_1;
  this.r11_1 = json.s10_1.g12_1;
  this.s11_1 = json.s10_1.i12_1;
  this.t11_1 = json.s10_1.j12_1;
  this.u11_1 = json.s10_1.k12_1;
  this.v11_1 = json.s10_1.l12_1;
  this.w11_1 = json.s10_1.m12_1;
  this.x11_1 = json.s10_1.n12_1;
  this.y11_1 = json.s10_1.o12_1;
  this.z11_1 = json.s10_1.p12_1;
  this.a12_1 = json.mk();
}
protoOf(JsonBuilder).b12 = function () {
  if (this.u11_1) {
    // Inline function 'kotlin.require' call
    if (!(this.v11_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  if (!this.r11_1) {
    // Inline function 'kotlin.require' call
    if (!(this.s11_1 === '    ')) {
      var message_0 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  } else if (!(this.s11_1 === '    ')) {
    var tmp0 = this.s11_1;
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
      var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.s11_1;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  return new JsonConfiguration(this.m11_1, this.o11_1, this.p11_1, this.q11_1, this.r11_1, this.n11_1, this.s11_1, this.t11_1, this.u11_1, this.v11_1, this.w11_1, this.x11_1, this.y11_1, this.z11_1);
};
function validateConfiguration($this) {
  if (equals($this.mk(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.s10_1.k12_1, $this.s10_1.l12_1);
  $this.mk().b10(collector);
}
function JsonImpl(configuration, module_0) {
  Json.call(this, configuration, module_0);
  validateConfiguration(this);
}
function JsonClassDiscriminator() {
}
function JsonNames() {
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
  this.c12_1 = encodeDefaults;
  this.d12_1 = ignoreUnknownKeys;
  this.e12_1 = isLenient;
  this.f12_1 = allowStructuredMapKeys;
  this.g12_1 = prettyPrint;
  this.h12_1 = explicitNulls;
  this.i12_1 = prettyPrintIndent;
  this.j12_1 = coerceInputValues;
  this.k12_1 = useArrayPolymorphism;
  this.l12_1 = classDiscriminator;
  this.m12_1 = allowSpecialFloatingPointValues;
  this.n12_1 = useAlternativeNames;
  this.o12_1 = namingStrategy;
  this.p12_1 = decodeEnumsCaseInsensitive;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.c12_1 + ', ignoreUnknownKeys=' + this.d12_1 + ', isLenient=' + this.e12_1 + ', ' + ('allowStructuredMapKeys=' + this.f12_1 + ', prettyPrint=' + this.g12_1 + ', explicitNulls=' + this.h12_1 + ', ') + ("prettyPrintIndent='" + this.i12_1 + "', coerceInputValues=" + this.j12_1 + ', useArrayPolymorphism=' + this.k12_1 + ', ') + ("classDiscriminator='" + this.l12_1 + "', allowSpecialFloatingPointValues=" + this.m12_1 + ', useAlternativeNames=' + this.n12_1 + ', ') + ('namingStrategy=' + toString_0(this.o12_1) + ', decodeEnumsCaseInsensitive=' + this.p12_1 + ')');
};
function JsonDecoder() {
}
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
  var k = _name_for_destructuring_parameter_0__wldtmu.q1();
  // Inline function 'kotlin.collections.component2' call
  var v = _name_for_destructuring_parameter_0__wldtmu.r1();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  printQuoted(this_0, k);
  this_0.j7(_Char___init__impl__6a9atx(58));
  this_0.h7(v);
  return this_0.toString();
}
function JsonObject(content) {
  JsonElement.call(this);
  this.s12_1 = content;
}
protoOf(JsonObject).v1 = function () {
  return this.s12_1.v1();
};
protoOf(JsonObject).u1 = function () {
  return this.s12_1.u1();
};
protoOf(JsonObject).m = function () {
  return this.s12_1.m();
};
protoOf(JsonObject).t12 = function (key) {
  return this.s12_1.s1(key);
};
protoOf(JsonObject).s1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.t12((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).u12 = function (key) {
  return this.s12_1.t1(key);
};
protoOf(JsonObject).t1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.u12((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).p = function () {
  return this.s12_1.p();
};
protoOf(JsonObject).equals = function (other) {
  return equals(this.s12_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.s12_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.s12_1.v1();
  return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
};
function Companion_0() {
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
function JsonElement() {
}
function Companion_1() {
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function JsonPrimitive() {
  JsonElement.call(this);
}
protoOf(JsonPrimitive).toString = function () {
  return this.v12();
};
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function JsonPrimitive_1(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function JsonPrimitive_2(value) {
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
  this.w12_1 = content;
}
protoOf(JsonArray).m = function () {
  return this.w12_1.m();
};
protoOf(JsonArray).o = function (index) {
  return this.w12_1.o(index);
};
protoOf(JsonArray).p = function () {
  return this.w12_1.p();
};
protoOf(JsonArray).j = function () {
  return this.w12_1.j();
};
protoOf(JsonArray).q = function (index) {
  return this.w12_1.q(index);
};
protoOf(JsonArray).equals = function (other) {
  return equals(this.w12_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.w12_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.w12_1, ',', '[', ']');
};
function _get_$cachedSerializer__te6jhj($this) {
  return $this.y12_1.r1();
}
function JsonNull$_anonymous__enib48() {
  return JsonNullSerializer_getInstance();
}
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.x12_1 = 'null';
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  tmp.y12_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
}
protoOf(JsonNull).v12 = function () {
  return this.x12_1;
};
protoOf(JsonNull).z12 = function () {
  return _get_$cachedSerializer__te6jhj(this);
};
protoOf(JsonNull).js = function (typeParamsSerializers) {
  return this.z12();
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
  this.a13_1 = isString;
  this.b13_1 = coerceToInlineType;
  this.c13_1 = toString(body);
  if (!(this.b13_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.b13_1.di()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).v12 = function () {
  return this.c13_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.a13_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.c13_1);
    tmp = this_0.toString();
  } else {
    tmp = this.c13_1;
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
  if (!(this.a13_1 === other.a13_1))
    return false;
  if (!(this.c13_1 === other.c13_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.a13_1);
  result = imul(31, result) + getStringHashCode(this.c13_1) | 0;
  return result;
};
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.v12());
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.v12())).d13();
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException_init_$Create$(e.message);
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException_init_$Create$(_this__u8e3s4.v12() + ' is not an Int');
  return result.a1();
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.v12())).d13();
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException_init_$Create$(e.message);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.v12();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.v12());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.v12();
  }
  return tmp;
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.ah('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.ah('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.ah('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.ah('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.ah('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().e13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().f13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().g13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().h13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().i13_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.j13_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).pg = function () {
  return this.j13_1;
};
protoOf(JsonElementSerializer).k13 = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.pl(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.pl(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.pl(JsonArraySerializer_getInstance(), value);
      }
    }
  }
};
protoOf(JsonElementSerializer).qg = function (encoder, value) {
  return this.k13(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).rg = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.r12();
};
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance == null)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function JsonObjectDescriptor() {
  JsonObjectDescriptor_instance = this;
  this.l13_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).pg();
  this.m13_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).bi = function () {
  return this.l13_1.bi();
};
protoOf(JsonObjectDescriptor).ci = function () {
  return this.l13_1.ci();
};
protoOf(JsonObjectDescriptor).di = function () {
  return this.l13_1.di();
};
protoOf(JsonObjectDescriptor).xh = function () {
  return this.l13_1.xh();
};
protoOf(JsonObjectDescriptor).ei = function () {
  return this.l13_1.ei();
};
protoOf(JsonObjectDescriptor).fi = function (index) {
  return this.l13_1.fi(index);
};
protoOf(JsonObjectDescriptor).gi = function (index) {
  return this.l13_1.gi(index);
};
protoOf(JsonObjectDescriptor).hi = function (name) {
  return this.l13_1.hi(name);
};
protoOf(JsonObjectDescriptor).ii = function (index) {
  return this.l13_1.ii(index);
};
protoOf(JsonObjectDescriptor).ji = function (index) {
  return this.l13_1.ji(index);
};
protoOf(JsonObjectDescriptor).qh = function () {
  return this.m13_1;
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.h13_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).pg = function () {
  return this.h13_1;
};
protoOf(JsonObjectSerializer).n13 = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).qg(encoder, value);
};
protoOf(JsonObjectSerializer).qg = function (encoder, value) {
  return this.n13(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).rg = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).rg(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonPrimitiveSerializer() {
  JsonPrimitiveSerializer_instance = this;
  this.e13_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).pg = function () {
  return this.e13_1;
};
protoOf(JsonPrimitiveSerializer).o13 = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.pl(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.pl(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).qg = function (encoder, value) {
  return this.o13(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).rg = function (decoder) {
  var result = asJsonDecoder(decoder).r12();
  if (!(result instanceof JsonPrimitive))
    throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
  return result;
};
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance == null)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
function JsonArrayDescriptor() {
  JsonArrayDescriptor_instance = this;
  this.p13_1 = ListSerializer(JsonElementSerializer_getInstance()).pg();
  this.q13_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).bi = function () {
  return this.p13_1.bi();
};
protoOf(JsonArrayDescriptor).ci = function () {
  return this.p13_1.ci();
};
protoOf(JsonArrayDescriptor).di = function () {
  return this.p13_1.di();
};
protoOf(JsonArrayDescriptor).xh = function () {
  return this.p13_1.xh();
};
protoOf(JsonArrayDescriptor).ei = function () {
  return this.p13_1.ei();
};
protoOf(JsonArrayDescriptor).fi = function (index) {
  return this.p13_1.fi(index);
};
protoOf(JsonArrayDescriptor).gi = function (index) {
  return this.p13_1.gi(index);
};
protoOf(JsonArrayDescriptor).hi = function (name) {
  return this.p13_1.hi(name);
};
protoOf(JsonArrayDescriptor).ii = function (index) {
  return this.p13_1.ii(index);
};
protoOf(JsonArrayDescriptor).ji = function (index) {
  return this.p13_1.ji(index);
};
protoOf(JsonArrayDescriptor).qh = function () {
  return this.q13_1;
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.i13_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).pg = function () {
  return this.i13_1;
};
protoOf(JsonArraySerializer).r13 = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).qg(encoder, value);
};
protoOf(JsonArraySerializer).qg = function (encoder, value) {
  return this.r13(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).rg = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).rg(decoder));
};
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance == null)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function JsonNullSerializer() {
  JsonNullSerializer_instance = this;
  this.f13_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).pg = function () {
  return this.f13_1;
};
protoOf(JsonNullSerializer).s13 = function (encoder, value) {
  verify(encoder);
  encoder.sk();
};
protoOf(JsonNullSerializer).qg = function (encoder, value) {
  return this.s13(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).rg = function (decoder) {
  verify_0(decoder);
  if (decoder.ij()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.jj();
  return JsonNull_getInstance();
};
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance == null)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
function JsonLiteralSerializer() {
  JsonLiteralSerializer_instance = this;
  this.g13_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).pg = function () {
  return this.g13_1;
};
protoOf(JsonLiteralSerializer).t13 = function (encoder, value) {
  verify(encoder);
  if (value.a13_1) {
    return encoder.bl(value.c13_1);
  }
  if (!(value.b13_1 == null)) {
    return encoder.dl(value.b13_1).bl(value.c13_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.c13_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.xk(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.c13_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).zf_1;
    var tmp_1 = encoder.dl(serializer_0(Companion_getInstance()).pg());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.xk(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.c13_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.zk(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.c13_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.tk(tmp3_safe_receiver);
  }
  encoder.bl(value.c13_1);
};
protoOf(JsonLiteralSerializer).qg = function (encoder, value) {
  return this.t13(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).rg = function (decoder) {
  var result = asJsonDecoder(decoder).r12();
  if (!(result instanceof JsonLiteral))
    throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
  return result;
};
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance == null)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
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
  var tmp0 = $this.u13_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.r1();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function defer$1($deferred) {
  this.u13_1 = lazy_0($deferred);
}
protoOf(defer$1).qh = function () {
  return _get_original__l7ku1m(this).qh();
};
protoOf(defer$1).ei = function () {
  return _get_original__l7ku1m(this).ei();
};
protoOf(defer$1).ci = function () {
  return _get_original__l7ku1m(this).ci();
};
protoOf(defer$1).ii = function (index) {
  return _get_original__l7ku1m(this).ii(index);
};
protoOf(defer$1).hi = function (name) {
  return _get_original__l7ku1m(this).hi(name);
};
protoOf(defer$1).fi = function (index) {
  return _get_original__l7ku1m(this).fi(index);
};
protoOf(defer$1).gi = function (index) {
  return _get_original__l7ku1m(this).gi(index);
};
protoOf(defer$1).ji = function (index) {
  return _get_original__l7ku1m(this).ji(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.v13_1 = writer;
  this.w13_1 = true;
}
protoOf(Composer).x13 = function () {
  this.w13_1 = true;
};
protoOf(Composer).y13 = function () {
  return Unit_instance;
};
protoOf(Composer).z13 = function () {
  this.w13_1 = false;
};
protoOf(Composer).a14 = function () {
  return Unit_instance;
};
protoOf(Composer).b14 = function (v) {
  return this.v13_1.c14(v);
};
protoOf(Composer).d14 = function (v) {
  return this.v13_1.e14(v);
};
protoOf(Composer).f14 = function (v) {
  return this.v13_1.e14(v.toString());
};
protoOf(Composer).g14 = function (v) {
  return this.v13_1.e14(v.toString());
};
protoOf(Composer).h14 = function (v) {
  return this.v13_1.i14(toLong(v));
};
protoOf(Composer).j14 = function (v) {
  return this.v13_1.i14(toLong(v));
};
protoOf(Composer).k14 = function (v) {
  return this.v13_1.i14(toLong(v));
};
protoOf(Composer).l14 = function (v) {
  return this.v13_1.i14(v);
};
protoOf(Composer).m14 = function (v) {
  return this.v13_1.e14(v.toString());
};
protoOf(Composer).n14 = function (value) {
  return this.v13_1.o14(value);
};
function Composer_0(sb, json) {
  return json.s10_1.g12_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.r14_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).k14 = function (v) {
  if (this.r14_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.n14(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.d14(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).l14 = function (v) {
  if (this.r14_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.n14(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.d14(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).h14 = function (v) {
  if (this.r14_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.n14(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.d14(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).j14 = function (v) {
  if (this.r14_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.n14(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.d14(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.u14_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).n14 = function (value) {
  if (this.u14_1) {
    protoOf(Composer).n14.call(this, value);
  } else {
    protoOf(Composer).d14.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.x14_1 = json;
  this.y14_1 = 0;
}
protoOf(ComposerWithPrettyPrint).x13 = function () {
  this.w13_1 = true;
  this.y14_1 = this.y14_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).y13 = function () {
  this.y14_1 = this.y14_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).z13 = function () {
  this.w13_1 = false;
  this.d14('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.y14_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.d14(this.x14_1.s10_1.i12_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).a14 = function () {
  this.b14(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.a15_1 = (!descriptor.ji(index) && descriptor.gi(index).xh());
  return $this.a15_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  var l = function (_this__u8e3s4, p0_0) {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function JsonElementMarker(descriptor) {
  var tmp = this;
  tmp.z14_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.a15_1 = false;
}
protoOf(JsonElementMarker).b15 = function (index) {
  this.z14_1.bq(index);
};
protoOf(JsonElementMarker).c15 = function () {
  return this.z14_1.cq();
};
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.d15('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.qh() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ei().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function JsonDecodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonDecodingException);
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function JsonDecodingException_1(offset, message) {
  return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
}
function UnknownKeyException(key, input) {
  return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n" + ('Current input: ' + toString(minify(input))));
}
function InvalidFloatingPointEncoded(value, output) {
  return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function JsonException(message) {
  SerializationException_init_$Init$(message, this);
  captureStack(this, JsonException);
}
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
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
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.hi(name);
  if (!(index === -3))
    return index;
  if (!json.s10_1.n12_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException_init_$Create$(_this__u8e3s4.qh() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.ii(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.ei(), CLASS_getInstance()) ? json.s10_1.o12_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.f15(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.s10_1.p12_1 && equals(descriptor.ei(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).t1(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.f15(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.ci();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.fi(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element instanceof JsonNames) {
          destination.e(element);
        }
      }
      var tmp1_safe_receiver = singleOrNull(destination);
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g15_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp2_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp2_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.ii(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.h15(_this__u8e3s4, i, _this__u8e3s4.ii(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.p()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.ei(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).s1(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ii(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ii(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.b2(name, index);
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return function () {
    return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
  };
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return function () {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.ci();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.ii(tmp_2);
      tmp_1[tmp_2] = $strategy.h15($this_serializationNamesIndices, tmp_2, baseName);
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
function Tombstone() {
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
function resize($this) {
  var newSize = imul($this.k15_1, 2);
  $this.i15_1 = copyOf($this.i15_1, newSize);
  $this.j15_1 = copyOf_0($this.j15_1, newSize);
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.i15_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.j15_1 = tmp_2;
  this.k15_1 = -1;
}
protoOf(JsonPath).l15 = function (sd) {
  this.k15_1 = this.k15_1 + 1 | 0;
  var depth = this.k15_1;
  if (depth === this.i15_1.length) {
    resize(this);
  }
  this.i15_1[depth] = sd;
};
protoOf(JsonPath).m15 = function (index) {
  this.j15_1[this.k15_1] = index;
};
protoOf(JsonPath).n15 = function (key) {
  var tmp;
  if (!(this.j15_1[this.k15_1] === -2)) {
    this.k15_1 = this.k15_1 + 1 | 0;
    tmp = this.k15_1 === this.i15_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.i15_1[this.k15_1] = key;
  this.j15_1[this.k15_1] = -2;
};
protoOf(JsonPath).o15 = function () {
  if (this.j15_1[this.k15_1] === -2) {
    this.i15_1[this.k15_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).p15 = function () {
  var depth = this.k15_1;
  if (this.j15_1[depth] === -2) {
    this.j15_1[depth] = -1;
    this.k15_1 = this.k15_1 - 1 | 0;
  }
  if (!(this.k15_1 === -1)) {
    this.k15_1 = this.k15_1 - 1 | 0;
  }
};
protoOf(JsonPath).q15 = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.i7('$');
  // Inline function 'kotlin.repeat' call
  var times = this.k15_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.i15_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.ei(), LIST_getInstance())) {
          if (!(this.j15_1[index] === -1)) {
            this_0.i7('[');
            this_0.h7(this.j15_1[index]);
            this_0.i7(']');
          }
        } else {
          var idx = this.j15_1[index];
          if (idx >= 0) {
            this_0.i7('.');
            this_0.i7(element.ii(idx));
          }
        }
      } else {
        if (!(element === Tombstone_instance)) {
          this_0.i7('[');
          this_0.i7("'");
          this_0.h7(element);
          this_0.i7("'");
          this_0.i7(']');
        }
      }
    }
     while (inductionVariable < times);
  return this_0.toString();
};
protoOf(JsonPath).toString = function () {
  return this.q15();
};
function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = values().length;
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
  encoder.pl(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.z15_1.c16(6);
  if ($this.z15_1.d16() === 4) {
    $this.z15_1.d15('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.z15_1.e16()) {
    var key = $this.a16_1 ? $this.z15_1.g16() : $this.z15_1.f16();
    $this.z15_1.c16(5);
    var element = $this.h16();
    // Inline function 'kotlin.collections.set' call
    result.b2(key, element);
    lastToken = $this.z15_1.i16();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.z15_1.d15('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.z15_1.c16(7);
  } else if (lastToken === 4) {
    $this.z15_1.d15('Unexpected trailing comma');
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
  tmp.w7_1 = Unit_instance;
  tmp.x7_1 = null;
  return tmp.c8();
}
function readArray($this) {
  var lastToken = $this.z15_1.i16();
  if ($this.z15_1.d16() === 4) {
    $this.z15_1.d15('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.z15_1.e16()) {
    var element = $this.h16();
    result.e(element);
    lastToken = $this.z15_1.i16();
    if (!(lastToken === 4)) {
      var tmp0 = $this.z15_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.h11_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.d15(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.z15_1.c16(9);
  } else if (lastToken === 4) {
    $this.z15_1.d15('Unexpected trailing comma');
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.a16_1 || !isString) {
    tmp = $this.z15_1.g16();
  } else {
    tmp = $this.z15_1.f16();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
  this.g17_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).l17 = function ($this$$receiver, it, $completion) {
  var tmp = this.m17($this$$receiver, it, $completion);
  tmp.w7_1 = Unit_instance;
  tmp.x7_1 = null;
  return tmp.c8();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).i8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.l17(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).c8 = function () {
  var suspendResult = this.w7_1;
  $sm: do
    try {
      var tmp = this.u7_1;
      switch (tmp) {
        case 0:
          this.v7_1 = 3;
          this.j17_1 = this.g17_1.z15_1.d16();
          if (this.j17_1 === 1) {
            this.k17_1 = readValue(this.g17_1, true);
            this.u7_1 = 2;
            continue $sm;
          } else {
            if (this.j17_1 === 0) {
              this.k17_1 = readValue(this.g17_1, false);
              this.u7_1 = 2;
              continue $sm;
            } else {
              if (this.j17_1 === 6) {
                this.u7_1 = 1;
                suspendResult = readObject_0(this.g17_1, this.h17_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.j17_1 === 8) {
                  this.k17_1 = readArray(this.g17_1);
                  this.u7_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.g17_1.z15_1.d15("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.k17_1 = suspendResult;
          this.u7_1 = 2;
          continue $sm;
        case 2:
          return this.k17_1;
        case 3:
          throw this.x7_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v7_1 === 3) {
        throw e;
      } else {
        this.u7_1 = this.v7_1;
        this.x7_1 = e;
      }
    }
   while (true);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).m17 = function ($this$$receiver, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.g17_1, completion);
  i.h17_1 = $this$$receiver;
  i.i17_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$$receiver, it, $completion) {
    return i.l17($this$$receiver, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.r16_1 = _this__u8e3s4;
  this.s16_1 = _this__u8e3s4_0;
}
protoOf($readObjectCOROUTINE$).c8 = function () {
  var suspendResult = this.w7_1;
  $sm: do
    try {
      var tmp = this.u7_1;
      switch (tmp) {
        case 0:
          this.v7_1 = 5;
          var tmp_0 = this;
          tmp_0.t16_1 = this.r16_1;
          this.u16_1 = this.t16_1;
          this.v16_1 = this.u16_1.z15_1.c16(6);
          if (this.u16_1.z15_1.d16() === 4) {
            this.u16_1.z15_1.d15('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.w16_1 = LinkedHashMap_init_$Create$();
          this.u7_1 = 1;
          continue $sm;
        case 1:
          if (!this.u16_1.z15_1.e16()) {
            this.u7_1 = 4;
            continue $sm;
          }

          this.x16_1 = this.u16_1.a16_1 ? this.u16_1.z15_1.g16() : this.u16_1.z15_1.f16();
          this.u16_1.z15_1.c16(5);
          this.u7_1 = 2;
          suspendResult = this.s16_1.le(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.w16_1;
          var key = this.x16_1;
          tmp0.b2(key, element);
          this.v16_1 = this.u16_1.z15_1.i16();
          var tmp0_subject = this.v16_1;
          if (tmp0_subject === 4) {
            this.u7_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.u7_1 = 4;
              continue $sm;
            } else {
              this.u16_1.z15_1.d15('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.u7_1 = 1;
          continue $sm;
        case 4:
          if (this.v16_1 === 6) {
            this.u16_1.z15_1.c16(7);
          } else if (this.v16_1 === 4) {
            this.u16_1.z15_1.d15('Unexpected trailing comma');
          }

          return new JsonObject(this.w16_1);
        case 5:
          throw this.x7_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.v7_1 === 5) {
        throw e;
      } else {
        this.u7_1 = this.v7_1;
        this.x7_1 = e;
      }
    }
   while (true);
};
function JsonTreeReader(configuration, lexer) {
  this.z15_1 = lexer;
  this.a16_1 = configuration.e12_1;
  this.b16_1 = 0;
}
protoOf(JsonTreeReader).h16 = function () {
  var token = this.z15_1.d16();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.b16_1 = this.b16_1 + 1 | 0;
    if (this.b16_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.b16_1 = this.b16_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.z15_1.d15('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var tmp0_iterator = _this__u8e3s4.bi().j();
  while (tmp0_iterator.k()) {
    var annotation = tmp0_iterator.l();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.n17_1;
  }
  return json.s10_1.l12_1;
}
function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
  var tmp;
  if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.q12().s10_1.k12_1;
  }
  if (tmp) {
    return deserializer.rg(_this__u8e3s4);
  }
  var discriminator = classDiscriminator(deserializer.pg(), _this__u8e3s4.q12());
  var tmp0 = _this__u8e3s4.r12();
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var descriptor = deserializer.pg();
  if (!(tmp0 instanceof JsonObject)) {
    throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.qh() + ', but had ' + toString(getKClassFromExpression(tmp0)));
  }
  var jsonTree = tmp0;
  var tmp0_safe_receiver = jsonTree.u12(discriminator);
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
  var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v12();
  var tmp2_elvis_lhs = deserializer.gh(_this__u8e3s4, type);
  var tmp_0;
  if (tmp2_elvis_lhs == null) {
    throwSerializerNotFound(type, jsonTree);
  } else {
    tmp_0 = tmp2_elvis_lhs;
  }
  var actualSerializer = tmp_0;
  var tmp_1 = _this__u8e3s4.q12();
  return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
}
function throwSerializerNotFound(type, jsonTree) {
  var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
  throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.pg()).o1(classDiscriminator)) {
    var baseName = serializer.pg().qh();
    var actualName = actualSerializer.pg().qh();
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
  var kind = descriptor.ei();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.v8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.o17_1)
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
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.v8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.ci();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.ii(i);
      if (name === $this.p17_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.o17_1 = useArrayPolymorphism;
  this.p17_1 = discriminator;
}
protoOf(PolymorphismValidator).j10 = function (kClass, provider) {
};
protoOf(PolymorphismValidator).m10 = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.pg();
  checkKind_0(this, descriptor, actualClass);
  if (!this.o17_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).n10 = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).o10 = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.e15_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).q17 = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.e15_1;
  var value_0 = this_0.t1(descriptor);
  var tmp;
  if (value_0 == null) {
    var answer = createMapForCache(2);
    this_0.b2(descriptor, answer);
    tmp = answer;
  } else {
    tmp = value_0;
  }
  var tmp0 = tmp;
  var tmp2 = key instanceof Key ? key : THROW_CCE();
  // Inline function 'kotlin.collections.set' call
  var value_1 = !(value == null) ? value : THROW_CCE();
  tmp0.b2(tmp2, value_1);
};
protoOf(DescriptorSchemaCache).f15 = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.r17(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.q17(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).r17 = function (descriptor, key) {
  var tmp0_safe_receiver = this.e15_1.t1(descriptor);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = tmp0_safe_receiver.t1(key instanceof Key ? key : THROW_CCE());
  }
  var tmp_0 = tmp;
  return !(tmp_0 == null) ? tmp_0 : null;
};
function DiscriminatorHolder(discriminatorToSkip) {
  this.s17_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.s17_1 === unknownKey) {
    _this__u8e3s4.s17_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.ok(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.b11_1.d16() === 4) {
    $this.b11_1.d15('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.d11_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.d11_1 === -1)) {
      hasComma = $this.b11_1.u17();
    }
  } else {
    $this.b11_1.t17(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.b11_1.e16()) {
    if (decodingKey) {
      if ($this.d11_1 === -1) {
        var tmp0 = $this.b11_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.h11_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected trailing comma';
          tmp0.d15(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.b11_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.h11_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.d15(tmp$ret$2, position_0);
        }
      }
    }
    $this.d11_1 = $this.d11_1 + 1 | 0;
    tmp = $this.d11_1;
  } else {
    if (hasComma) {
      $this.b11_1.d15("Expected '}', but had ',' instead");
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.z10_1;
  var tmp2 = descriptor.gi(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.xh()) {
      tmp = $this.b11_1.v17(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.ei(), ENUM_getInstance())) {
      var tmp_0;
      if (tmp2.xh()) {
        tmp_0 = $this.b11_1.v17(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.b11_1.w17($this.f11_1.e12_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(tmp2, tmp0, enumValue);
      if (enumIndex === -3) {
        $this.b11_1.f16();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.b11_1.u17();
  while ($this.b11_1.e16()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.b11_1.t17(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.z10_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.f11_1.j12_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.b11_1.u17();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.g11_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.b15(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, key);
    }
  }
  if (hasComma) {
    $this.b11_1.d15('Unexpected trailing comma');
  }
  var tmp1_safe_receiver = $this.g11_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c15();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, key) {
  if ($this.f11_1.d12_1 || trySkip($this, $this.e11_1, key)) {
    $this.b11_1.y17($this.f11_1.e12_1);
  } else {
    $this.b11_1.x17(key);
  }
  return $this.b11_1.u17();
}
function decodeListIndex($this) {
  var hasComma = $this.b11_1.u17();
  var tmp;
  if ($this.b11_1.e16()) {
    if (!($this.d11_1 === -1) && !hasComma) {
      $this.b11_1.d15('Expected end of the array or comma');
    }
    $this.d11_1 = $this.d11_1 + 1 | 0;
    tmp = $this.d11_1;
  } else {
    if (hasComma) {
      $this.b11_1.d15('Unexpected trailing comma');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.f11_1.e12_1) {
    tmp = $this.b11_1.a18();
  } else {
    tmp = $this.b11_1.z17();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.z10_1 = json;
  this.a11_1 = mode;
  this.b11_1 = lexer;
  this.c11_1 = this.z10_1.mk();
  this.d11_1 = -1;
  this.e11_1 = discriminatorHolder;
  this.f11_1 = this.z10_1.s10_1;
  this.g11_1 = this.f11_1.h12_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).q12 = function () {
  return this.z10_1;
};
protoOf(StreamingJsonDecoder).mk = function () {
  return this.c11_1;
};
protoOf(StreamingJsonDecoder).r12 = function () {
  return (new JsonTreeReader(this.z10_1.s10_1, this.b11_1)).h16();
};
protoOf(StreamingJsonDecoder).wj = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.z10_1.s10_1.k12_1;
    }
    if (tmp) {
      return deserializer.rg(this);
    }
    var discriminator = classDiscriminator(deserializer.pg(), this.z10_1);
    var type = this.b11_1.b18(discriminator, this.f11_1.e12_1);
    var actualSerializer = null;
    if (!(type == null)) {
      actualSerializer = deserializer.gh(this, type);
    }
    if (actualSerializer == null) {
      return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
    }
    this.e11_1 = new DiscriminatorHolder(discriminator);
    var tmp_0 = actualSerializer.rg(this);
    var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    return result;
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.sh_1, plus(e.message, ' at path: ') + this.b11_1.i11_1.q15(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).xj = function (descriptor) {
  var newMode = switchMode(this.z10_1, descriptor);
  this.b11_1.i11_1.l15(descriptor);
  this.b11_1.t17(newMode.e18_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.e2_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.z10_1, newMode, this.b11_1, descriptor, this.e11_1);
      break;
    default:
      var tmp_0;
      if (this.a11_1.equals(newMode) && this.z10_1.s10_1.h12_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.z10_1, newMode, this.b11_1, descriptor, this.e11_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).yj = function (descriptor) {
  if (this.z10_1.s10_1.d12_1 && descriptor.ci() === 0) {
    skipLeftoverElements(this, descriptor);
  }
  this.b11_1.t17(this.a11_1.f18_1);
  this.b11_1.i11_1.p15();
};
protoOf(StreamingJsonDecoder).ij = function () {
  var tmp;
  var tmp0_safe_receiver = this.g11_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a15_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.b11_1.g18();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).jj = function () {
  return null;
};
protoOf(StreamingJsonDecoder).jk = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.a11_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.b11_1.i11_1.o15();
  }
  var value = protoOf(AbstractDecoder).jk.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.b11_1.i11_1.n15(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).ok = function (descriptor) {
  var index;
  switch (this.a11_1.e2_1) {
    case 0:
      index = decodeObjectIndex(this, descriptor);
      break;
    case 2:
      index = decodeMapIndex(this);
      break;
    default:
      index = decodeListIndex(this);
      break;
  }
  if (!this.a11_1.equals(WriteMode_MAP_getInstance())) {
    this.b11_1.i11_1.m15(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).kj = function () {
  var tmp;
  if (this.f11_1.e12_1) {
    tmp = this.b11_1.i18();
  } else {
    tmp = this.b11_1.h18();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).lj = function () {
  var value = this.b11_1.d13();
  if (!value.equals(toLong(value.z2()))) {
    this.b11_1.d15("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.z2();
};
protoOf(StreamingJsonDecoder).mj = function () {
  var value = this.b11_1.d13();
  if (!value.equals(toLong(value.a3()))) {
    this.b11_1.d15("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.a3();
};
protoOf(StreamingJsonDecoder).nj = function () {
  var value = this.b11_1.d13();
  if (!value.equals(toLong(value.a1()))) {
    this.b11_1.d15("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.a1();
};
protoOf(StreamingJsonDecoder).oj = function () {
  return this.b11_1.d13();
};
protoOf(StreamingJsonDecoder).pj = function () {
  var tmp0 = this.b11_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.g16();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.d15("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.z10_1.s10_1.m12_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.b11_1, result);
};
protoOf(StreamingJsonDecoder).qj = function () {
  var tmp0 = this.b11_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.g16();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.d15("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.z10_1.s10_1.m12_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.b11_1, result);
};
protoOf(StreamingJsonDecoder).rj = function () {
  var string = this.b11_1.g16();
  if (!(string.length === 1)) {
    this.b11_1.d15("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).sj = function () {
  var tmp;
  if (this.f11_1.e12_1) {
    tmp = this.b11_1.a18();
  } else {
    tmp = this.b11_1.f16();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).uj = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.b11_1, this.z10_1) : protoOf(AbstractDecoder).uj.call(this, descriptor);
};
protoOf(StreamingJsonDecoder).tj = function (enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.z10_1, this.sj(), ' at path ' + this.b11_1.i11_1.q15());
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.j18_1 = lexer;
  this.k18_1 = json.mk();
}
protoOf(JsonDecoderForUnsignedTypes).mk = function () {
  return this.k18_1;
};
protoOf(JsonDecoderForUnsignedTypes).ok = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).nj = function () {
  var tmp0 = this.j18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.g16();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.d15("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).oj = function () {
  var tmp0 = this.j18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.g16();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.d15("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).lj = function () {
  var tmp0 = this.j18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.g16();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.d15("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).mj = function () {
  var tmp0 = this.j18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.g16();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.d15("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
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
  $this.r15_1.z13();
  $this.bl(ensureNotNull($this.y15_1));
  $this.r15_1.b14(_Char___init__impl__6a9atx(58));
  $this.r15_1.a14();
  $this.bl(descriptor.qh());
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.r15_1 = composer;
  this.s15_1 = json;
  this.t15_1 = mode;
  this.u15_1 = modeReuseCache;
  this.v15_1 = this.s15_1.mk();
  this.w15_1 = this.s15_1.s10_1;
  this.x15_1 = false;
  this.y15_1 = null;
  var i = this.t15_1.e2_1;
  if (!(this.u15_1 == null)) {
    if (!(this.u15_1[i] === null) || !(this.u15_1[i] === this)) {
      this.u15_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).q12 = function () {
  return this.s15_1;
};
protoOf(StreamingJsonEncoder).mk = function () {
  return this.v15_1;
};
protoOf(StreamingJsonEncoder).ul = function (descriptor, index) {
  return this.w15_1.c12_1;
};
protoOf(StreamingJsonEncoder).pl = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.q12().s10_1.k12_1;
    }
    if (tmp) {
      serializer.qg(this, value);
      break $l$block;
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.pg(), this.q12());
    var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
    access$validateIfSealed$tPolymorphicKt(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.pg().ei());
    this.y15_1 = baseClassDiscriminator;
    actualSerializer.qg(this, value);
  }
};
protoOf(StreamingJsonEncoder).xj = function (descriptor) {
  var newMode = switchMode(this.s15_1, descriptor);
  if (!(newMode.e18_1 === _Char___init__impl__6a9atx(0))) {
    this.r15_1.b14(newMode.e18_1);
    this.r15_1.x13();
  }
  if (!(this.y15_1 == null)) {
    encodeTypeInfo(this, descriptor);
    this.y15_1 = null;
  }
  if (this.t15_1.equals(newMode)) {
    return this;
  }
  var tmp0_safe_receiver = this.u15_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.e2_1];
  return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.r15_1, this.s15_1, newMode, this.u15_1) : tmp1_elvis_lhs;
};
protoOf(StreamingJsonEncoder).yj = function (descriptor) {
  if (!(this.t15_1.f18_1 === _Char___init__impl__6a9atx(0))) {
    this.r15_1.y13();
    this.r15_1.z13();
    this.r15_1.b14(this.t15_1.f18_1);
  }
};
protoOf(StreamingJsonEncoder).qk = function (descriptor, index) {
  switch (this.t15_1.e2_1) {
    case 1:
      if (!this.r15_1.w13_1) {
        this.r15_1.b14(_Char___init__impl__6a9atx(44));
      }

      this.r15_1.z13();
      break;
    case 2:
      if (!this.r15_1.w13_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.r15_1.b14(_Char___init__impl__6a9atx(44));
          this.r15_1.z13();
          tmp_0 = true;
        } else {
          this.r15_1.b14(_Char___init__impl__6a9atx(58));
          this.r15_1.a14();
          tmp_0 = false;
        }
        tmp.x15_1 = tmp_0;
      } else {
        this.x15_1 = true;
        this.r15_1.z13();
      }

      break;
    case 3:
      if (index === 0)
        this.x15_1 = true;
      if (index === 1) {
        this.r15_1.b14(_Char___init__impl__6a9atx(44));
        this.r15_1.a14();
        this.x15_1 = false;
      }

      break;
    default:
      if (!this.r15_1.w13_1) {
        this.r15_1.b14(_Char___init__impl__6a9atx(44));
      }

      this.r15_1.z13();
      this.bl(getJsonElementName(descriptor, this.s15_1, index));
      this.r15_1.b14(_Char___init__impl__6a9atx(58));
      this.r15_1.a14();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).ql = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.w15_1.h12_1) {
    protoOf(AbstractEncoder).ql.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).dl = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.r15_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.r15_1;
    } else {
      var tmp0 = this.r15_1.v13_1;
      var p1 = this.x15_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.s15_1, this.t15_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.r15_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.r15_1;
    } else {
      var tmp0_0 = this.r15_1.v13_1;
      var p1_0 = this.x15_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.s15_1, this.t15_1, null);
  } else {
    tmp = protoOf(AbstractEncoder).dl.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).sk = function () {
  this.r15_1.d14('null');
};
protoOf(StreamingJsonEncoder).tk = function (value) {
  if (this.x15_1) {
    this.bl(value.toString());
  } else {
    this.r15_1.m14(value);
  }
};
protoOf(StreamingJsonEncoder).uk = function (value) {
  if (this.x15_1) {
    this.bl(value.toString());
  } else {
    this.r15_1.h14(value);
  }
};
protoOf(StreamingJsonEncoder).vk = function (value) {
  if (this.x15_1) {
    this.bl(value.toString());
  } else {
    this.r15_1.j14(value);
  }
};
protoOf(StreamingJsonEncoder).wk = function (value) {
  if (this.x15_1) {
    this.bl(value.toString());
  } else {
    this.r15_1.k14(value);
  }
};
protoOf(StreamingJsonEncoder).xk = function (value) {
  if (this.x15_1) {
    this.bl(value.toString());
  } else {
    this.r15_1.l14(value);
  }
};
protoOf(StreamingJsonEncoder).yk = function (value) {
  if (this.x15_1) {
    this.bl(value.toString());
  } else {
    this.r15_1.f14(value);
  }
  if (!this.w15_1.m12_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.r15_1.v13_1));
  }
};
protoOf(StreamingJsonEncoder).zk = function (value) {
  if (this.x15_1) {
    this.bl(value.toString());
  } else {
    this.r15_1.g14(value);
  }
  if (!this.w15_1.m12_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.r15_1.v13_1));
  }
};
protoOf(StreamingJsonEncoder).al = function (value) {
  this.bl(toString_1(value));
};
protoOf(StreamingJsonEncoder).bl = function (value) {
  return this.r15_1.n14(value);
};
protoOf(StreamingJsonEncoder).cl = function (enumDescriptor, index) {
  this.bl(enumDescriptor.ii(index));
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.di() && get_unsignedNumberDescriptors().o1(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.di() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).pg(), serializer_0(Companion_getInstance()).pg(), serializer_2(Companion_getInstance_1()).pg(), serializer_3(Companion_getInstance_2()).pg()]);
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
  _this__u8e3s4.j7(_Char___init__impl__6a9atx(34));
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
        _this__u8e3s4.ga(value, lastPos, i);
        _this__u8e3s4.i7(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0)) {
    _this__u8e3s4.ga(value, lastPos, value.length);
  } else {
    _this__u8e3s4.i7(value);
  }
  _this__u8e3s4.j7(_Char___init__impl__6a9atx(34));
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
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
function unparsedPrimitive($this, primitive) {
  throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.q18()));
}
function asLiteral($this, _this__u8e3s4, type) {
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function AbstractJsonTreeDecoder(json, value) {
  NamedValueDecoder.call(this);
  this.n18_1 = json;
  this.o18_1 = value;
  this.p18_1 = this.q12().s10_1;
}
protoOf(AbstractJsonTreeDecoder).q12 = function () {
  return this.n18_1;
};
protoOf(AbstractJsonTreeDecoder).r1 = function () {
  return this.o18_1;
};
protoOf(AbstractJsonTreeDecoder).mk = function () {
  return this.q12().mk();
};
protoOf(AbstractJsonTreeDecoder).q18 = function () {
  var tmp0_safe_receiver = this.by();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.r18(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.r1() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).r12 = function () {
  return this.q18();
};
protoOf(AbstractJsonTreeDecoder).wj = function (deserializer) {
  return decodeSerializableValuePolymorphic(this, deserializer);
};
protoOf(AbstractJsonTreeDecoder).cy = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).xj = function (descriptor) {
  var currentObject = this.q18();
  var tmp0_subject = descriptor.ei();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.q12();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    if (!(currentObject instanceof JsonArray)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.qh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.q12();
      var keyDescriptor = carrierDescriptor(descriptor.gi(0), this_0.mk());
      var keyKind = keyDescriptor.ei();
      var tmp_2;
      var tmp_3;
      if (keyKind instanceof PrimitiveKind) {
        tmp_3 = true;
      } else {
        tmp_3 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_3) {
        var tmp_4 = this.q12();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.qh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
        }
        tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
      } else {
        if (this_0.s10_1.f12_1) {
          var tmp_5 = this.q12();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonArray)) {
            throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.qh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
          }
          tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_2;
    } else {
      var tmp_6 = this.q12();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.qh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
      }
      tmp = new JsonTreeDecoder(tmp_6, currentObject);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).yj = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).ij = function () {
  var tmp = this.q18();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).s18 = function (tag) {
  var currentElement = this.r18(tag);
  var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + toString(currentElement), toString(this.q18()));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).t18 = function (tag, enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.q12(), this.s18(tag).v12());
};
protoOf(AbstractJsonTreeDecoder).oy = function (tag, enumDescriptor) {
  return this.t18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
};
protoOf(AbstractJsonTreeDecoder).u18 = function (tag) {
  return !(this.r18(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).ey = function (tag) {
  return this.u18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).v18 = function (tag) {
  var value = this.s18(tag);
  if (!this.q12().s10_1.e12_1) {
    var literal = asLiteral(this, value, 'boolean');
    if (literal.a13_1)
      throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.q18()));
  }
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = get_booleanOrNull(value);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var tmp0_elvis_lhs_0 = tmp;
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        unparsedPrimitive(this, 'boolean');
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      tmp$ret$1 = tmp_0;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'boolean');
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$1;
};
protoOf(AbstractJsonTreeDecoder).fy = function (tag) {
  return this.v18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).w18 = function (tag) {
  var tmp2 = this.s18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var result = get_int(tmp2);
      var tmp0_elvis_lhs = (-128 <= result ? result <= 127 : false) ? toByte(result) : null;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'byte');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'byte');
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$1;
};
protoOf(AbstractJsonTreeDecoder).gy = function (tag) {
  return this.w18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).x18 = function (tag) {
  var tmp2 = this.s18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var result = get_int(tmp2);
      var tmp0_elvis_lhs = (-32768 <= result ? result <= 32767 : false) ? toShort(result) : null;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'short');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'short');
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$1;
};
protoOf(AbstractJsonTreeDecoder).hy = function (tag) {
  return this.x18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).y18 = function (tag) {
  var tmp2 = this.s18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = get_int(tmp2);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'int');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'int');
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$1;
};
protoOf(AbstractJsonTreeDecoder).iy = function (tag) {
  return this.y18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).z18 = function (tag) {
  var tmp2 = this.s18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = get_long(tmp2);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'long');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'long');
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$1;
};
protoOf(AbstractJsonTreeDecoder).jy = function (tag) {
  return this.z18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).a19 = function (tag) {
  var tmp2 = this.s18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = get_float(tmp2);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'float');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'float');
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.q12().s10_1.m12_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.q18()));
};
protoOf(AbstractJsonTreeDecoder).ky = function (tag) {
  return this.a19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).b19 = function (tag) {
  var tmp2 = this.s18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = get_double(tmp2);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'double');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'double');
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.q12().s10_1.m12_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.q18()));
};
protoOf(AbstractJsonTreeDecoder).ly = function (tag) {
  return this.b19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).c19 = function (tag) {
  var tmp2 = this.s18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = new Char(single(tmp2.v12()));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'char');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp.c1_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, 'char');
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$1;
};
protoOf(AbstractJsonTreeDecoder).my = function (tag) {
  return this.c19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).d19 = function (tag) {
  var value = this.s18(tag);
  if (!this.q12().s10_1.e12_1) {
    var literal = asLiteral(this, value, 'string');
    if (!literal.a13_1)
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.q18()));
  }
  if (value instanceof JsonNull)
    throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.q18()));
  return value.v12();
};
protoOf(AbstractJsonTreeDecoder).ny = function (tag) {
  return this.d19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).e19 = function (tag, inlineDescriptor) {
  return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.s18(tag).v12()), this.q12()) : protoOf(NamedValueDecoder).py.call(this, tag, inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).py = function (tag, inlineDescriptor) {
  return this.e19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).uj = function (descriptor) {
  return !(this.by() == null) ? protoOf(NamedValueDecoder).uj.call(this, descriptor) : (new JsonPrimitiveDecoder(this.q12(), this.r1())).uj(descriptor);
};
function coerceInputValue_0($this, descriptor, index, tag) {
  var tmp0 = $this.q12();
  var tmp2 = descriptor.gi(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.xh()) {
      var tmp_0 = $this.r18(tag);
      tmp = tmp_0 instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.ei(), ENUM_getInstance())) {
      var tmp_1;
      if (tmp2.xh()) {
        var tmp_2 = $this.r18(tag);
        tmp_1 = tmp_2 instanceof JsonNull;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp_3 = $this.r18(tag);
      var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
      var tmp_4;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_4 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_4;
      var enumIndex = getJsonNameIndex(tmp2, tmp0, enumValue);
      if (enumIndex === -3) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function absenceIsNull($this, descriptor, index) {
  $this.o19_1 = (!$this.q12().s10_1.h12_1 && !descriptor.ji(index) && descriptor.gi(index).xh());
  return $this.o19_1;
}
function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
  polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value);
  this.k19_1 = value;
  this.l19_1 = polyDiscriminator;
  this.m19_1 = polyDescriptor;
  this.n19_1 = 0;
  this.o19_1 = false;
}
protoOf(JsonTreeDecoder).r1 = function () {
  return this.k19_1;
};
protoOf(JsonTreeDecoder).ok = function (descriptor) {
  while (this.n19_1 < descriptor.ci()) {
    var tmp1 = this.n19_1;
    this.n19_1 = tmp1 + 1 | 0;
    var name = this.wx(descriptor, tmp1);
    var index = this.n19_1 - 1 | 0;
    this.o19_1 = false;
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.r1();
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).s1(name)) {
      tmp_0 = true;
    } else {
      tmp_0 = absenceIsNull(this, descriptor, index);
    }
    if (tmp_0) {
      tmp = !this.p18_1.j12_1 || !coerceInputValue_0(this, descriptor, index, name);
    } else {
      tmp = false;
    }
    if (tmp) {
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).ij = function () {
  return !this.o19_1 && protoOf(AbstractJsonTreeDecoder).ij.call(this);
};
protoOf(JsonTreeDecoder).xx = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.q12());
  var baseName = descriptor.ii(index);
  if (strategy == null) {
    if (!this.p18_1.n12_1)
      return baseName;
    if (this.r1().u1().o1(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.q12(), descriptor);
  // Inline function 'kotlin.collections.find' call
  var tmp0 = this.r1().u1();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (deserializationNamesMap_0.t1(element) === index) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_safe_receiver = tmp$ret$1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var fallbackName = strategy == null ? null : strategy.h15(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).r18 = function (tag) {
  return getValue(this.r1(), tag);
};
protoOf(JsonTreeDecoder).xj = function (descriptor) {
  if (descriptor === this.m19_1) {
    var tmp = this.q12();
    var tmp0 = this.q18();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var descriptor_0 = this.m19_1;
    if (!(tmp0 instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor_0.qh() + ', but had ' + toString(getKClassFromExpression(tmp0)));
    }
    return new JsonTreeDecoder(tmp, tmp0, this.l19_1, this.m19_1);
  }
  return protoOf(AbstractJsonTreeDecoder).xj.call(this, descriptor);
};
protoOf(JsonTreeDecoder).yj = function (descriptor) {
  var tmp;
  if (this.p18_1.d12_1) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.ei();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.q12());
  var tmp_1;
  if (strategy == null && !this.p18_1.n12_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.q12(), descriptor).u1();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.q12()).r17(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var tmp1_iterator = this.r1().u1().j();
  while (tmp1_iterator.k()) {
    var key = tmp1_iterator.l();
    if (!names.o1(key) && !(key === this.l19_1)) {
      throw UnknownKeyException(key, this.r1().toString());
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.u19_1 = value;
  this.v19_1 = this.u19_1.m();
  this.w19_1 = -1;
}
protoOf(JsonTreeListDecoder).r1 = function () {
  return this.u19_1;
};
protoOf(JsonTreeListDecoder).xx = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).r18 = function (tag) {
  return this.u19_1.o(toInt(tag));
};
protoOf(JsonTreeListDecoder).ok = function (descriptor) {
  while (this.w19_1 < (this.v19_1 - 1 | 0)) {
    this.w19_1 = this.w19_1 + 1 | 0;
    return this.w19_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.c1a_1 = value;
  this.qy('primitive');
}
protoOf(JsonPrimitiveDecoder).r1 = function () {
  return this.c1a_1;
};
protoOf(JsonPrimitiveDecoder).ok = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).r18 = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.c1a_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.n1a_1 = value;
  this.o1a_1 = toList(this.n1a_1.u1());
  this.p1a_1 = imul(this.o1a_1.m(), 2);
  this.q1a_1 = -1;
}
protoOf(JsonTreeMapDecoder).r1 = function () {
  return this.n1a_1;
};
protoOf(JsonTreeMapDecoder).xx = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.o1a_1.o(i);
};
protoOf(JsonTreeMapDecoder).ok = function (descriptor) {
  while (this.q1a_1 < (this.p1a_1 - 1 | 0)) {
    this.q1a_1 = this.q1a_1 + 1 | 0;
    return this.q1a_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).r18 = function (tag) {
  return (this.q1a_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.n1a_1, tag);
};
protoOf(JsonTreeMapDecoder).yj = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.pg())).wj(deserializer);
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
  this.e18_1 = begin;
  this.f18_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.ei();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.gi(0), _this__u8e3s4.mk());
        var keyKind = keyDescriptor.ei();
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
          if (_this__u8e3s4.s10_1.f12_1) {
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
  if (equals(_this__u8e3s4.ei(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.di()) {
    tmp = carrierDescriptor(_this__u8e3s4.gi(0), module_0);
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
function appendEscape($this, lastPosition, current) {
  $this.r1a(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.r1a(lastPosition, currentPosition);
  var result = $this.k11_1.toString();
  $this.k11_1.la(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.j11_1);
  $this.j11_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.s1a(), $this.h11_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.t1a(currentPosition);
  if (currentPosition === -1) {
    $this.d15('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.s1a();
  var tmp0 = currentPosition;
  currentPosition = tmp0 + 1 | 0;
  var currentChar = charSequenceGet(tmp, tmp0);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.s1a(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.d15("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.k11_1.j7(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.h11_1 = startPos;
    $this.u1a();
    if (($this.h11_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.d15('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.h11_1);
  }
  $this.k11_1.j7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.d15("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.t1a(start);
  if (current >= charSequenceLength($this.s1a()) || current === -1) {
    $this.d15('EOF');
  }
  var tmp = $this.s1a();
  var tmp0 = current;
  current = tmp0 + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, tmp0);
  var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.d15("Expected valid boolean literal prefix, but had '" + $this.g16() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.s1a()) - current | 0) < literalSuffix.length) {
    $this.d15('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.s1a(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.d15("Expected valid boolean literal prefix, but had '" + $this.g16() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.h11_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -exponentAccumulator.b3();
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = exponentAccumulator.b3();
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function AbstractJsonLexer() {
  this.h11_1 = 0;
  this.i11_1 = new JsonPath();
  this.j11_1 = null;
  this.k11_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).u1a = function () {
};
protoOf(AbstractJsonLexer).v1a = function (c) {
  return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).l11 = function () {
  var nextToken = this.i16();
  if (!(nextToken === 10)) {
    this.d15('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.s1a(), this.h11_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).c16 = function (expected) {
  var token = this.i16();
  if (!(token === expected)) {
    this.w1a(expected);
  }
  return token;
};
protoOf(AbstractJsonLexer).t17 = function (expected) {
  this.u1a();
  var source = this.s1a();
  var cpos = this.h11_1;
  $l$loop_0: while (true) {
    cpos = this.t1a(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var tmp0 = cpos;
    cpos = tmp0 + 1 | 0;
    var c = charSequenceGet(source, tmp0);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop_0;
    this.h11_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.x1a(expected);
  }
  this.h11_1 = cpos;
  this.x1a(expected);
};
protoOf(AbstractJsonLexer).x1a = function (expected) {
  if (this.h11_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.h11_1;
      try {
        this.h11_1 = this.h11_1 - 1 | 0;
        tmp$ret$1 = this.g16();
        break $l$block;
      }finally {
        this.h11_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.y1a("Expected string literal but 'null' literal was found", this.h11_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
    }
  }
  this.w1a(charToTokenClass(expected));
};
protoOf(AbstractJsonLexer).z1a = function (expectedToken, wasConsumed) {
  var expected = tokenDescription(expectedToken);
  var position = wasConsumed ? this.h11_1 - 1 | 0 : this.h11_1;
  var s = this.h11_1 === charSequenceLength(this.s1a()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s1a(), position));
  this.d15('Expected ' + expected + ", but had '" + s + "' instead", position);
};
protoOf(AbstractJsonLexer).w1a = function (expectedToken, wasConsumed, $super) {
  wasConsumed = wasConsumed === VOID ? true : wasConsumed;
  return $super === VOID ? this.z1a(expectedToken, wasConsumed) : $super.z1a.call(this, expectedToken, wasConsumed);
};
protoOf(AbstractJsonLexer).d16 = function () {
  var source = this.s1a();
  var cpos = this.h11_1;
  $l$loop_0: while (true) {
    cpos = this.t1a(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.h11_1 = cpos;
    return charToTokenClass(ch);
  }
  this.h11_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).v17 = function (doConsume) {
  var current = this.a1b();
  current = this.t1a(current);
  var len = charSequenceLength(this.s1a()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.s1a(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.s1a(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.h11_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).g18 = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.v17(doConsume) : $super.v17.call(this, doConsume);
};
protoOf(AbstractJsonLexer).a1b = function () {
  var current = this.h11_1;
  $l$loop_0: while (true) {
    current = this.t1a(current);
    if (current === -1)
      break $l$loop_0;
    var c = charSequenceGet(this.s1a(), current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop_0;
    }
  }
  this.h11_1 = current;
  return current;
};
protoOf(AbstractJsonLexer).w17 = function (isLenient) {
  var token = this.d16();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.g16();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.f16();
  }
  var string = tmp;
  this.j11_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).b1b = function () {
  this.j11_1 = null;
};
protoOf(AbstractJsonLexer).c1b = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.s1a();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).f16 = function () {
  if (!(this.j11_1 == null)) {
    return takePeeked(this);
  }
  return this.z17();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.t1a(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.d15('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.r1a(lastPosition, currentPosition);
        currentPosition = this.t1a(currentPosition);
        if (currentPosition === -1) {
          this.d15('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.c1b(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.h11_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).a18 = function () {
  var result = this.g16();
  if (result === 'null' && wasUnquotedString(this)) {
    this.d15("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).g16 = function () {
  if (!(this.j11_1 == null)) {
    return takePeeked(this);
  }
  var current = this.a1b();
  if (current >= charSequenceLength(this.s1a()) || current === -1) {
    this.d15('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.s1a(), current));
  if (token === 1) {
    return this.f16();
  }
  if (!(token === 0)) {
    this.d15('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.s1a(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.s1a(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.s1a())) {
      usedAppend = true;
      this.r1a(this.h11_1, current);
      var eof = this.t1a(current);
      if (eof === -1) {
        this.h11_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.c1b(this.h11_1, current);
  } else {
    tmp = decodedString(this, this.h11_1, current);
  }
  var result = tmp;
  this.h11_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).r1a = function (fromIndex, toIndex) {
  this.k11_1.ga(this.s1a(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).y17 = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.d16();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.g16();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.d16();
    if (lastToken === 1) {
      if (allowLenientStrings) {
        this.g16();
      } else {
        this.z17();
      }
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
      tokenStack.e(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.h11_1, 'found ] instead of } at path: ' + this.i11_1.toString(), this.s1a());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.h11_1, 'found } instead of ] at path: ' + this.i11_1.toString(), this.s1a());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.d15('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.i16();
    if (tokenStack.m() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.s1a()) + "', currentPosition=" + this.h11_1 + ')';
};
protoOf(AbstractJsonLexer).x17 = function (key) {
  var processed = this.c1b(0, this.h11_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  this.y1a("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
};
protoOf(AbstractJsonLexer).y1a = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.i11_1.q15() + hintMessage, this.s1a());
};
protoOf(AbstractJsonLexer).d15 = function (message, position, hint, $super) {
  position = position === VOID ? this.h11_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.y1a(message, position, hint) : $super.y1a.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).d13 = function () {
  var current = this.a1b();
  current = this.t1a(current);
  if (current >= charSequenceLength(this.s1a()) || current === -1) {
    this.d15('EOF');
  }
  var tmp;
  if (charSequenceGet(this.s1a(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.s1a())) {
      this.d15('EOF');
    }
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var accumulator = new Long(0, 0);
  var exponentAccumulator = new Long(0, 0);
  var isNegative = false;
  var isExponentPositive = false;
  var hasExponent = false;
  var start = current;
  $l$loop_4: while (!(current === charSequenceLength(this.s1a()))) {
    var ch = charSequenceGet(this.s1a(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.d15('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.d15("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.d15("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.d15("Unexpected symbol '-' in numeric literal");
      }
      isNegative = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    var token = charToTokenClass(ch);
    if (!(token === 0))
      break $l$loop_4;
    current = current + 1 | 0;
    var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
    if (!(0 <= digit ? digit <= 9 : false)) {
      this.d15("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
    }
    if (hasExponent) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.plus' call
      exponentAccumulator = exponentAccumulator.o2(toLong(10)).m2(toLong(digit));
      continue $l$loop_4;
    }
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.minus' call
    accumulator = accumulator.o2(toLong(10)).n2(toLong(digit));
    if (accumulator.y(new Long(0, 0)) > 0) {
      this.d15('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.d15('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.d15('EOF');
    }
    if (!(charSequenceGet(this.s1a(), current) === _Char___init__impl__6a9atx(34))) {
      this.d15('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.h11_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.b3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).b3() || doubleAccumulator < (new Long(0, -2147483648)).b3()) {
      this.d15('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.d15("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.r2();
  } else {
    this.d15('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).h18 = function () {
  return consumeBoolean2(this, this.a1b());
};
protoOf(AbstractJsonLexer).i18 = function () {
  var current = this.a1b();
  if (current === charSequenceLength(this.s1a())) {
    this.d15('EOF');
  }
  var tmp;
  if (charSequenceGet(this.s1a(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.h11_1 === charSequenceLength(this.s1a())) {
      this.d15('EOF');
    }
    if (!(charSequenceGet(this.s1a(), this.h11_1) === _Char___init__impl__6a9atx(34))) {
      this.d15('Expected closing quotation mark');
    }
    this.h11_1 = this.h11_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().e1b_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().d1b_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.d1b_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.e1b_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.d1b_1 = charArray(117);
  this.e1b_1 = new Int8Array(126);
  initEscape(this);
  initCharToToken(this);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance == null)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexer(source) {
  AbstractJsonLexer.call(this);
  this.j1b_1 = source;
}
protoOf(StringJsonLexer).s1a = function () {
  return this.j1b_1;
};
protoOf(StringJsonLexer).t1a = function (position) {
  return position < this.j1b_1.length ? position : -1;
};
protoOf(StringJsonLexer).i16 = function () {
  var source = this.j1b_1;
  $l$loop: while (!(this.h11_1 === -1) && this.h11_1 < source.length) {
    var tmp1 = this.h11_1;
    this.h11_1 = tmp1 + 1 | 0;
    var ch = charCodeAt(source, tmp1);
    var tc = charToTokenClass(ch);
    var tmp;
    if (tc === 3) {
      continue $l$loop;
    } else {
      tmp = tc;
    }
    return tmp;
  }
  return 10;
};
protoOf(StringJsonLexer).u17 = function () {
  var current = this.a1b();
  if (current === this.j1b_1.length || current === -1)
    return false;
  if (charCodeAt(this.j1b_1, current) === _Char___init__impl__6a9atx(44)) {
    this.h11_1 = this.h11_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(StringJsonLexer).e16 = function () {
  var current = this.h11_1;
  if (current === -1)
    return false;
  $l$loop: while (current < this.j1b_1.length) {
    var c = charCodeAt(this.j1b_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.h11_1 = current;
    return this.v1a(c);
  }
  this.h11_1 = current;
  return false;
};
protoOf(StringJsonLexer).a1b = function () {
  var current = this.h11_1;
  if (current === -1)
    return current;
  $l$loop: while (current < this.j1b_1.length) {
    var c = charCodeAt(this.j1b_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.h11_1 = current;
  return current;
};
protoOf(StringJsonLexer).t17 = function (expected) {
  if (this.h11_1 === -1) {
    this.x1a(expected);
  }
  var source = this.j1b_1;
  $l$loop: while (this.h11_1 < source.length) {
    var tmp1 = this.h11_1;
    this.h11_1 = tmp1 + 1 | 0;
    var c = charCodeAt(source, tmp1);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    if (c === expected)
      return Unit_instance;
    this.x1a(expected);
  }
  this.h11_1 = -1;
  this.x1a(expected);
};
protoOf(StringJsonLexer).z17 = function () {
  this.t17(_Char___init__impl__6a9atx(34));
  var current = this.h11_1;
  var closingQuote = indexOf(this.j1b_1, _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.g16();
    this.z1a(1, false);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.j1b_1, i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.j1b_1, this.h11_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.h11_1 = closingQuote + 1 | 0;
  return substring(this.j1b_1, current, closingQuote);
};
protoOf(StringJsonLexer).b18 = function (keyToMatch, isLenient) {
  var positionSnapshot = this.h11_1;
  try {
    if (!(this.i16() === 6))
      return null;
    var firstKey = this.w17(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.b1b();
    if (!(this.i16() === 5))
      return null;
    return this.w17(isLenient);
  }finally {
    this.h11_1 = positionSnapshot;
    this.b1b();
  }
};
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.u10_1;
}
function JsonToStringWriter() {
  this.x10_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).i14 = function (value) {
  this.x10_1.h7(value);
};
protoOf(JsonToStringWriter).c14 = function (char) {
  this.x10_1.j7(char);
};
protoOf(JsonToStringWriter).e14 = function (text) {
  this.x10_1.i7(text);
};
protoOf(JsonToStringWriter).o14 = function (text) {
  printQuoted(this.x10_1, text);
};
protoOf(JsonToStringWriter).y10 = function () {
  this.x10_1.ma();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.x10_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(defer$1).xh = get_isNullable;
protoOf(defer$1).di = get_isInline;
protoOf(defer$1).bi = get_annotations;
protoOf(PolymorphismValidator).l10 = contextual;
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
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
