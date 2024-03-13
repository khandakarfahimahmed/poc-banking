import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css'],
})
export class AppLoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient // Inject HttpClient
  ) {}

  login(): void {
    // Prepare the data to send to the server
    const formData = {
      username: this.username,
      password: this.password,
    };
    console.log(formData);

    // Make HTTP POST request to your server
    this.http.post('/login', formData).subscribe(
      (data) => {
        // Handle successful login response
        // For example, navigate to the dashboard
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
}
