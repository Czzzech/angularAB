import { GridColumn } from "./GridColumn";
import { GridFilter } from "./GridFilter";

export interface GridConfig{
    model       : string;
    component   : string;
    title       : string;
    columns     : GridColumn[];
    pagination  : object;
    filters     : GridFilter[];
}