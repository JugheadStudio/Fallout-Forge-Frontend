import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fallout-surge';
}
