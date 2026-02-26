import { BaseDeviceCard } from "./base-device-card";
import { customElement } from "@lit/reactive-element/decorators.js";
import { html } from "lit";
import "../components/tab";
import "../components/power-entity";
import "../components/power-entities-collection";
import { Delta2MaxEntities } from "../../devices/delta2_max";

@customElement("ecoflow-delta2-max-card")
export class Delta2MaxCard extends BaseDeviceCard {
  protected get getEntities(): Delta2MaxEntities | null {
    const entities = super.getEntities;
    return (entities as Delta2MaxEntities) ?? null;
  }

  renderBadges(): unknown {
    return html``;
  }
  get getImageUrl(): string {
    return "https://eu.ecoflow.com/cdn/shop/files/ecoflow-delta-2-max-portable-power-station-51305159590231_2000x.png";
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
          .entity=${this.getEntities?.solar1_in_power}
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="solar_panel"
          name="solar_energy"
          class="w-1/2"
        ></ecoflow-power-entity-card>
        <ecoflow-power-entity-card
          .entity=${this.getEntities?.solar2_in_power}
          .hass="${this.hass}"
          color="${this.getAccentColor()}"
          icon="solar_panel"
          name="solar_energy"
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
          .hass="${this.hass}"
          .state_entity="${this.getEntities?.dc_enabled}"
          color="${this.getAccentColor()}"
          icon="_12v"
          name="dc_12_v"
          class="w-1/2"
        ></ecoflow-power-entity-card>

        <ecoflow-power-entities-collection
          class="w-full"
          color="${this.getAccentColor()}"
          .hass="${this.hass}"
          .state_entity="${this.getEntities?.usb_enabled}"
        >
          <ecoflow-power-entity-card
            .entity=${this.getEntities?.usb1_out_power}
            .hass="${this.hass}"
            color="${this.getAccentColor()}"
            icon="usb_a_port"
            name="usb_a"
            class="w-1/4"
            compact="true"
          ></ecoflow-power-entity-card>
          <ecoflow-power-entity-card
            .entity=${this.getEntities?.usb2_out_power}
            .hass="${this.hass}"
            color="${this.getAccentColor()}"
            icon="usb_a_port"
            name="usb_a"
            class="w-1/4"
            compact="true"
          ></ecoflow-power-entity-card>
          <ecoflow-power-entity-card
            .entity=${this.getEntities?.usb_qc1_out_power}
            .hass="${this.hass}"
            color="${this.getAccentColor()}"
            icon="usb_a_port"
            name="speed"
            class="w-1/4"
            compact="true"
          ></ecoflow-power-entity-card>
          <ecoflow-power-entity-card
            .entity=${this.getEntities?.usb_qc2_out_power}
            .hass="${this.hass}"
            color="${this.getAccentColor()}"
            icon="usb_a_port"
            color="${this.getAccentColor()}"
            name="speed"
            class="w-1/4"
            compact="true"
          ></ecoflow-power-entity-card>
          <ecoflow-power-entity-card
            .entity=${this.getEntities?.type_c1_out_power}
            .hass="${this.hass}"
            color="${this.getAccentColor()}"
            icon="usb_c_port"
            name="usb_c"
            class="w-1/4"
            compact="true"
          ></ecoflow-power-entity-card>
          <div class="w-1/4">&nbsp;</div>
          <div class="w-1/4">&nbsp;</div>
          <ecoflow-power-entity-card
            .entity=${this.getEntities?.type_c2_out_power}
            .hass="${this.hass}"
            color="${this.getAccentColor()}"
            icon="usb_c_port"
            name="usb_c"
            class="w-1/4"
            compact="true"
          ></ecoflow-power-entity-card>
        </ecoflow-power-entities-collection>
      </ecoflow-tab>
    `;
  }
  renderDeviceMoreInfo(): unknown {
    return html``;
  }
}

export default Delta2MaxCard;
