export type I18nLabelsLite = {
  [ lang: string ]: string;
};

export const extractLabelByLangLite = ( labels: I18nLabelsLite, lang: string ): string => (
  labels[lang] || ''
);
