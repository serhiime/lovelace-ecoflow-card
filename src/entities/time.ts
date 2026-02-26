import { BaseEntity } from "./base";

export interface Time extends BaseEntity {
  time_type: "charge" | "discharge";
}
