import { LovelaceCardConfig } from "../../ha/types/lovelace/config";
import { COLOR_MAP } from "../../tools/color-helper";

export type EcoflowCardConfig = LovelaceCardConfig & {
  device: string;
  show_image?: boolean;
  show_serial_number?: boolean;
  name?: string;
  use_custom_name?: boolean;
  prefere_model_name?: boolean;
  show_ecoflow_logo?: boolean;
  accent_color: keyof typeof COLOR_MAP;
  show_battery_level?: boolean;
  show_battery_temperature?: boolean;
  show_cycles?: boolean;
};
