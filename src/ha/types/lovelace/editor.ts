import { HomeAssistant } from "../../types";
import { LovelaceCardConfig } from "./config";

export interface LovelaceCardEditor extends HTMLElement {
  hass?: HomeAssistant;
  lovelace?: LovelaceCardConfig;
  setConfig(config: any): void;
  focusYamlEditor?: () => void;
  setConfig(config: LovelaceCardConfig): void;
}
