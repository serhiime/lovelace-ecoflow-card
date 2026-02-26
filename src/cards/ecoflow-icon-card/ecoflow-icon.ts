import battery_10 from "../../../assets/svg/icons/battery-10.svg";
import battery_20 from "../../../assets/svg/icons/battery-20.svg";
import battery_30 from "../../../assets/svg/icons/battery-30.svg";
import battery_40 from "../../../assets/svg/icons/battery-40.svg";
import battery_50 from "../../../assets/svg/icons/battery-50.svg";
import battery_60 from "../../../assets/svg/icons/battery-60.svg";
import battery_70 from "../../../assets/svg/icons/battery-70.svg";
import battery_80 from "../../../assets/svg/icons/battery-80.svg";
import battery_90 from "../../../assets/svg/icons/battery-90.svg";
import battery_charging from "../../../assets/svg/icons/battery-charging.svg";
import battery_charging_10 from "../../../assets/svg/icons/battery-charging-10.svg";
import battery_charging_20 from "../../../assets/svg/icons/battery-charging-20.svg";
import battery_charging_30 from "../../../assets/svg/icons/battery-charging-30.svg";
import battery_charging_40 from "../../../assets/svg/icons/battery-charging-40.svg";
import battery_charging_50 from "../../../assets/svg/icons/battery-charging-50.svg";
import battery_charging_60 from "../../../assets/svg/icons/battery-charging-60.svg";
import battery_charging_70 from "../../../assets/svg/icons/battery-charging-70.svg";
import battery_charging_80 from "../../../assets/svg/icons/battery-charging-80.svg";
import battery_charging_90 from "../../../assets/svg/icons/battery-charging-90.svg";
import battery_cycles from "../../../assets/svg/icons/battery-cycles.svg";
import battery_full from "../../../assets/svg/icons/battery-full.svg";
import input from "../../../assets/svg/icons/input.svg";
import output from "../../../assets/svg/icons/output.svg";
import thermometer from "../../../assets/svg/icons/thermometer.svg";
import time from "../../../assets/svg/icons/time.svg";
import usb_c_port from "../../../assets/svg/icons/usb-c-port.svg";
import usb_a_port from "../../../assets/svg/icons/usb-a-port.svg";
import _12v from "../../../assets/svg/icons/12v.svg";
import solar_panel from "../../../assets/svg/icons/solar-panel.svg";
import ac_input from "../../../assets/svg/icons/ac-input.svg";
import toggle_on from "../../../assets/svg/icons/toggle-on.svg";
import toggle_off from "../../../assets/svg/icons/toggle-off.svg";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { html } from "lit";
import { customElement, property } from "@lit/reactive-element/decorators.js";
import BaseEcoflowCard from "../../base-card";

export const VALID_ICONS = {
  battery_10,
  battery_20,
  battery_30,
  battery_40,
  battery_50,
  battery_60,
  battery_70,
  battery_80,
  battery_90,
  battery_charging,
  battery_charging_10,
  battery_charging_20,
  battery_charging_30,
  battery_charging_40,
  battery_charging_50,
  battery_charging_60,
  battery_charging_70,
  battery_charging_80,
  battery_charging_90,
  battery_cycles,
  battery_full,
  input,
  output,
  thermometer,
  time,
  usb_c_port,
  usb_a_port,
  _12v,
  solar_panel,
  ac_input,
  toggle_on,
  toggle_off,
};

@customElement("ecoflow-icon")
class EcoflowIcon extends BaseEcoflowCard {
  @property({ type: String }) icon: keyof typeof VALID_ICONS = "battery_full";

  protected render(): unknown {
    return html`${unsafeSVG(VALID_ICONS[this.icon])}`;
  }
}

export default EcoflowIcon;
