import { Budget } from "./Budget";
import { Wish } from "./Wish";

export interface Sprint{
    id: number,
    budget: Budget,
    wishes: Wish[]
}