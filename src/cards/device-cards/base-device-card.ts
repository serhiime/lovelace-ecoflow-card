import { property, state } from "@lit/reactive-element/decorators.js";
import { HomeAssistant } from "../../ha/types";
import { DeviceBase, DeviceEntitiesBase } from "../../devices/base";
import { html, CSSResultGroup, css } from "lit";
import logo from "../../../assets/svg/logo.svg";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import "../components/badges/entity-badge-card";
import "../components/total-energy";
import "../ecoflow-icon-card/ecoflow-icon";
import BaseEcoflowCard from "../../base-card";
import { EcoflowCardConfig } from "../ecoflow-card/ecoflow-card-config";
import ColorHelper, { COLOR_MAP } from "../../tools/color-helper";

export abstract class BaseDeviceCard extends BaseEcoflowCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public device?: DeviceBase | null;
  @state() private _currentTab: "input" | "output" = "input";
  @state() public config: EcoflowCardConfig | null = null;

  abstract get getImageUrl(): string;

  protected get getEntities(): DeviceEntitiesBase | null {
    return this.device === undefined
      ? null
      : this.device?.entities === undefined || this.device?.entities === null
        ? null
        : this.device?.entities;
  }

  abstract renderDeviceInput(): unknown;
  abstract renderDeviceOutput(): unknown;
  abstract renderDeviceMoreInfo(): unknown;

  private renderError(message: string): unknown {
    return html`
      <div
        class="w-full p-5 text-center text-xl bg-rose-900 text-white rounded-md"
      >
        ${message}
      </div>
    `;
  }

  private renderDeviceNotSelected(): unknown {
    return this.renderError("No device selected");
  }

  private renderModelNotSelected(): unknown {
    return this.renderError("No model found");
  }

  abstract renderBadges(): unknown;

  protected getAccentColor(): keyof typeof COLOR_MAP {
    return this.config?.accent_color ?? "gray";
  }

  protected render(): unknown {
    if (this.device === null || this.device === undefined) {
      return this.renderDeviceNotSelected();
    }

    let model = this.device?.model;

    if (model === undefined) {
      return this.renderModelNotSelected();
    }

    model = model?.replace("_", " ").replace("_", " ");

    return html`
      <ha-card>
        <div class="bg-gray-300 rounded-md shadow-lg">
          ${this.config?.show_ecoflow_logo
            ? html`<div class="flex flex-row justify-center my-4">
                <div class="fill-current w-2/5 text-center py-3 px-2 mx-2">
                  ${unsafeSVG(logo)}
                </div>
              </div>`
            : html``}

          <div class="flex flex-row justify-center">
            <div class="${this.config?.show_image ? "w-3/5" : "w-full"} p-3">
              <h4 class="block text-4xl py-3 px-2">
                ${this.config?.prefere_model_name
                  ? model
                  : this.config?.use_custom_name
                    ? this.config?.name
                    : (this.device.friendly_name ?? this.device.name)}
              </h4>
              ${this.config?.show_serial_number
                ? html`<h6
                    class="text-sm ${ColorHelper.getForeground(
                      this.getAccentColor(),
                    )} ${ColorHelper.getBg(
                      this.getAccentColor(),
                    )} font-bold py-3 pt-0 px-2 inline-block rounded-md h-6 mb-4"
                  >
                    ${this.device?.serial_number}
                  </h6>`
                : html``}

              <div class="flex flex-row w-full flex-wrap">
                ${this.config?.show_battery_level
                  ? html`<ecoflow-entity-badge-card
                      .entity="${this.getEntities?.battery_level}"
                      icon="battery_full"
                      color="${this.getAccentColor()}"
                      class="block w-1/2 mt-1"
                    ></ecoflow-entity-badge-card>`
                  : ""}
                ${this.config?.show_cycles
                  ? html` <ecoflow-entity-badge-card
                      .entity="${this.getEntities?.cycles}"
                      icon="battery_cycles"
                      color="${this.getAccentColor()}"
                      class="block w-1/2 mt-1"
                    ></ecoflow-entity-badge-card>`
                  : ""}
                ${this.config?.show_battery_temperature
                  ? html`<ecoflow-entity-badge-card
                      .entity="${this.getEntities?.battery_temperature}"
                      icon="thermometer"
                      color="${this.getAccentColor()}"
                      class="block w-1/2 mt-1"
                    ></ecoflow-entity-badge-card>`
                  : ""}
                ${this.renderBadges()}
              </div>
              ${this.renderDeviceMoreInfo()}
            </div>
            ${this.config?.show_image
              ? html`<div class="w-2/5">
                  <div
                    class="bg-cover w-4/5 bg-center m-auto h-52"
                    style="background-image: url(${this.getImageUrl});"
                    alt="${model}"
                  ></div>
                </div>`
              : html``}
          </div>
          <div class="flex flex-row justify-between mx-2">
            <ecoflow-total-energy-card
              .entity="${this.getEntities?.total_in_power}"
              .selected="${this._currentTab === "input"}"
              .hass="${this.hass}"
              .color="${this.getAccentColor()}"
              @click="${() => (this._currentTab = "input")}"
              class="w-1/2"
            ></ecoflow-total-energy-card>
            <ecoflow-total-energy-card
              .entity="${this.getEntities?.total_out_power}"
              .selected="${this._currentTab === "output"}"
              .color="${this.getAccentColor()}"
              .hass="${this.hass}"
              @click="${() => (this._currentTab = "output")}"
              class="w-1/2 ml-2"
            ></ecoflow-total-energy-card>
          </div>

          <div
            hidden="${this._currentTab !== "input"}"
            class="min-h-52 w-full flex flex-col"
          >
            ${this.renderDeviceInput()}
          </div>
          <div
            hidden="${this._currentTab !== "output"}"
            class="min-h-52 w-full flex flex-col"
          >
            ${this.renderDeviceOutput()}
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return [
      css`
        div[hidden="true"] {
          display: none;
        }
        div[hidden="false"] {
          display: flex;
        }
      `,
      super.styles,
    ];
  }
}
