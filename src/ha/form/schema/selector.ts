import { BooleanSelector } from "../selector/boolean";
import { StringSelector } from "../selector/string";
import { LanguageSelector } from "../selector/language";
import { DeviceSelector } from "../selector/device";
import { HaFormBaseSchema } from "./base";
import { SelectSelector } from "../selector/select";
import { LabelSelector } from "../selector/label";

export type Selector =
  | BooleanSelector
  | StringSelector
  | LanguageSelector
  | SelectSelector
  | LabelSelector
  | DeviceSelector;

export interface HaFormSelectorSchema extends HaFormBaseSchema {
  type?: never;
  selector: Selector;
}
