import { GridColumn } from "./GridColumn";
import { GridFilter } from "./GridFilter";

export interface GridConfig{
    component   : string;
    title       : string;
    columns     : GridColumn[];
    pagination  : object;
    filters     : GridFilter[];
}