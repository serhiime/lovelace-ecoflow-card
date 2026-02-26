import { HaFormStringSchema } from "./schema/string";
import { HaFormBooleanSchema } from "./schema/boolean";
import { HaFormSelectorSchema } from "./schema/selector";
import { HaFormGridSchema } from "./schema/grid";
import { HaFormExpandableSchema } from "./schema/expandable";

export type HaFormSchema =
  | HaFormStringSchema
  | HaFormBooleanSchema
  | HaFormGridSchema
  | HaFormExpandableSchema
  | HaFormSelectorSchema;
