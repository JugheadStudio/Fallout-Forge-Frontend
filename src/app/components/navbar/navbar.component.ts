import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    NgbModule
    // NavbarComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  // encapsulation: ViewEncapsulation.None
})

export class NavbarComponent {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}