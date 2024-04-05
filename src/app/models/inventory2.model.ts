import { Settlements } from "./settlements.model";
import { ConstructedConstructions } from "./constructed-constructions.model";

export interface Inventory2 {
  inventory_id: number;

  amount: number;

  capacity_used: number;

  settlements: Settlements;

  cc: ConstructedConstructions;

}
