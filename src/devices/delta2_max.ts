import { DeviceBase, DeviceEntitiesBase } from "./base";
import { Power } from "../entities/power";
import { Status } from "../entities/status";

export interface Delta2MaxEntities extends DeviceEntitiesBase {
  solar1_in_power: Power;
  solar2_in_power: Power;
  solar1_in_volts: Power;
  solar2_in_volts: Power;
  solar1_in_amps: Power;
  solar2_in_amps: Power;
  type_c1_out_power: Power;
  type_c2_out_power: Power;
  usb1_out_power: Power;
  usb2_out_power: Power;
  usb_qc1_out_power: Power;
  usb_qc2_out_power: Power;
  solar_in_energy: Power;
  battery_charge_energy_from_ac: Power;
  battery_charge_energy_from_dc: Power;
  battery_discharge_energy_to_ac: Power;
  battery_discharge_energy_to_dc: Power;
  usb_enabled: Status;
  ac_always_on: Status;
}

export interface Delta2Max extends DeviceBase {
  entities: Delta2MaxEntities;
}
