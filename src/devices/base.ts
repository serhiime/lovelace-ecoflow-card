import { Device } from "../ha/types/device";
import { Power } from "../entities/power";
import { BatteryLevel } from "../entities/battery-level";
import { Temperature } from "../entities/temperature";
import { Cycles } from "../entities/cycles";
import { Time } from "../entities/time";
import { Status } from "../entities/status";
import { Level } from "../entities/level";

export interface DeviceEntitiesBase {
  main_battery_level: BatteryLevel;
  battery_level: BatteryLevel;
  total_in_power: Power;
  total_out_power: Power;
  ac_in_power: Power;
  ac_out_power: Power;
  ac_in_volts: Power;
  ac_out_volts: Power;
  charge_remaining_time: Time;
  discharge_remaining_time: Time;
  inv_out_temperature: Temperature;
  cycles: Cycles;
  battery_temperature: Temperature;
  status: Status;
  ac_enabled: Status;
  x_boost_enabled: Status;
  dc_enabled: Status;
  ac_charging_power: Power;
  max_charge_level: Level;
  min_discharge_level: Level;
  dc_out_power: Power;
  [key: string]: any;
}

export interface DeviceBase {
  device_id: string;
  name: string;
  friendly_name?: string;
  model?: string;
  serial_number?: string;
  ha_device: Device;
  entities: DeviceEntitiesBase;
  children: string[];
}
