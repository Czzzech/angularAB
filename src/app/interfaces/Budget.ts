import { Wish } from "./Wish";
import { Sprint } from "./Sprint";
import { Periods } from "./Periods";

export interface Budget{
    id: number,
    name: string,
    description: string,
    wishes: Wish[],
    sprints: Sprint[],
    period: Periods,
    start: Date
}