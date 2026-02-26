import { HaFormBaseSchema } from "./base";
import { HaFormSchema } from "../schema";

export interface HaFormExpandableSchema extends HaFormBaseSchema {
  type: "expandable";
  flatten?: boolean;
  title?: string;
  icon?: string;
  iconPath?: string;
  expanded?: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  schema: readonly HaFormSchema[];
}
