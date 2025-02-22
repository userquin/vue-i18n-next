import {
  compile,
  fallbackWithLocaleChain,
  registerLocaleFallbacker,
  registerMessageCompiler,
  registerMessageResolver,
  resolveValue,
  setDevToolsHook
} from '@intlify/core-base'
import { getGlobalThis } from '@intlify/shared'
import { initDev, initFeatureFlags } from '../../vue-i18n-core/src/misc'

if (__ESM_BUNDLER__ && !__TEST__) {
  initFeatureFlags()
}

// register message compiler for jit compilation
registerMessageCompiler(compile)

// register message resolver at vue-i18n
registerMessageResolver(resolveValue)

// register fallback locale at vue-i18n
registerLocaleFallbacker(fallbackWithLocaleChain)

export {
  CompileError,
  DateTimeOptions,
  FallbackLocale,
  DateTimeFormat as IntlDateTimeFormat,
  DateTimeFormats as IntlDateTimeFormats,
  FormatMatcher as IntlFormatMatcher,
  LocaleMatcher as IntlLocaleMatcher,
  NumberFormat as IntlNumberFormat,
  NumberFormats as IntlNumberFormats,
  LinkedModifiers,
  Locale,
  LocaleMessageDictionary,
  LocaleMessages,
  LocaleMessageType,
  LocaleMessageValue,
  MessageCompiler,
  MessageCompilerContext,
  MessageContext,
  MessageFunction,
  MessageFunctions,
  MessageResolver,
  NamedValue,
  NumberOptions,
  Path,
  PathValue,
  PluralizationRule,
  PostTranslationHandler,
  RemovedIndexResources,
  TranslateOptions
} from '@intlify/core-base'
export {
  BaseFormatProps,
  ComponentI18nScope,
  DatetimeFormat,
  DatetimeFormatProps,
  FormattableProps,
  I18nD,
  I18nN,
  I18nT,
  NumberFormat,
  NumberFormatProps,
  Translation,
  TranslationProps
} from '../../vue-i18n-core/src/components'
export {
  Composer,
  ComposerCustom,
  ComposerDateTimeFormatting,
  ComposerNumberFormatting,
  ComposerOptions,
  ComposerResolveLocaleMessageTranslation,
  ComposerTranslation,
  CustomBlock,
  CustomBlocks,
  DefaultDateTimeFormatSchema,
  DefaultLocaleMessageSchema,
  DefaultNumberFormatSchema,
  DefineDateTimeFormat,
  DefineLocaleMessage,
  DefineNumberFormat,
  MissingHandler,
  VueMessageType
} from '../../vue-i18n-core/src/composer'
export {
  TranslationDirective,
  vTDirective,
  VTDirectiveValue
} from '../../vue-i18n-core/src/directive'
export {
  ComposerAdditionalOptions,
  ComposerExtender,
  createI18n,
  ExportedGlobalComposer,
  I18n,
  I18nAdditionalOptions,
  I18nInjectionKey,
  I18nMode,
  I18nOptions,
  I18nScope,
  useI18n,
  UseI18nOptions
} from '../../vue-i18n-core/src/i18n'
export {
  Choice,
  DateTimeFormatResult,
  LocaleMessageObject,
  NumberFormatResult,
  PluralizationRulesMap,
  TranslateResult,
  VueI18n,
  VueI18nDateTimeFormatting,
  VueI18nExtender,
  VueI18nNumberFormatting,
  VueI18nOptions,
  VueI18nResolveLocaleMessageTranslation,
  VueI18nTranslation,
  WarnHtmlInMessageLevel
} from '../../vue-i18n-core/src/legacy'
export { I18nPluginOptions } from '../../vue-i18n-core/src/plugin'
export { VERSION } from './../../vue-i18n-core/src/misc'
export { Disposer } from './../../vue-i18n-core/src/types'

export type {
  IsEmptyObject,
  IsNever,
  PickupFormatPathKeys,
  PickupKeys,
  PickupPaths
} from '@intlify/core-base'

// NOTE: experimental !!
if (__DEV__ || __FEATURE_PROD_INTLIFY_DEVTOOLS__) {
  const target = getGlobalThis()
  target.__INTLIFY__ = true
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}

if (__DEV__) {
  initDev()
}
