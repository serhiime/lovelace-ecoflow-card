import { HaFormData } from "./data";

export interface HaFormBaseSchema {
  name: string;
  default?: HaFormData;
  required?: boolean;
  disabled?: boolean;
  description?: {
    suffix?: string;
    suggested_value?: HaFormData;
  };
  context?: Record<string, string>;
}
