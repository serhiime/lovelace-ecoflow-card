import {
  customElement,
  property,
  state,
} from "@lit/reactive-element/decorators.js";

import {
  CARD_DESCRIPTION,
  CARD_NAME,
  CARD_TITLE,
  EDITOR_NAME,
} from "./ecoflow-card-const";
import { LovelaceCard } from "../../ha/types/lovelace/card";
import { HomeAssistant } from "../../ha/types";
import { LovelaceCardConfig } from "../../ha/types/lovelace/config";
import { EcoflowCardConfig } from "./ecoflow-card-config";
import { html } from "lit";
import { registerCustomCard } from "../../ha/types/custom-card";
import { LovelaceCardEditor } from "../../ha/types/lovelace/editor";
import { DeviceService } from "../../service/device-service";
import { DeviceBase } from "../../devices/base";
import "../device-cards/river2-pro-card";
import "../device-cards/delta2-max-card";
import BaseEcoflowCard from "../../base-card";

registerCustomCard({
  type: CARD_NAME,
  name: CARD_TITLE,
  description: CARD_DESCRIPTION,
});

@customElement(CARD_NAME)
class EcoflowCard extends BaseEcoflowCard implements LovelaceCard {
  @state() protected config?: EcoflowCardConfig;
  @property({ attribute: false }) public hass!: HomeAssistant;
  protected _device?: DeviceBase | null;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./ecoflow-card-editor");
    return document.createElement(EDITOR_NAME) as LovelaceCardEditor;
  }

  setConfig(config: LovelaceCardConfig) {
    this.config = config as EcoflowCardConfig;
  }

  public getCardSize(): number | Promise<number> {
    return 1;
  }

  static getStubConfig() {
    return {
      type: "custom:ecoflow-card",
      show_image: true,
      show_serial_number: false,
      show_ecoflow_logo: true,
      accent_color: "gray",
      show_battery_level: true,
      show_cycles: true,
      show_battery_temperature: true,
    };
  }

  protected render() {
    const haDevice =
      "" != this.config?.device && undefined != this.config?.device
        ? this.hass.devices[this.config?.device]
        : null;

    const service = new DeviceService(this.hass);
    this._device = service.getDeviceById(haDevice?.id);

    return this.getDeviceCard();
  }

  protected getDeviceCard(): unknown {
    switch (this._device?.model) {
      case "RIVER_2_PRO":
        return html`<ecoflow-river2-pro-card
          .hass="${this.hass}"
          .device="${this._device}"
          .config="${this.config}"
        ></ecoflow-river2-pro-card>`;
      case "DELTA_2_MAX":
        return html`<ecoflow-delta2-max-card
          .hass="${this.hass}"
          .device="${this._device}"
          .config="${this.config}"
        ></ecoflow-delta2-max-card>`;
    }

    return html``;
  }
}

export default EcoflowCard;
