import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Prime Bank';
  constructor(private authService: AuthService, private router: Router) {} // Inject AuthService
  showLogoutButton(): boolean {
    return this.router.url !== '/login';
  }
  logout() {
    this.authService.logout();
  }
}
