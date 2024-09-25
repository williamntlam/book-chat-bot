import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

interface RegisterResponse {
  // Define the expected properties of the response object
  message: string;
  // Add other properties as needed
}

interface RegisterError {
  error: {
    message: string;
    // Add other properties as needed
  };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  password2: string = '';
  errorMessage: string = '';
  passwordMatch: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(registerForm: NgForm) {
    if (this.password !== this.password2) {
      this.passwordMatch = false;
      this.errorMessage = 'Passwords do not match';
      return;
    } else {
      this.passwordMatch = true;
      this.errorMessage = '';
    }

    this.authService.register(this.username, this.password).subscribe({
      next: (response: RegisterResponse) => {
        console.log('Register successful');
        this.router.navigate(['/character']);
      },
      error: (error: RegisterError) => {
        console.error('Register failed', error);
        this.errorMessage = error.error.message;
      },
    });
  }
}
