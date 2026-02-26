import { CSSResultGroup, LitElement } from "lit";
import { styles } from "../src/styles/tailwind";

import setupCustomLocalization from "./localize";
import { property } from "@lit/reactive-element/decorators.js";
import { HomeAssistant } from "./ha/types";

abstract class BaseEcoflowCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  protected __(name: string | undefined): string {
    if (!name) return "";
    return setupCustomLocalization(this.hass!)(`card.${name}`);
  }
  static get styles(): CSSResultGroup {
    return [styles];
  }
}

export default BaseEcoflowCard;
