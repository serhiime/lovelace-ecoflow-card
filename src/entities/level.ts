import { BaseEntity } from "./base";

export interface Level extends BaseEntity {
  min_level?: number;
  max_level?: number;
  step?: number;
  type: "charge" | "discharge";
}
