import { HaFormBaseSchema } from "./base";

export interface HaFormStringSchema extends HaFormBaseSchema {
  type: "string";
  format?: string;
  autocomplete?: string;
  autofocus?: boolean;
}
