import { GridConfig } from "./GridConfig";
export interface Grid{
    data: any[];
    config: GridConfig;
    openModal(item: object): void;
}