import type {
  Auth,
  Connection,
  Context,
  HassConfig,
  HassEntities,
  HassServices,
  HassServiceTarget,
} from "home-assistant-js-websocket";
import { Entity } from "./types/entity";
import { Device } from "./types/device";
import { Resources } from "./types/resources";
import { LocalizeFunc } from "./types/localize";
import { HomeAssistantLocale } from "./types/locale";
import { ConfigChangedEvent } from "./types/events/config-changed";

declare global {
  interface Window {}

  interface HassDomEvents {
    "value-changed": {
      value: unknown;
    };
    change: undefined;
    "config-changed": ConfigChangedEvent;
  }
}

export interface ServiceCallResponse {
  context: Context;
}

export interface ServiceCallRequest {
  domain: string;
  service: string;
  serviceData?: Record<string, any>;
  target?: HassServiceTarget;
}

export interface HomeAssistant {
  auth: Auth;
  connection: Connection;
  connected: boolean;
  states: HassEntities;
  entities: { [id: string]: Entity };
  devices: { [id: string]: Device };
  services: HassServices;
  config: HassConfig;
  language: string;
  locale: HomeAssistantLocale;
  selectedLanguage: string | null;
  resources: Resources;
  localize: LocalizeFunc;
  callService(
    domain: ServiceCallRequest["domain"],
    service: ServiceCallRequest["service"],
    serviceData?: ServiceCallRequest["serviceData"],
    target?: ServiceCallRequest["target"],
  ): Promise<ServiceCallResponse>;
}

export type ValidHassDomEvent = keyof HassDomEvents;

export interface HASSDomEvent<T> extends Event {
  detail: T;
}

export const fireEvent = <HassEvent extends ValidHassDomEvent>(
  node: HTMLElement | Window,
  type: HassEvent,
  detail?: HassDomEvents[HassEvent],
  options?: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
  },
) => {
  options = options || {};
  // @ts-ignore
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });
  (event as any).detail = detail;
  node.dispatchEvent(event);
  return event;
};
