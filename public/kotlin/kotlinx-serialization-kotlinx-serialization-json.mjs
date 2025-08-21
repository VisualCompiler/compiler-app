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
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForCompanion(Companion_2);
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
  this.ly_1 = configuration;
  this.my_1 = serializersModule;
  this.ny_1 = new DescriptorSchemaCache();
}
protoOf(Json).fi = function () {
  return this.my_1;
};
protoOf(Json).oy = function (serializer, value) {
  var result = new JsonToStringWriter();
  try {
    encodeByWriter(this, result, serializer, value);
    return result.toString();
  }finally {
    result.sy();
  }
};
protoOf(Json).py = function (deserializer, string) {
  var lexer = new StringJsonLexer(string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.ge(), null);
  var result = input.ph(deserializer);
  lexer.fz();
  return result;
};
protoOf(Json).qy = function (string) {
  return this.py(JsonElementSerializer_getInstance(), string);
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.vz();
  return new JsonImpl(conf, builder.uz_1);
}
function JsonBuilder(json) {
  this.gz_1 = json.ly_1.wz_1;
  this.hz_1 = json.ly_1.b10_1;
  this.iz_1 = json.ly_1.xz_1;
  this.jz_1 = json.ly_1.yz_1;
  this.kz_1 = json.ly_1.zz_1;
  this.lz_1 = json.ly_1.a10_1;
  this.mz_1 = json.ly_1.c10_1;
  this.nz_1 = json.ly_1.d10_1;
  this.oz_1 = json.ly_1.e10_1;
  this.pz_1 = json.ly_1.f10_1;
  this.qz_1 = json.ly_1.g10_1;
  this.rz_1 = json.ly_1.h10_1;
  this.sz_1 = json.ly_1.i10_1;
  this.tz_1 = json.ly_1.j10_1;
  this.uz_1 = json.fi();
}
protoOf(JsonBuilder).vz = function () {
  if (this.oz_1) {
    // Inline function 'kotlin.require' call
    if (!(this.pz_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  if (!this.lz_1) {
    // Inline function 'kotlin.require' call
    if (!(this.mz_1 === '    ')) {
      var message_0 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  } else if (!(this.mz_1 === '    ')) {
    var tmp0 = this.mz_1;
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
      var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.mz_1;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  return new JsonConfiguration(this.gz_1, this.iz_1, this.jz_1, this.kz_1, this.lz_1, this.hz_1, this.mz_1, this.nz_1, this.oz_1, this.pz_1, this.qz_1, this.rz_1, this.sz_1, this.tz_1);
};
function validateConfiguration($this) {
  if (equals($this.fi(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new PolymorphismValidator($this.ly_1.e10_1, $this.ly_1.f10_1);
  $this.fi().ux(collector);
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
  this.wz_1 = encodeDefaults;
  this.xz_1 = ignoreUnknownKeys;
  this.yz_1 = isLenient;
  this.zz_1 = allowStructuredMapKeys;
  this.a10_1 = prettyPrint;
  this.b10_1 = explicitNulls;
  this.c10_1 = prettyPrintIndent;
  this.d10_1 = coerceInputValues;
  this.e10_1 = useArrayPolymorphism;
  this.f10_1 = classDiscriminator;
  this.g10_1 = allowSpecialFloatingPointValues;
  this.h10_1 = useAlternativeNames;
  this.i10_1 = namingStrategy;
  this.j10_1 = decodeEnumsCaseInsensitive;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.wz_1 + ', ignoreUnknownKeys=' + this.xz_1 + ', isLenient=' + this.yz_1 + ', ' + ('allowStructuredMapKeys=' + this.zz_1 + ', prettyPrint=' + this.a10_1 + ', explicitNulls=' + this.b10_1 + ', ') + ("prettyPrintIndent='" + this.c10_1 + "', coerceInputValues=" + this.d10_1 + ', useArrayPolymorphism=' + this.e10_1 + ', ') + ("classDiscriminator='" + this.f10_1 + "', allowSpecialFloatingPointValues=" + this.g10_1 + ', useAlternativeNames=' + this.h10_1 + ', ') + ('namingStrategy=' + toString_0(this.i10_1) + ', decodeEnumsCaseInsensitive=' + this.j10_1 + ')');
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
  var k = _name_for_destructuring_parameter_0__wldtmu.o1();
  // Inline function 'kotlin.collections.component2' call
  var v = _name_for_destructuring_parameter_0__wldtmu.p1();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  printQuoted(this_0, k);
  this_0.r6(_Char___init__impl__6a9atx(58));
  this_0.p6(v);
  return this_0.toString();
}
function JsonObject(content) {
  JsonElement.call(this);
  this.m10_1 = content;
}
protoOf(JsonObject).t1 = function () {
  return this.m10_1.t1();
};
protoOf(JsonObject).s1 = function () {
  return this.m10_1.s1();
};
protoOf(JsonObject).l = function () {
  return this.m10_1.l();
};
protoOf(JsonObject).n10 = function (key) {
  return this.m10_1.q1(key);
};
protoOf(JsonObject).q1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.n10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).o10 = function (key) {
  return this.m10_1.r1(key);
};
protoOf(JsonObject).r1 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.o10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).o = function () {
  return this.m10_1.o();
};
protoOf(JsonObject).equals = function (other) {
  return equals(this.m10_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.m10_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.m10_1.t1();
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
  return this.p10();
};
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function JsonPrimitive_1(value) {
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
function JsonArray(content) {
  JsonElement.call(this);
  this.q10_1 = content;
}
protoOf(JsonArray).l = function () {
  return this.q10_1.l();
};
protoOf(JsonArray).n = function (index) {
  return this.q10_1.n(index);
};
protoOf(JsonArray).o = function () {
  return this.q10_1.o();
};
protoOf(JsonArray).i = function () {
  return this.q10_1.i();
};
protoOf(JsonArray).equals = function (other) {
  return equals(this.q10_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.q10_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.q10_1, ',', '[', ']');
};
function Companion_2() {
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonElement() {
}
function _get_$cachedSerializer__te6jhj($this) {
  return $this.s10_1.p1();
}
function JsonNull$_anonymous__enib48() {
  return JsonNullSerializer_getInstance();
}
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.r10_1 = 'null';
  var tmp = this;
  var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
  tmp.s10_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
}
protoOf(JsonNull).p10 = function () {
  return this.r10_1;
};
protoOf(JsonNull).t10 = function () {
  return _get_$cachedSerializer__te6jhj(this);
};
protoOf(JsonNull).cq = function (typeParamsSerializers) {
  return this.t10();
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
  this.u10_1 = isString;
  this.v10_1 = coerceToInlineType;
  this.w10_1 = toString(body);
  if (!(this.v10_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.v10_1.wf()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).p10 = function () {
  return this.w10_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.u10_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.w10_1);
    tmp = this_0.toString();
  } else {
    tmp = this.w10_1;
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
  if (!(this.u10_1 === other.u10_1))
    return false;
  if (!(this.w10_1 === other.w10_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.u10_1);
  result = imul(31, result) + getStringHashCode(this.w10_1) | 0;
  return result;
};
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.p10());
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.p10())).x10();
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
    throw NumberFormatException_init_$Create$(_this__u8e3s4.p10() + ' is not an Int');
  return result.y();
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.mapExceptions' call
  var tmp;
  try {
    tmp = (new StringJsonLexer(_this__u8e3s4.p10())).x10();
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
  var this_0 = _this__u8e3s4.p10();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.p10());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.p10();
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
  $this$buildSerialDescriptor.re('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.re('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.re('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.re('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.re('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().y10_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().z10_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().a11_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().b11_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().c11_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.d11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).ge = function () {
  return this.d11_1;
};
protoOf(JsonElementSerializer).e11 = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.ij(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.ij(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.ij(JsonArraySerializer_getInstance(), value);
      }
    }
  }
};
protoOf(JsonElementSerializer).he = function (encoder, value) {
  return this.e11(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).ie = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.l10();
};
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance == null)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function JsonObjectDescriptor() {
  JsonObjectDescriptor_instance = this;
  this.f11_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ge();
  this.g11_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).uf = function () {
  return this.f11_1.uf();
};
protoOf(JsonObjectDescriptor).vf = function () {
  return this.f11_1.vf();
};
protoOf(JsonObjectDescriptor).wf = function () {
  return this.f11_1.wf();
};
protoOf(JsonObjectDescriptor).qf = function () {
  return this.f11_1.qf();
};
protoOf(JsonObjectDescriptor).xf = function () {
  return this.f11_1.xf();
};
protoOf(JsonObjectDescriptor).yf = function (index) {
  return this.f11_1.yf(index);
};
protoOf(JsonObjectDescriptor).zf = function (index) {
  return this.f11_1.zf(index);
};
protoOf(JsonObjectDescriptor).ag = function (name) {
  return this.f11_1.ag(name);
};
protoOf(JsonObjectDescriptor).bg = function (index) {
  return this.f11_1.bg(index);
};
protoOf(JsonObjectDescriptor).cg = function (index) {
  return this.f11_1.cg(index);
};
protoOf(JsonObjectDescriptor).hf = function () {
  return this.g11_1;
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.b11_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).ge = function () {
  return this.b11_1;
};
protoOf(JsonObjectSerializer).h11 = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).he(encoder, value);
};
protoOf(JsonObjectSerializer).he = function (encoder, value) {
  return this.h11(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).ie = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ie(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonPrimitiveSerializer() {
  JsonPrimitiveSerializer_instance = this;
  this.y10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).ge = function () {
  return this.y10_1;
};
protoOf(JsonPrimitiveSerializer).i11 = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.ij(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.ij(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).he = function (encoder, value) {
  return this.i11(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).ie = function (decoder) {
  var result = asJsonDecoder(decoder).l10();
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
  this.j11_1 = ListSerializer(JsonElementSerializer_getInstance()).ge();
  this.k11_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).uf = function () {
  return this.j11_1.uf();
};
protoOf(JsonArrayDescriptor).vf = function () {
  return this.j11_1.vf();
};
protoOf(JsonArrayDescriptor).wf = function () {
  return this.j11_1.wf();
};
protoOf(JsonArrayDescriptor).qf = function () {
  return this.j11_1.qf();
};
protoOf(JsonArrayDescriptor).xf = function () {
  return this.j11_1.xf();
};
protoOf(JsonArrayDescriptor).yf = function (index) {
  return this.j11_1.yf(index);
};
protoOf(JsonArrayDescriptor).zf = function (index) {
  return this.j11_1.zf(index);
};
protoOf(JsonArrayDescriptor).ag = function (name) {
  return this.j11_1.ag(name);
};
protoOf(JsonArrayDescriptor).bg = function (index) {
  return this.j11_1.bg(index);
};
protoOf(JsonArrayDescriptor).cg = function (index) {
  return this.j11_1.cg(index);
};
protoOf(JsonArrayDescriptor).hf = function () {
  return this.k11_1;
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.c11_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).ge = function () {
  return this.c11_1;
};
protoOf(JsonArraySerializer).l11 = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).he(encoder, value);
};
protoOf(JsonArraySerializer).he = function (encoder, value) {
  return this.l11(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).ie = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).ie(decoder));
};
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance == null)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function JsonNullSerializer() {
  JsonNullSerializer_instance = this;
  this.z10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).ge = function () {
  return this.z10_1;
};
protoOf(JsonNullSerializer).m11 = function (encoder, value) {
  verify(encoder);
  encoder.li();
};
protoOf(JsonNullSerializer).he = function (encoder, value) {
  return this.m11(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).ie = function (decoder) {
  verify_0(decoder);
  if (decoder.bh()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.ch();
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
  this.a11_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).ge = function () {
  return this.a11_1;
};
protoOf(JsonLiteralSerializer).n11 = function (encoder, value) {
  verify(encoder);
  if (value.u10_1) {
    return encoder.ui(value.w10_1);
  }
  if (!(value.v10_1 == null)) {
    return encoder.wi(value.v10_1).ui(value.w10_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.w10_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.qi(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.w10_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).qd_1;
    var tmp_1 = encoder.wi(serializer_0(Companion_getInstance()).ge());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.qi(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.w10_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.si(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.w10_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.mi(tmp3_safe_receiver);
  }
  encoder.ui(value.w10_1);
};
protoOf(JsonLiteralSerializer).he = function (encoder, value) {
  return this.n11(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).ie = function (decoder) {
  var result = asJsonDecoder(decoder).l10();
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
  var tmp0 = $this.o11_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.p1();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function defer$1($deferred) {
  this.o11_1 = lazy_0($deferred);
}
protoOf(defer$1).hf = function () {
  return _get_original__l7ku1m(this).hf();
};
protoOf(defer$1).xf = function () {
  return _get_original__l7ku1m(this).xf();
};
protoOf(defer$1).vf = function () {
  return _get_original__l7ku1m(this).vf();
};
protoOf(defer$1).bg = function (index) {
  return _get_original__l7ku1m(this).bg(index);
};
protoOf(defer$1).ag = function (name) {
  return _get_original__l7ku1m(this).ag(name);
};
protoOf(defer$1).yf = function (index) {
  return _get_original__l7ku1m(this).yf(index);
};
protoOf(defer$1).zf = function (index) {
  return _get_original__l7ku1m(this).zf(index);
};
protoOf(defer$1).cg = function (index) {
  return _get_original__l7ku1m(this).cg(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.p11_1 = writer;
  this.q11_1 = true;
}
protoOf(Composer).r11 = function () {
  this.q11_1 = true;
};
protoOf(Composer).s11 = function () {
  return Unit_instance;
};
protoOf(Composer).t11 = function () {
  this.q11_1 = false;
};
protoOf(Composer).u11 = function () {
  return Unit_instance;
};
protoOf(Composer).v11 = function (v) {
  return this.p11_1.w11(v);
};
protoOf(Composer).x11 = function (v) {
  return this.p11_1.y11(v);
};
protoOf(Composer).z11 = function (v) {
  return this.p11_1.y11(v.toString());
};
protoOf(Composer).a12 = function (v) {
  return this.p11_1.y11(v.toString());
};
protoOf(Composer).b12 = function (v) {
  return this.p11_1.c12(toLong(v));
};
protoOf(Composer).d12 = function (v) {
  return this.p11_1.c12(toLong(v));
};
protoOf(Composer).e12 = function (v) {
  return this.p11_1.c12(toLong(v));
};
protoOf(Composer).f12 = function (v) {
  return this.p11_1.c12(v);
};
protoOf(Composer).g12 = function (v) {
  return this.p11_1.y11(v.toString());
};
protoOf(Composer).h12 = function (value) {
  return this.p11_1.i12(value);
};
function Composer_0(sb, json) {
  return json.ly_1.a10_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.l12_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).e12 = function (v) {
  if (this.l12_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.h12(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.x11(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).f12 = function (v) {
  if (this.l12_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.h12(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.x11(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).b12 = function (v) {
  if (this.l12_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.h12(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.x11(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).d12 = function (v) {
  if (this.l12_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.h12(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.x11(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.o12_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).h12 = function (value) {
  if (this.o12_1) {
    protoOf(Composer).h12.call(this, value);
  } else {
    protoOf(Composer).x11.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.r12_1 = json;
  this.s12_1 = 0;
}
protoOf(ComposerWithPrettyPrint).r11 = function () {
  this.q11_1 = true;
  this.s12_1 = this.s12_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).s11 = function () {
  this.s12_1 = this.s12_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).t11 = function () {
  this.q11_1 = false;
  this.x11('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.s12_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.x11(this.r12_1.ly_1.c10_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).u11 = function () {
  this.v11(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.u12_1 = (!descriptor.cg(index) && descriptor.zf(index).qf());
  return $this.u12_1;
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
  tmp.t12_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.u12_1 = false;
}
protoOf(JsonElementMarker).v12 = function (index) {
  this.t12_1.un(index);
};
protoOf(JsonElementMarker).w12 = function () {
  return this.t12_1.vn();
};
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.x12('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.hf() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.xf().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
  var index = _this__u8e3s4.ag(name);
  if (!(index === -3))
    return index;
  if (!json.ly_1.h10_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException_init_$Create$(_this__u8e3s4.hf() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.bg(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.xf(), CLASS_getInstance()) ? json.ly_1.i10_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.z12(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.ly_1.j10_1 && equals(descriptor.xf(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).r1(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.z12(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.vf();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.yf(i);
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
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a13_1;
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
        tmp_0 = _this__u8e3s4.bg(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.b13(_this__u8e3s4, i, _this__u8e3s4.bg(i));
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
  var entity = equals($this_buildDeserializationNamesMap.xf(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q1(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.bg(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.bg(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.v1(name, index);
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return function () {
    return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
  };
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return function () {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.vf();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.bg(tmp_2);
      tmp_1[tmp_2] = $strategy.b13($this_serializationNamesIndices, tmp_2, baseName);
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
  var newSize = imul($this.e13_1, 2);
  $this.c13_1 = copyOf($this.c13_1, newSize);
  $this.d13_1 = copyOf_0($this.d13_1, newSize);
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.c13_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.d13_1 = tmp_2;
  this.e13_1 = -1;
}
protoOf(JsonPath).f13 = function (sd) {
  this.e13_1 = this.e13_1 + 1 | 0;
  var depth = this.e13_1;
  if (depth === this.c13_1.length) {
    resize(this);
  }
  this.c13_1[depth] = sd;
};
protoOf(JsonPath).g13 = function (index) {
  this.d13_1[this.e13_1] = index;
};
protoOf(JsonPath).h13 = function (key) {
  var tmp;
  if (!(this.d13_1[this.e13_1] === -2)) {
    this.e13_1 = this.e13_1 + 1 | 0;
    tmp = this.e13_1 === this.c13_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.c13_1[this.e13_1] = key;
  this.d13_1[this.e13_1] = -2;
};
protoOf(JsonPath).i13 = function () {
  if (this.d13_1[this.e13_1] === -2) {
    this.c13_1[this.e13_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).j13 = function () {
  var depth = this.e13_1;
  if (this.d13_1[depth] === -2) {
    this.d13_1[depth] = -1;
    this.e13_1 = this.e13_1 - 1 | 0;
  }
  if (!(this.e13_1 === -1)) {
    this.e13_1 = this.e13_1 - 1 | 0;
  }
};
protoOf(JsonPath).k13 = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.q6('$');
  // Inline function 'kotlin.repeat' call
  var times = this.e13_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.c13_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.xf(), LIST_getInstance())) {
          if (!(this.d13_1[index] === -1)) {
            this_0.q6('[');
            this_0.p6(this.d13_1[index]);
            this_0.q6(']');
          }
        } else {
          var idx = this.d13_1[index];
          if (idx >= 0) {
            this_0.q6('.');
            this_0.q6(element.bg(idx));
          }
        }
      } else {
        if (!(element === Tombstone_instance)) {
          this_0.q6('[');
          this_0.q6("'");
          this_0.p6(element);
          this_0.q6("'");
          this_0.q6(']');
        }
      }
    }
     while (inductionVariable < times);
  return this_0.toString();
};
protoOf(JsonPath).toString = function () {
  return this.k13();
};
function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = values().length;
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
  encoder.ij(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.t13_1.w13(6);
  if ($this.t13_1.x13() === 4) {
    $this.t13_1.x12('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.t13_1.y13()) {
    var key = $this.u13_1 ? $this.t13_1.a14() : $this.t13_1.z13();
    $this.t13_1.w13(5);
    var element = $this.b14();
    // Inline function 'kotlin.collections.set' call
    result.v1(key, element);
    lastToken = $this.t13_1.c14();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.t13_1.x12('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.t13_1.w13(7);
  } else if (lastToken === 4) {
    $this.t13_1.x12('Unexpected trailing comma');
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
  tmp.l7_1 = Unit_instance;
  tmp.m7_1 = null;
  return tmp.r7();
}
function readArray($this) {
  var lastToken = $this.t13_1.c14();
  if ($this.t13_1.x13() === 4) {
    $this.t13_1.x12('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.t13_1.y13()) {
    var element = $this.b14();
    result.d(element);
    lastToken = $this.t13_1.c14();
    if (!(lastToken === 4)) {
      var tmp0 = $this.t13_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.bz_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.x12(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.t13_1.w13(9);
  } else if (lastToken === 4) {
    $this.t13_1.x12('Unexpected trailing comma');
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.u13_1 || !isString) {
    tmp = $this.t13_1.a14();
  } else {
    tmp = $this.t13_1.z13();
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
  this.a15_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).f15 = function ($this$$receiver, it, $completion) {
  var tmp = this.g15($this$$receiver, it, $completion);
  tmp.l7_1 = Unit_instance;
  tmp.m7_1 = null;
  return tmp.r7();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).x7 = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.f15(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).r7 = function () {
  var suspendResult = this.l7_1;
  $sm: do
    try {
      var tmp = this.j7_1;
      switch (tmp) {
        case 0:
          this.k7_1 = 3;
          this.d15_1 = this.a15_1.t13_1.x13();
          if (this.d15_1 === 1) {
            this.e15_1 = readValue(this.a15_1, true);
            this.j7_1 = 2;
            continue $sm;
          } else {
            if (this.d15_1 === 0) {
              this.e15_1 = readValue(this.a15_1, false);
              this.j7_1 = 2;
              continue $sm;
            } else {
              if (this.d15_1 === 6) {
                this.j7_1 = 1;
                suspendResult = readObject_0(this.a15_1, this.b15_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.d15_1 === 8) {
                  this.e15_1 = readArray(this.a15_1);
                  this.j7_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.a15_1.t13_1.x12("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.e15_1 = suspendResult;
          this.j7_1 = 2;
          continue $sm;
        case 2:
          return this.e15_1;
        case 3:
          throw this.m7_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.k7_1 === 3) {
        throw e;
      } else {
        this.j7_1 = this.k7_1;
        this.m7_1 = e;
      }
    }
   while (true);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).g15 = function ($this$$receiver, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.a15_1, completion);
  i.b15_1 = $this$$receiver;
  i.c15_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$$receiver, it, $completion) {
    return i.f15($this$$receiver, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.l14_1 = _this__u8e3s4;
  this.m14_1 = _this__u8e3s4_0;
}
protoOf($readObjectCOROUTINE$).r7 = function () {
  var suspendResult = this.l7_1;
  $sm: do
    try {
      var tmp = this.j7_1;
      switch (tmp) {
        case 0:
          this.k7_1 = 5;
          var tmp_0 = this;
          tmp_0.n14_1 = this.l14_1;
          this.o14_1 = this.n14_1;
          this.p14_1 = this.o14_1.t13_1.w13(6);
          if (this.o14_1.t13_1.x13() === 4) {
            this.o14_1.t13_1.x12('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.q14_1 = LinkedHashMap_init_$Create$();
          this.j7_1 = 1;
          continue $sm;
        case 1:
          if (!this.o14_1.t13_1.y13()) {
            this.j7_1 = 4;
            continue $sm;
          }

          this.r14_1 = this.o14_1.u13_1 ? this.o14_1.t13_1.a14() : this.o14_1.t13_1.z13();
          this.o14_1.t13_1.w13(5);
          this.j7_1 = 2;
          suspendResult = this.m14_1.cc(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.q14_1;
          var key = this.r14_1;
          tmp0.v1(key, element);
          this.p14_1 = this.o14_1.t13_1.c14();
          var tmp0_subject = this.p14_1;
          if (tmp0_subject === 4) {
            this.j7_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.j7_1 = 4;
              continue $sm;
            } else {
              this.o14_1.t13_1.x12('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.j7_1 = 1;
          continue $sm;
        case 4:
          if (this.p14_1 === 6) {
            this.o14_1.t13_1.w13(7);
          } else if (this.p14_1 === 4) {
            this.o14_1.t13_1.x12('Unexpected trailing comma');
          }

          return new JsonObject(this.q14_1);
        case 5:
          throw this.m7_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.k7_1 === 5) {
        throw e;
      } else {
        this.j7_1 = this.k7_1;
        this.m7_1 = e;
      }
    }
   while (true);
};
function JsonTreeReader(configuration, lexer) {
  this.t13_1 = lexer;
  this.u13_1 = configuration.yz_1;
  this.v13_1 = 0;
}
protoOf(JsonTreeReader).b14 = function () {
  var token = this.t13_1.x13();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.v13_1 = this.v13_1 + 1 | 0;
    if (this.v13_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.v13_1 = this.v13_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.t13_1.x12('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var tmp0_iterator = _this__u8e3s4.uf().i();
  while (tmp0_iterator.j()) {
    var annotation = tmp0_iterator.k();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.h15_1;
  }
  return json.ly_1.f10_1;
}
function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
  var tmp;
  if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.k10().ly_1.e10_1;
  }
  if (tmp) {
    return deserializer.ie(_this__u8e3s4);
  }
  var discriminator = classDiscriminator(deserializer.ge(), _this__u8e3s4.k10());
  var tmp0 = _this__u8e3s4.l10();
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var descriptor = deserializer.ge();
  if (!(tmp0 instanceof JsonObject)) {
    throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + toString(getKClassFromExpression(tmp0)));
  }
  var jsonTree = tmp0;
  var tmp0_safe_receiver = jsonTree.o10(discriminator);
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
  var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p10();
  var tmp2_elvis_lhs = deserializer.xe(_this__u8e3s4, type);
  var tmp_0;
  if (tmp2_elvis_lhs == null) {
    throwSerializerNotFound(type, jsonTree);
  } else {
    tmp_0 = tmp2_elvis_lhs;
  }
  var actualSerializer = tmp_0;
  var tmp_1 = _this__u8e3s4.k10();
  return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
}
function throwSerializerNotFound(type, jsonTree) {
  var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
  throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.ge()).m1(classDiscriminator)) {
    var baseName = serializer.ge().hf();
    var actualName = actualSerializer.ge().hf();
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
  var kind = descriptor.xf();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.k8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.i15_1)
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
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.k8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.vf();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.bg(i);
      if (name === $this.j15_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function PolymorphismValidator(useArrayPolymorphism, discriminator) {
  this.i15_1 = useArrayPolymorphism;
  this.j15_1 = discriminator;
}
protoOf(PolymorphismValidator).cy = function (kClass, provider) {
};
protoOf(PolymorphismValidator).fy = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.ge();
  checkKind_0(this, descriptor, actualClass);
  if (!this.i15_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(PolymorphismValidator).gy = function (baseClass, defaultSerializerProvider) {
};
protoOf(PolymorphismValidator).hy = function (baseClass, defaultDeserializerProvider) {
};
function Key() {
}
function DescriptorSchemaCache() {
  this.y12_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).k15 = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.y12_1;
  var value_0 = this_0.r1(descriptor);
  var tmp;
  if (value_0 == null) {
    var answer = createMapForCache(2);
    this_0.v1(descriptor, answer);
    tmp = answer;
  } else {
    tmp = value_0;
  }
  var tmp0 = tmp;
  var tmp2 = key instanceof Key ? key : THROW_CCE();
  // Inline function 'kotlin.collections.set' call
  var value_1 = !(value == null) ? value : THROW_CCE();
  tmp0.v1(tmp2, value_1);
};
protoOf(DescriptorSchemaCache).z12 = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.l15(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.k15(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).l15 = function (descriptor, key) {
  var tmp0_safe_receiver = this.y12_1.r1(descriptor);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = tmp0_safe_receiver.r1(key instanceof Key ? key : THROW_CCE());
  }
  var tmp_0 = tmp;
  return !(tmp_0 == null) ? tmp_0 : null;
};
function DiscriminatorHolder(discriminatorToSkip) {
  this.m15_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.m15_1 === unknownKey) {
    _this__u8e3s4.m15_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.hi(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.vy_1.x13() === 4) {
    $this.vy_1.x12('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.xy_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.xy_1 === -1)) {
      hasComma = $this.vy_1.o15();
    }
  } else {
    $this.vy_1.n15(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.vy_1.y13()) {
    if (decodingKey) {
      if ($this.xy_1 === -1) {
        var tmp0 = $this.vy_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.bz_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected trailing comma';
          tmp0.x12(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.vy_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.bz_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.x12(tmp$ret$2, position_0);
        }
      }
    }
    $this.xy_1 = $this.xy_1 + 1 | 0;
    tmp = $this.xy_1;
  } else {
    if (hasComma) {
      $this.vy_1.x12("Expected '}', but had ',' instead");
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.ty_1;
  var tmp2 = descriptor.zf(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.qf()) {
      tmp = $this.vy_1.p15(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.xf(), ENUM_getInstance())) {
      var tmp_0;
      if (tmp2.qf()) {
        tmp_0 = $this.vy_1.p15(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.vy_1.q15($this.zy_1.yz_1);
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
        $this.vy_1.z13();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.vy_1.o15();
  while ($this.vy_1.y13()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.vy_1.n15(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.ty_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.zy_1.d10_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.vy_1.o15();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.az_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.v12(index);
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
    $this.vy_1.x12('Unexpected trailing comma');
  }
  var tmp1_safe_receiver = $this.az_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w12();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, key) {
  if ($this.zy_1.xz_1 || trySkip($this, $this.yy_1, key)) {
    $this.vy_1.s15($this.zy_1.yz_1);
  } else {
    $this.vy_1.r15(key);
  }
  return $this.vy_1.o15();
}
function decodeListIndex($this) {
  var hasComma = $this.vy_1.o15();
  var tmp;
  if ($this.vy_1.y13()) {
    if (!($this.xy_1 === -1) && !hasComma) {
      $this.vy_1.x12('Expected end of the array or comma');
    }
    $this.xy_1 = $this.xy_1 + 1 | 0;
    tmp = $this.xy_1;
  } else {
    if (hasComma) {
      $this.vy_1.x12('Unexpected trailing comma');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.zy_1.yz_1) {
    tmp = $this.vy_1.u15();
  } else {
    tmp = $this.vy_1.t15();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.ty_1 = json;
  this.uy_1 = mode;
  this.vy_1 = lexer;
  this.wy_1 = this.ty_1.fi();
  this.xy_1 = -1;
  this.yy_1 = discriminatorHolder;
  this.zy_1 = this.ty_1.ly_1;
  this.az_1 = this.zy_1.b10_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).k10 = function () {
  return this.ty_1;
};
protoOf(StreamingJsonDecoder).fi = function () {
  return this.wy_1;
};
protoOf(StreamingJsonDecoder).l10 = function () {
  return (new JsonTreeReader(this.ty_1.ly_1, this.vy_1)).b14();
};
protoOf(StreamingJsonDecoder).ph = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.ty_1.ly_1.e10_1;
    }
    if (tmp) {
      return deserializer.ie(this);
    }
    var discriminator = classDiscriminator(deserializer.ge(), this.ty_1);
    var type = this.vy_1.v15(discriminator, this.zy_1.yz_1);
    var actualSerializer = null;
    if (!(type == null)) {
      actualSerializer = deserializer.xe(this, type);
    }
    if (actualSerializer == null) {
      return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
    }
    this.yy_1 = new DiscriminatorHolder(discriminator);
    var tmp_0 = actualSerializer.ie(this);
    var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    return result;
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.jf_1, plus(e.message, ' at path: ') + this.vy_1.cz_1.k13(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).qh = function (descriptor) {
  var newMode = switchMode(this.ty_1, descriptor);
  this.vy_1.cz_1.f13(descriptor);
  this.vy_1.n15(newMode.y15_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.x1_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.ty_1, newMode, this.vy_1, descriptor, this.yy_1);
      break;
    default:
      var tmp_0;
      if (this.uy_1.equals(newMode) && this.ty_1.ly_1.b10_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.ty_1, newMode, this.vy_1, descriptor, this.yy_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).rh = function (descriptor) {
  if (this.ty_1.ly_1.xz_1 && descriptor.vf() === 0) {
    skipLeftoverElements(this, descriptor);
  }
  this.vy_1.n15(this.uy_1.z15_1);
  this.vy_1.cz_1.j13();
};
protoOf(StreamingJsonDecoder).bh = function () {
  var tmp;
  var tmp0_safe_receiver = this.az_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u12_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.vy_1.a16();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).ch = function () {
  return null;
};
protoOf(StreamingJsonDecoder).ci = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.uy_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.vy_1.cz_1.i13();
  }
  var value = protoOf(AbstractDecoder).ci.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.vy_1.cz_1.h13(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).hi = function (descriptor) {
  var index;
  switch (this.uy_1.x1_1) {
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
  if (!this.uy_1.equals(WriteMode_MAP_getInstance())) {
    this.vy_1.cz_1.g13(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).dh = function () {
  var tmp;
  if (this.zy_1.yz_1) {
    tmp = this.vy_1.c16();
  } else {
    tmp = this.vy_1.b16();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).eh = function () {
  var value = this.vy_1.x10();
  if (!value.equals(toLong(value.s2()))) {
    this.vy_1.x12("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.s2();
};
protoOf(StreamingJsonDecoder).fh = function () {
  var value = this.vy_1.x10();
  if (!value.equals(toLong(value.t2()))) {
    this.vy_1.x12("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.t2();
};
protoOf(StreamingJsonDecoder).gh = function () {
  var value = this.vy_1.x10();
  if (!value.equals(toLong(value.y()))) {
    this.vy_1.x12("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.y();
};
protoOf(StreamingJsonDecoder).hh = function () {
  return this.vy_1.x10();
};
protoOf(StreamingJsonDecoder).ih = function () {
  var tmp0 = this.vy_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.a14();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.x12("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.ty_1.ly_1.g10_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.vy_1, result);
};
protoOf(StreamingJsonDecoder).jh = function () {
  var tmp0 = this.vy_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.a14();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.x12("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.ty_1.ly_1.g10_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.vy_1, result);
};
protoOf(StreamingJsonDecoder).kh = function () {
  var string = this.vy_1.a14();
  if (!(string.length === 1)) {
    this.vy_1.x12("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).lh = function () {
  var tmp;
  if (this.zy_1.yz_1) {
    tmp = this.vy_1.u15();
  } else {
    tmp = this.vy_1.z13();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).nh = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.vy_1, this.ty_1) : protoOf(AbstractDecoder).nh.call(this, descriptor);
};
protoOf(StreamingJsonDecoder).mh = function (enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.ty_1, this.lh(), ' at path ' + this.vy_1.cz_1.k13());
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.d16_1 = lexer;
  this.e16_1 = json.fi();
}
protoOf(JsonDecoderForUnsignedTypes).fi = function () {
  return this.e16_1;
};
protoOf(JsonDecoderForUnsignedTypes).hi = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).gh = function () {
  var tmp0 = this.d16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.a14();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.x12("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).hh = function () {
  var tmp0 = this.d16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.a14();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.x12("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).eh = function () {
  var tmp0 = this.d16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.a14();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.x12("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).fh = function () {
  var tmp0 = this.d16_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.a14();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.x12("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
  $this.l13_1.t11();
  $this.ui(ensureNotNull($this.s13_1));
  $this.l13_1.v11(_Char___init__impl__6a9atx(58));
  $this.l13_1.u11();
  $this.ui(descriptor.hf());
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.l13_1 = composer;
  this.m13_1 = json;
  this.n13_1 = mode;
  this.o13_1 = modeReuseCache;
  this.p13_1 = this.m13_1.fi();
  this.q13_1 = this.m13_1.ly_1;
  this.r13_1 = false;
  this.s13_1 = null;
  var i = this.n13_1.x1_1;
  if (!(this.o13_1 == null)) {
    if (!(this.o13_1[i] === null) || !(this.o13_1[i] === this)) {
      this.o13_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).k10 = function () {
  return this.m13_1;
};
protoOf(StreamingJsonEncoder).fi = function () {
  return this.p13_1;
};
protoOf(StreamingJsonEncoder).nj = function (descriptor, index) {
  return this.q13_1.wz_1;
};
protoOf(StreamingJsonEncoder).ij = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.k10().ly_1.e10_1;
    }
    if (tmp) {
      serializer.he(this, value);
      break $l$block;
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.ge(), this.k10());
    var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
    access$validateIfSealed$tPolymorphicKt(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.ge().xf());
    this.s13_1 = baseClassDiscriminator;
    actualSerializer.he(this, value);
  }
};
protoOf(StreamingJsonEncoder).qh = function (descriptor) {
  var newMode = switchMode(this.m13_1, descriptor);
  if (!(newMode.y15_1 === _Char___init__impl__6a9atx(0))) {
    this.l13_1.v11(newMode.y15_1);
    this.l13_1.r11();
  }
  if (!(this.s13_1 == null)) {
    encodeTypeInfo(this, descriptor);
    this.s13_1 = null;
  }
  if (this.n13_1.equals(newMode)) {
    return this;
  }
  var tmp0_safe_receiver = this.o13_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.x1_1];
  return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.l13_1, this.m13_1, newMode, this.o13_1) : tmp1_elvis_lhs;
};
protoOf(StreamingJsonEncoder).rh = function (descriptor) {
  if (!(this.n13_1.z15_1 === _Char___init__impl__6a9atx(0))) {
    this.l13_1.s11();
    this.l13_1.t11();
    this.l13_1.v11(this.n13_1.z15_1);
  }
};
protoOf(StreamingJsonEncoder).ji = function (descriptor, index) {
  switch (this.n13_1.x1_1) {
    case 1:
      if (!this.l13_1.q11_1) {
        this.l13_1.v11(_Char___init__impl__6a9atx(44));
      }

      this.l13_1.t11();
      break;
    case 2:
      if (!this.l13_1.q11_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.l13_1.v11(_Char___init__impl__6a9atx(44));
          this.l13_1.t11();
          tmp_0 = true;
        } else {
          this.l13_1.v11(_Char___init__impl__6a9atx(58));
          this.l13_1.u11();
          tmp_0 = false;
        }
        tmp.r13_1 = tmp_0;
      } else {
        this.r13_1 = true;
        this.l13_1.t11();
      }

      break;
    case 3:
      if (index === 0)
        this.r13_1 = true;
      if (index === 1) {
        this.l13_1.v11(_Char___init__impl__6a9atx(44));
        this.l13_1.u11();
        this.r13_1 = false;
      }

      break;
    default:
      if (!this.l13_1.q11_1) {
        this.l13_1.v11(_Char___init__impl__6a9atx(44));
      }

      this.l13_1.t11();
      this.ui(getJsonElementName(descriptor, this.m13_1, index));
      this.l13_1.v11(_Char___init__impl__6a9atx(58));
      this.l13_1.u11();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).jj = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.q13_1.b10_1) {
    protoOf(AbstractEncoder).jj.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).wi = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.l13_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.l13_1;
    } else {
      var tmp0 = this.l13_1.p11_1;
      var p1 = this.r13_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.m13_1, this.n13_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.l13_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.l13_1;
    } else {
      var tmp0_0 = this.l13_1.p11_1;
      var p1_0 = this.r13_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.m13_1, this.n13_1, null);
  } else {
    tmp = protoOf(AbstractEncoder).wi.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).li = function () {
  this.l13_1.x11('null');
};
protoOf(StreamingJsonEncoder).mi = function (value) {
  if (this.r13_1) {
    this.ui(value.toString());
  } else {
    this.l13_1.g12(value);
  }
};
protoOf(StreamingJsonEncoder).ni = function (value) {
  if (this.r13_1) {
    this.ui(value.toString());
  } else {
    this.l13_1.b12(value);
  }
};
protoOf(StreamingJsonEncoder).oi = function (value) {
  if (this.r13_1) {
    this.ui(value.toString());
  } else {
    this.l13_1.d12(value);
  }
};
protoOf(StreamingJsonEncoder).pi = function (value) {
  if (this.r13_1) {
    this.ui(value.toString());
  } else {
    this.l13_1.e12(value);
  }
};
protoOf(StreamingJsonEncoder).qi = function (value) {
  if (this.r13_1) {
    this.ui(value.toString());
  } else {
    this.l13_1.f12(value);
  }
};
protoOf(StreamingJsonEncoder).ri = function (value) {
  if (this.r13_1) {
    this.ui(value.toString());
  } else {
    this.l13_1.z11(value);
  }
  if (!this.q13_1.g10_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.l13_1.p11_1));
  }
};
protoOf(StreamingJsonEncoder).si = function (value) {
  if (this.r13_1) {
    this.ui(value.toString());
  } else {
    this.l13_1.a12(value);
  }
  if (!this.q13_1.g10_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, toString(this.l13_1.p11_1));
  }
};
protoOf(StreamingJsonEncoder).ti = function (value) {
  this.ui(toString_1(value));
};
protoOf(StreamingJsonEncoder).ui = function (value) {
  return this.l13_1.h12(value);
};
protoOf(StreamingJsonEncoder).vi = function (enumDescriptor, index) {
  this.ui(enumDescriptor.bg(index));
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.wf() && get_unsignedNumberDescriptors().m1(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.wf() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).ge(), serializer_0(Companion_getInstance()).ge(), serializer_2(Companion_getInstance_1()).ge(), serializer_3(Companion_getInstance_2()).ge()]);
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
  _this__u8e3s4.r6(_Char___init__impl__6a9atx(34));
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
        _this__u8e3s4.t9(value, lastPos, i);
        _this__u8e3s4.q6(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0)) {
    _this__u8e3s4.t9(value, lastPos, value.length);
  } else {
    _this__u8e3s4.q6(value);
  }
  _this__u8e3s4.r6(_Char___init__impl__6a9atx(34));
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
  throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.k16()));
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
  this.h16_1 = json;
  this.i16_1 = value;
  this.j16_1 = this.k10().ly_1;
}
protoOf(AbstractJsonTreeDecoder).k10 = function () {
  return this.h16_1;
};
protoOf(AbstractJsonTreeDecoder).p1 = function () {
  return this.i16_1;
};
protoOf(AbstractJsonTreeDecoder).fi = function () {
  return this.k10().fi();
};
protoOf(AbstractJsonTreeDecoder).k16 = function () {
  var tmp0_safe_receiver = this.uv();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.l16(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.p1() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).l10 = function () {
  return this.k16();
};
protoOf(AbstractJsonTreeDecoder).ph = function (deserializer) {
  return decodeSerializableValuePolymorphic(this, deserializer);
};
protoOf(AbstractJsonTreeDecoder).vv = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).qh = function (descriptor) {
  var currentObject = this.k16();
  var tmp0_subject = descriptor.xf();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.k10();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    if (!(currentObject instanceof JsonArray)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + toString(getKClassFromExpression(currentObject)));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.k10();
      var keyDescriptor = carrierDescriptor(descriptor.zf(0), this_0.fi());
      var keyKind = keyDescriptor.xf();
      var tmp_2;
      var tmp_3;
      if (keyKind instanceof PrimitiveKind) {
        tmp_3 = true;
      } else {
        tmp_3 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_3) {
        var tmp_4 = this.k10();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + toString(getKClassFromExpression(currentObject)));
        }
        tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
      } else {
        if (this_0.ly_1.zz_1) {
          var tmp_5 = this.k10();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonArray)) {
            throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonArray)) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + toString(getKClassFromExpression(currentObject)));
          }
          tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_2;
    } else {
      var tmp_6 = this.k10();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + toString(getKClassFromExpression(currentObject)));
      }
      tmp = new JsonTreeDecoder(tmp_6, currentObject);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).rh = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).bh = function () {
  var tmp = this.k16();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).m16 = function (tag) {
  var currentElement = this.l16(tag);
  var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + toString(currentElement), toString(this.k16()));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).n16 = function (tag, enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.k10(), this.m16(tag).p10());
};
protoOf(AbstractJsonTreeDecoder).hw = function (tag, enumDescriptor) {
  return this.n16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
};
protoOf(AbstractJsonTreeDecoder).o16 = function (tag) {
  return !(this.l16(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).xv = function (tag) {
  return this.o16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).p16 = function (tag) {
  var value = this.m16(tag);
  if (!this.k10().ly_1.yz_1) {
    var literal = asLiteral(this, value, 'boolean');
    if (literal.u10_1)
      throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.k16()));
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
protoOf(AbstractJsonTreeDecoder).yv = function (tag) {
  return this.p16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).q16 = function (tag) {
  var tmp2 = this.m16(tag);
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
protoOf(AbstractJsonTreeDecoder).zv = function (tag) {
  return this.q16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).r16 = function (tag) {
  var tmp2 = this.m16(tag);
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
protoOf(AbstractJsonTreeDecoder).aw = function (tag) {
  return this.r16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).s16 = function (tag) {
  var tmp2 = this.m16(tag);
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
protoOf(AbstractJsonTreeDecoder).bw = function (tag) {
  return this.s16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).t16 = function (tag) {
  var tmp2 = this.m16(tag);
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
protoOf(AbstractJsonTreeDecoder).cw = function (tag) {
  return this.t16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).u16 = function (tag) {
  var tmp2 = this.m16(tag);
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
  var specialFp = this.k10().ly_1.g10_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.k16()));
};
protoOf(AbstractJsonTreeDecoder).dw = function (tag) {
  return this.u16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).v16 = function (tag) {
  var tmp2 = this.m16(tag);
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
  var specialFp = this.k10().ly_1.g10_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.k16()));
};
protoOf(AbstractJsonTreeDecoder).ew = function (tag) {
  return this.v16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).w16 = function (tag) {
  var tmp2 = this.m16(tag);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
    try {
      var tmp0_elvis_lhs = new Char(single(tmp2.p10()));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, 'char');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp.z_1;
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
protoOf(AbstractJsonTreeDecoder).fw = function (tag) {
  return this.w16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).x16 = function (tag) {
  var value = this.m16(tag);
  if (!this.k10().ly_1.yz_1) {
    var literal = asLiteral(this, value, 'string');
    if (!literal.u10_1)
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.k16()));
  }
  if (value instanceof JsonNull)
    throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.k16()));
  return value.p10();
};
protoOf(AbstractJsonTreeDecoder).gw = function (tag) {
  return this.x16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).y16 = function (tag, inlineDescriptor) {
  return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.m16(tag).p10()), this.k10()) : protoOf(NamedValueDecoder).iw.call(this, tag, inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).iw = function (tag, inlineDescriptor) {
  return this.y16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).nh = function (descriptor) {
  return !(this.uv() == null) ? protoOf(NamedValueDecoder).nh.call(this, descriptor) : (new JsonPrimitiveDecoder(this.k10(), this.p1())).nh(descriptor);
};
function coerceInputValue_0($this, descriptor, index, tag) {
  var tmp0 = $this.k10();
  var tmp2 = descriptor.zf(index);
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var tmp;
    if (!tmp2.qf()) {
      var tmp_0 = $this.l16(tag);
      tmp = tmp_0 instanceof JsonNull;
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(tmp2.xf(), ENUM_getInstance())) {
      var tmp_1;
      if (tmp2.qf()) {
        var tmp_2 = $this.l16(tag);
        tmp_1 = tmp_2 instanceof JsonNull;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp_3 = $this.l16(tag);
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
  $this.i17_1 = (!$this.k10().ly_1.b10_1 && !descriptor.cg(index) && descriptor.zf(index).qf());
  return $this.i17_1;
}
function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
  polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value);
  this.e17_1 = value;
  this.f17_1 = polyDiscriminator;
  this.g17_1 = polyDescriptor;
  this.h17_1 = 0;
  this.i17_1 = false;
}
protoOf(JsonTreeDecoder).p1 = function () {
  return this.e17_1;
};
protoOf(JsonTreeDecoder).hi = function (descriptor) {
  while (this.h17_1 < descriptor.vf()) {
    var tmp1 = this.h17_1;
    this.h17_1 = tmp1 + 1 | 0;
    var name = this.pv(descriptor, tmp1);
    var index = this.h17_1 - 1 | 0;
    this.i17_1 = false;
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.p1();
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q1(name)) {
      tmp_0 = true;
    } else {
      tmp_0 = absenceIsNull(this, descriptor, index);
    }
    if (tmp_0) {
      tmp = !this.j16_1.d10_1 || !coerceInputValue_0(this, descriptor, index, name);
    } else {
      tmp = false;
    }
    if (tmp) {
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).bh = function () {
  return !this.i17_1 && protoOf(AbstractJsonTreeDecoder).bh.call(this);
};
protoOf(JsonTreeDecoder).qv = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.k10());
  var baseName = descriptor.bg(index);
  if (strategy == null) {
    if (!this.j16_1.h10_1)
      return baseName;
    if (this.p1().s1().m1(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.k10(), descriptor);
  // Inline function 'kotlin.collections.find' call
  var tmp0 = this.p1().s1();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (deserializationNamesMap_0.r1(element) === index) {
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
  var fallbackName = strategy == null ? null : strategy.b13(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).l16 = function (tag) {
  return getValue(this.p1(), tag);
};
protoOf(JsonTreeDecoder).qh = function (descriptor) {
  if (descriptor === this.g17_1) {
    var tmp = this.k10();
    var tmp0 = this.k16();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var descriptor_0 = this.g17_1;
    if (!(tmp0 instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + toString(getKClass(JsonObject)) + ' as the serialized body of ' + descriptor_0.hf() + ', but had ' + toString(getKClassFromExpression(tmp0)));
    }
    return new JsonTreeDecoder(tmp, tmp0, this.f17_1, this.g17_1);
  }
  return protoOf(AbstractJsonTreeDecoder).qh.call(this, descriptor);
};
protoOf(JsonTreeDecoder).rh = function (descriptor) {
  var tmp;
  if (this.j16_1.xz_1) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.xf();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.k10());
  var tmp_1;
  if (strategy == null && !this.j16_1.h10_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.k10(), descriptor).s1();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.k10()).l15(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var tmp1_iterator = this.p1().s1().i();
  while (tmp1_iterator.j()) {
    var key = tmp1_iterator.k();
    if (!names.m1(key) && !(key === this.f17_1)) {
      throw UnknownKeyException(key, this.p1().toString());
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.o17_1 = value;
  this.p17_1 = this.o17_1.l();
  this.q17_1 = -1;
}
protoOf(JsonTreeListDecoder).p1 = function () {
  return this.o17_1;
};
protoOf(JsonTreeListDecoder).qv = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).l16 = function (tag) {
  return this.o17_1.n(toInt(tag));
};
protoOf(JsonTreeListDecoder).hi = function (descriptor) {
  while (this.q17_1 < (this.p17_1 - 1 | 0)) {
    this.q17_1 = this.q17_1 + 1 | 0;
    return this.q17_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.w17_1 = value;
  this.jw('primitive');
}
protoOf(JsonPrimitiveDecoder).p1 = function () {
  return this.w17_1;
};
protoOf(JsonPrimitiveDecoder).hi = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).l16 = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.w17_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.h18_1 = value;
  this.i18_1 = toList(this.h18_1.s1());
  this.j18_1 = imul(this.i18_1.l(), 2);
  this.k18_1 = -1;
}
protoOf(JsonTreeMapDecoder).p1 = function () {
  return this.h18_1;
};
protoOf(JsonTreeMapDecoder).qv = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.i18_1.n(i);
};
protoOf(JsonTreeMapDecoder).hi = function (descriptor) {
  while (this.k18_1 < (this.j18_1 - 1 | 0)) {
    this.k18_1 = this.k18_1 + 1 | 0;
    return this.k18_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).l16 = function (tag) {
  return (this.k18_1 % 2 | 0) === 0 ? JsonPrimitive_1(tag) : getValue(this.h18_1, tag);
};
protoOf(JsonTreeMapDecoder).rh = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.ge())).ph(deserializer);
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
  this.y15_1 = begin;
  this.z15_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.xf();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.zf(0), _this__u8e3s4.fi());
        var keyKind = keyDescriptor.xf();
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
          if (_this__u8e3s4.ly_1.zz_1) {
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
  if (equals(_this__u8e3s4.xf(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.wf()) {
    tmp = carrierDescriptor(_this__u8e3s4.zf(0), module_0);
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
  $this.l18(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.l18(lastPosition, currentPosition);
  var result = $this.ez_1.toString();
  $this.ez_1.y9(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.dz_1);
  $this.dz_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.m18(), $this.bz_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.n18(currentPosition);
  if (currentPosition === -1) {
    $this.x12('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.m18();
  var tmp0 = currentPosition;
  currentPosition = tmp0 + 1 | 0;
  var currentChar = charSequenceGet(tmp, tmp0);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.m18(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.x12("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.ez_1.r6(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.bz_1 = startPos;
    $this.o18();
    if (($this.bz_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.x12('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.bz_1);
  }
  $this.ez_1.r6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.x12("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.n18(start);
  if (current >= charSequenceLength($this.m18()) || current === -1) {
    $this.x12('EOF');
  }
  var tmp = $this.m18();
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
      $this.x12("Expected valid boolean literal prefix, but had '" + $this.a14() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.m18()) - current | 0) < literalSuffix.length) {
    $this.x12('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.m18(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.x12("Expected valid boolean literal prefix, but had '" + $this.a14() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.bz_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -exponentAccumulator.u2();
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = exponentAccumulator.u2();
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function AbstractJsonLexer() {
  this.bz_1 = 0;
  this.cz_1 = new JsonPath();
  this.dz_1 = null;
  this.ez_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).o18 = function () {
};
protoOf(AbstractJsonLexer).p18 = function (c) {
  return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).fz = function () {
  var nextToken = this.c14();
  if (!(nextToken === 10)) {
    this.x12('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.m18(), this.bz_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).w13 = function (expected) {
  var token = this.c14();
  if (!(token === expected)) {
    this.q18(expected);
  }
  return token;
};
protoOf(AbstractJsonLexer).n15 = function (expected) {
  this.o18();
  var source = this.m18();
  var cpos = this.bz_1;
  $l$loop_0: while (true) {
    cpos = this.n18(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var tmp0 = cpos;
    cpos = tmp0 + 1 | 0;
    var c = charSequenceGet(source, tmp0);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop_0;
    this.bz_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.r18(expected);
  }
  this.bz_1 = cpos;
  this.r18(expected);
};
protoOf(AbstractJsonLexer).r18 = function (expected) {
  if (this.bz_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.bz_1;
      try {
        this.bz_1 = this.bz_1 - 1 | 0;
        tmp$ret$1 = this.a14();
        break $l$block;
      }finally {
        this.bz_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.s18("Expected string literal but 'null' literal was found", this.bz_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
    }
  }
  this.q18(charToTokenClass(expected));
};
protoOf(AbstractJsonLexer).t18 = function (expectedToken, wasConsumed) {
  var expected = tokenDescription(expectedToken);
  var position = wasConsumed ? this.bz_1 - 1 | 0 : this.bz_1;
  var s = this.bz_1 === charSequenceLength(this.m18()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.m18(), position));
  this.x12('Expected ' + expected + ", but had '" + s + "' instead", position);
};
protoOf(AbstractJsonLexer).q18 = function (expectedToken, wasConsumed, $super) {
  wasConsumed = wasConsumed === VOID ? true : wasConsumed;
  return $super === VOID ? this.t18(expectedToken, wasConsumed) : $super.t18.call(this, expectedToken, wasConsumed);
};
protoOf(AbstractJsonLexer).x13 = function () {
  var source = this.m18();
  var cpos = this.bz_1;
  $l$loop_0: while (true) {
    cpos = this.n18(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.bz_1 = cpos;
    return charToTokenClass(ch);
  }
  this.bz_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).p15 = function (doConsume) {
  var current = this.u18();
  current = this.n18(current);
  var len = charSequenceLength(this.m18()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.m18(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.m18(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.bz_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).a16 = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.p15(doConsume) : $super.p15.call(this, doConsume);
};
protoOf(AbstractJsonLexer).u18 = function () {
  var current = this.bz_1;
  $l$loop_0: while (true) {
    current = this.n18(current);
    if (current === -1)
      break $l$loop_0;
    var c = charSequenceGet(this.m18(), current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop_0;
    }
  }
  this.bz_1 = current;
  return current;
};
protoOf(AbstractJsonLexer).q15 = function (isLenient) {
  var token = this.x13();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.a14();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.z13();
  }
  var string = tmp;
  this.dz_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).v18 = function () {
  this.dz_1 = null;
};
protoOf(AbstractJsonLexer).w18 = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.m18();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).z13 = function () {
  if (!(this.dz_1 == null)) {
    return takePeeked(this);
  }
  return this.t15();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.n18(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.x12('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.l18(lastPosition, currentPosition);
        currentPosition = this.n18(currentPosition);
        if (currentPosition === -1) {
          this.x12('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.w18(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.bz_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).u15 = function () {
  var result = this.a14();
  if (result === 'null' && wasUnquotedString(this)) {
    this.x12("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).a14 = function () {
  if (!(this.dz_1 == null)) {
    return takePeeked(this);
  }
  var current = this.u18();
  if (current >= charSequenceLength(this.m18()) || current === -1) {
    this.x12('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.m18(), current));
  if (token === 1) {
    return this.z13();
  }
  if (!(token === 0)) {
    this.x12('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.m18(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.m18(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.m18())) {
      usedAppend = true;
      this.l18(this.bz_1, current);
      var eof = this.n18(current);
      if (eof === -1) {
        this.bz_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.w18(this.bz_1, current);
  } else {
    tmp = decodedString(this, this.bz_1, current);
  }
  var result = tmp;
  this.bz_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).l18 = function (fromIndex, toIndex) {
  this.ez_1.t9(this.m18(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).s15 = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.x13();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.a14();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.x13();
    if (lastToken === 1) {
      if (allowLenientStrings) {
        this.a14();
      } else {
        this.t15();
      }
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
      tokenStack.d(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.bz_1, 'found ] instead of } at path: ' + this.cz_1.toString(), this.m18());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.bz_1, 'found } instead of ] at path: ' + this.cz_1.toString(), this.m18());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.x12('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.c14();
    if (tokenStack.l() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.m18()) + "', currentPosition=" + this.bz_1 + ')';
};
protoOf(AbstractJsonLexer).r15 = function (key) {
  var processed = this.w18(0, this.bz_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  this.s18("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
};
protoOf(AbstractJsonLexer).s18 = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.cz_1.k13() + hintMessage, this.m18());
};
protoOf(AbstractJsonLexer).x12 = function (message, position, hint, $super) {
  position = position === VOID ? this.bz_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.s18(message, position, hint) : $super.s18.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).x10 = function () {
  var current = this.u18();
  current = this.n18(current);
  if (current >= charSequenceLength(this.m18()) || current === -1) {
    this.x12('EOF');
  }
  var tmp;
  if (charSequenceGet(this.m18(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.m18())) {
      this.x12('EOF');
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
  $l$loop_4: while (!(current === charSequenceLength(this.m18()))) {
    var ch = charSequenceGet(this.m18(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.x12('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.x12("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.x12("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.x12("Unexpected symbol '-' in numeric literal");
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
      this.x12("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
    }
    if (hasExponent) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.plus' call
      exponentAccumulator = exponentAccumulator.h2(toLong(10)).f2(toLong(digit));
      continue $l$loop_4;
    }
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.minus' call
    accumulator = accumulator.h2(toLong(10)).g2(toLong(digit));
    if (accumulator.w(new Long(0, 0)) > 0) {
      this.x12('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.x12('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.x12('EOF');
    }
    if (!(charSequenceGet(this.m18(), current) === _Char___init__impl__6a9atx(34))) {
      this.x12('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.bz_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.u2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).u2() || doubleAccumulator < (new Long(0, -2147483648)).u2()) {
      this.x12('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.x12("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.k2();
  } else {
    this.x12('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).b16 = function () {
  return consumeBoolean2(this, this.u18());
};
protoOf(AbstractJsonLexer).c16 = function () {
  var current = this.u18();
  if (current === charSequenceLength(this.m18())) {
    this.x12('EOF');
  }
  var tmp;
  if (charSequenceGet(this.m18(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.bz_1 === charSequenceLength(this.m18())) {
      this.x12('EOF');
    }
    if (!(charSequenceGet(this.m18(), this.bz_1) === _Char___init__impl__6a9atx(34))) {
      this.x12('Expected closing quotation mark');
    }
    this.bz_1 = this.bz_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().y18_1;
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
  return c < 117 ? CharMappings_getInstance().x18_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.x18_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.y18_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.x18_1 = charArray(117);
  this.y18_1 = new Int8Array(126);
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
  this.d19_1 = source;
}
protoOf(StringJsonLexer).m18 = function () {
  return this.d19_1;
};
protoOf(StringJsonLexer).n18 = function (position) {
  return position < this.d19_1.length ? position : -1;
};
protoOf(StringJsonLexer).c14 = function () {
  var source = this.d19_1;
  $l$loop: while (!(this.bz_1 === -1) && this.bz_1 < source.length) {
    var tmp1 = this.bz_1;
    this.bz_1 = tmp1 + 1 | 0;
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
protoOf(StringJsonLexer).o15 = function () {
  var current = this.u18();
  if (current === this.d19_1.length || current === -1)
    return false;
  if (charCodeAt(this.d19_1, current) === _Char___init__impl__6a9atx(44)) {
    this.bz_1 = this.bz_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(StringJsonLexer).y13 = function () {
  var current = this.bz_1;
  if (current === -1)
    return false;
  $l$loop: while (current < this.d19_1.length) {
    var c = charCodeAt(this.d19_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.bz_1 = current;
    return this.p18(c);
  }
  this.bz_1 = current;
  return false;
};
protoOf(StringJsonLexer).u18 = function () {
  var current = this.bz_1;
  if (current === -1)
    return current;
  $l$loop: while (current < this.d19_1.length) {
    var c = charCodeAt(this.d19_1, current);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.bz_1 = current;
  return current;
};
protoOf(StringJsonLexer).n15 = function (expected) {
  if (this.bz_1 === -1) {
    this.r18(expected);
  }
  var source = this.d19_1;
  $l$loop: while (this.bz_1 < source.length) {
    var tmp1 = this.bz_1;
    this.bz_1 = tmp1 + 1 | 0;
    var c = charCodeAt(source, tmp1);
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    if (c === expected)
      return Unit_instance;
    this.r18(expected);
  }
  this.bz_1 = -1;
  this.r18(expected);
};
protoOf(StringJsonLexer).t15 = function () {
  this.n15(_Char___init__impl__6a9atx(34));
  var current = this.bz_1;
  var closingQuote = indexOf(this.d19_1, _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.a14();
    this.t18(1, false);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.d19_1, i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.d19_1, this.bz_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.bz_1 = closingQuote + 1 | 0;
  return substring(this.d19_1, current, closingQuote);
};
protoOf(StringJsonLexer).v15 = function (keyToMatch, isLenient) {
  var positionSnapshot = this.bz_1;
  try {
    if (!(this.c14() === 6))
      return null;
    var firstKey = this.q15(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.v18();
    if (!(this.c14() === 5))
      return null;
    return this.q15(isLenient);
  }finally {
    this.bz_1 = positionSnapshot;
    this.v18();
  }
};
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.ny_1;
}
function JsonToStringWriter() {
  this.ry_1 = StringBuilder_init_$Create$_0(128);
}
protoOf(JsonToStringWriter).c12 = function (value) {
  this.ry_1.p6(value);
};
protoOf(JsonToStringWriter).w11 = function (char) {
  this.ry_1.r6(char);
};
protoOf(JsonToStringWriter).y11 = function (text) {
  this.ry_1.q6(text);
};
protoOf(JsonToStringWriter).i12 = function (text) {
  printQuoted(this.ry_1, text);
};
protoOf(JsonToStringWriter).sy = function () {
  this.ry_1.z9();
};
protoOf(JsonToStringWriter).toString = function () {
  return this.ry_1.toString();
};
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(defer$1).qf = get_isNullable;
protoOf(defer$1).wf = get_isInline;
protoOf(defer$1).uf = get_annotations;
protoOf(PolymorphismValidator).ey = contextual;
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
  JsonPrimitive_1 as JsonPrimitiveolttw629wj53,
  JsonPrimitive_0 as JsonPrimitive2fp8648nd60dn,
  Json_0 as Jsonsmkyu9xjl7fv,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
