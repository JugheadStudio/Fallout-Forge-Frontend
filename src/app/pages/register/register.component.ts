import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';

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
  register!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.register = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // Handle form submission logic here
    if (this.register.valid) {
      console.log('Form submitted:', this.register.value);
      // Perform further actions like sending data to a server
    }
  }

}
