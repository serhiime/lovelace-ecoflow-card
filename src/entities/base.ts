export interface BaseEntity {
  code: string;
  entity_id: string;
  device_id: string;
  name: string;
  value: string | number;
  device_class: string;
  unit_of_measurement: string;
  icon?: string;
  display_precision?: number;
}
