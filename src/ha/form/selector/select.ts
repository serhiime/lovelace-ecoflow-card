export interface SelectSelector {
  select: {
    options: string[];
    mode: "list" | "dropdown";
    translation_key?: string;
  };
}
