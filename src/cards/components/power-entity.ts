import { customElement, property } from "@lit/reactive-element/decorators.js";
import { html } from "lit";
import { Power } from "../../entities/power";
import { VALID_ICONS } from "../ecoflow-icon-card/ecoflow-icon";
import "../ecoflow-icon-card/ecoflow-icon";
import BaseEcoflowCard from "../../base-card";
import ColorHelper, { COLOR_MAP } from "../../tools/color-helper";
import "./toggle-power-state";
import { Status } from "../../entities/status";

@customElement("ecoflow-power-entity-card")
class EcoflowPowerEntityCard extends BaseEcoflowCard {
  @property() private entity?: Power;
  @property({ type: String }) private icon?: keyof typeof VALID_ICONS;
  @property({ type: String }) private name?: string;
  @property({ type: Boolean }) private compact?: boolean = false;
  @property({ type: String }) private color?: keyof typeof COLOR_MAP = "gray";
  @property() private state_entity?: Status = undefined;

  protected render(): unknown {
    if (this.compact)
      return html`
        <div
          class="flex flex-col m-1 text-center content-center justify-center ${ColorHelper.getForeground(
            this.color,
          )}"
        >
          <ecoflow-icon
            icon="${this.icon}"
            class="w-14 h-14 mx-auto"
          ></ecoflow-icon>
          <div class="text-sm inline-block ml-1">${this.__(this.name)}</div>
          <div class="text-2xl p-2 ml-1 font-bold">
            ${this.entity?.value} ${this.__("wat")}
          </div>
          <div></div>
        </div>
      `;

    return html`
      <div
        class="flex flex-col ${ColorHelper.getBg(
          this.color,
        )} ${ColorHelper.getForeground(this.color)} rounded-md mr-3 mb-3 p-2"
      >
        <div class="flex flex-row justify-between">
          <div class="flex flex-col w-3/4 p-2">
            <ecoflow-icon icon="${this.icon}" class="w-14 h-14"></ecoflow-icon>
            <div class="text-sm inline-block ml-1">${this.__(this.name)}</div>
            <div class="text-2xl p-2 ml-1 font-bold">
              ${this.entity?.value} ${this.__("wat")}
            </div>
          </div>
          ${this.state_entity
            ? html`<ecoflow-toggle-power-state
                color="${this.color}"
                .hass="${this.hass}"
                .entity="${this.state_entity}"
              ></ecoflow-toggle-power-state>`
            : html``}
        </div>
      </div>
    `;
  }
}

export default EcoflowPowerEntityCard;
