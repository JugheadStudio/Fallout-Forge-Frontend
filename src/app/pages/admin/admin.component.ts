import { Component, ViewEncapsulation } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ccService } from "../../services/cc.service";
import { ConstructedConstructions } from "../../models/constructed-constructions.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent {
  constructor(private service: ccService) {}

  // Get all Settlements
  cc: ConstructedConstructions[] = [];

  ngOnInit() {
    this.getCC();
  }

  getCC() {
    this.service.getAllCC().subscribe((data) => {
      console.log(data);
      this.cc = data;
    });
  }

  // Method to handle editing
  editItem(cc: ConstructedConstructions) {
    cc.isEditing = true;
    cc.tempBuyPrice = cc.buy_price;
    cc.tempSellPrice = cc.sell_price;
  }

  saveItem(cc: ConstructedConstructions) {
    // Update the local item with the updated data from the server
    cc.buy_price = cc.tempBuyPrice;
    cc.sell_price = cc.tempSellPrice;
    // Set isEditing back to false
    cc.isEditing = false;
    this.service.saveItem(cc).subscribe(
      () => {
        console.log(cc);
        console.log("Item saved successfully");
      },
      (error) => {
        console.error("Error saving item", error);
      }
    );
  }

  // Method to handle canceling editing
  cancelEdit(cc: ConstructedConstructions) {
    cc.isEditing = false;
    // Reset temporary values
    cc.tempBuyPrice = cc.buy_price;
    cc.tempSellPrice = cc.sell_price;
  }
}
