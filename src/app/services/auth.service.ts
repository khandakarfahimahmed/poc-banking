// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any) {
    this.http.post(this.apiUrl, data).subscribe((result: any) => {
      localStorage.setItem('token', result.token);
      this.router.navigate(['dashboard']);
    });
  }
  dashboard() {
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    this.http
      .post('http://localhost:3000/dashboard', {}, { headers })
      .subscribe((result: any) => {
        console.log(result);
      });
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
