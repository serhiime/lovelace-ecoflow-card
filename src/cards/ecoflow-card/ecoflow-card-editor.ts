import { HaFormSchema } from "../../ha/form/schema";
import { EDITOR_NAME, MANUFACTURER } from "./ecoflow-card-const";
import {
  customElement,
  property,
  state,
} from "@lit/reactive-element/decorators.js";
import { LovelaceCardEditor } from "../../ha/types/lovelace/editor";
import { EcoflowCardConfig } from "./ecoflow-card-config";
import { html, LitElement, nothing } from "lit";
import { HomeAssistant, fireEvent } from "../../ha/types";
import setupCustomLocalization from "../../localize";
import { GENERIC_LABELS, TRANSLATED_VALUES } from "../../constants";
import ColorHelper from "../../tools/color-helper";

const SCHEMA: HaFormSchema[] = [
  {
    name: "device",
    selector: { device: { filter: { manufacturer: MANUFACTURER } } },
    required: true,
  },
  {
    name: "accent_color",
    selector: {
      select: {
        options: ColorHelper.getOptions(),
        mode: "dropdown",
        translation_key: "colors",
      },
    },
  },
  {
    name: "image_options",
    type: "expandable",
    flatten: true,
    schema: [
      {
        name: "show_ecoflow_logo",
        selector: { boolean: {} },
      },
      {
        name: "show_image",
        selector: { boolean: {} },
      },
    ],
  },
  {
    name: "display_options",
    type: "expandable",
    flatten: true,
    schema: [
      {
        name: "show_serial_number",
        selector: { boolean: {} },
      },
      {
        name: "prefere_model_name",
        selector: { boolean: {} },
      },
      {
        name: "show_battery_level",
        selector: { boolean: {} },
      },
      {
        name: "show_cycles",
        selector: { boolean: {} },
      },
      {
        name: "show_battery_temperature",
        selector: { boolean: {} },
      },
    ],
  },
  {
    name: "custom_options",
    type: "expandable",
    flatten: true,
    schema: [
      {
        name: "name",
        selector: { text: {} },
      },
      {
        name: "use_custom_name",
        selector: { boolean: {} },
      },
    ],
  },
];

@customElement(EDITOR_NAME)
export class EcoflowCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @state() private config?: EcoflowCardConfig;
  @property({ attribute: false }) public hass!: HomeAssistant;

  public setConfig(config: EcoflowCardConfig): void {
    this.config = config;
  }

  private _computeLabel = (schema: HaFormSchema) => {
    const customLocalize = setupCustomLocalization(this.hass!);

    return GENERIC_LABELS.includes(schema.name)
      ? customLocalize(`editor.card.generic.${schema.name}`)
      : this.hass.localize(
          `ui.panel.lovelace.editor.card.generic.${schema.name}`,
        );
  };

  private _localizeValue(value: string) {
    const customLocalize = setupCustomLocalization(this.hass!);
    const parts = value.split(".");

    return TRANSLATED_VALUES.includes(value)
      ? customLocalize(`editor.card.generic.${value}`)
      : parts[parts.length - 1];
  }

  protected render() {
    if (!this.hass || !this.config) {
      return nothing;
    }

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        .localizeValue=${this._localizeValue}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    fireEvent(this, "config-changed", { config: ev.detail.value });
  }
}
