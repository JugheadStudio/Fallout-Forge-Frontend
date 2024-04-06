import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  currentUser: any;
  public isLoggedIn = false

  constructor(private service: AuthService, private authService: AuthService) {
  }

  ngOnInit() {
    this.checkLoginState()
    this.currentUser = this.authService.getCurrentUser();
  }

  checkLoginState() {
    this.service.checkIfLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn
    })
  }

}
