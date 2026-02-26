import { HaFormBaseSchema } from "./base";

export interface HaFormBooleanSchema extends HaFormBaseSchema {
  label?: string;
  type: "boolean";
}
