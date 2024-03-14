import { Inventory } from "./inventory.model";

export interface Items {
  item_id: number;
  constructionID: number;
  constructedId: number;
  amountNeeded: number;
  constructed: Inventory;
}
