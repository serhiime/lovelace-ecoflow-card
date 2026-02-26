import { html } from "lit";
import { customElement } from "@lit/reactive-element/decorators.js";
import BaseEcoflowCard from "../../base-card";

@customElement("ecoflow-tab")
class EcoflowTab extends BaseEcoflowCard {
  protected render(): unknown {
    return html`
      <div class="flex w-full flex-row p-1 m-2 flex-wrap">
        <slot></slot>
      </div>
    `;
  }
}

export default EcoflowTab;
