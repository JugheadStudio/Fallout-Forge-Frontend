import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ccService } from '../../services/cc.service';
import { ConstructedConstructions } from '../../models/constructed-constructions.model';

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [NavbarComponent],
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

}
