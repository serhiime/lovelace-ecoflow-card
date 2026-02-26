import { BaseDeviceCard } from "./base-device-card";
import { customElement } from "@lit/reactive-element/decorators.js";
import { html } from "lit";
import "../components/badges/entity-badge-card";
import { River2ProEntities } from "../../devices/river2_pro";

@customElement("ecoflow-river2-pro-card")
export class River2ProCard extends BaseDeviceCard {
  protected get getEntities(): River2ProEntities | null {
    const entities = super.getEntities;
    return (entities as River2ProEntities) ?? null;
  }

  renderBadges(): unknown {
    return html``;
  }

  get getImageUrl(): string {
    return "https://eu.ecoflow.com/cdn/shop/products/ecoflow-river-2-max-portable-power-station-42462847041700_2000x.png";
  }

  renderDeviceInput(): unknown {
    return html`
      <ecoflow-tab>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.ac_in_power}
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="ac_input"
          name="ac"
          class="w-1/2"
        ></ecoflow-power-entity-card>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.solar_in_power}
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="solar_panel"
          name="solar_energy"
          class="w-1/2"
        ></ecoflow-power-entity-card>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.type_c_in_power}
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="usb_c_port"
          name="usb_c"
          class="w-1/2"
        ></ecoflow-power-entity-card>
      </ecoflow-tab>
    `;
  }
  renderDeviceOutput(): unknown {
    return html`
      <ecoflow-tab>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.ac_out_power}
          .state_entity="${this.getEntities?.ac_enabled}"
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="ac_input"
          name="ac"
          class="w-1/2"
        ></ecoflow-power-entity-card>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.dc_out_power}
          .state_entity="${this.getEntities?.dc_enabled}"
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="_12v"
          name="dc_12_v"
          class="w-1/2"
        ></ecoflow-power-entity-card>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.usb_out_power}
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="usb_a_port"
          name="usb_a"
          class="w-1/2"
        ></ecoflow-power-entity-card>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.type_c_out_power}
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="usb_c_port"
          name="usb_c"
          class="w-1/2"
        ></ecoflow-power-entity-card>
      </ecoflow-tab>
    `;
  }
  renderDeviceMoreInfo(): unknown {
    return html``;
  }
}

export default River2ProCard;
