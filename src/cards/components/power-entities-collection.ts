import BaseEcoflowCard from "../../base-card";
import { html } from "lit";
import { customElement, property } from "@lit/reactive-element/decorators.js";
import ColorHelper, { COLOR_MAP } from "../../tools/color-helper";
import { Status } from "../../entities/status";

@customElement("ecoflow-power-entities-collection")
class PowerEntitiesCollection extends BaseEcoflowCard {
  @property({ type: String }) private color?: keyof typeof COLOR_MAP = "gray";
  @property() private state_entity?: Status;

  protected render(): unknown {
    return html`
      <div
        class="flex flex-col ${ColorHelper.getBg(
          this.color,
        )} ${ColorHelper.getForeground(
          this.color,
        )} rounded-md mr-3 mb-3 p-2 flex-wrap"
      >
        <div class="flex flex-row flex-wrap w-full">
          <div class="flex flex-col w-3/4"></div>
          <div class="flex flex-row-reverse w-1/4 text-right">
            ${this.state_entity
              ? html`<ecoflow-toggle-power-state
                  .entity="${this.state_entity}"
                  .hass="${this.hass}"
                  color="${this.color}"
                ></ecoflow-toggle-power-state>`
              : ""}
          </div>
        </div>
        <div class="flex flex-row flex-wrap w-full">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
