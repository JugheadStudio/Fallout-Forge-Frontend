import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [
      ReactiveFormsModule, 
      NavbarComponent,
      RouterLink
    ]
})

export class LoginComponent {
  
  constructor(private service: AuthService, private router: Router) {}

  login = new FormGroup({
    email: new FormControl('', Validators.required),
    // username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    // Validation
    if (this.login.value.email != "" && this.login.value.password != "" ) {
      this.service.loginUser(this.login.value.email!, this.login.value.password!)
      .subscribe((success) => {
        // login successful, navigate to landing page
        if (success) {
          this.router.navigateByUrl("/")
        } else {
          console.log("Add validation");
          
        }
      })
    }
  }

}
