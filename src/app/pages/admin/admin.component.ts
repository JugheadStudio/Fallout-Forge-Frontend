import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None
})

export class AdminComponent {

}
