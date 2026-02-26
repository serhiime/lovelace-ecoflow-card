import { HomeAssistant } from "../ha/types";
import { DeviceBase } from "../devices/base";
import { DeviceMapper } from "./device-mapper";

export class DeviceService {
  private ha: HomeAssistant;
  private deviceMapper: DeviceMapper;

  public constructor(ha: HomeAssistant) {
    this.ha = ha;
    this.deviceMapper = new DeviceMapper(this.ha);
  }

  public getDeviceById(deviceId?: string): DeviceBase | null {
    if (!deviceId) return null;
    const haDevice = this.ha.devices[deviceId];

    return this.deviceMapper.mapDevice(haDevice);
  }
}
