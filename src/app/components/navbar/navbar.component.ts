import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
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
  currentUser: any;
  activeRoute: string = '';
  public isLoggedIn = false
  public isAdmin = false

  constructor(private service: AuthService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.checkLoginState()
    this.isAdmin = this.service.isUserAdmin()
    this.currentUser = this.authService.getCurrentUser();
    this.setActiveRoute(this.router.url);
  }
  
  checkLoginState() {
    this.service.checkIfLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn
    })
  }

  callLogout() {
    this.service.Logout()
    this.router.navigateByUrl("/login")
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  setActiveRoute(route: string): void {
    this.activeRoute = route;
  }
}