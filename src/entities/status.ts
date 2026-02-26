import { BaseEntity } from "./base";

export interface Status extends BaseEntity {
  serial_number?: string;
  is_enabled?: boolean;
  status_type: "base" | "usb" | "ac_always_on" | "ac" | "x-boost" | "dc";
}
