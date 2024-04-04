import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SettlementsService } from '../../services/settlement.service';

@Component({
  selector: "app-individual-settlement",
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: "./individual-settlement.component.html",
  styleUrl: "./individual-settlement.component.css",
})
export class IndividualSettlementComponent {
  constructor(private service: SettlementsService) {}

  // Get current Settlement
  settlement: SettlementsService[] = [];

  // ngOnInit() {
  //   this.getSettlement();
  // }

  // getSettlement() {
  //   this.service.getAllSettlements().subscribe((data) => {
  //     console.log(data);
  //     this.settlements = data;
  //     this.calculateTotalCapacityUsed();
  //   });
  // }



}
