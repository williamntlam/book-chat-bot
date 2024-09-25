import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../../layouts/home-layout/home-layout.component';
import { LoginComponent } from '../../../features/auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'login', component: LoginComponent },
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
