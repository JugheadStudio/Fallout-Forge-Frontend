import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [
      ReactiveFormsModule, 
      NavbarComponent,
      RouterLink
    ]
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,  private authService: AuthService,) {}
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          
          // Perform login action after registration
          this.authService.loginUser(this.registerForm.value.email, this.registerForm.value.password).subscribe({
            next: (loginResponse: any) => {
              console.log('Login successful after registration:', loginResponse);
              this.router.navigateByUrl("/");
            },
            error: (loginError: any) => {
              console.error('Login failed after registration:', loginError);
            }
          });
        },
        error: (error: any) => {
          console.error('Registration failed:', error);
          console.error('Email address already in use.');
        }
      });
    }
  }  
}

