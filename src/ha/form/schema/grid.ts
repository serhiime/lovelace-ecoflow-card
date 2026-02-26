import { HaFormSchema } from "../schema";
import { HaFormBaseSchema } from "./base";

export interface HaFormGridSchema extends HaFormBaseSchema {
  type: "grid";
  flatten?: boolean;
  column_min_width?: string;
  schema: readonly HaFormSchema[];
}
