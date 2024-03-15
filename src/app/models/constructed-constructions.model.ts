import { Inventory2 } from "./inventory2.model";
import { Items } from "./items.model";

export interface ConstructedConstructions {

  ccMaterials_id?: number;

  name: string;

  category: string;

  icon: string;

  description: string;

  amount: number;

  buy_price: number;

  sell_price: number;

  capacity_used: number;

  constructed_ToCraftables?: Items[];

  cc_ToStorage?: Inventory2[];
//   cc_ToStorage?: Inventory[];

    isEditing: boolean;
    tempBuyPrice: number;
    tempSellPrice: number;

}
