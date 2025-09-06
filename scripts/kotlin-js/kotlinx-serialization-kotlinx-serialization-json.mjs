import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  SEALED_getInstance3nsev85ow9059 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
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
  asJsReadonlyArrayView237cu3jwn119s as asJsReadonlyArrayView,
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
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
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
initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
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
  this.sy_1 = configuration;
  this.ty_1 = serializersModule;
  this.uy_1 = new DescriptorSchemaCache();
}
protoOf(Json).hj = function () {
  return this.ty_1;
};
protoOf(Json).vy = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.yy();
  }
};
protoOf(Json).wy = function (deserializer, string) {
  var lexer = new StringJsonLexer(string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.mf(), null);
  var result = input.ri(deserializer);
  lexer.lz();
  return result;
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.b10();
  return new JsonImpl(conf, builder.a10_1);
}
function JsonBuilder(json) {
  this.mz_1 = json.sy_1.c10_1;
  this.nz_1 = json.sy_1.h10_1;
  this.oz_1 = json.sy_1.d10_1;
  this.pz_1 = json.sy_1.e10_1;
  this.qz_1 = json.sy_1.f10_1;
  this.rz_1 = json.sy_1.g10_1;
  this.sz_1 = json.sy_1.i10_1;
  this.tz_1 = json.sy_1.j10_1;
  this.uz_1 = json.sy_1.k10_1;
  this.vz_1 = json.sy_1.l10_1;
  this.wz_1 = json.sy_1.m10_1;
  this.xz_1 = json.sy_1.n10_1;
  this.yz_1 = json.sy_1.o10_1;
  this.zz_1 = json.sy_1.p10_1;
  this.a10_1 = json.hj();
}
protoOf(JsonBuilder).b10 = function () {
  if (this.uz_1) {
    // Inline function 'kotlin.require' call
    if (!(this.vz_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  if (!this.rz_1) {
    // Inline function 'kotlin.require' call
    if (!(this.sz_1 === '    ')) {
      var message_0 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  } else if (!(this.sz_1 === '    ')) {
    var tmp0 = this.sz_1;
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
      var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.sz_1;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  return new JsonConfiguration(this.mz_1, this.oz_1, this.pz_1, this.qz_1, this.rz_1, this.nz_1, this.sz_1, this.tz_1, this.uz_1, this.vz_1, this.wz_1, this.xz_1, this.yz_1, this.zz_1);
};
function validateConfiguration($this) {
  if (equals($this.hj(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.sy_1.k10_1, $this.sy_1.l10_1);
  $this.hj().by(collector);
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
  this.c10_1 = encodeDefaults;
  this.d10_1 = ignoreUnknownKeys;
  this.e10_1 = isLenient;
  this.f10_1 = allowStructuredMapKeys;
  this.g10_1 = prettyPrint;
  this.h10_1 = explicitNulls;
  this.i10_1 = prettyPrintIndent;
  this.j10_1 = coerceInputValues;
  this.k10_1 = useArrayPolymorphism;
  this.l10_1 = classDiscriminator;
  this.m10_1 = allowSpecialFloatingPointValues;
  this.n10_1 = useAlternativeNames;
  this.o10_1 = namingStrategy;
  this.p10_1 = decodeEnumsCaseInsensitive;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.c10_1 + ', ignoreUnknownKeys=' + this.d10_1 + ', isLenient=' + this.e10_1 + ', ' + ('allowStructuredMapKeys=' + this.f10_1 + ', prettyPrint=' + this.g10_1 + ', explicitNulls=' + this.h10_1 + ', ') + ("prettyPrintIndent='" + this.i10_1 + "', coerceInputValues=" + this.j10_1 + ', useArrayPolymorphism=' + this.k10_1 + ', ') + ("classDiscriminator='" + this.l10_1 + "', allowSpecialFloatingPointValues=" + this.m10_1 + ', useAlternativeNames=' + this.n10_1 + ', ') + ('namingStrategy=' + toString_0(this.o10_1) + ', decodeEnumsCaseInsensitive=' + this.p10_1 + ')');
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
  var k = _name_for_destructuring_parameter_0__wldtmu.t1();
  // Inline function 'kotlin.collections.component2' call
  var v = _name_for_destructuring_parameter_0__wldtmu.u1();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  printQuoted(this_0, k);
  this_0.m7(_Char___init__impl__6a9atx(58));
  this_0.k7(v);
  return this_0.toString();
}
function JsonObject(content) {
  JsonElement.call(this);
  this.s10_1 = content;
}
protoOf(JsonObject).y1 = function () {
  return this.s10_1.y1();
};
protoOf(JsonObject).x1 = function () {
  return this.s10_1.x1();
};
protoOf(JsonObject).l = function () {
  return this.s10_1.l();
};
protoOf(JsonObject).t10 = function (key) {
  return this.s10_1.v1(key);
};
protoOf(JsonObject).v1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.t10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).u10 = function (key) {
  return this.s10_1.w1(key);
};
protoOf(JsonObject).w1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.u10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).n = function () {
  return this.s10_1.n();
};
protoOf(JsonObject).equals = function (other) {
  return equals(this.s10_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.s10_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.s10_1.y1();
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
  return this.v10();
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
function Companion_2() {
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonArray(content) {
  JsonElement.call(this);
  this.w10_1 = content;
}
protoOf(JsonArray).l = function () {
  return this.w10_1.l();
};
protoOf(JsonArray).x10 = function (element) {
  return this.w10_1.n1(element);
};
protoOf(JsonArray).n1 = function (element) {
  if (!(element instanceof JsonElement))
    return false;
  return this.x10(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).y10 = function (elements) {
  return this.w10_1.o1(elements);
};
protoOf(JsonArray).o1 = function (elements) {
  return this.y10(elements);
};
protoOf(JsonArray).o = function (index) {
  return this.w10_1.o(index);
};
protoOf(JsonArray).z10 = function (element) {
  return this.w10_1.p1(element);
};
protoOf(JsonArray).p1 = function (element) {
  if (!(element instanceof JsonElement))
    return -1;
  return this.z10(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).n = function () {
  return this.w10_1.n();
};
protoOf(JsonArray).i = function () {
  return this.w10_1.i();
};
protoOf(JsonArray).a11 = function (element) {
  return this.w10_1.q1(element);
};
protoOf(JsonArray).q1 = function (element) {
  if (!(element instanceof JsonElement))
    return -1;
  return this.a11(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).r1 = function () {
  return this.w10_1.r1();
};
protoOf(JsonArray).p = function (index) {
  return this.w10_1.p(index);
};
protoOf(JsonArray).s1 = function (fromIndex, toIndex) {
  return this.w10_1.s1(fromIndex, toIndex);
};
protoOf(JsonArray).equals = function (other) {
  return equals(this.w10_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.w10_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.w10_1, ',', '[', ']');
};
function JsonPrimitive_2(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function _get_$cachedSerializer__te6jhj($this) {
  return $this.c11_1.u1();
}
function JsonNull$_anonymous__enib48() {
  return JsonNullSerializer_getInstance();
}
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.b11_1 = 'null';
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  tmp.c11_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
}
protoOf(JsonNull).v10 = function () {
  return this.b11_1;
};
protoOf(JsonNull).d11 = function () {
  return _get_$cachedSerializer__te6jhj(this);
};
protoOf(JsonNull).kq = function (typeParamsSerializers) {
  return this.d11();
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
  this.e11_1 = isString;
  this.f11_1 = coerceToInlineType;
  this.g11_1 = toString(body);
  if (!(this.f11_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.f11_1.ch()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).v10 = function () {
  return this.g11_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.e11_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.g11_1);
    tmp = this_0.toString();
  } else {
    tmp = this.g11_1;
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
  if (!(this.e11_1 === other.e11_1))
    return false;
  if (!(this.g11_1 === other.g11_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.e11_1);
  result = imul(31, result) + getStringHashCode(this.g11_1) | 0;
  return result;
};
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.v10());
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.v10())).h11();
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
    throw NumberFormatException_init_$Create$(_this__u8e3s4.v10() + ' is not an Int');
  return result.z();
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.v10())).h11();
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
  var this_0 = _this__u8e3s4.v10();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.v10());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.v10();
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
function JsonObjectDescriptor() {
  JsonObjectDescriptor_instance = this;
  this.i11_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).mf();
  this.j11_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).ah = function () {
  return this.i11_1.ah();
};
protoOf(JsonObjectDescriptor).bh = function () {
  return this.i11_1.bh();
};
protoOf(JsonObjectDescriptor).ch = function () {
  return this.i11_1.ch();
};
protoOf(JsonObjectDescriptor).wg = function () {
  return this.i11_1.wg();
};
protoOf(JsonObjectDescriptor).dh = function () {
  return this.i11_1.dh();
};
protoOf(JsonObjectDescriptor).eh = function (index) {
  return this.i11_1.eh(index);
};
protoOf(JsonObjectDescriptor).fh = function (index) {
  return this.i11_1.fh(index);
};
protoOf(JsonObjectDescriptor).gh = function (name) {
  return this.i11_1.gh(name);
};
protoOf(JsonObjectDescriptor).hh = function (index) {
  return this.i11_1.hh(index);
};
protoOf(JsonObjectDescriptor).ih = function (index) {
  return this.i11_1.ih(index);
};
protoOf(JsonObjectDescriptor).ng = function () {
  return this.j11_1;
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.k11_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).mf = function () {
  return this.k11_1;
};
protoOf(JsonObjectSerializer).l11 = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).nf(encoder, value);
};
protoOf(JsonObjectSerializer).nf = function (encoder, value) {
  return this.l11(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).of = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).of(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.xf('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.xf('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.xf('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.xf('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.xf('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().m11_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().n11_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().o11_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().k11_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().p11_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.q11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).mf = function () {
  return this.q11_1;
};
protoOf(JsonElementSerializer).r11 = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.jk(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.jk(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.jk(JsonArraySerializer_getInstance(), value);
      }
    }
  }
};
protoOf(JsonElementSerializer).nf = function (encoder, value) {
  return this.r11(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).of = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.r10();
};
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance == null)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function JsonPrimitiveSerializer() {
  JsonPrimitiveSerializer_instance = this;
  this.m11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).mf = function () {
  return this.m11_1;
};
protoOf(JsonPrimitiveSerializer).s11 = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.jk(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.jk(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).nf = function (encoder, value) {
  return this.s11(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).of = function (decoder) {
  var result = asJsonDecoder(decoder).r10();
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
  this.t11_1 = ListSerializer(JsonElementSerializer_getInstance()).mf();
  this.u11_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).ah = function () {
  return this.t11_1.ah();
};
protoOf(JsonArrayDescriptor).bh = function () {
  return this.t11_1.bh();
};
protoOf(JsonArrayDescriptor).ch = function () {
  return this.t11_1.ch();
};
protoOf(JsonArrayDescriptor).wg = function () {
  return this.t11_1.wg();
};
protoOf(JsonArrayDescriptor).dh = function () {
  return this.t11_1.dh();
};
protoOf(JsonArrayDescriptor).eh = function (index) {
  return this.t11_1.eh(index);
};
protoOf(JsonArrayDescriptor).fh = function (index) {
  return this.t11_1.fh(index);
};
protoOf(JsonArrayDescriptor).gh = function (name) {
  return this.t11_1.gh(name);
};
protoOf(JsonArrayDescriptor).hh = function (index) {
  return this.t11_1.hh(index);
};
protoOf(JsonArrayDescriptor).ih = function (index) {
  return this.t11_1.ih(index);
};
protoOf(JsonArrayDescriptor).ng = function () {
  return this.u11_1;
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.p11_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).mf = function () {
  return this.p11_1;
};
protoOf(JsonArraySerializer).v11 = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).nf(encoder, value);
};
protoOf(JsonArraySerializer).nf = function (encoder, value) {
  return this.v11(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).of = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).of(decoder));
};
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance == null)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function JsonNullSerializer() {
  JsonNullSerializer_instance = this;
  this.n11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).mf = function () {
  return this.n11_1;
};
protoOf(JsonNullSerializer).w11 = function (encoder, value) {
  verify(encoder);
  encoder.nj();
};
protoOf(JsonNullSerializer).nf = function (encoder, value) {
  return this.w11(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).of = function (decoder) {
  verify_0(decoder);
  if (decoder.ei()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.fi();
  return JsonNull_getInstance();
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
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function defer(deferred) {
  return new defer$1(deferred);
}
function JsonLiteralSerializer() {
  JsonLiteralSerializer_instance = this;
  this.o11_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).mf = function () {
  return this.o11_1;
};
protoOf(JsonLiteralSerializer).x11 = function (encoder, value) {
  verify(encoder);
  if (value.e11_1) {
    return encoder.wj(value.g11_1);
  }
  if (!(value.f11_1 == null)) {
    return encoder.xj(value.f11_1).wj(value.g11_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.g11_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.sj(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.g11_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).we_1;
    var tmp_1 = encoder.xj(serializer_0(Companion_getInstance()).mf());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.sj(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.g11_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.uj(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.g11_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.oj(tmp3_safe_receiver);
  }
  encoder.wj(value.g11_1);
};
protoOf(JsonLiteralSerializer).nf = function (encoder, value) {
  return this.x11(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).of = function (decoder) {
  var result = asJsonDecoder(decoder).r10();
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
  var tmp0 = $this.y11_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.u1();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function defer$1($deferred) {
  this.y11_1 = lazy_0($deferred);
}
protoOf(defer$1).ng = function () {
  return _get_original__l7ku1m(this).ng();
};
protoOf(defer$1).dh = function () {
  return _get_original__l7ku1m(this).dh();
};
protoOf(defer$1).bh = function () {
  return _get_original__l7ku1m(this).bh();
};
protoOf(defer$1).hh = function (index) {
  return _get_original__l7ku1m(this).hh(index);
};
protoOf(defer$1).gh = function (name) {
  return _get_original__l7ku1m(this).gh(name);
};
protoOf(defer$1).eh = function (index) {
  return _get_original__l7ku1m(this).eh(index);
};
protoOf(defer$1).fh = function (index) {
  return _get_original__l7ku1m(this).fh(index);
};
protoOf(defer$1).ih = function (index) {
  return _get_original__l7ku1m(this).ih(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.z11_1 = writer;
  this.a12_1 = true;
}
protoOf(Composer).b12 = function () {
  this.a12_1 = true;
};
protoOf(Composer).c12 = function () {
  return Unit_instance;
};
protoOf(Composer).d12 = function () {
  this.a12_1 = false;
};
protoOf(Composer).e12 = function () {
  return Unit_instance;
};
protoOf(Composer).f12 = function (v) {
  return this.z11_1.g12(v);
};
protoOf(Composer).h12 = function (v) {
  return this.z11_1.i12(v);
};
protoOf(Composer).j12 = function (v) {
  return this.z11_1.i12(v.toString());
};
protoOf(Composer).k12 = function (v) {
  return this.z11_1.i12(v.toString());
};
protoOf(Composer).l12 = function (v) {
  return this.z11_1.m12(toLong(v));
};
protoOf(Composer).n12 = function (v) {
  return this.z11_1.m12(toLong(v));
};
protoOf(Composer).o12 = function (v) {
  return this.z11_1.m12(toLong(v));
};
protoOf(Composer).p12 = function (v) {
  return this.z11_1.m12(v);
};
protoOf(Composer).q12 = function (v) {
  return this.z11_1.i12(v.toString());
};
protoOf(Composer).r12 = function (value) {
  return this.z11_1.s12(value);
};
function Composer_0(sb, json) {
  return json.sy_1.g10_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.v12_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).o12 = function (v) {
  if (this.v12_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.r12(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.h12(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).p12 = function (v) {
  if (this.v12_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.r12(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.h12(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).l12 = function (v) {
  if (this.v12_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.r12(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.h12(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).n12 = function (v) {
  if (this.v12_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.r12(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.h12(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.y12_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).r12 = function (value) {
  if (this.y12_1) {
    protoOf(Composer).r12.call(this, value);
  } else {
    protoOf(Composer).h12.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.b13_1 = json;
  this.c13_1 = 0;
}
protoOf(ComposerWithPrettyPrint).b12 = function () {
  this.a12_1 = true;
  this.c13_1 = this.c13_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).c12 = function () {
  this.c13_1 = this.c13_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).d12 = function () {
  this.a12_1 = false;
  this.h12('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.c13_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.h12(this.b13_1.sy_1.i10_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).e12 = function () {
  this.f12(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.e13_1 = (!descriptor.ih(index) && descriptor.fh(index).wg());
  return $this.e13_1;
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
  tmp.d13_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.e13_1 = false;
}
protoOf(JsonElementMarker).f13 = function (index) {
  this.d13_1.vo(index);
};
protoOf(JsonElementMarker).g13 = function () {
  return this.d13_1.wo();
};
function JsonDecodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonDecodingException);
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.h13('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.ng() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.dh().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
}
function InvalidFloatingPointEncoded(value, output) {
  return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
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
  var index = _this__u8e3s4.gh(name);
  if (!(index === -3))
    return index;
  if (!json.sy_1.n10_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.hh(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.dh(), CLASS_getInstance()) ? json.sy_1.o10_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.j13(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.sy_1.p10_1 && equals(descriptor.dh(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).w1(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.j13(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.bh();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.eh(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element instanceof JsonNames) {
          destination.d(element);
        }
      }
      var tmp1_safe_receiver = singleOrNull(destination);
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k13_1;
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
        tmp_0 = _this__u8e3s4.hh(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.l13(_this__u8e3s4, i, _this__u8e3s4.hh(i));
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
  if (builder.n()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.dh(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).v1(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.hh(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.hh(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
    var tmp_0 = $this_serializationNamesIndices.bh();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.hh(tmp_2);
      tmp_1[tmp_2] = $strategy.l13($this_serializationNamesIndices, tmp_2, baseName);
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
  var newSize = imul($this.o13_1, 2);
  $this.m13_1 = copyOf($this.m13_1, newSize);
  $this.n13_1 = copyOf_0($this.n13_1, newSize);
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.m13_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.n13_1 = tmp_2;
  this.o13_1 = -1;
}
protoOf(JsonPath).p13 = function (sd) {
  this.o13_1 = this.o13_1 + 1 | 0;
  var depth = this.o13_1;
  if (depth === this.m13_1.length) {
    resize(this);
  }
  this.m13_1[depth] = sd;
};
protoOf(JsonPath).q13 = function (index) {
  this.n13_1[this.o13_1] = index;
};
protoOf(JsonPath).r13 = function (key) {
  var tmp;
  if (!(this.n13_1[this.o13_1] === -2)) {
    this.o13_1 = this.o13_1 + 1 | 0;
    tmp = this.o13_1 === this.m13_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.m13_1[this.o13_1] = key;
  this.n13_1[this.o13_1] = -2;
};
protoOf(JsonPath).s13 = function () {
  if (this.n13_1[this.o13_1] === -2) {
    this.m13_1[this.o13_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).t13 = function () {
  var depth = this.o13_1;
  if (this.n13_1[depth] === -2) {
    this.n13_1[depth] = -1;
    this.o13_1 = this.o13_1 - 1 | 0;
  }
  if (!(this.o13_1 === -1)) {
    this.o13_1 = this.o13_1 - 1 | 0;
  }
};
protoOf(JsonPath).u13 = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.l7('$');
  // Inline function 'kotlin.repeat' call
  var times = this.o13_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.m13_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.dh(), LIST_getInstance())) {
          if (!(this.n13_1[index] === -1)) {
            this_0.l7('[');
            this_0.k7(this.n13_1[index]);
            this_0.l7(']');
          }
        } else {
          var idx = this.n13_1[index];
          if (idx >= 0) {
            this_0.l7('.');
            this_0.l7(element.hh(idx));
          }
        }
      } else {
        if (!(element === Tombstone_instance)) {
          this_0.l7('[');
          this_0.l7("'");
          this_0.k7(element);
          this_0.l7("'");
          this_0.l7(']');
        }
      }
    }
     while (inductionVariable < times);
  return this_0.toString();
};
protoOf(JsonPath).toString = function () {
  return this.u13();
};
function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = values().length;
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
  encoder.jk(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.d14_1.g14(6);
  if ($this.d14_1.h14() === 4) {
    $this.d14_1.h13('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.d14_1.i14()) {
    var key = $this.e14_1 ? $this.d14_1.k14() : $this.d14_1.j14();
    $this.d14_1.g14(5);
    var element = $this.l14();
    // Inline function 'kotlin.collections.set' call
    result.c2(key, element);
    lastToken = $this.d14_1.m14();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.d14_1.h13('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.d14_1.g14(7);
  } else if (lastToken === 4) {
    $this.d14_1.h13('Unexpected trailing comma');
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
  tmp.z7_1 = Unit_instance;
  tmp.a8_1 = null;
  return tmp.f8();
}
function readArray($this) {
  var lastToken = $this.d14_1.m14();
  if ($this.d14_1.h14() === 4) {
    $this.d14_1.h13('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.d14_1.i14()) {
    var element = $this.l14();
    result.d(element);
    lastToken = $this.d14_1.m14();
    if (!(lastToken === 4)) {
      var tmp0 = $this.d14_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.hz_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.h13(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.d14_1.g14(9);
  } else if (lastToken === 4) {
    $this.d14_1.h13('Unexpected trailing comma');
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.e14_1 || !isString) {
    tmp = $this.d14_1.k14();
  } else {
    tmp = $this.d14_1.j14();
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
  this.k15_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).p15 = function ($this$$receiver, it, $completion) {
  var tmp = this.q15($this$$receiver, it, $completion);
  tmp.z7_1 = Unit_instance;
  tmp.a8_1 = null;
  return tmp.f8();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).l8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.p15(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).f8 = function () {
  var suspendResult = this.z7_1;
  $sm: do
    try {
      var tmp = this.x7_1;
      switch (tmp) {
        case 0:
          this.y7_1 = 3;
          this.n15_1 = this.k15_1.d14_1.h14();
          if (this.n15_1 === 1) {
            this.o15_1 = readValue(this.k15_1, true);
            this.x7_1 = 2;
            continue $sm;
          } else {
            if (this.n15_1 === 0) {
              this.o15_1 = readValue(this.k15_1, false);
              this.x7_1 = 2;
              continue $sm;
            } else {
              if (this.n15_1 === 6) {
                this.x7_1 = 1;
                suspendResult = readObject_0(this.k15_1, this.l15_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.n15_1 === 8) {
                  this.o15_1 = readArray(this.k15_1);
                  this.x7_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.k15_1.d14_1.h13("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.o15_1 = suspendResult;
          this.x7_1 = 2;
          continue $sm;
        case 2:
          return this.o15_1;
        case 3:
          throw this.a8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.y7_1 === 3) {
        throw e;
      } else {
        this.x7_1 = this.y7_1;
        this.a8_1 = e;
      }
    }
   while (true);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).q15 = function ($this$$receiver, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.k15_1, completion);
  i.l15_1 = $this$$receiver;
  i.m15_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$$receiver, it, $completion) {
    return i.p15($this$$receiver, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.v14_1 = _this__u8e3s4;
  this.w14_1 = _this__u8e3s4_0;
}
protoOf($readObjectCOROUTINE$).f8 = function () {
  var suspendResult = this.z7_1;
  $sm: do
    try {
      var tmp = this.x7_1;
      switch (tmp) {
        case 0:
          this.y7_1 = 5;
          var tmp_0 = this;
          tmp_0.x14_1 = this.v14_1;
          this.y14_1 = this.x14_1;
          this.z14_1 = this.y14_1.d14_1.g14(6);
          if (this.y14_1.d14_1.h14() === 4) {
            this.y14_1.d14_1.h13('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.a15_1 = LinkedHashMap_init_$Create$();
          this.x7_1 = 1;
          continue $sm;
        case 1:
          if (!this.y14_1.d14_1.i14()) {
            this.x7_1 = 4;
            continue $sm;
          }

          this.b15_1 = this.y14_1.e14_1 ? this.y14_1.d14_1.k14() : this.y14_1.d14_1.j14();
          this.y14_1.d14_1.g14(5);
          this.x7_1 = 2;
          suspendResult = this.w14_1.id(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.a15_1;
          var key = this.b15_1;
          tmp0.c2(key, element);
          this.z14_1 = this.y14_1.d14_1.m14();
          var tmp0_subject = this.z14_1;
          if (tmp0_subject === 4) {
            this.x7_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.x7_1 = 4;
              continue $sm;
            } else {
              this.y14_1.d14_1.h13('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.x7_1 = 1;
          continue $sm;
        case 4:
          if (this.z14_1 === 6) {
            this.y14_1.d14_1.g14(7);
          } else if (this.z14_1 === 4) {
            this.y14_1.d14_1.h13('Unexpected trailing comma');
          }

          return new JsonObject(this.a15_1);
        case 5:
          throw this.a8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.y7_1 === 5) {
        throw e;
      } else {
        this.x7_1 = this.y7_1;
        this.a8_1 = e;
      }
    }
   while (true);
};
function JsonTreeReader(configuration, lexer) {
  this.d14_1 = lexer;
  this.e14_1 = configuration.e10_1;
  this.f14_1 = 0;
}
protoOf(JsonTreeReader).l14 = function () {
  var token = this.d14_1.h14();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.f14_1 = this.f14_1 + 1 | 0;
    if (this.f14_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.f14_1 = this.f14_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.d14_1.h13('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var tmp0_iterator = _this__u8e3s4.ah().i();
  while (tmp0_iterator.j()) {
    var annotation = tmp0_iterator.k();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.r15_1;
  }
  return json.sy_1.l10_1;
}
function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
  var tmp;
  if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.q10().sy_1.k10_1;
  }
  if (tmp) {
    return deserializer.of(_this__u8e3s4);
  }
  var discriminator = classDiscriminator(deserializer.mf(), _this__u8e3s4.q10());
  var tmp0 = _this__u8e3s4.r10();
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var descriptor = deserializer.mf();
  if (!(tmp0 instanceof JsonObject)) {
    throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.ng() + ', but had ' + toString(getKClassFromExpression(tmp0)));
  }
  var jsonTree = tmp0;
  var tmp0_safe_receiver = jsonTree.u10(discriminator);
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
  var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v10();
  var tmp2_elvis_lhs = deserializer.dg(_this__u8e3s4, type);
  var tmp_0;
  if (tmp2_elvis_lhs == null) {
    throwSerializerNotFound(type, jsonTree);
  } else {
    tmp_0 = tmp2_elvis_lhs;
  }
  var actualSerializer = tmp_0;
  var tmp_1 = _this__u8e3s4.q10();
  return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
}
function throwSerializerNotFound(type, jsonTree) {
  var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
  throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.mf()).n1(classDiscriminator)) {
    var baseName = serializer.mf().ng();
    var actualName = actualSerializer.mf().ng();
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
  var kind = descriptor.dh();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.y8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.s15_1)
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
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.y8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.bh();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.hh(i);
      if (name === $this.t15_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.s15_1 = useArrayPolymorphism;
  this.t15_1 = discriminator;
}
protoOf(PolymorphismValidator).jy = function (kClass, provider) {
};
protoOf(PolymorphismValidator).my = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.mf();
  checkKind_0(this, descriptor, actualClass);
  if (!this.s15_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).ny = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).oy = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.i13_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).u15 = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.i13_1;
  var value_0 = this_0.w1(descriptor);
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
protoOf(DescriptorSchemaCache).j13 = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.v15(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.u15(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).v15 = function (descriptor, key) {
  var tmp0_safe_receiver = this.i13_1.w1(descriptor);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = tmp0_safe_receiver.w1(key instanceof Key ? key : THROW_CCE());
  }
  var tmp_0 = tmp;
  return !(tmp_0 == null) ? tmp_0 : null;
};
function DiscriminatorHolder(discriminatorToSkip) {
  this.w15_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.w15_1 === unknownKey) {
    _this__u8e3s4.w15_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.jj(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.bz_1.h14() === 4) {
    $this.bz_1.h13('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.dz_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.dz_1 === -1)) {
      hasComma = $this.bz_1.y15();
    }
  } else {
    $this.bz_1.x15(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.bz_1.i14()) {
    if (decodingKey) {
      if ($this.dz_1 === -1) {
        var tmp0 = $this.bz_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.hz_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected trailing comma';
          tmp0.h13(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.bz_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.hz_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.h13(tmp$ret$2, position_0);
        }
      }
    }
    $this.dz_1 = $this.dz_1 + 1 | 0;
    tmp = $this.dz_1;
  } else {
    if (hasComma) {
      $this.bz_1.h13("Expected '}', but had ',' instead");
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.zy_1;
  var tmp2 = descriptor.fh(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.wg()) {
      tmp = $this.bz_1.z15(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.dh(), ENUM_getInstance())) {
      var tmp_0;
      if (tmp2.wg()) {
        tmp_0 = $this.bz_1.z15(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.bz_1.a16($this.fz_1.e10_1);
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
        $this.bz_1.j14();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.bz_1.y15();
  while ($this.bz_1.i14()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.bz_1.x15(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.zy_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.fz_1.j10_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.bz_1.y15();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.gz_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.f13(index);
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
    $this.bz_1.h13('Unexpected trailing comma');
  }
  var tmp1_safe_receiver = $this.gz_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g13();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, key) {
  if ($this.fz_1.d10_1 || trySkip($this, $this.ez_1, key)) {
    $this.bz_1.c16($this.fz_1.e10_1);
  } else {
    $this.bz_1.b16(key);
  }
  return $this.bz_1.y15();
}
function decodeListIndex($this) {
  var hasComma = $this.bz_1.y15();
  var tmp;
  if ($this.bz_1.i14()) {
    if (!($this.dz_1 === -1) && !hasComma) {
      $this.bz_1.h13('Expected end of the array or comma');
    }
    $this.dz_1 = $this.dz_1 + 1 | 0;
    tmp = $this.dz_1;
  } else {
    if (hasComma) {
      $this.bz_1.h13('Unexpected trailing comma');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.fz_1.e10_1) {
    tmp = $this.bz_1.e16();
  } else {
    tmp = $this.bz_1.d16();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.zy_1 = json;
  this.az_1 = mode;
  this.bz_1 = lexer;
  this.cz_1 = this.zy_1.hj();
  this.dz_1 = -1;
  this.ez_1 = discriminatorHolder;
  this.fz_1 = this.zy_1.sy_1;
  this.gz_1 = this.fz_1.h10_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).q10 = function () {
  return this.zy_1;
};
protoOf(StreamingJsonDecoder).hj = function () {
  return this.cz_1;
};
protoOf(StreamingJsonDecoder).r10 = function () {
  return (new JsonTreeReader(this.zy_1.sy_1, this.bz_1)).l14();
};
protoOf(StreamingJsonDecoder).ri = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.zy_1.sy_1.k10_1;
    }
    if (tmp) {
      return deserializer.of(this);
    }
    var discriminator = classDiscriminator(deserializer.mf(), this.zy_1);
    var type = this.bz_1.f16(discriminator, this.fz_1.e10_1);
    var actualSerializer = null;
    if (!(type == null)) {
      actualSerializer = deserializer.dg(this, type);
    }
    if (actualSerializer == null) {
      return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
    }
    this.ez_1 = new DiscriminatorHolder(discriminator);
    var tmp_0 = actualSerializer.of(this);
    var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    return result;
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.pg_1, plus(e.message, ' at path: ') + this.bz_1.iz_1.u13(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).si = function (descriptor) {
  var newMode = switchMode(this.zy_1, descriptor);
  this.bz_1.iz_1.p13(descriptor);
  this.bz_1.x15(newMode.i16_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.e2_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.zy_1, newMode, this.bz_1, descriptor, this.ez_1);
      break;
    default:
      var tmp_0;
      if (this.az_1.equals(newMode) && this.zy_1.sy_1.h10_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.zy_1, newMode, this.bz_1, descriptor, this.ez_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).ti = function (descriptor) {
  if (this.zy_1.sy_1.d10_1 && descriptor.bh() === 0) {
    skipLeftoverElements(this, descriptor);
  }
  this.bz_1.x15(this.az_1.j16_1);
  this.bz_1.iz_1.t13();
};
protoOf(StreamingJsonDecoder).ei = function () {
  var tmp;
  var tmp0_safe_receiver = this.gz_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e13_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.bz_1.k16();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).fi = function () {
  return null;
};
protoOf(StreamingJsonDecoder).ej = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.az_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.bz_1.iz_1.s13();
  }
  var value = protoOf(AbstractDecoder).ej.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.bz_1.iz_1.r13(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).jj = function (descriptor) {
  var index;
  switch (this.az_1.e2_1) {
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
  if (!this.az_1.equals(WriteMode_MAP_getInstance())) {
    this.bz_1.iz_1.q13(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).gi = function () {
  var tmp;
  if (this.fz_1.e10_1) {
    tmp = this.bz_1.m16();
  } else {
    tmp = this.bz_1.l16();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).hi = function () {
  var value = this.bz_1.h11();
  if (!value.equals(toLong(value.z2()))) {
    this.bz_1.h13("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.z2();
};
protoOf(StreamingJsonDecoder).ii = function () {
  var value = this.bz_1.h11();
  if (!value.equals(toLong(value.a3()))) {
    this.bz_1.h13("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.a3();
};
protoOf(StreamingJsonDecoder).ji = function () {
  var value = this.bz_1.h11();
  if (!value.equals(toLong(value.z()))) {
    this.bz_1.h13("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.z();
};
protoOf(StreamingJsonDecoder).ki = function () {
  return this.bz_1.h11();
};
protoOf(StreamingJsonDecoder).li = function () {
  var tmp0 = this.bz_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.k14();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.h13("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.zy_1.sy_1.m10_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.bz_1, result);
};
protoOf(StreamingJsonDecoder).mi = function () {
  var tmp0 = this.bz_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.k14();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.h13("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.zy_1.sy_1.m10_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.bz_1, result);
};
protoOf(StreamingJsonDecoder).ni = function () {
  var string = this.bz_1.k14();
  if (!(string.length === 1)) {
    this.bz_1.h13("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).oi = function () {
  var tmp;
  if (this.fz_1.e10_1) {
    tmp = this.bz_1.e16();
  } else {
    tmp = this.bz_1.j14();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).pi = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.bz_1, this.zy_1) : protoOf(AbstractDecoder).pi.call(this, descriptor);
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.n16_1 = lexer;
  this.o16_1 = json.hj();
}
protoOf(JsonDecoderForUnsignedTypes).hj = function () {
  return this.o16_1;
};
protoOf(JsonDecoderForUnsignedTypes).jj = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).ji = function () {
  var tmp0 = this.n16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.k14();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.h13("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).ki = function () {
  var tmp0 = this.n16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.k14();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.h13("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).hi = function () {
  var tmp0 = this.n16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.k14();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.h13("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).ii = function () {
  var tmp0 = this.n16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.k14();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.h13("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
  $this.v13_1.d12();
  $this.wj(ensureNotNull($this.c14_1));
  $this.v13_1.f12(_Char___init__impl__6a9atx(58));
  $this.v13_1.e12();
  $this.wj(descriptor.ng());
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.v13_1 = composer;
  this.w13_1 = json;
  this.x13_1 = mode;
  this.y13_1 = modeReuseCache;
  this.z13_1 = this.w13_1.hj();
  this.a14_1 = this.w13_1.sy_1;
  this.b14_1 = false;
  this.c14_1 = null;
  var i = this.x13_1.e2_1;
  if (!(this.y13_1 == null)) {
    if (!(this.y13_1[i] === null) || !(this.y13_1[i] === this)) {
      this.y13_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).q10 = function () {
  return this.w13_1;
};
protoOf(StreamingJsonEncoder).hj = function () {
  return this.z13_1;
};
protoOf(StreamingJsonEncoder).ok = function (descriptor, index) {
  return this.a14_1.c10_1;
};
protoOf(StreamingJsonEncoder).jk = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.q10().sy_1.k10_1;
    }
    if (tmp) {
      serializer.nf(this, value);
      break $l$block;
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.mf(), this.q10());
    var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
    access$validateIfSealed$tPolymorphicKt(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.mf().dh());
    this.c14_1 = baseClassDiscriminator;
    actualSerializer.nf(this, value);
  }
};
protoOf(StreamingJsonEncoder).si = function (descriptor) {
  var newMode = switchMode(this.w13_1, descriptor);
  if (!(newMode.i16_1 === _Char___init__impl__6a9atx(0))) {
    this.v13_1.f12(newMode.i16_1);
    this.v13_1.b12();
  }
  if (!(this.c14_1 == null)) {
    encodeTypeInfo(this, descriptor);
    this.c14_1 = null;
  }
  if (this.x13_1.equals(newMode)) {
    return this;
  }
  var tmp0_safe_receiver = this.y13_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.e2_1];
  return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.v13_1, this.w13_1, newMode, this.y13_1) : tmp1_elvis_lhs;
};
protoOf(StreamingJsonEncoder).ti = function (descriptor) {
  if (!(this.x13_1.j16_1 === _Char___init__impl__6a9atx(0))) {
    this.v13_1.c12();
    this.v13_1.d12();
    this.v13_1.f12(this.x13_1.j16_1);
  }
};
protoOf(StreamingJsonEncoder).lj = function (descriptor, index) {
  switch (this.x13_1.e2_1) {
    case 1:
      if (!this.v13_1.a12_1) {
        this.v13_1.f12(_Char___init__impl__6a9atx(44));
      }

      this.v13_1.d12();
      break;
    case 2:
      if (!this.v13_1.a12_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.v13_1.f12(_Char___init__impl__6a9atx(44));
          this.v13_1.d12();
          tmp_0 = true;
        } else {
          this.v13_1.f12(_Char___init__impl__6a9atx(58));
          this.v13_1.e12();
          tmp_0 = false;
        }
        tmp.b14_1 = tmp_0;
      } else {
        this.b14_1 = true;
        this.v13_1.d12();
      }

      break;
    case 3:
      if (index === 0)
        this.b14_1 = true;
      if (index === 1) {
        this.v13_1.f12(_Char___init__impl__6a9atx(44));
        this.v13_1.e12();
        this.b14_1 = false;
      }

      break;
    default:
      if (!this.v13_1.a12_1) {
        this.v13_1.f12(_Char___init__impl__6a9atx(44));
      }

      this.v13_1.d12();
      this.wj(getJsonElementName(descriptor, this.w13_1, index));
      this.v13_1.f12(_Char___init__impl__6a9atx(58));
      this.v13_1.e12();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).kk = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.a14_1.h10_1) {
    protoOf(AbstractEncoder).kk.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).xj = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.v13_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.v13_1;
    } else {
      var tmp0 = this.v13_1.z11_1;
      var p1 = this.b14_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.w13_1, this.x13_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.v13_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.v13_1;
    } else {
      var tmp0_0 = this.v13_1.z11_1;
      var p1_0 = this.b14_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.w13_1, this.x13_1, null);
  } else {
    tmp = protoOf(AbstractEncoder).xj.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).nj = function () {
  this.v13_1.h12('null');
};
protoOf(StreamingJsonEncoder).oj = function (value) {
  if (this.b14_1) {
    this.wj(value.toString());
  } else {
    this.v13_1.q12(value);
  }
};
protoOf(StreamingJsonEncoder).pj = function (value) {
  if (this.b14_1) {
    this.wj(value.toString());
  } else {
    this.v13_1.l12(value);
  }
};
protoOf(StreamingJsonEncoder).qj = function (value) {
  if (this.b14_1) {
    this.wj(value.toString());
  } else {
    this.v13_1.n12(value);
  }
};
protoOf(StreamingJsonEncoder).rj = function (value) {
  if (this.b14_1) {
    this.wj(value.toString());
  } else {
    this.v13_1.o12(value);
  }
};
protoOf(StreamingJsonEncoder).sj = function (value) {
  if (this.b14_1) {
    this.wj(value.toString());
  } else {
    this.v13_1.p12(value);
  }
};
protoOf(StreamingJsonEncoder).tj = function (value) {
  if (this.b14_1) {
    this.wj(value.toString());
  } else {
    this.v13_1.j12(value);
  }
  if (!this.a14_1.m10_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.v13_1.z11_1));
  }
};
protoOf(StreamingJsonEncoder).uj = function (value) {
  if (this.b14_1) {
    this.wj(value.toString());
  } else {
    this.v13_1.k12(value);
  }
  if (!this.a14_1.m10_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.v13_1.z11_1));
  }
};
protoOf(StreamingJsonEncoder).vj = function (value) {
  this.wj(toString_1(value));
};
protoOf(StreamingJsonEncoder).wj = function (value) {
  return this.v13_1.r12(value);
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ch() && get_unsignedNumberDescriptors().n1(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ch() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).mf(), serializer_0(Companion_getInstance()).mf(), serializer_2(Companion_getInstance_1()).mf(), serializer_3(Companion_getInstance_2()).mf()]);
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
  _this__u8e3s4.m7(_Char___init__impl__6a9atx(34));
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
        _this__u8e3s4.ha(value, lastPos, i);
        _this__u8e3s4.l7(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0)) {
    _this__u8e3s4.ha(value, lastPos, value.length);
  } else {
    _this__u8e3s4.l7(value);
  }
  _this__u8e3s4.m7(_Char___init__impl__6a9atx(34));
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
  throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.u16()));
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
  this.r16_1 = json;
  this.s16_1 = value;
  this.t16_1 = this.q10().sy_1;
}
protoOf(AbstractJsonTreeDecoder).q10 = function () {
  return this.r16_1;
};
protoOf(AbstractJsonTreeDecoder).u1 = function () {
  return this.s16_1;
};
protoOf(AbstractJsonTreeDecoder).hj = function () {
  return this.q10().hj();
};
protoOf(AbstractJsonTreeDecoder).u16 = function () {
  var tmp0_safe_receiver = this.cw();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.v16(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.u1() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).r10 = function () {
  return this.u16();
};
protoOf(AbstractJsonTreeDecoder).ri = function (deserializer) {
  return decodeSerializableValuePolymorphic(this, deserializer);
};
protoOf(AbstractJsonTreeDecoder).dw = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).si = function (descriptor) {
  var currentObject = this.u16();
  var tmp0_subject = descriptor.dh();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.q10();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    if (!(currentObject instanceof JsonArray)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.ng() + ', but had ' + toString(getKClassFromExpression(currentObject)));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.q10();
      var keyDescriptor = carrierDescriptor(descriptor.fh(0), this_0.hj());
      var keyKind = keyDescriptor.dh();
      var tmp_2;
      var tmp_3;
      if (keyKind instanceof PrimitiveKind) {
        tmp_3 = true;
      } else {
        tmp_3 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_3) {
        var tmp_4 = this.q10();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.ng() + ', but had ' + toString(getKClassFromExpression(currentObject)));
        }
        tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
      } else {
        if (this_0.sy_1.f10_1) {
          var tmp_5 = this.q10();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonArray)) {
            throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.ng() + ', but had ' + toString(getKClassFromExpression(currentObject)));
          }
          tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_2;
    } else {
      var tmp_6 = this.q10();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.ng() + ', but had ' + toString(getKClassFromExpression(currentObject)));
      }
      tmp = new JsonTreeDecoder(tmp_6, currentObject);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).ti = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).ei = function () {
  var tmp = this.u16();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).w16 = function (tag) {
  var currentElement = this.v16(tag);
  var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + toString(currentElement), toString(this.u16()));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).x16 = function (tag) {
  return !(this.v16(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).fw = function (tag) {
  return this.x16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).y16 = function (tag) {
  var value = this.w16(tag);
  if (!this.q10().sy_1.e10_1) {
    var literal = asLiteral(this, value, 'boolean');
    if (literal.e11_1)
      throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.u16()));
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
protoOf(AbstractJsonTreeDecoder).gw = function (tag) {
  return this.y16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).z16 = function (tag) {
  var tmp2 = this.w16(tag);
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
protoOf(AbstractJsonTreeDecoder).hw = function (tag) {
  return this.z16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).a17 = function (tag) {
  var tmp2 = this.w16(tag);
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
protoOf(AbstractJsonTreeDecoder).iw = function (tag) {
  return this.a17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).b17 = function (tag) {
  var tmp2 = this.w16(tag);
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
protoOf(AbstractJsonTreeDecoder).jw = function (tag) {
  return this.b17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).c17 = function (tag) {
  var tmp2 = this.w16(tag);
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
protoOf(AbstractJsonTreeDecoder).kw = function (tag) {
  return this.c17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).d17 = function (tag) {
  var tmp2 = this.w16(tag);
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
  var specialFp = this.q10().sy_1.m10_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.u16()));
};
protoOf(AbstractJsonTreeDecoder).lw = function (tag) {
  return this.d17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).e17 = function (tag) {
  var tmp2 = this.w16(tag);
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
  var specialFp = this.q10().sy_1.m10_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.u16()));
};
protoOf(AbstractJsonTreeDecoder).mw = function (tag) {
  return this.e17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).f17 = function (tag) {
  var tmp2 = this.w16(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = new Char(single(tmp2.v10()));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'char');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp.a1_1;
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
protoOf(AbstractJsonTreeDecoder).nw = function (tag) {
  return this.f17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).g17 = function (tag) {
  var value = this.w16(tag);
  if (!this.q10().sy_1.e10_1) {
    var literal = asLiteral(this, value, 'string');
    if (!literal.e11_1)
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.u16()));
  }
  if (value instanceof JsonNull)
    throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.u16()));
  return value.v10();
};
protoOf(AbstractJsonTreeDecoder).ow = function (tag) {
  return this.g17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).h17 = function (tag, inlineDescriptor) {
  return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.w16(tag).v10()), this.q10()) : protoOf(NamedValueDecoder).pw.call(this, tag, inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).pw = function (tag, inlineDescriptor) {
  return this.h17((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).pi = function (descriptor) {
  return !(this.cw() == null) ? protoOf(NamedValueDecoder).pi.call(this, descriptor) : (new JsonPrimitiveDecoder(this.q10(), this.u1())).pi(descriptor);
};
function coerceInputValue_0($this, descriptor, index, tag) {
  var tmp0 = $this.q10();
  var tmp2 = descriptor.fh(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.wg()) {
      var tmp_0 = $this.v16(tag);
      tmp = tmp_0 instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.dh(), ENUM_getInstance())) {
      var tmp_1;
      if (tmp2.wg()) {
        var tmp_2 = $this.v16(tag);
        tmp_1 = tmp_2 instanceof JsonNull;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp_3 = $this.v16(tag);
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
  $this.r17_1 = (!$this.q10().sy_1.h10_1 && !descriptor.ih(index) && descriptor.fh(index).wg());
  return $this.r17_1;
}
function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
  polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value);
  this.n17_1 = value;
  this.o17_1 = polyDiscriminator;
  this.p17_1 = polyDescriptor;
  this.q17_1 = 0;
  this.r17_1 = false;
}
protoOf(JsonTreeDecoder).u1 = function () {
  return this.n17_1;
};
protoOf(JsonTreeDecoder).jj = function (descriptor) {
  while (this.q17_1 < descriptor.bh()) {
    var tmp1 = this.q17_1;
    this.q17_1 = tmp1 + 1 | 0;
    var name = this.xv(descriptor, tmp1);
    var index = this.q17_1 - 1 | 0;
    this.r17_1 = false;
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.u1();
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).v1(name)) {
      tmp_0 = true;
    } else {
      tmp_0 = absenceIsNull(this, descriptor, index);
    }
    if (tmp_0) {
      tmp = !this.t16_1.j10_1 || !coerceInputValue_0(this, descriptor, index, name);
    } else {
      tmp = false;
    }
    if (tmp) {
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).ei = function () {
  return !this.r17_1 && protoOf(AbstractJsonTreeDecoder).ei.call(this);
};
protoOf(JsonTreeDecoder).yv = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.q10());
  var baseName = descriptor.hh(index);
  if (strategy == null) {
    if (!this.t16_1.n10_1)
      return baseName;
    if (this.u1().x1().n1(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.q10(), descriptor);
  // Inline function 'kotlin.collections.find' call
  var tmp0 = this.u1().x1();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (deserializationNamesMap_0.w1(element) === index) {
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
  var fallbackName = strategy == null ? null : strategy.l13(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).v16 = function (tag) {
  return getValue(this.u1(), tag);
};
protoOf(JsonTreeDecoder).si = function (descriptor) {
  if (descriptor === this.p17_1) {
    var tmp = this.q10();
    var tmp0 = this.u16();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var descriptor_0 = this.p17_1;
    if (!(tmp0 instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor_0.ng() + ', but had ' + toString(getKClassFromExpression(tmp0)));
    }
    return new JsonTreeDecoder(tmp, tmp0, this.o17_1, this.p17_1);
  }
  return protoOf(AbstractJsonTreeDecoder).si.call(this, descriptor);
};
protoOf(JsonTreeDecoder).ti = function (descriptor) {
  var tmp;
  if (this.t16_1.d10_1) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.dh();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.q10());
  var tmp_1;
  if (strategy == null && !this.t16_1.n10_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.q10(), descriptor).x1();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.q10()).v15(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var tmp1_iterator = this.u1().x1().i();
  while (tmp1_iterator.j()) {
    var key = tmp1_iterator.k();
    if (!names.n1(key) && !(key === this.o17_1)) {
      throw UnknownKeyException(key, this.u1().toString());
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.x17_1 = value;
  this.y17_1 = this.x17_1.l();
  this.z17_1 = -1;
}
protoOf(JsonTreeListDecoder).u1 = function () {
  return this.x17_1;
};
protoOf(JsonTreeListDecoder).yv = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).v16 = function (tag) {
  return this.x17_1.o(toInt(tag));
};
protoOf(JsonTreeListDecoder).jj = function (descriptor) {
  while (this.z17_1 < (this.y17_1 - 1 | 0)) {
    this.z17_1 = this.z17_1 + 1 | 0;
    return this.z17_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.f18_1 = value;
  this.qw('primitive');
}
protoOf(JsonPrimitiveDecoder).u1 = function () {
  return this.f18_1;
};
protoOf(JsonPrimitiveDecoder).jj = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).v16 = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.f18_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.q18_1 = value;
  this.r18_1 = toList(this.q18_1.x1());
  this.s18_1 = imul(this.r18_1.l(), 2);
  this.t18_1 = -1;
}
protoOf(JsonTreeMapDecoder).u1 = function () {
  return this.q18_1;
};
protoOf(JsonTreeMapDecoder).yv = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.r18_1.o(i);
};
protoOf(JsonTreeMapDecoder).jj = function (descriptor) {
  while (this.t18_1 < (this.s18_1 - 1 | 0)) {
    this.t18_1 = this.t18_1 + 1 | 0;
    return this.t18_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).v16 = function (tag) {
  return (this.t18_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.q18_1, tag);
};
protoOf(JsonTreeMapDecoder).ti = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.mf())).ri(deserializer);
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
  this.i16_1 = begin;
  this.j16_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.dh();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.fh(0), _this__u8e3s4.hj());
        var keyKind = keyDescriptor.dh();
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
          if (_this__u8e3s4.sy_1.f10_1) {
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
  if (equals(_this__u8e3s4.dh(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.ch()) {
    tmp = carrierDescriptor(_this__u8e3s4.fh(0), module_0);
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
  $this.u18(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.u18(lastPosition, currentPosition);
  var result = $this.kz_1.toString();
  $this.kz_1.ma(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.jz_1);
  $this.jz_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.v18(), $this.hz_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.w18(currentPosition);
  if (currentPosition === -1) {
    $this.h13('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.v18();
  var tmp0 = currentPosition;
  currentPosition = tmp0 + 1 | 0;
  var currentChar = charSequenceGet(tmp, tmp0);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.v18(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.h13("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.kz_1.m7(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.hz_1 = startPos;
    $this.x18();
    if (($this.hz_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.h13('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.hz_1);
  }
  $this.kz_1.m7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.h13("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.w18(start);
  if (current >= charSequenceLength($this.v18()) || current === -1) {
    $this.h13('EOF');
  }
  var tmp = $this.v18();
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
      $this.h13("Expected valid boolean literal prefix, but had '" + $this.k14() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.v18()) - current | 0) < literalSuffix.length) {
    $this.h13('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.v18(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.h13("Expected valid boolean literal prefix, but had '" + $this.k14() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.hz_1 = current + literalSuffix.length | 0;
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
  this.hz_1 = 0;
  this.iz_1 = new JsonPath();
  this.jz_1 = null;
  this.kz_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).x18 = function () {
};
protoOf(AbstractJsonLexer).y18 = function (c) {
  return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).lz = function () {
  var nextToken = this.m14();
  if (!(nextToken === 10)) {
    this.h13('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.v18(), this.hz_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).g14 = function (expected) {
  var token = this.m14();
  if (!(token === expected)) {
    this.z18(expected);
  }
  return token;
};
protoOf(AbstractJsonLexer).x15 = function (expected) {
  this.x18();
  var source = this.v18();
  var cpos = this.hz_1;
  $l$loop_0: while (true) {
    cpos = this.w18(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var tmp0 = cpos;
    cpos = tmp0 + 1 | 0;
    var c = charSequenceGet(source, tmp0);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop_0;
    this.hz_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.a19(expected);
  }
  this.hz_1 = cpos;
  this.a19(expected);
};
protoOf(AbstractJsonLexer).a19 = function (expected) {
  if (this.hz_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.hz_1;
      try {
        this.hz_1 = this.hz_1 - 1 | 0;
        tmp$ret$1 = this.k14();
        break $l$block;
      }finally {
        this.hz_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.b19("Expected string literal but 'null' literal was found", this.hz_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
    }
  }
  this.z18(charToTokenClass(expected));
};
protoOf(AbstractJsonLexer).c19 = function (expectedToken, wasConsumed) {
  var expected = tokenDescription(expectedToken);
  var position = wasConsumed ? this.hz_1 - 1 | 0 : this.hz_1;
  var s = this.hz_1 === charSequenceLength(this.v18()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.v18(), position));
  this.h13('Expected ' + expected + ", but had '" + s + "' instead", position);
};
protoOf(AbstractJsonLexer).z18 = function (expectedToken, wasConsumed, $super) {
  wasConsumed = wasConsumed === VOID ? true : wasConsumed;
  return $super === VOID ? this.c19(expectedToken, wasConsumed) : $super.c19.call(this, expectedToken, wasConsumed);
};
protoOf(AbstractJsonLexer).h14 = function () {
  var source = this.v18();
  var cpos = this.hz_1;
  $l$loop_0: while (true) {
    cpos = this.w18(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.hz_1 = cpos;
    return charToTokenClass(ch);
  }
  this.hz_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).z15 = function (doConsume) {
  var current = this.d19();
  current = this.w18(current);
  var len = charSequenceLength(this.v18()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.v18(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.v18(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.hz_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).k16 = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.z15(doConsume) : $super.z15.call(this, doConsume);
};
protoOf(AbstractJsonLexer).d19 = function () {
  var current = this.hz_1;
  $l$loop_0: while (true) {
    current = this.w18(current);
    if (current === -1)
      break $l$loop_0;
    var c = charSequenceGet(this.v18(), current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop_0;
    }
  }
  this.hz_1 = current;
  return current;
};
protoOf(AbstractJsonLexer).a16 = function (isLenient) {
  var token = this.h14();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.k14();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.j14();
  }
  var string = tmp;
  this.jz_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).e19 = function () {
  this.jz_1 = null;
};
protoOf(AbstractJsonLexer).f19 = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.v18();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).j14 = function () {
  if (!(this.jz_1 == null)) {
    return takePeeked(this);
  }
  return this.d16();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.w18(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.h13('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.u18(lastPosition, currentPosition);
        currentPosition = this.w18(currentPosition);
        if (currentPosition === -1) {
          this.h13('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.f19(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.hz_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).e16 = function () {
  var result = this.k14();
  if (result === 'null' && wasUnquotedString(this)) {
    this.h13("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).k14 = function () {
  if (!(this.jz_1 == null)) {
    return takePeeked(this);
  }
  var current = this.d19();
  if (current >= charSequenceLength(this.v18()) || current === -1) {
    this.h13('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.v18(), current));
  if (token === 1) {
    return this.j14();
  }
  if (!(token === 0)) {
    this.h13('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.v18(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.v18(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.v18())) {
      usedAppend = true;
      this.u18(this.hz_1, current);
      var eof = this.w18(current);
      if (eof === -1) {
        this.hz_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.f19(this.hz_1, current);
  } else {
    tmp = decodedString(this, this.hz_1, current);
  }
  var result = tmp;
  this.hz_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).u18 = function (fromIndex, toIndex) {
  this.kz_1.ha(this.v18(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).c16 = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.h14();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.k14();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.h14();
    if (lastToken === 1) {
      if (allowLenientStrings) {
        this.k14();
      } else {
        this.d16();
      }
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
      tokenStack.d(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.hz_1, 'found ] instead of } at path: ' + this.iz_1.toString(), this.v18());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.hz_1, 'found } instead of ] at path: ' + this.iz_1.toString(), this.v18());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.h13('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.m14();
    if (tokenStack.l() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.v18()) + "', currentPosition=" + this.hz_1 + ')';
};
protoOf(AbstractJsonLexer).b16 = function (key) {
  var processed = this.f19(0, this.hz_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  this.b19("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
};
protoOf(AbstractJsonLexer).b19 = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.iz_1.u13() + hintMessage, this.v18());
};
protoOf(AbstractJsonLexer).h13 = function (message, position, hint, $super) {
  position = position === VOID ? this.hz_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.b19(message, position, hint) : $super.b19.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).h11 = function () {
  var current = this.d19();
  current = this.w18(current);
  if (current >= charSequenceLength(this.v18()) || current === -1) {
    this.h13('EOF');
  }
  var tmp;
  if (charSequenceGet(this.v18(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.v18())) {
      this.h13('EOF');
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
  $l$loop_4: while (!(current === charSequenceLength(this.v18()))) {
    var ch = charSequenceGet(this.v18(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.h13('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.h13("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.h13("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.h13("Unexpected symbol '-' in numeric literal");
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
      this.h13("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
    if (accumulator.x(new Long(0, 0)) > 0) {
      this.h13('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.h13('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.h13('EOF');
    }
    if (!(charSequenceGet(this.v18(), current) === _Char___init__impl__6a9atx(34))) {
      this.h13('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.hz_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.b3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).b3() || doubleAccumulator < (new Long(0, -2147483648)).b3()) {
      this.h13('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.h13("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.r2();
  } else {
    this.h13('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).l16 = function () {
  return consumeBoolean2(this, this.d19());
};
protoOf(AbstractJsonLexer).m16 = function () {
  var current = this.d19();
  if (current === charSequenceLength(this.v18())) {
    this.h13('EOF');
  }
  var tmp;
  if (charSequenceGet(this.v18(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.hz_1 === charSequenceLength(this.v18())) {
      this.h13('EOF');
    }
    if (!(charSequenceGet(this.v18(), this.hz_1) === _Char___init__impl__6a9atx(34))) {
      this.h13('Expected closing quotation mark');
    }
    this.hz_1 = this.hz_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().h19_1;
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
  return c < 117 ? CharMappings_getInstance().g19_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.g19_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.h19_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.g19_1 = charArray(117);
  this.h19_1 = new Int8Array(126);
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
  this.m19_1 = source;
}
protoOf(StringJsonLexer).v18 = function () {
  return this.m19_1;
};
protoOf(StringJsonLexer).w18 = function (position) {
  return position < this.m19_1.length ? position : -1;
};
protoOf(StringJsonLexer).m14 = function () {
  var source = this.m19_1;
  $l$loop: while (!(this.hz_1 === -1) && this.hz_1 < source.length) {
    var tmp1 = this.hz_1;
    this.hz_1 = tmp1 + 1 | 0;
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
protoOf(StringJsonLexer).y15 = function () {
  var current = this.d19();
  if (current === this.m19_1.length || current === -1)
    return false;
  if (charCodeAt(this.m19_1, current) === _Char___init__impl__6a9atx(44)) {
    this.hz_1 = this.hz_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(StringJsonLexer).i14 = function () {
  var current = this.hz_1;
  if (current === -1)
    return false;
  $l$loop: while (current < this.m19_1.length) {
    var c = charCodeAt(this.m19_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.hz_1 = current;
    return this.y18(c);
  }
  this.hz_1 = current;
  return false;
};
protoOf(StringJsonLexer).d19 = function () {
  var current = this.hz_1;
  if (current === -1)
    return current;
  $l$loop: while (current < this.m19_1.length) {
    var c = charCodeAt(this.m19_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.hz_1 = current;
  return current;
};
protoOf(StringJsonLexer).x15 = function (expected) {
  if (this.hz_1 === -1) {
    this.a19(expected);
  }
  var source = this.m19_1;
  $l$loop: while (this.hz_1 < source.length) {
    var tmp1 = this.hz_1;
    this.hz_1 = tmp1 + 1 | 0;
    var c = charCodeAt(source, tmp1);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    if (c === expected)
      return Unit_instance;
    this.a19(expected);
  }
  this.hz_1 = -1;
  this.a19(expected);
};
protoOf(StringJsonLexer).d16 = function () {
  this.x15(_Char___init__impl__6a9atx(34));
  var current = this.hz_1;
  var closingQuote = indexOf(this.m19_1, _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.k14();
    this.c19(1, false);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.m19_1, i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.m19_1, this.hz_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.hz_1 = closingQuote + 1 | 0;
  return substring(this.m19_1, current, closingQuote);
};
protoOf(StringJsonLexer).f16 = function (keyToMatch, isLenient) {
  var positionSnapshot = this.hz_1;
  try {
    if (!(this.m14() === 6))
      return null;
    var firstKey = this.a16(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.e19();
    if (!(this.m14() === 5))
      return null;
    return this.a16(isLenient);
  }finally {
    this.hz_1 = positionSnapshot;
    this.e19();
  }
};
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.uy_1;
}
function JsonToStringWriter() {
  this.xy_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).m12 = function (value) {
  this.xy_1.k7(value);
};
protoOf(JsonToStringWriter).g12 = function (char) {
  this.xy_1.m7(char);
};
protoOf(JsonToStringWriter).i12 = function (text) {
  this.xy_1.l7(text);
};
protoOf(JsonToStringWriter).s12 = function (text) {
  printQuoted(this.xy_1, text);
};
protoOf(JsonToStringWriter).yy = function () {
  this.xy_1.na();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.xy_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(JsonArray).asJsReadonlyArrayView = asJsReadonlyArrayView;
protoOf(defer$1).wg = get_isNullable;
protoOf(defer$1).ch = get_isInline;
protoOf(defer$1).ah = get_annotations;
protoOf(PolymorphismValidator).ly = contextual;
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
  JsonElement as JsonElementf07o4p6p57al,
  JsonObject as JsonObjectee06ihoeeiqj,
  JsonPrimitive_0 as JsonPrimitiveolttw629wj53,
  JsonPrimitive_2 as JsonPrimitive2fp8648nd60dn,
  JsonPrimitive_1 as JsonPrimitive1xkjzc5d7ihuv,
  JsonPrimitive as JsonPrimitive3ttzjh2ft5dnx,
  Json_0 as Jsonsmkyu9xjl7fv,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
