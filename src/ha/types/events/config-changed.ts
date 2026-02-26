import { LovelaceCardConfig } from "../lovelace/config";

export interface ConfigChangedEvent {
  config: LovelaceCardConfig;
  error?: string;
  guiModeAvailable?: boolean;
}
