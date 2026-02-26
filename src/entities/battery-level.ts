import { BaseEntity } from "./base";

export interface BatteryLevel extends BaseEntity {
  designed_capacity?: number;
  full_capacity?: number;
  remaining_capacity?: number;
  capacity_unit_of_measurement?: string;
}
