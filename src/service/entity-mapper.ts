import { EntityPattern, entityPatterns } from "../tools/entity-patterns";
import { Entity } from "../ha/types/entity";
import { BatteryLevel } from "../entities/battery-level";
import { BaseEntity } from "../entities/base";
import { Power } from "../entities/power";
import { Time } from "../entities/time";
import { Temperature } from "../entities/temperature";
import { Cycles } from "../entities/cycles";
import { Status } from "../entities/status";
import { Level } from "../entities/level";
import { ChargingState } from "../entities/charging-state";

export class EntityMapper {
  private entityPattern: EntityPattern = new EntityPattern();

  public getEntityByName(
    entities: Entity[],
    entity: keyof typeof entityPatterns,
  ): Entity | null {
    if (entities.length === 0) return null;
    const entitiesKeys = Object.values(entities).map((e) => e.entity_id);
    const regex = this.entityPattern.getRegex(entity);
    for (let i = 0; i < entitiesKeys.length; i++) {
      if (regex.test(entitiesKeys[i]))
        return entities.filter((e) => e.entity_id === entitiesKeys[i])[0];
    }

    return null;
  }

  private mapBaseEntity(
    code: string,
    entity: Entity | null,
  ): BaseEntity | null {
    if (entity === null) return null;
    const base = {
      code: code,
      entity_id: entity.entity_id,
      device_id: entity.device_id,
      name: entity.name,
      value: entity.state,
      device_class: entity.attributes.device_class,
      unit_of_measurement: entity.attributes.unit_of_measurement,
      icon: entity.attributes.icon ?? null,
      display_precision: entity.attributes.display_precision ?? null,
    } as BaseEntity;

    return base;
  }

  public mapBatteryLevel(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): BatteryLevel {
    const entity = this.getEntityByName(entities, name);

    return {
      ...this.mapBaseEntity(name, entity),
      designed_capacity: entity?.attributes.design_capacity ?? null,
      full_capacity: entity?.attributes.full_capacity ?? null,
      remaining_capacity: entity?.attributes.remaining_capacity ?? null,
      capacity_unit_of_measurement:
        entity?.attributes.capacity_unit_of_measurement ?? null,
    } as BatteryLevel;
  }

  public mapPower(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): Power | null {
    return {
      ...this.mapBaseEntity(name, this.getEntityByName(entities, name)),
      power_direction: /_in/.test(name) ? "in" : "out",
      power_type: /ac/.test(name)
        ? "ac"
        : /dc/.test(name)
          ? "dc"
          : /_solar/.test(name)
            ? "solar"
            : /_type_c/.test(name)
              ? "type_c"
              : /_usb/.test(name)
                ? "usb"
                : "total",
      is_usb: /(usb|type_c)/.test(name),
    } as Power;
  }

  public mapTime(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): Time | null {
    return {
      ...this.mapBaseEntity(name, this.getEntityByName(entities, name)),
      time_type: /discharge_/.test(name) ? "discharge" : "charge",
    } as Time;
  }

  public mapTemperature(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): Temperature | null {
    const entity = this.getEntityByName(entities, name);
    return {
      ...this.mapBaseEntity(name, entity),
      min_cell_temperature: entity?.attributes.min_cell_temperature ?? null,
      max_cell_temperature: entity?.attributes.max_cell_temperature ?? null,
    } as Temperature;
  }

  public mapCycles(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): Cycles | null {
    return {
      ...this.mapBaseEntity(name, this.getEntityByName(entities, name)),
    } as Cycles;
  }

  public mapStatus(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): Status | null {
    const entity = this.getEntityByName(entities, name);
    return {
      ...this.mapBaseEntity(name, entity),
      serial_number: entity?.attributes.SN ?? null,
      is_enabled: entity?.state === "on",
      status_type: /status/.test(name)
        ? "base"
        : /ac_/.test(name)
          ? "ac"
          : /x_boost_/.test(name)
            ? "x-boost"
            : /dc_/.test(name)
              ? "dc"
              : /ac_always_on/.test(name)
                ? "ac_always_on"
                : "usb",
    } as Status;
  }

  public mapLevel(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): Level | null {
    const entity = this.getEntityByName(entities, name);
    return {
      ...this.mapBaseEntity(name, entity),
      min_level: entity?.attributes.min ?? null,
      max_level: entity?.attributes.max ?? null,
      step: entity?.attributes.step ?? null,
      type: /_charge_/.test(name) ? "charge" : "discharge",
    } as Level;
  }

  public mapChargingState(
    entities: Entity[],
    name: keyof typeof entityPatterns,
  ): ChargingState | null {
    return {
      ...this.mapBaseEntity(name, this.getEntityByName(entities, name)),
      value:
        this.getEntityByName(entities, name)?.state === "charging"
          ? "charging"
          : "discharging",
    } as ChargingState;
  }
}
