import type { LangAbbr } from './LangAbbr';

export type I18nLabels = {
  [ lang in LangAbbr ]?: string;
};

/**
 * utility to generalize extracting correct label\
 * from I18nLabels as we always want to "try to \
 * extract label and if it is absent - return empty \
 * string"
 */
export const extractLabelByLang = (
  labels: I18nLabels,
  lang: keyof typeof labels,
): string => ( labels[lang] || '' );
