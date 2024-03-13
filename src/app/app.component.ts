import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "./components/navbar/navbar.component";
// import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        CommonModule,
        RouterLink,
        NgbModule,
        NavbarComponent
    ]
})
export class AppComponent {
  title = 'fallout-surge';

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
