import { Items } from "./items.model";

export interface Construction {
  constructions_id?: number;
  name: string;
  amountOwned: number;
  image: string;
  category: string;
  items?: Items[];
  yields: string;
  cost: number;
  amountOwnedSettlement1: number;
  amountOwnedSettlement2: number;
  amountOwnedSettlement3: number;
  [key: string]: any;
}
