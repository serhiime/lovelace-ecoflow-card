import { BaseEntity } from "./base";

export interface Power extends BaseEntity {
  power_direction: "in" | "out";
  power_type?: "ac" | "dc" | "solar" | "type_c" | "usb" | "total";
  is_usb?: boolean;
}
