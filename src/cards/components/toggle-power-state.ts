import BaseEcoflowCard from "../../base-card";
import { customElement, property } from "@lit/reactive-element/decorators.js";
import { html } from "lit";
import ColorHelper, { COLOR_MAP } from "../../tools/color-helper";
import "../ecoflow-icon-card/ecoflow-icon";
import { Status } from "../../entities/status";

@customElement("ecoflow-toggle-power-state")
class EcoflowTogglePowerState extends BaseEcoflowCard {
  @property() private entity?: Status;
  @property({ type: String }) private color?: keyof typeof COLOR_MAP = "gray";

  protected render() {
    return html`
      <div
        class="mr-2 mt-1 flex w-14 h-14 ${ColorHelper.getToggle(
          this.color,
          this.entity?.is_enabled ? "on" : "off",
        )}"
        @click="${() =>
          this.entity &&
          this.hass.callService("switch", "toggle", {
            entity_id: this.entity.entity_id,
          })}"
      >
        <ecoflow-icon
          icon="${this.entity?.is_enabled ? "toggle_on" : "toggle_off"}"
          class="w-full h-full fill-current"
        ></ecoflow-icon>
      </div>
    `;
  }
}

export default EcoflowTogglePowerState;
