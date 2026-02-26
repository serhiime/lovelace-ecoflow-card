export interface LanguageSelector {
  language: {
    languages?: string[];
    native_name?: boolean;
    no_sort?: boolean;
  } | null;
}
