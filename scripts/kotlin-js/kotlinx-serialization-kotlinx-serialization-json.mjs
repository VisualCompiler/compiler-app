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
  this.m10_1 = configuration;
  this.n10_1 = serializersModule;
  this.o10_1 = new DescriptorSchemaCache();
}
protoOf(Json).gk = function () {
  return this.n10_1;
};
protoOf(Json).p10 = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.s10();
  }
};
protoOf(Json).q10 = function (deserializer, string) {
  var lexer = new StringJsonLexer(string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.jg(), null);
  var result = input.qj(deserializer);
  lexer.f11();
  return result;
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.v11();
  return new JsonImpl(conf, builder.u11_1);
}
function JsonBuilder(json) {
  this.g11_1 = json.m10_1.w11_1;
  this.h11_1 = json.m10_1.b12_1;
  this.i11_1 = json.m10_1.x11_1;
  this.j11_1 = json.m10_1.y11_1;
  this.k11_1 = json.m10_1.z11_1;
  this.l11_1 = json.m10_1.a12_1;
  this.m11_1 = json.m10_1.c12_1;
  this.n11_1 = json.m10_1.d12_1;
  this.o11_1 = json.m10_1.e12_1;
  this.p11_1 = json.m10_1.f12_1;
  this.q11_1 = json.m10_1.g12_1;
  this.r11_1 = json.m10_1.h12_1;
  this.s11_1 = json.m10_1.i12_1;
  this.t11_1 = json.m10_1.j12_1;
  this.u11_1 = json.gk();
}
protoOf(JsonBuilder).v11 = function () {
  if (this.o11_1) {
    // Inline function 'kotlin.require' call
    if (!(this.p11_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  if (!this.l11_1) {
    // Inline function 'kotlin.require' call
    if (!(this.m11_1 === '    ')) {
      var message_0 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  } else if (!(this.m11_1 === '    ')) {
    var tmp0 = this.m11_1;
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
      var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.m11_1;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  return new JsonConfiguration(this.g11_1, this.i11_1, this.j11_1, this.k11_1, this.l11_1, this.h11_1, this.m11_1, this.n11_1, this.o11_1, this.p11_1, this.q11_1, this.r11_1, this.s11_1, this.t11_1);
};
function validateConfiguration($this) {
  if (equals($this.gk(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.m10_1.e12_1, $this.m10_1.f12_1);
  $this.gk().vz(collector);
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
  this.w11_1 = encodeDefaults;
  this.x11_1 = ignoreUnknownKeys;
  this.y11_1 = isLenient;
  this.z11_1 = allowStructuredMapKeys;
  this.a12_1 = prettyPrint;
  this.b12_1 = explicitNulls;
  this.c12_1 = prettyPrintIndent;
  this.d12_1 = coerceInputValues;
  this.e12_1 = useArrayPolymorphism;
  this.f12_1 = classDiscriminator;
  this.g12_1 = allowSpecialFloatingPointValues;
  this.h12_1 = useAlternativeNames;
  this.i12_1 = namingStrategy;
  this.j12_1 = decodeEnumsCaseInsensitive;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.w11_1 + ', ignoreUnknownKeys=' + this.x11_1 + ', isLenient=' + this.y11_1 + ', ' + ('allowStructuredMapKeys=' + this.z11_1 + ', prettyPrint=' + this.a12_1 + ', explicitNulls=' + this.b12_1 + ', ') + ("prettyPrintIndent='" + this.c12_1 + "', coerceInputValues=" + this.d12_1 + ', useArrayPolymorphism=' + this.e12_1 + ', ') + ("classDiscriminator='" + this.f12_1 + "', allowSpecialFloatingPointValues=" + this.g12_1 + ', useAlternativeNames=' + this.h12_1 + ', ') + ('namingStrategy=' + toString_0(this.i12_1) + ', decodeEnumsCaseInsensitive=' + this.j12_1 + ')');
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
  var k = _name_for_destructuring_parameter_0__wldtmu.r1();
  // Inline function 'kotlin.collections.component2' call
  var v = _name_for_destructuring_parameter_0__wldtmu.s1();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  printQuoted(this_0, k);
  this_0.i7(_Char___init__impl__6a9atx(58));
  this_0.g7(v);
  return this_0.toString();
}
function JsonObject(content) {
  JsonElement.call(this);
  this.m12_1 = content;
}
protoOf(JsonObject).w1 = function () {
  return this.m12_1.w1();
};
protoOf(JsonObject).v1 = function () {
  return this.m12_1.v1();
};
protoOf(JsonObject).m = function () {
  return this.m12_1.m();
};
protoOf(JsonObject).n12 = function (key) {
  return this.m12_1.t1(key);
};
protoOf(JsonObject).t1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.n12((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).o12 = function (key) {
  return this.m12_1.u1(key);
};
protoOf(JsonObject).u1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.o12((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).o = function () {
  return this.m12_1.o();
};
protoOf(JsonObject).equals = function (other) {
  return equals(this.m12_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.m12_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.m12_1.w1();
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
  return this.p12();
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
  this.q12_1 = content;
}
protoOf(JsonArray).m = function () {
  return this.q12_1.m();
};
protoOf(JsonArray).r12 = function (element) {
  return this.q12_1.r(element);
};
protoOf(JsonArray).r = function (element) {
  if (!(element instanceof JsonElement))
    return false;
  return this.r12(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).n = function (index) {
  return this.q12_1.n(index);
};
protoOf(JsonArray).s12 = function (element) {
  return this.q12_1.s(element);
};
protoOf(JsonArray).s = function (element) {
  if (!(element instanceof JsonElement))
    return -1;
  return this.s12(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).o = function () {
  return this.q12_1.o();
};
protoOf(JsonArray).j = function () {
  return this.q12_1.j();
};
protoOf(JsonArray).q = function (index) {
  return this.q12_1.q(index);
};
protoOf(JsonArray).equals = function (other) {
  return equals(this.q12_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.q12_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.q12_1, ',', '[', ']');
};
function _get_$cachedSerializer__te6jhj($this) {
  return $this.u12_1.s1();
}
function JsonNull$_anonymous__enib48() {
  return JsonNullSerializer_getInstance();
}
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.t12_1 = 'null';
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  tmp.u12_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
}
protoOf(JsonNull).p12 = function () {
  return this.t12_1;
};
protoOf(JsonNull).v12 = function () {
  return _get_$cachedSerializer__te6jhj(this);
};
protoOf(JsonNull).ds = function (typeParamsSerializers) {
  return this.v12();
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
  this.w12_1 = isString;
  this.x12_1 = coerceToInlineType;
  this.y12_1 = toString(body);
  if (!(this.x12_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.x12_1.xh()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).p12 = function () {
  return this.y12_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.w12_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.y12_1);
    tmp = this_0.toString();
  } else {
    tmp = this.y12_1;
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
  if (!(this.w12_1 === other.w12_1))
    return false;
  if (!(this.y12_1 === other.y12_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.w12_1);
  result = imul(31, result) + getStringHashCode(this.y12_1) | 0;
  return result;
};
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.p12());
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.p12())).z12();
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
    throw NumberFormatException_init_$Create$(_this__u8e3s4.p12() + ' is not an Int');
  return result.c1();
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.p12())).z12();
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
  var this_0 = _this__u8e3s4.p12();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.p12());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.p12();
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
  $this$buildSerialDescriptor.ug('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.ug('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.ug('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.ug('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.ug('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().a13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().b13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().c13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().d13_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().e13_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.f13_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).jg = function () {
  return this.f13_1;
};
protoOf(JsonElementSerializer).g13 = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.jl(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.jl(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.jl(JsonArraySerializer_getInstance(), value);
      }
    }
  }
};
protoOf(JsonElementSerializer).kg = function (encoder, value) {
  return this.g13(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).lg = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.l12();
};
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance == null)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function JsonObjectDescriptor() {
  JsonObjectDescriptor_instance = this;
  this.h13_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).jg();
  this.i13_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).vh = function () {
  return this.h13_1.vh();
};
protoOf(JsonObjectDescriptor).wh = function () {
  return this.h13_1.wh();
};
protoOf(JsonObjectDescriptor).xh = function () {
  return this.h13_1.xh();
};
protoOf(JsonObjectDescriptor).rh = function () {
  return this.h13_1.rh();
};
protoOf(JsonObjectDescriptor).yh = function () {
  return this.h13_1.yh();
};
protoOf(JsonObjectDescriptor).zh = function (index) {
  return this.h13_1.zh(index);
};
protoOf(JsonObjectDescriptor).ai = function (index) {
  return this.h13_1.ai(index);
};
protoOf(JsonObjectDescriptor).bi = function (name) {
  return this.h13_1.bi(name);
};
protoOf(JsonObjectDescriptor).ci = function (index) {
  return this.h13_1.ci(index);
};
protoOf(JsonObjectDescriptor).di = function (index) {
  return this.h13_1.di(index);
};
protoOf(JsonObjectDescriptor).kh = function () {
  return this.i13_1;
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.d13_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).jg = function () {
  return this.d13_1;
};
protoOf(JsonObjectSerializer).j13 = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).kg(encoder, value);
};
protoOf(JsonObjectSerializer).kg = function (encoder, value) {
  return this.j13(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).lg = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).lg(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonPrimitiveSerializer() {
  JsonPrimitiveSerializer_instance = this;
  this.a13_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).jg = function () {
  return this.a13_1;
};
protoOf(JsonPrimitiveSerializer).k13 = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.jl(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.jl(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).kg = function (encoder, value) {
  return this.k13(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).lg = function (decoder) {
  var result = asJsonDecoder(decoder).l12();
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
  this.l13_1 = ListSerializer(JsonElementSerializer_getInstance()).jg();
  this.m13_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).vh = function () {
  return this.l13_1.vh();
};
protoOf(JsonArrayDescriptor).wh = function () {
  return this.l13_1.wh();
};
protoOf(JsonArrayDescriptor).xh = function () {
  return this.l13_1.xh();
};
protoOf(JsonArrayDescriptor).rh = function () {
  return this.l13_1.rh();
};
protoOf(JsonArrayDescriptor).yh = function () {
  return this.l13_1.yh();
};
protoOf(JsonArrayDescriptor).zh = function (index) {
  return this.l13_1.zh(index);
};
protoOf(JsonArrayDescriptor).ai = function (index) {
  return this.l13_1.ai(index);
};
protoOf(JsonArrayDescriptor).bi = function (name) {
  return this.l13_1.bi(name);
};
protoOf(JsonArrayDescriptor).ci = function (index) {
  return this.l13_1.ci(index);
};
protoOf(JsonArrayDescriptor).di = function (index) {
  return this.l13_1.di(index);
};
protoOf(JsonArrayDescriptor).kh = function () {
  return this.m13_1;
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.e13_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).jg = function () {
  return this.e13_1;
};
protoOf(JsonArraySerializer).n13 = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).kg(encoder, value);
};
protoOf(JsonArraySerializer).kg = function (encoder, value) {
  return this.n13(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).lg = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).lg(decoder));
};
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance == null)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function JsonNullSerializer() {
  JsonNullSerializer_instance = this;
  this.b13_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).jg = function () {
  return this.b13_1;
};
protoOf(JsonNullSerializer).o13 = function (encoder, value) {
  verify(encoder);
  encoder.mk();
};
protoOf(JsonNullSerializer).kg = function (encoder, value) {
  return this.o13(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).lg = function (decoder) {
  verify_0(decoder);
  if (decoder.cj()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.dj();
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
  this.c13_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).jg = function () {
  return this.c13_1;
};
protoOf(JsonLiteralSerializer).p13 = function (encoder, value) {
  verify(encoder);
  if (value.w12_1) {
    return encoder.vk(value.y12_1);
  }
  if (!(value.x12_1 == null)) {
    return encoder.xk(value.x12_1).vk(value.y12_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.y12_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.rk(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.y12_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).rf_1;
    var tmp_1 = encoder.xk(serializer_0(Companion_getInstance()).jg());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.rk(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.y12_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.tk(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.y12_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.nk(tmp3_safe_receiver);
  }
  encoder.vk(value.y12_1);
};
protoOf(JsonLiteralSerializer).kg = function (encoder, value) {
  return this.p13(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).lg = function (decoder) {
  var result = asJsonDecoder(decoder).l12();
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
  var tmp0 = $this.q13_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.s1();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function defer$1($deferred) {
  this.q13_1 = lazy_0($deferred);
}
protoOf(defer$1).kh = function () {
  return _get_original__l7ku1m(this).kh();
};
protoOf(defer$1).yh = function () {
  return _get_original__l7ku1m(this).yh();
};
protoOf(defer$1).wh = function () {
  return _get_original__l7ku1m(this).wh();
};
protoOf(defer$1).ci = function (index) {
  return _get_original__l7ku1m(this).ci(index);
};
protoOf(defer$1).bi = function (name) {
  return _get_original__l7ku1m(this).bi(name);
};
protoOf(defer$1).zh = function (index) {
  return _get_original__l7ku1m(this).zh(index);
};
protoOf(defer$1).ai = function (index) {
  return _get_original__l7ku1m(this).ai(index);
};
protoOf(defer$1).di = function (index) {
  return _get_original__l7ku1m(this).di(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.r13_1 = writer;
  this.s13_1 = true;
}
protoOf(Composer).t13 = function () {
  this.s13_1 = true;
};
protoOf(Composer).u13 = function () {
  return Unit_instance;
};
protoOf(Composer).v13 = function () {
  this.s13_1 = false;
};
protoOf(Composer).w13 = function () {
  return Unit_instance;
};
protoOf(Composer).x13 = function (v) {
  return this.r13_1.y13(v);
};
protoOf(Composer).z13 = function (v) {
  return this.r13_1.a14(v);
};
protoOf(Composer).b14 = function (v) {
  return this.r13_1.a14(v.toString());
};
protoOf(Composer).c14 = function (v) {
  return this.r13_1.a14(v.toString());
};
protoOf(Composer).d14 = function (v) {
  return this.r13_1.e14(toLong(v));
};
protoOf(Composer).f14 = function (v) {
  return this.r13_1.e14(toLong(v));
};
protoOf(Composer).g14 = function (v) {
  return this.r13_1.e14(toLong(v));
};
protoOf(Composer).h14 = function (v) {
  return this.r13_1.e14(v);
};
protoOf(Composer).i14 = function (v) {
  return this.r13_1.a14(v.toString());
};
protoOf(Composer).j14 = function (value) {
  return this.r13_1.k14(value);
};
function Composer_0(sb, json) {
  return json.m10_1.a12_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.n14_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).g14 = function (v) {
  if (this.n14_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.j14(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.z13(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).h14 = function (v) {
  if (this.n14_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.j14(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.z13(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).d14 = function (v) {
  if (this.n14_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.j14(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.z13(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).f14 = function (v) {
  if (this.n14_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.j14(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.z13(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.q14_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).j14 = function (value) {
  if (this.q14_1) {
    protoOf(Composer).j14.call(this, value);
  } else {
    protoOf(Composer).z13.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.t14_1 = json;
  this.u14_1 = 0;
}
protoOf(ComposerWithPrettyPrint).t13 = function () {
  this.s13_1 = true;
  this.u14_1 = this.u14_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).u13 = function () {
  this.u14_1 = this.u14_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).v13 = function () {
  this.s13_1 = false;
  this.z13('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.u14_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.z13(this.t14_1.m10_1.c12_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).w13 = function () {
  this.x13(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.w14_1 = (!descriptor.di(index) && descriptor.ai(index).rh());
  return $this.w14_1;
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
  tmp.v14_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.w14_1 = false;
}
protoOf(JsonElementMarker).x14 = function (index) {
  this.v14_1.vp(index);
};
protoOf(JsonElementMarker).y14 = function () {
  return this.v14_1.wp();
};
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.z14('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.kh() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.yh().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
  var index = _this__u8e3s4.bi(name);
  if (!(index === -3))
    return index;
  if (!json.m10_1.h12_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException_init_$Create$(_this__u8e3s4.kh() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.ci(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.yh(), CLASS_getInstance()) ? json.m10_1.i12_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.b15(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.m10_1.j12_1 && equals(descriptor.yh(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).u1(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.b15(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.wh();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.zh(i);
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
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c15_1;
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
        tmp_0 = _this__u8e3s4.ci(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.d15(_this__u8e3s4, i, _this__u8e3s4.ci(i));
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
  if (builder.o()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.yh(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).t1(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ci(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ci(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.c2(name, index);
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return function () {
    return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
  };
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return function () {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.wh();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.ci(tmp_2);
      tmp_1[tmp_2] = $strategy.d15($this_serializationNamesIndices, tmp_2, baseName);
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
  var newSize = imul($this.g15_1, 2);
  $this.e15_1 = copyOf($this.e15_1, newSize);
  $this.f15_1 = copyOf_0($this.f15_1, newSize);
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.e15_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.f15_1 = tmp_2;
  this.g15_1 = -1;
}
protoOf(JsonPath).h15 = function (sd) {
  this.g15_1 = this.g15_1 + 1 | 0;
  var depth = this.g15_1;
  if (depth === this.e15_1.length) {
    resize(this);
  }
  this.e15_1[depth] = sd;
};
protoOf(JsonPath).i15 = function (index) {
  this.f15_1[this.g15_1] = index;
};
protoOf(JsonPath).j15 = function (key) {
  var tmp;
  if (!(this.f15_1[this.g15_1] === -2)) {
    this.g15_1 = this.g15_1 + 1 | 0;
    tmp = this.g15_1 === this.e15_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.e15_1[this.g15_1] = key;
  this.f15_1[this.g15_1] = -2;
};
protoOf(JsonPath).k15 = function () {
  if (this.f15_1[this.g15_1] === -2) {
    this.e15_1[this.g15_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).l15 = function () {
  var depth = this.g15_1;
  if (this.f15_1[depth] === -2) {
    this.f15_1[depth] = -1;
    this.g15_1 = this.g15_1 - 1 | 0;
  }
  if (!(this.g15_1 === -1)) {
    this.g15_1 = this.g15_1 - 1 | 0;
  }
};
protoOf(JsonPath).m15 = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.h7('$');
  // Inline function 'kotlin.repeat' call
  var times = this.g15_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.e15_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.yh(), LIST_getInstance())) {
          if (!(this.f15_1[index] === -1)) {
            this_0.h7('[');
            this_0.g7(this.f15_1[index]);
            this_0.h7(']');
          }
        } else {
          var idx = this.f15_1[index];
          if (idx >= 0) {
            this_0.h7('.');
            this_0.h7(element.ci(idx));
          }
        }
      } else {
        if (!(element === Tombstone_instance)) {
          this_0.h7('[');
          this_0.h7("'");
          this_0.g7(element);
          this_0.h7("'");
          this_0.h7(']');
        }
      }
    }
     while (inductionVariable < times);
  return this_0.toString();
};
protoOf(JsonPath).toString = function () {
  return this.m15();
};
function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = values().length;
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
  encoder.jl(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.v15_1.y15(6);
  if ($this.v15_1.z15() === 4) {
    $this.v15_1.z14('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.v15_1.a16()) {
    var key = $this.w15_1 ? $this.v15_1.c16() : $this.v15_1.b16();
    $this.v15_1.y15(5);
    var element = $this.d16();
    // Inline function 'kotlin.collections.set' call
    result.c2(key, element);
    lastToken = $this.v15_1.e16();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.v15_1.z14('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.v15_1.y15(7);
  } else if (lastToken === 4) {
    $this.v15_1.z14('Unexpected trailing comma');
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
  tmp.v7_1 = Unit_instance;
  tmp.w7_1 = null;
  return tmp.b8();
}
function readArray($this) {
  var lastToken = $this.v15_1.e16();
  if ($this.v15_1.z15() === 4) {
    $this.v15_1.z14('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.v15_1.a16()) {
    var element = $this.d16();
    result.e(element);
    lastToken = $this.v15_1.e16();
    if (!(lastToken === 4)) {
      var tmp0 = $this.v15_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.b11_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.z14(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.v15_1.y15(9);
  } else if (lastToken === 4) {
    $this.v15_1.z14('Unexpected trailing comma');
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.w15_1 || !isString) {
    tmp = $this.v15_1.c16();
  } else {
    tmp = $this.v15_1.b16();
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
  this.c17_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).h17 = function ($this$$receiver, it, $completion) {
  var tmp = this.i17($this$$receiver, it, $completion);
  tmp.v7_1 = Unit_instance;
  tmp.w7_1 = null;
  return tmp.b8();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).h8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.h17(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).b8 = function () {
  var suspendResult = this.v7_1;
  $sm: do
    try {
      var tmp = this.t7_1;
      switch (tmp) {
        case 0:
          this.u7_1 = 3;
          this.f17_1 = this.c17_1.v15_1.z15();
          if (this.f17_1 === 1) {
            this.g17_1 = readValue(this.c17_1, true);
            this.t7_1 = 2;
            continue $sm;
          } else {
            if (this.f17_1 === 0) {
              this.g17_1 = readValue(this.c17_1, false);
              this.t7_1 = 2;
              continue $sm;
            } else {
              if (this.f17_1 === 6) {
                this.t7_1 = 1;
                suspendResult = readObject_0(this.c17_1, this.d17_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.f17_1 === 8) {
                  this.g17_1 = readArray(this.c17_1);
                  this.t7_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.c17_1.v15_1.z14("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.g17_1 = suspendResult;
          this.t7_1 = 2;
          continue $sm;
        case 2:
          return this.g17_1;
        case 3:
          throw this.w7_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.u7_1 === 3) {
        throw e;
      } else {
        this.t7_1 = this.u7_1;
        this.w7_1 = e;
      }
    }
   while (true);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).i17 = function ($this$$receiver, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.c17_1, completion);
  i.d17_1 = $this$$receiver;
  i.e17_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$$receiver, it, $completion) {
    return i.h17($this$$receiver, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.n16_1 = _this__u8e3s4;
  this.o16_1 = _this__u8e3s4_0;
}
protoOf($readObjectCOROUTINE$).b8 = function () {
  var suspendResult = this.v7_1;
  $sm: do
    try {
      var tmp = this.t7_1;
      switch (tmp) {
        case 0:
          this.u7_1 = 5;
          var tmp_0 = this;
          tmp_0.p16_1 = this.n16_1;
          this.q16_1 = this.p16_1;
          this.r16_1 = this.q16_1.v15_1.y15(6);
          if (this.q16_1.v15_1.z15() === 4) {
            this.q16_1.v15_1.z14('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.s16_1 = LinkedHashMap_init_$Create$();
          this.t7_1 = 1;
          continue $sm;
        case 1:
          if (!this.q16_1.v15_1.a16()) {
            this.t7_1 = 4;
            continue $sm;
          }

          this.t16_1 = this.q16_1.w15_1 ? this.q16_1.v15_1.c16() : this.q16_1.v15_1.b16();
          this.q16_1.v15_1.y15(5);
          this.t7_1 = 2;
          suspendResult = this.o16_1.be(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.s16_1;
          var key = this.t16_1;
          tmp0.c2(key, element);
          this.r16_1 = this.q16_1.v15_1.e16();
          var tmp0_subject = this.r16_1;
          if (tmp0_subject === 4) {
            this.t7_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.t7_1 = 4;
              continue $sm;
            } else {
              this.q16_1.v15_1.z14('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.t7_1 = 1;
          continue $sm;
        case 4:
          if (this.r16_1 === 6) {
            this.q16_1.v15_1.y15(7);
          } else if (this.r16_1 === 4) {
            this.q16_1.v15_1.z14('Unexpected trailing comma');
          }

          return new JsonObject(this.s16_1);
        case 5:
          throw this.w7_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.u7_1 === 5) {
        throw e;
      } else {
        this.t7_1 = this.u7_1;
        this.w7_1 = e;
      }
    }
   while (true);
};
function JsonTreeReader(configuration, lexer) {
  this.v15_1 = lexer;
  this.w15_1 = configuration.y11_1;
  this.x15_1 = 0;
}
protoOf(JsonTreeReader).d16 = function () {
  var token = this.v15_1.z15();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.x15_1 = this.x15_1 + 1 | 0;
    if (this.x15_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.x15_1 = this.x15_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.v15_1.z14('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var tmp0_iterator = _this__u8e3s4.vh().j();
  while (tmp0_iterator.k()) {
    var annotation = tmp0_iterator.l();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.j17_1;
  }
  return json.m10_1.f12_1;
}
function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
  var tmp;
  if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.k12().m10_1.e12_1;
  }
  if (tmp) {
    return deserializer.lg(_this__u8e3s4);
  }
  var discriminator = classDiscriminator(deserializer.jg(), _this__u8e3s4.k12());
  var tmp0 = _this__u8e3s4.l12();
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var descriptor = deserializer.jg();
  if (!(tmp0 instanceof JsonObject)) {
    throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.kh() + ', but had ' + toString(getKClassFromExpression(tmp0)));
  }
  var jsonTree = tmp0;
  var tmp0_safe_receiver = jsonTree.o12(discriminator);
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
  var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p12();
  var tmp2_elvis_lhs = deserializer.ah(_this__u8e3s4, type);
  var tmp_0;
  if (tmp2_elvis_lhs == null) {
    throwSerializerNotFound(type, jsonTree);
  } else {
    tmp_0 = tmp2_elvis_lhs;
  }
  var actualSerializer = tmp_0;
  var tmp_1 = _this__u8e3s4.k12();
  return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
}
function throwSerializerNotFound(type, jsonTree) {
  var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
  throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.jg()).r(classDiscriminator)) {
    var baseName = serializer.jg().kh();
    var actualName = actualSerializer.jg().kh();
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
  var kind = descriptor.yh();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.u8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.k17_1)
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
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.u8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.wh();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.ci(i);
      if (name === $this.l17_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.k17_1 = useArrayPolymorphism;
  this.l17_1 = discriminator;
}
protoOf(PolymorphismValidator).d10 = function (kClass, provider) {
};
protoOf(PolymorphismValidator).g10 = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.jg();
  checkKind_0(this, descriptor, actualClass);
  if (!this.k17_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).h10 = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).i10 = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.a15_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).m17 = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.a15_1;
  var value_0 = this_0.u1(descriptor);
  var tmp;
  if (value_0 == null) {
    var answer = createMapForCache(2);
    this_0.c2(descriptor, answer);
    tmp = answer;
  } else {
    tmp = value_0;
  }
  var tmp0 = tmp;
  var tmp2 = key instanceof Key ? key : THROW_CCE();
  // Inline function 'kotlin.collections.set' call
  var value_1 = !(value == null) ? value : THROW_CCE();
  tmp0.c2(tmp2, value_1);
};
protoOf(DescriptorSchemaCache).b15 = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.n17(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.m17(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).n17 = function (descriptor, key) {
  var tmp0_safe_receiver = this.a15_1.u1(descriptor);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = tmp0_safe_receiver.u1(key instanceof Key ? key : THROW_CCE());
  }
  var tmp_0 = tmp;
  return !(tmp_0 == null) ? tmp_0 : null;
};
function DiscriminatorHolder(discriminatorToSkip) {
  this.o17_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.o17_1 === unknownKey) {
    _this__u8e3s4.o17_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.ik(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.v10_1.z15() === 4) {
    $this.v10_1.z14('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.x10_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.x10_1 === -1)) {
      hasComma = $this.v10_1.q17();
    }
  } else {
    $this.v10_1.p17(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.v10_1.a16()) {
    if (decodingKey) {
      if ($this.x10_1 === -1) {
        var tmp0 = $this.v10_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.b11_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected trailing comma';
          tmp0.z14(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.v10_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.b11_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.z14(tmp$ret$2, position_0);
        }
      }
    }
    $this.x10_1 = $this.x10_1 + 1 | 0;
    tmp = $this.x10_1;
  } else {
    if (hasComma) {
      $this.v10_1.z14("Expected '}', but had ',' instead");
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.t10_1;
  var tmp2 = descriptor.ai(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.rh()) {
      tmp = $this.v10_1.r17(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.yh(), ENUM_getInstance())) {
      var tmp_0;
      if (tmp2.rh()) {
        tmp_0 = $this.v10_1.r17(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.v10_1.s17($this.z10_1.y11_1);
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
        $this.v10_1.b16();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.v10_1.q17();
  while ($this.v10_1.a16()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.v10_1.p17(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.t10_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.z10_1.d12_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.v10_1.q17();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.a11_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.x14(index);
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
    $this.v10_1.z14('Unexpected trailing comma');
  }
  var tmp1_safe_receiver = $this.a11_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y14();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, key) {
  if ($this.z10_1.x11_1 || trySkip($this, $this.y10_1, key)) {
    $this.v10_1.u17($this.z10_1.y11_1);
  } else {
    $this.v10_1.t17(key);
  }
  return $this.v10_1.q17();
}
function decodeListIndex($this) {
  var hasComma = $this.v10_1.q17();
  var tmp;
  if ($this.v10_1.a16()) {
    if (!($this.x10_1 === -1) && !hasComma) {
      $this.v10_1.z14('Expected end of the array or comma');
    }
    $this.x10_1 = $this.x10_1 + 1 | 0;
    tmp = $this.x10_1;
  } else {
    if (hasComma) {
      $this.v10_1.z14('Unexpected trailing comma');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.z10_1.y11_1) {
    tmp = $this.v10_1.w17();
  } else {
    tmp = $this.v10_1.v17();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.t10_1 = json;
  this.u10_1 = mode;
  this.v10_1 = lexer;
  this.w10_1 = this.t10_1.gk();
  this.x10_1 = -1;
  this.y10_1 = discriminatorHolder;
  this.z10_1 = this.t10_1.m10_1;
  this.a11_1 = this.z10_1.b12_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).k12 = function () {
  return this.t10_1;
};
protoOf(StreamingJsonDecoder).gk = function () {
  return this.w10_1;
};
protoOf(StreamingJsonDecoder).l12 = function () {
  return (new JsonTreeReader(this.t10_1.m10_1, this.v10_1)).d16();
};
protoOf(StreamingJsonDecoder).qj = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.t10_1.m10_1.e12_1;
    }
    if (tmp) {
      return deserializer.lg(this);
    }
    var discriminator = classDiscriminator(deserializer.jg(), this.t10_1);
    var type = this.v10_1.x17(discriminator, this.z10_1.y11_1);
    var actualSerializer = null;
    if (!(type == null)) {
      actualSerializer = deserializer.ah(this, type);
    }
    if (actualSerializer == null) {
      return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
    }
    this.y10_1 = new DiscriminatorHolder(discriminator);
    var tmp_0 = actualSerializer.lg(this);
    var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    return result;
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.mh_1, plus(e.message, ' at path: ') + this.v10_1.c11_1.m15(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).rj = function (descriptor) {
  var newMode = switchMode(this.t10_1, descriptor);
  this.v10_1.c11_1.h15(descriptor);
  this.v10_1.p17(newMode.a18_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.f2_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.t10_1, newMode, this.v10_1, descriptor, this.y10_1);
      break;
    default:
      var tmp_0;
      if (this.u10_1.equals(newMode) && this.t10_1.m10_1.b12_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.t10_1, newMode, this.v10_1, descriptor, this.y10_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).sj = function (descriptor) {
  if (this.t10_1.m10_1.x11_1 && descriptor.wh() === 0) {
    skipLeftoverElements(this, descriptor);
  }
  this.v10_1.p17(this.u10_1.b18_1);
  this.v10_1.c11_1.l15();
};
protoOf(StreamingJsonDecoder).cj = function () {
  var tmp;
  var tmp0_safe_receiver = this.a11_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w14_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.v10_1.c18();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).dj = function () {
  return null;
};
protoOf(StreamingJsonDecoder).dk = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.u10_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.v10_1.c11_1.k15();
  }
  var value = protoOf(AbstractDecoder).dk.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.v10_1.c11_1.j15(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).ik = function (descriptor) {
  var index;
  switch (this.u10_1.f2_1) {
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
  if (!this.u10_1.equals(WriteMode_MAP_getInstance())) {
    this.v10_1.c11_1.i15(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).ej = function () {
  var tmp;
  if (this.z10_1.y11_1) {
    tmp = this.v10_1.e18();
  } else {
    tmp = this.v10_1.d18();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).fj = function () {
  var value = this.v10_1.z12();
  if (!value.equals(toLong(value.a3()))) {
    this.v10_1.z14("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.a3();
};
protoOf(StreamingJsonDecoder).gj = function () {
  var value = this.v10_1.z12();
  if (!value.equals(toLong(value.b3()))) {
    this.v10_1.z14("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.b3();
};
protoOf(StreamingJsonDecoder).hj = function () {
  var value = this.v10_1.z12();
  if (!value.equals(toLong(value.c1()))) {
    this.v10_1.z14("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.c1();
};
protoOf(StreamingJsonDecoder).ij = function () {
  return this.v10_1.z12();
};
protoOf(StreamingJsonDecoder).jj = function () {
  var tmp0 = this.v10_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.c16();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z14("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.t10_1.m10_1.g12_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.v10_1, result);
};
protoOf(StreamingJsonDecoder).kj = function () {
  var tmp0 = this.v10_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.c16();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z14("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.t10_1.m10_1.g12_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.v10_1, result);
};
protoOf(StreamingJsonDecoder).lj = function () {
  var string = this.v10_1.c16();
  if (!(string.length === 1)) {
    this.v10_1.z14("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).mj = function () {
  var tmp;
  if (this.z10_1.y11_1) {
    tmp = this.v10_1.w17();
  } else {
    tmp = this.v10_1.b16();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).oj = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.v10_1, this.t10_1) : protoOf(AbstractDecoder).oj.call(this, descriptor);
};
protoOf(StreamingJsonDecoder).nj = function (enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.t10_1, this.mj(), ' at path ' + this.v10_1.c11_1.m15());
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.f18_1 = lexer;
  this.g18_1 = json.gk();
}
protoOf(JsonDecoderForUnsignedTypes).gk = function () {
  return this.g18_1;
};
protoOf(JsonDecoderForUnsignedTypes).ik = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).hj = function () {
  var tmp0 = this.f18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.c16();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z14("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).ij = function () {
  var tmp0 = this.f18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.c16();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z14("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).fj = function () {
  var tmp0 = this.f18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.c16();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z14("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).gj = function () {
  var tmp0 = this.f18_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.c16();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z14("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
  $this.n15_1.v13();
  $this.vk(ensureNotNull($this.u15_1));
  $this.n15_1.x13(_Char___init__impl__6a9atx(58));
  $this.n15_1.w13();
  $this.vk(descriptor.kh());
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.n15_1 = composer;
  this.o15_1 = json;
  this.p15_1 = mode;
  this.q15_1 = modeReuseCache;
  this.r15_1 = this.o15_1.gk();
  this.s15_1 = this.o15_1.m10_1;
  this.t15_1 = false;
  this.u15_1 = null;
  var i = this.p15_1.f2_1;
  if (!(this.q15_1 == null)) {
    if (!(this.q15_1[i] === null) || !(this.q15_1[i] === this)) {
      this.q15_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).k12 = function () {
  return this.o15_1;
};
protoOf(StreamingJsonEncoder).gk = function () {
  return this.r15_1;
};
protoOf(StreamingJsonEncoder).ol = function (descriptor, index) {
  return this.s15_1.w11_1;
};
protoOf(StreamingJsonEncoder).jl = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.k12().m10_1.e12_1;
    }
    if (tmp) {
      serializer.kg(this, value);
      break $l$block;
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.jg(), this.k12());
    var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
    access$validateIfSealed$tPolymorphicKt(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.jg().yh());
    this.u15_1 = baseClassDiscriminator;
    actualSerializer.kg(this, value);
  }
};
protoOf(StreamingJsonEncoder).rj = function (descriptor) {
  var newMode = switchMode(this.o15_1, descriptor);
  if (!(newMode.a18_1 === _Char___init__impl__6a9atx(0))) {
    this.n15_1.x13(newMode.a18_1);
    this.n15_1.t13();
  }
  if (!(this.u15_1 == null)) {
    encodeTypeInfo(this, descriptor);
    this.u15_1 = null;
  }
  if (this.p15_1.equals(newMode)) {
    return this;
  }
  var tmp0_safe_receiver = this.q15_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.f2_1];
  return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.n15_1, this.o15_1, newMode, this.q15_1) : tmp1_elvis_lhs;
};
protoOf(StreamingJsonEncoder).sj = function (descriptor) {
  if (!(this.p15_1.b18_1 === _Char___init__impl__6a9atx(0))) {
    this.n15_1.u13();
    this.n15_1.v13();
    this.n15_1.x13(this.p15_1.b18_1);
  }
};
protoOf(StreamingJsonEncoder).kk = function (descriptor, index) {
  switch (this.p15_1.f2_1) {
    case 1:
      if (!this.n15_1.s13_1) {
        this.n15_1.x13(_Char___init__impl__6a9atx(44));
      }

      this.n15_1.v13();
      break;
    case 2:
      if (!this.n15_1.s13_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.n15_1.x13(_Char___init__impl__6a9atx(44));
          this.n15_1.v13();
          tmp_0 = true;
        } else {
          this.n15_1.x13(_Char___init__impl__6a9atx(58));
          this.n15_1.w13();
          tmp_0 = false;
        }
        tmp.t15_1 = tmp_0;
      } else {
        this.t15_1 = true;
        this.n15_1.v13();
      }

      break;
    case 3:
      if (index === 0)
        this.t15_1 = true;
      if (index === 1) {
        this.n15_1.x13(_Char___init__impl__6a9atx(44));
        this.n15_1.w13();
        this.t15_1 = false;
      }

      break;
    default:
      if (!this.n15_1.s13_1) {
        this.n15_1.x13(_Char___init__impl__6a9atx(44));
      }

      this.n15_1.v13();
      this.vk(getJsonElementName(descriptor, this.o15_1, index));
      this.n15_1.x13(_Char___init__impl__6a9atx(58));
      this.n15_1.w13();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).kl = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.s15_1.b12_1) {
    protoOf(AbstractEncoder).kl.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).xk = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.n15_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.n15_1;
    } else {
      var tmp0 = this.n15_1.r13_1;
      var p1 = this.t15_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.o15_1, this.p15_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.n15_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.n15_1;
    } else {
      var tmp0_0 = this.n15_1.r13_1;
      var p1_0 = this.t15_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.o15_1, this.p15_1, null);
  } else {
    tmp = protoOf(AbstractEncoder).xk.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).mk = function () {
  this.n15_1.z13('null');
};
protoOf(StreamingJsonEncoder).nk = function (value) {
  if (this.t15_1) {
    this.vk(value.toString());
  } else {
    this.n15_1.i14(value);
  }
};
protoOf(StreamingJsonEncoder).ok = function (value) {
  if (this.t15_1) {
    this.vk(value.toString());
  } else {
    this.n15_1.d14(value);
  }
};
protoOf(StreamingJsonEncoder).pk = function (value) {
  if (this.t15_1) {
    this.vk(value.toString());
  } else {
    this.n15_1.f14(value);
  }
};
protoOf(StreamingJsonEncoder).qk = function (value) {
  if (this.t15_1) {
    this.vk(value.toString());
  } else {
    this.n15_1.g14(value);
  }
};
protoOf(StreamingJsonEncoder).rk = function (value) {
  if (this.t15_1) {
    this.vk(value.toString());
  } else {
    this.n15_1.h14(value);
  }
};
protoOf(StreamingJsonEncoder).sk = function (value) {
  if (this.t15_1) {
    this.vk(value.toString());
  } else {
    this.n15_1.b14(value);
  }
  if (!this.s15_1.g12_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.n15_1.r13_1));
  }
};
protoOf(StreamingJsonEncoder).tk = function (value) {
  if (this.t15_1) {
    this.vk(value.toString());
  } else {
    this.n15_1.c14(value);
  }
  if (!this.s15_1.g12_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.n15_1.r13_1));
  }
};
protoOf(StreamingJsonEncoder).uk = function (value) {
  this.vk(toString_1(value));
};
protoOf(StreamingJsonEncoder).vk = function (value) {
  return this.n15_1.j14(value);
};
protoOf(StreamingJsonEncoder).wk = function (enumDescriptor, index) {
  this.vk(enumDescriptor.ci(index));
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.xh() && get_unsignedNumberDescriptors().r(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.xh() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).jg(), serializer_0(Companion_getInstance()).jg(), serializer_2(Companion_getInstance_1()).jg(), serializer_3(Companion_getInstance_2()).jg()]);
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
  _this__u8e3s4.i7(_Char___init__impl__6a9atx(34));
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
        _this__u8e3s4.fa(value, lastPos, i);
        _this__u8e3s4.h7(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0)) {
    _this__u8e3s4.fa(value, lastPos, value.length);
  } else {
    _this__u8e3s4.h7(value);
  }
  _this__u8e3s4.i7(_Char___init__impl__6a9atx(34));
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
  throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.m18()));
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
  this.j18_1 = json;
  this.k18_1 = value;
  this.l18_1 = this.k12().m10_1;
}
protoOf(AbstractJsonTreeDecoder).k12 = function () {
  return this.j18_1;
};
protoOf(AbstractJsonTreeDecoder).s1 = function () {
  return this.k18_1;
};
protoOf(AbstractJsonTreeDecoder).gk = function () {
  return this.k12().gk();
};
protoOf(AbstractJsonTreeDecoder).m18 = function () {
  var tmp0_safe_receiver = this.vx();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.n18(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.s1() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).l12 = function () {
  return this.m18();
};
protoOf(AbstractJsonTreeDecoder).qj = function (deserializer) {
  return decodeSerializableValuePolymorphic(this, deserializer);
};
protoOf(AbstractJsonTreeDecoder).wx = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).rj = function (descriptor) {
  var currentObject = this.m18();
  var tmp0_subject = descriptor.yh();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.k12();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    if (!(currentObject instanceof JsonArray)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.kh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.k12();
      var keyDescriptor = carrierDescriptor(descriptor.ai(0), this_0.gk());
      var keyKind = keyDescriptor.yh();
      var tmp_2;
      var tmp_3;
      if (keyKind instanceof PrimitiveKind) {
        tmp_3 = true;
      } else {
        tmp_3 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_3) {
        var tmp_4 = this.k12();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.kh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
        }
        tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
      } else {
        if (this_0.m10_1.z11_1) {
          var tmp_5 = this.k12();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonArray)) {
            throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.kh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
          }
          tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_2;
    } else {
      var tmp_6 = this.k12();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.kh() + ', but had ' + toString(getKClassFromExpression(currentObject)));
      }
      tmp = new JsonTreeDecoder(tmp_6, currentObject);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).sj = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).cj = function () {
  var tmp = this.m18();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).o18 = function (tag) {
  var currentElement = this.n18(tag);
  var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + toString(currentElement), toString(this.m18()));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).p18 = function (tag, enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.k12(), this.o18(tag).p12());
};
protoOf(AbstractJsonTreeDecoder).iy = function (tag, enumDescriptor) {
  return this.p18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
};
protoOf(AbstractJsonTreeDecoder).q18 = function (tag) {
  return !(this.n18(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).yx = function (tag) {
  return this.q18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).r18 = function (tag) {
  var value = this.o18(tag);
  if (!this.k12().m10_1.y11_1) {
    var literal = asLiteral(this, value, 'boolean');
    if (literal.w12_1)
      throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.m18()));
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
protoOf(AbstractJsonTreeDecoder).zx = function (tag) {
  return this.r18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).s18 = function (tag) {
  var tmp2 = this.o18(tag);
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
protoOf(AbstractJsonTreeDecoder).ay = function (tag) {
  return this.s18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).t18 = function (tag) {
  var tmp2 = this.o18(tag);
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
protoOf(AbstractJsonTreeDecoder).by = function (tag) {
  return this.t18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).u18 = function (tag) {
  var tmp2 = this.o18(tag);
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
protoOf(AbstractJsonTreeDecoder).cy = function (tag) {
  return this.u18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).v18 = function (tag) {
  var tmp2 = this.o18(tag);
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
protoOf(AbstractJsonTreeDecoder).dy = function (tag) {
  return this.v18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).w18 = function (tag) {
  var tmp2 = this.o18(tag);
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
  var specialFp = this.k12().m10_1.g12_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.m18()));
};
protoOf(AbstractJsonTreeDecoder).ey = function (tag) {
  return this.w18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).x18 = function (tag) {
  var tmp2 = this.o18(tag);
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
  var specialFp = this.k12().m10_1.g12_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.m18()));
};
protoOf(AbstractJsonTreeDecoder).fy = function (tag) {
  return this.x18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).y18 = function (tag) {
  var tmp2 = this.o18(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = new Char(single(tmp2.p12()));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'char');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp.e1_1;
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
protoOf(AbstractJsonTreeDecoder).gy = function (tag) {
  return this.y18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).z18 = function (tag) {
  var value = this.o18(tag);
  if (!this.k12().m10_1.y11_1) {
    var literal = asLiteral(this, value, 'string');
    if (!literal.w12_1)
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.m18()));
  }
  if (value instanceof JsonNull)
    throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.m18()));
  return value.p12();
};
protoOf(AbstractJsonTreeDecoder).hy = function (tag) {
  return this.z18((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).a19 = function (tag, inlineDescriptor) {
  return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.o18(tag).p12()), this.k12()) : protoOf(NamedValueDecoder).jy.call(this, tag, inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).jy = function (tag, inlineDescriptor) {
  return this.a19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).oj = function (descriptor) {
  return !(this.vx() == null) ? protoOf(NamedValueDecoder).oj.call(this, descriptor) : (new JsonPrimitiveDecoder(this.k12(), this.s1())).oj(descriptor);
};
function coerceInputValue_0($this, descriptor, index, tag) {
  var tmp0 = $this.k12();
  var tmp2 = descriptor.ai(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.rh()) {
      var tmp_0 = $this.n18(tag);
      tmp = tmp_0 instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.yh(), ENUM_getInstance())) {
      var tmp_1;
      if (tmp2.rh()) {
        var tmp_2 = $this.n18(tag);
        tmp_1 = tmp_2 instanceof JsonNull;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp_3 = $this.n18(tag);
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
  $this.k19_1 = (!$this.k12().m10_1.b12_1 && !descriptor.di(index) && descriptor.ai(index).rh());
  return $this.k19_1;
}
function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
  polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value);
  this.g19_1 = value;
  this.h19_1 = polyDiscriminator;
  this.i19_1 = polyDescriptor;
  this.j19_1 = 0;
  this.k19_1 = false;
}
protoOf(JsonTreeDecoder).s1 = function () {
  return this.g19_1;
};
protoOf(JsonTreeDecoder).ik = function (descriptor) {
  while (this.j19_1 < descriptor.wh()) {
    var tmp1 = this.j19_1;
    this.j19_1 = tmp1 + 1 | 0;
    var name = this.qx(descriptor, tmp1);
    var index = this.j19_1 - 1 | 0;
    this.k19_1 = false;
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.s1();
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).t1(name)) {
      tmp_0 = true;
    } else {
      tmp_0 = absenceIsNull(this, descriptor, index);
    }
    if (tmp_0) {
      tmp = !this.l18_1.d12_1 || !coerceInputValue_0(this, descriptor, index, name);
    } else {
      tmp = false;
    }
    if (tmp) {
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).cj = function () {
  return !this.k19_1 && protoOf(AbstractJsonTreeDecoder).cj.call(this);
};
protoOf(JsonTreeDecoder).rx = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.k12());
  var baseName = descriptor.ci(index);
  if (strategy == null) {
    if (!this.l18_1.h12_1)
      return baseName;
    if (this.s1().v1().r(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.k12(), descriptor);
  // Inline function 'kotlin.collections.find' call
  var tmp0 = this.s1().v1();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (deserializationNamesMap_0.u1(element) === index) {
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
  var fallbackName = strategy == null ? null : strategy.d15(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).n18 = function (tag) {
  return getValue(this.s1(), tag);
};
protoOf(JsonTreeDecoder).rj = function (descriptor) {
  if (descriptor === this.i19_1) {
    var tmp = this.k12();
    var tmp0 = this.m18();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var descriptor_0 = this.i19_1;
    if (!(tmp0 instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor_0.kh() + ', but had ' + toString(getKClassFromExpression(tmp0)));
    }
    return new JsonTreeDecoder(tmp, tmp0, this.h19_1, this.i19_1);
  }
  return protoOf(AbstractJsonTreeDecoder).rj.call(this, descriptor);
};
protoOf(JsonTreeDecoder).sj = function (descriptor) {
  var tmp;
  if (this.l18_1.x11_1) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.yh();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.k12());
  var tmp_1;
  if (strategy == null && !this.l18_1.h12_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.k12(), descriptor).v1();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.k12()).n17(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var tmp1_iterator = this.s1().v1().j();
  while (tmp1_iterator.k()) {
    var key = tmp1_iterator.l();
    if (!names.r(key) && !(key === this.h19_1)) {
      throw UnknownKeyException(key, this.s1().toString());
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.q19_1 = value;
  this.r19_1 = this.q19_1.m();
  this.s19_1 = -1;
}
protoOf(JsonTreeListDecoder).s1 = function () {
  return this.q19_1;
};
protoOf(JsonTreeListDecoder).rx = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).n18 = function (tag) {
  return this.q19_1.n(toInt(tag));
};
protoOf(JsonTreeListDecoder).ik = function (descriptor) {
  while (this.s19_1 < (this.r19_1 - 1 | 0)) {
    this.s19_1 = this.s19_1 + 1 | 0;
    return this.s19_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.y19_1 = value;
  this.ky('primitive');
}
protoOf(JsonPrimitiveDecoder).s1 = function () {
  return this.y19_1;
};
protoOf(JsonPrimitiveDecoder).ik = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).n18 = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.y19_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.j1a_1 = value;
  this.k1a_1 = toList(this.j1a_1.v1());
  this.l1a_1 = imul(this.k1a_1.m(), 2);
  this.m1a_1 = -1;
}
protoOf(JsonTreeMapDecoder).s1 = function () {
  return this.j1a_1;
};
protoOf(JsonTreeMapDecoder).rx = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.k1a_1.n(i);
};
protoOf(JsonTreeMapDecoder).ik = function (descriptor) {
  while (this.m1a_1 < (this.l1a_1 - 1 | 0)) {
    this.m1a_1 = this.m1a_1 + 1 | 0;
    return this.m1a_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).n18 = function (tag) {
  return (this.m1a_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.j1a_1, tag);
};
protoOf(JsonTreeMapDecoder).sj = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.jg())).qj(deserializer);
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
  this.a18_1 = begin;
  this.b18_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.yh();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.ai(0), _this__u8e3s4.gk());
        var keyKind = keyDescriptor.yh();
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
          if (_this__u8e3s4.m10_1.z11_1) {
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
  if (equals(_this__u8e3s4.yh(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.xh()) {
    tmp = carrierDescriptor(_this__u8e3s4.ai(0), module_0);
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
  $this.n1a(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.n1a(lastPosition, currentPosition);
  var result = $this.e11_1.toString();
  $this.e11_1.ka(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.d11_1);
  $this.d11_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.o1a(), $this.b11_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.p1a(currentPosition);
  if (currentPosition === -1) {
    $this.z14('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.o1a();
  var tmp0 = currentPosition;
  currentPosition = tmp0 + 1 | 0;
  var currentChar = charSequenceGet(tmp, tmp0);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.o1a(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.z14("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.e11_1.i7(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.b11_1 = startPos;
    $this.q1a();
    if (($this.b11_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.z14('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.b11_1);
  }
  $this.e11_1.i7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.z14("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.p1a(start);
  if (current >= charSequenceLength($this.o1a()) || current === -1) {
    $this.z14('EOF');
  }
  var tmp = $this.o1a();
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
      $this.z14("Expected valid boolean literal prefix, but had '" + $this.c16() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.o1a()) - current | 0) < literalSuffix.length) {
    $this.z14('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.o1a(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.z14("Expected valid boolean literal prefix, but had '" + $this.c16() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.b11_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -exponentAccumulator.c3();
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = exponentAccumulator.c3();
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function AbstractJsonLexer() {
  this.b11_1 = 0;
  this.c11_1 = new JsonPath();
  this.d11_1 = null;
  this.e11_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).q1a = function () {
};
protoOf(AbstractJsonLexer).r1a = function (c) {
  return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).f11 = function () {
  var nextToken = this.e16();
  if (!(nextToken === 10)) {
    this.z14('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.o1a(), this.b11_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).y15 = function (expected) {
  var token = this.e16();
  if (!(token === expected)) {
    this.s1a(expected);
  }
  return token;
};
protoOf(AbstractJsonLexer).p17 = function (expected) {
  this.q1a();
  var source = this.o1a();
  var cpos = this.b11_1;
  $l$loop_0: while (true) {
    cpos = this.p1a(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var tmp0 = cpos;
    cpos = tmp0 + 1 | 0;
    var c = charSequenceGet(source, tmp0);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop_0;
    this.b11_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.t1a(expected);
  }
  this.b11_1 = cpos;
  this.t1a(expected);
};
protoOf(AbstractJsonLexer).t1a = function (expected) {
  if (this.b11_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.b11_1;
      try {
        this.b11_1 = this.b11_1 - 1 | 0;
        tmp$ret$1 = this.c16();
        break $l$block;
      }finally {
        this.b11_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.u1a("Expected string literal but 'null' literal was found", this.b11_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
    }
  }
  this.s1a(charToTokenClass(expected));
};
protoOf(AbstractJsonLexer).v1a = function (expectedToken, wasConsumed) {
  var expected = tokenDescription(expectedToken);
  var position = wasConsumed ? this.b11_1 - 1 | 0 : this.b11_1;
  var s = this.b11_1 === charSequenceLength(this.o1a()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.o1a(), position));
  this.z14('Expected ' + expected + ", but had '" + s + "' instead", position);
};
protoOf(AbstractJsonLexer).s1a = function (expectedToken, wasConsumed, $super) {
  wasConsumed = wasConsumed === VOID ? true : wasConsumed;
  return $super === VOID ? this.v1a(expectedToken, wasConsumed) : $super.v1a.call(this, expectedToken, wasConsumed);
};
protoOf(AbstractJsonLexer).z15 = function () {
  var source = this.o1a();
  var cpos = this.b11_1;
  $l$loop_0: while (true) {
    cpos = this.p1a(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.b11_1 = cpos;
    return charToTokenClass(ch);
  }
  this.b11_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).r17 = function (doConsume) {
  var current = this.w1a();
  current = this.p1a(current);
  var len = charSequenceLength(this.o1a()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.o1a(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.o1a(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.b11_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).c18 = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.r17(doConsume) : $super.r17.call(this, doConsume);
};
protoOf(AbstractJsonLexer).w1a = function () {
  var current = this.b11_1;
  $l$loop_0: while (true) {
    current = this.p1a(current);
    if (current === -1)
      break $l$loop_0;
    var c = charSequenceGet(this.o1a(), current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop_0;
    }
  }
  this.b11_1 = current;
  return current;
};
protoOf(AbstractJsonLexer).s17 = function (isLenient) {
  var token = this.z15();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.c16();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.b16();
  }
  var string = tmp;
  this.d11_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).x1a = function () {
  this.d11_1 = null;
};
protoOf(AbstractJsonLexer).y1a = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.o1a();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).b16 = function () {
  if (!(this.d11_1 == null)) {
    return takePeeked(this);
  }
  return this.v17();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.p1a(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.z14('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.n1a(lastPosition, currentPosition);
        currentPosition = this.p1a(currentPosition);
        if (currentPosition === -1) {
          this.z14('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.y1a(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.b11_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).w17 = function () {
  var result = this.c16();
  if (result === 'null' && wasUnquotedString(this)) {
    this.z14("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).c16 = function () {
  if (!(this.d11_1 == null)) {
    return takePeeked(this);
  }
  var current = this.w1a();
  if (current >= charSequenceLength(this.o1a()) || current === -1) {
    this.z14('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.o1a(), current));
  if (token === 1) {
    return this.b16();
  }
  if (!(token === 0)) {
    this.z14('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.o1a(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.o1a(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.o1a())) {
      usedAppend = true;
      this.n1a(this.b11_1, current);
      var eof = this.p1a(current);
      if (eof === -1) {
        this.b11_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.y1a(this.b11_1, current);
  } else {
    tmp = decodedString(this, this.b11_1, current);
  }
  var result = tmp;
  this.b11_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).n1a = function (fromIndex, toIndex) {
  this.e11_1.fa(this.o1a(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).u17 = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.z15();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.c16();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.z15();
    if (lastToken === 1) {
      if (allowLenientStrings) {
        this.c16();
      } else {
        this.v17();
      }
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
      tokenStack.e(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.b11_1, 'found ] instead of } at path: ' + this.c11_1.toString(), this.o1a());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.b11_1, 'found } instead of ] at path: ' + this.c11_1.toString(), this.o1a());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.z14('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.e16();
    if (tokenStack.m() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.o1a()) + "', currentPosition=" + this.b11_1 + ')';
};
protoOf(AbstractJsonLexer).t17 = function (key) {
  var processed = this.y1a(0, this.b11_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  this.u1a("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
};
protoOf(AbstractJsonLexer).u1a = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.c11_1.m15() + hintMessage, this.o1a());
};
protoOf(AbstractJsonLexer).z14 = function (message, position, hint, $super) {
  position = position === VOID ? this.b11_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.u1a(message, position, hint) : $super.u1a.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).z12 = function () {
  var current = this.w1a();
  current = this.p1a(current);
  if (current >= charSequenceLength(this.o1a()) || current === -1) {
    this.z14('EOF');
  }
  var tmp;
  if (charSequenceGet(this.o1a(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.o1a())) {
      this.z14('EOF');
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
  $l$loop_4: while (!(current === charSequenceLength(this.o1a()))) {
    var ch = charSequenceGet(this.o1a(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.z14('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.z14("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.z14("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.z14("Unexpected symbol '-' in numeric literal");
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
      this.z14("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
    }
    if (hasExponent) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.plus' call
      exponentAccumulator = exponentAccumulator.p2(toLong(10)).n2(toLong(digit));
      continue $l$loop_4;
    }
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.minus' call
    accumulator = accumulator.p2(toLong(10)).o2(toLong(digit));
    if (accumulator.a1(new Long(0, 0)) > 0) {
      this.z14('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.z14('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.z14('EOF');
    }
    if (!(charSequenceGet(this.o1a(), current) === _Char___init__impl__6a9atx(34))) {
      this.z14('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.b11_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.c3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).c3() || doubleAccumulator < (new Long(0, -2147483648)).c3()) {
      this.z14('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.z14("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.s2();
  } else {
    this.z14('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).d18 = function () {
  return consumeBoolean2(this, this.w1a());
};
protoOf(AbstractJsonLexer).e18 = function () {
  var current = this.w1a();
  if (current === charSequenceLength(this.o1a())) {
    this.z14('EOF');
  }
  var tmp;
  if (charSequenceGet(this.o1a(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.b11_1 === charSequenceLength(this.o1a())) {
      this.z14('EOF');
    }
    if (!(charSequenceGet(this.o1a(), this.b11_1) === _Char___init__impl__6a9atx(34))) {
      this.z14('Expected closing quotation mark');
    }
    this.b11_1 = this.b11_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().a1b_1;
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
  return c < 117 ? CharMappings_getInstance().z1a_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.z1a_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.a1b_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.z1a_1 = charArray(117);
  this.a1b_1 = new Int8Array(126);
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
  this.f1b_1 = source;
}
protoOf(StringJsonLexer).o1a = function () {
  return this.f1b_1;
};
protoOf(StringJsonLexer).p1a = function (position) {
  return position < this.f1b_1.length ? position : -1;
};
protoOf(StringJsonLexer).e16 = function () {
  var source = this.f1b_1;
  $l$loop: while (!(this.b11_1 === -1) && this.b11_1 < source.length) {
    var tmp1 = this.b11_1;
    this.b11_1 = tmp1 + 1 | 0;
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
protoOf(StringJsonLexer).q17 = function () {
  var current = this.w1a();
  if (current === this.f1b_1.length || current === -1)
    return false;
  if (charCodeAt(this.f1b_1, current) === _Char___init__impl__6a9atx(44)) {
    this.b11_1 = this.b11_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(StringJsonLexer).a16 = function () {
  var current = this.b11_1;
  if (current === -1)
    return false;
  $l$loop: while (current < this.f1b_1.length) {
    var c = charCodeAt(this.f1b_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.b11_1 = current;
    return this.r1a(c);
  }
  this.b11_1 = current;
  return false;
};
protoOf(StringJsonLexer).w1a = function () {
  var current = this.b11_1;
  if (current === -1)
    return current;
  $l$loop: while (current < this.f1b_1.length) {
    var c = charCodeAt(this.f1b_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.b11_1 = current;
  return current;
};
protoOf(StringJsonLexer).p17 = function (expected) {
  if (this.b11_1 === -1) {
    this.t1a(expected);
  }
  var source = this.f1b_1;
  $l$loop: while (this.b11_1 < source.length) {
    var tmp1 = this.b11_1;
    this.b11_1 = tmp1 + 1 | 0;
    var c = charCodeAt(source, tmp1);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    if (c === expected)
      return Unit_instance;
    this.t1a(expected);
  }
  this.b11_1 = -1;
  this.t1a(expected);
};
protoOf(StringJsonLexer).v17 = function () {
  this.p17(_Char___init__impl__6a9atx(34));
  var current = this.b11_1;
  var closingQuote = indexOf(this.f1b_1, _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.c16();
    this.v1a(1, false);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.f1b_1, i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.f1b_1, this.b11_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.b11_1 = closingQuote + 1 | 0;
  return substring(this.f1b_1, current, closingQuote);
};
protoOf(StringJsonLexer).x17 = function (keyToMatch, isLenient) {
  var positionSnapshot = this.b11_1;
  try {
    if (!(this.e16() === 6))
      return null;
    var firstKey = this.s17(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.x1a();
    if (!(this.e16() === 5))
      return null;
    return this.s17(isLenient);
  }finally {
    this.b11_1 = positionSnapshot;
    this.x1a();
  }
};
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.o10_1;
}
function JsonToStringWriter() {
  this.r10_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).e14 = function (value) {
  this.r10_1.g7(value);
};
protoOf(JsonToStringWriter).y13 = function (char) {
  this.r10_1.i7(char);
};
protoOf(JsonToStringWriter).a14 = function (text) {
  this.r10_1.h7(text);
};
protoOf(JsonToStringWriter).k14 = function (text) {
  printQuoted(this.r10_1, text);
};
protoOf(JsonToStringWriter).s10 = function () {
  this.r10_1.la();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.r10_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(defer$1).rh = get_isNullable;
protoOf(defer$1).xh = get_isInline;
protoOf(defer$1).vh = get_annotations;
protoOf(PolymorphismValidator).f10 = contextual;
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
