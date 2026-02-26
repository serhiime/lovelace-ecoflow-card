import { customElement, property } from "@lit/reactive-element/decorators.js";
import { BaseEntity } from "../../../entities/base";
import { html } from "lit";
import { VALID_ICONS } from "../../ecoflow-icon-card/ecoflow-icon";
import "../../ecoflow-icon-card/ecoflow-icon";
import BaseEcoflowCard from "../../../base-card";
import ColorHelper, { COLOR_MAP } from "../../../tools/color-helper";

@customElement("ecoflow-entity-badge-card")
export class EntityBadgeCard extends BaseEcoflowCard {
  @property() entity?: BaseEntity;
  @property({ type: String }) icon?: keyof typeof VALID_ICONS;
  @property() color?: keyof typeof COLOR_MAP;
  @property() customUnit: string | null = null;

  public render() {
    return html`
      <div
        class="rounded-lg p-2 ${ColorHelper.getBg(
          this.color,
        )} flex w-9/10 flex-row text-xs mr-2"
      >
        <ecoflow-icon
          icon="${this.icon ?? "mdi:help-circle"}"
          class="w-5 h-5 ${ColorHelper.getForeground(
            this.color,
          )} fill-current mr-2"
        ></ecoflow-icon>
        <span
          class="${ColorHelper.getForeground(
            this.color,
          )} py-0.5 inline-block mr-2"
          >${this.entity?.value}
          ${this.customUnit ?? this.entity?.unit_of_measurement}</span
        >
      </div>
    `;
  }
}

export default EntityBadgeCard;
