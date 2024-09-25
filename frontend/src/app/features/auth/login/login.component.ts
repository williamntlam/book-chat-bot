import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

const routes: Routes = [{ path: '/register', component: RegisterComponent }];

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string
  errorMessage: string = ''; // Initialize with an empty string

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful');
        localStorage.setItem('isLoggedIn', 'true'); // Set login flag
        this.router.navigate(['/character']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = error.error.message;
      },
    });
  }
}
