import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SettlementsService } from "../../services/settlement.service";
import { Settlements } from "../../models/settlements.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-settlements",
  standalone: true,
  templateUrl: "./settlements.component.html",
  styleUrl: "./settlements.component.css",
  imports: [NavbarComponent],
})
export class SettlementsComponent {
  constructor(private service: SettlementsService, private router: Router) {}

  // Get all Settlements
  settlements: Settlements[] = [];

  ngOnInit() {
    this.getSettlements();
  }

  getSettlements() {
    this.service.getAllSettlements().subscribe((data) => {
      console.log(data);
      // Sort settlements alphabetically by name
      this.settlements = data.sort((a, b) => a.name.localeCompare(b.name));
      this.calculateTotalCapacityUsed();
    });
  }

  totalCapacityUsed: number = 0;

  calculateTotalCapacityUsed() {
    this.settlements.forEach((settlement) => {
      settlement.totalCapacityUsed =
        settlement.settlements_ToStorage?.reduce(
          (total, storage) => (total ?? 0) + storage.capacity_used,
          0
        ) ?? 0;
    });
  }

  // Set active settlements
  selectedSettlement?: number;

  setSelectedSettlement(settlementid: number) {
    // this.selectedSettlement = settlement;
    this.selectedSettlement = settlementid;

    console.log(this.selectedSettlement);
    sessionStorage.setItem("CurrentSettlement", JSON.stringify(settlementid));

    // Redirect to another route after setting the selected settlement
    this.router.navigate(["/settlement1"]);
  }

  // selectedSettlement?: Settlements;

  // setSelectedSettlement(settlement: Settlements) {
  //   this.selectedSettlement = settlement;

  //   console.log(this.selectedSettlement.settlement_id);
  //   sessionStorage.setItem(
  //     "CurrentSettlement",
  //     JSON.stringify(this.selectedSettlement.settlement_id)
  //   );

  //   // Redirect to another route after setting the selected settlement
  //   this.router.navigate(["/settlement1"]);
  // }
}
