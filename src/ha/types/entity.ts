export interface EntityAttributes {
  friendly_name?: string;
  unit_of_measurement?: string;
  icon?: string;
  entity_picture?: string;
  supported_features?: number;
  hidden?: boolean;
  assumed_state?: boolean;
  device_class?: string;
  state_class?: string;
  restored?: boolean;
  display_precision?: number;
  [key: string]: any;
}
export interface Entity {
  entity_id: string;
  name?: string;
  device_id?: string;
  area_id?: string;
  hidden?: boolean;
  translation_key?: string;
  platform?: string;
  display_precision?: number;
  has_entity_name?: boolean;
  labels: string[];
  icon?: string;
  state?: string;
  attributes: {
    [key: string]: any;
  };
  context?: Record<string, any>;
}
