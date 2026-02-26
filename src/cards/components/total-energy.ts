import {
  customElement,
  property,
  state,
} from "@lit/reactive-element/decorators.js";
import { html } from "lit";
import { Power } from "../../entities/power";
import "../ecoflow-icon-card/ecoflow-icon";
import BaseEcoflowCard from "../../base-card";
import ColorHelper, { COLOR_MAP } from "../../tools/color-helper";

@customElement("ecoflow-total-energy-card")
class EcoflowTotalEnergyCard extends BaseEcoflowCard {
  @property({ attribute: false }) public entity!: Power;
  @state() public selected: boolean = false;
  @property({ type: String }) private color?: keyof typeof COLOR_MAP = "gray";

  protected render(): unknown {
    if (typeof this.entity?.value === "string") {
      const isIn = this.entity.power_direction === "in";

      return html`
        <div
          class="flex flex-row justify-between border-b-4 ${!this.selected
            ? "bg-transparent"
            : `${ColorHelper.getBorder(this.color)}`} p-3"
        >
          <ecoflow-icon
            icon="${isIn ? "input" : "output"}"
            class="w-14 h-14 my-3 mr-5"
          ></ecoflow-icon>
          <div class="flex flex-col w-full">
            <div class="text-2xl flex flex-row font-bold">
              ${isIn ? this.__("input") : this.__("output")}
            </div>
            <div class="text-xl mt-3">
              ${this.entity.value} ${this.__("wat")}
            </div>
          </div>
        </div>
      `;
    }
    return html``;
  }
}
