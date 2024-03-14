import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-settlements-all',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './settlements-all.component.html',
  styleUrl: './settlements-all.component.css',
  // encapsulation: ViewEncapsulation.None
})

export class SettlementsAllComponent {

}
