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

  constructor(private userService: AuthService) {}
  userLogin(data: any) {
    console.warn(data);
    this.userService.login(data);
  }
}
