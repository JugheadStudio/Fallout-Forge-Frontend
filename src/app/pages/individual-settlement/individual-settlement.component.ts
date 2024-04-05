import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SettlementsService } from '../../services/settlement.service';
import { Settlements } from "../../models/settlements.model";
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: "app-individual-settlement",
  standalone: true,
  imports: [NavbarComponent, NgFor, NgIf, CommonModule],
  templateUrl: "./individual-settlement.component.html",
  styleUrl: "./individual-settlement.component.css",
})
export class IndividualSettlementComponent {
  constructor(private service: SettlementsService) {}

  // Get all Settlements
  settlements: Settlements[] = [];
  index?: number;

  ngOnInit() {
    this.getSettlements();
    // Retrieve the index from session storage
    const indexFromSession = sessionStorage.getItem("CurrentSettlement");
    if (indexFromSession) {
      this.index = parseInt(indexFromSession, 10); // Parse to integer
      this.index = this.index - 1; // Parse to integer
    } else {
      // Set a default index if not found in session storage
      this.index = 0;
    }
  }

  getSettlements() {
    this.service.getAllSettlements().subscribe((data) => {
      console.log(data);
      this.settlements = data;
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
}
