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
      this.settlements = data;
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
  selectedSettlement?: Settlements;

  setSelectedSettlement(settlement: Settlements) {
    this.selectedSettlement = settlement;

    console.log(this.selectedSettlement.settlement_id);
    sessionStorage.setItem("CurrentSettlement", JSON.stringify(this.selectedSettlement.settlement_id));

    // Redirect to another route after setting the selected settlement
    this.router.navigate(["/settlement1"]);
  }
}
