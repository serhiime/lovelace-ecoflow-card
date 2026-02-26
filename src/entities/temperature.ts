import { BaseEntity } from "./base";

export interface Temperature extends BaseEntity {
  min_cell_temperature?: number;
  max_cell_temperature?: number;
}
