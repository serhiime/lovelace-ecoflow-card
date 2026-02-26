import { DeviceBase, DeviceEntitiesBase } from "./base";
import { ChargingState } from "../entities/charging-state";
import { Power } from "../entities/power";
import { Time } from "../entities/time";

export interface River2ProEntities extends DeviceEntitiesBase {
  battery_charging_state: ChargingState;
  type_c_in_power: Power;
  type_c_out_power: Power;
  solar_in_power: Power;
  usb_out_power: Power;
  remaining_time: Time;
  dc_12v_charge_current: Power;
}

export interface River2Pro extends DeviceBase {
  entities: River2ProEntities;
}
