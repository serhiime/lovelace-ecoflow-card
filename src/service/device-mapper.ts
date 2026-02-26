import { HomeAssistant } from "../ha/types";
import { EntityMapper } from "./entity-mapper";
import { DeviceBase, DeviceEntitiesBase } from "../devices/base";
import { Device } from "../ha/types/device";
import { Entity } from "../ha/types/entity";
import { River2Pro, River2ProEntities } from "../devices/river2_pro";
import { Delta2Max, Delta2MaxEntities } from "../devices/delta2_max";

export class DeviceMapper {
  private ha: HomeAssistant;
  private entityMapper: EntityMapper;

  constructor(ha: HomeAssistant) {
    this.ha = ha;
    this.entityMapper = new EntityMapper();
  }

  private findDeviceHaEntities(device: DeviceBase): Entity[] {
    let entities: Entity[] = Object.values(this.ha.entities).filter(
      (entity) => entity.device_id === device.device_id,
    );

    for (let i = 0; i < entities.length; i++) {
      let state = this.ha.states[entities[i].entity_id];
      entities[i].attributes = state.attributes;
      entities[i].state = state.state;
      entities[i].context = state.context;
    }

    return entities;
  }

  private mapBaseDevice(device: Device): DeviceBase {
    const deviceBase = {
      device_id: device.id,
      name: device.name,
      model: device.model,
      serial_number: device.identifiers[0][1],
      friendly_name: device.name_by_user,
      ha_device: device,
    } as DeviceBase;

    deviceBase.entities = this.mapBaseEntities(
      this.findDeviceHaEntities(deviceBase),
    );

    return deviceBase;
  }

  public mapDevice(device: Device): DeviceBase | null {
    switch (device.model) {
      case "RIVER_2_PRO":
        return this.mapRiver2Pro(device);
      case "DELTA_2_MAX":
        return this.mapDelta2Max(device);
    }
    return null;
  }

  private mapBaseEntities(entities: Entity[]): DeviceEntitiesBase {
    return {
      main_battery_level: this.entityMapper.mapBatteryLevel(
        entities,
        "main_battery_level",
      ),
      battery_level: this.entityMapper.mapBatteryLevel(
        entities,
        "battery_level",
      ),
      total_in_power: this.entityMapper.mapPower(entities, "total_in_power"),
      total_out_power: this.entityMapper.mapPower(entities, "total_out_power"),
      ac_in_power: this.entityMapper.mapPower(entities, "ac_in_power"),
      ac_out_power: this.entityMapper.mapPower(entities, "ac_out_power"),
      ac_in_volts: this.entityMapper.mapPower(entities, "ac_in_volts"),
      ac_out_volts: this.entityMapper.mapPower(entities, "ac_out_volts"),
      charge_remaining_time: this.entityMapper.mapTime(
        entities,
        "charge_remaining_time",
      ),
      discharge_remaining_time: this.entityMapper.mapTime(
        entities,
        "discharge_remaining_time",
      ),
      inv_out_temperature: this.entityMapper.mapTemperature(
        entities,
        "inv_out_temperature",
      ),
      cycles: this.entityMapper.mapCycles(entities, "cycles"),
      battery_temperature: this.entityMapper.mapTemperature(
        entities,
        "battery_temperature",
      ),
      status: this.entityMapper.mapStatus(entities, "status"),
      ac_enabled: this.entityMapper.mapStatus(entities, "ac_enabled"),
      x_boost_enabled: this.entityMapper.mapStatus(entities, "x_boost_enabled"),
      dc_enabled: this.entityMapper.mapStatus(entities, "dc_enabled"),
      ac_charging_power: this.entityMapper.mapPower(
        entities,
        "ac_charging_power",
      ),
      max_charge_level: this.entityMapper.mapLevel(
        entities,
        "max_charge_level",
      ),
      min_discharge_level: this.entityMapper.mapLevel(
        entities,
        "min_discharge_level",
      ),
      dc_out_power: this.entityMapper.mapPower(entities, "dc_out_power"),
    } as DeviceEntitiesBase;
  }

  private mapRiver2Pro(device: Device): River2Pro {
    const baseDevice = this.mapBaseDevice(device);
    const deviceEntities = this.findDeviceHaEntities(baseDevice);

    return {
      ...baseDevice,
      entities: {
        ...baseDevice.entities,
        battery_charging_state: this.entityMapper.mapChargingState(
          deviceEntities,
          "battery_charging_state",
        ),
        type_c_in_power: this.entityMapper.mapPower(
          deviceEntities,
          "type_c_in_power",
        ),
        type_c_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "type_c_out_power",
        ),
        solar_in_power: this.entityMapper.mapPower(
          deviceEntities,
          "solar_in_power",
        ),
        usb_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "usb_out_power",
        ),
        remaining_time: this.entityMapper.mapTime(
          deviceEntities,
          "remaining_time",
        ),
        dc_12v_charge_current: this.entityMapper.mapPower(
          deviceEntities,
          "dc_12v_charge_current",
        ),
      } as River2ProEntities,
    };
  }

  private mapDelta2Max(device: Device): Delta2Max {
    const baseDevice = this.mapBaseDevice(device);
    const deviceEntities = this.findDeviceHaEntities(baseDevice);

    return {
      ...baseDevice,
      entities: {
        ...baseDevice.entities,
        solar1_in_power: this.entityMapper.mapPower(
          deviceEntities,
          "solar1_in_power",
        ),
        solar2_in_power: this.entityMapper.mapPower(
          deviceEntities,
          "solar2_in_power",
        ),
        solar1_in_volts: this.entityMapper.mapPower(
          deviceEntities,
          "solar1_in_volts",
        ),
        solar2_in_volts: this.entityMapper.mapPower(
          deviceEntities,
          "solar2_in_volts",
        ),
        solar1_in_amps: this.entityMapper.mapPower(
          deviceEntities,
          "solar1_in_amps",
        ),
        solar2_in_amps: this.entityMapper.mapPower(
          deviceEntities,
          "solar2_in_amps",
        ),
        type_c1_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "type_c1_out_power",
        ),
        type_c2_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "type_c2_out_power",
        ),
        usb1_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "usb1_out_power",
        ),
        usb2_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "usb2_out_power",
        ),
        usb_qc1_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "usb_qc1_out_power",
        ),
        usb_qc2_out_power: this.entityMapper.mapPower(
          deviceEntities,
          "usb_qc2_out_power",
        ),
        solar_in_energy: this.entityMapper.mapPower(
          deviceEntities,
          "solar_in_energy",
        ),
        battery_charge_energy_from_ac: this.entityMapper.mapPower(
          deviceEntities,
          "battery_charge_energy_from_ac",
        ),
        battery_charge_energy_from_dc: this.entityMapper.mapPower(
          deviceEntities,
          "battery_charge_energy_from_dc",
        ),
        battery_discharge_energy_to_ac: this.entityMapper.mapPower(
          deviceEntities,
          "battery_discharge_energy_to_ac",
        ),
        battery_discharge_energy_to_dc: this.entityMapper.mapPower(
          deviceEntities,
          "battery_discharge_energy_to_dc",
        ),
        usb_enabled: this.entityMapper.mapStatus(deviceEntities, "usb_enabled"),
        ac_always_on: this.entityMapper.mapStatus(
          deviceEntities,
          "ac_always_on",
        ),
      } as Delta2MaxEntities,
    } as Delta2Max;
  }
}
