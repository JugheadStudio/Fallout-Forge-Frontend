import { Inventory2 } from "./inventory2.model";

export interface Settlements {

      settlement_id?: number;

//   userID: Users;

  name: string;

  location: string;

  level: number;

  total_capacity: number;

  bottleCaps: number;

  image: string;

  settlements_ToStorage?: Inventory2[];
//   settlements_ToStorage?: Inventory[];


}
