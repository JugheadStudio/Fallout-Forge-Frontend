import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SettlementsService } from '../../services/settlement.service';
import { Settlements } from "../../models/settlements.model";
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ConstructedConstructions } from '../../models/constructed-constructions.model';
import { Construction } from '../../models/construction.model';

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
  constructions: Construction[] = [];
  currentIndex?: number;

  ngOnInit() {
    this.getSettlements();
    this.getConstructions();
    // Retrieve the index from session storage
    const indexFromSession = sessionStorage.getItem("CurrentSettlement");
    if (indexFromSession) {
      this.currentIndex = parseInt(indexFromSession, 10); // Parse to integer
      this.currentIndex = this.currentIndex - 1; // Parse to integer
    } else {
      // Set a default index if not found in session storage
      this.currentIndex = 0;
    }
  }

  getSettlements() {
    this.service.getAllSettlements().subscribe((data) => {
      console.log(data);
      this.settlements = data;
    });
  }

  getConstructions() {
    this.service.getAllConstructions().subscribe((data2) => {
      console.log(data2);
      this.constructions = data2;
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

  getDynamicProperty(construction: Construction, index: number): number {
    const propertyName = `amountOwnedSettlement${index + 1}`;
    return construction[propertyName];
  }

  // Add method to craft construction
  craftConstruction(construction: Construction) {
    const settlement = this.settlements[this.currentIndex!];
    const hasEnoughBottleCaps = settlement.bottleCaps >= construction.cost;

    if (!hasEnoughBottleCaps) {
      alert("Not enough bottle caps.");
      return;
    }

    // Check if settlement has enough materials
    for (const item of construction.items!) {
      const requiredAmount = item.amountNeeded;
      const availableAmount =
        settlement.settlements_ToStorage!.find(
          (storage) =>
            storage.cc.ccMaterials_id === item.constructed.ccMaterials_id
        )?.amount ?? 0;

      if (requiredAmount > availableAmount) {
        alert(`Not enough ${item.constructed.name}.`);
        return;
      }
    }

    // Craft construction
    this.service
      .craftConstruction(
        settlement.settlement_id!,
        construction.constructions_id!
      )
      .subscribe(
        () => {
          // Update UI or perform any additional actions after crafting
          alert("Construction crafted successfully.");
        },
        (error) => {
          console.error("Crafting failed:", error);
          alert("Crafting failed. Please try again later.");
        }
      );
  }


}
