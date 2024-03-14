import { Items } from "./items.model";

export interface Construction {
  constructions_id?: number;
  name: string;
  amountOwned: number;
  image: string;
  category: string;
  items?: Items[];
}
