import { BaseEntity } from "./base";

export interface ChargingState extends BaseEntity {
  value: "charging" | "discharging";
}
