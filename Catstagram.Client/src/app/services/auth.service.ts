import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = environment.apiUrl + '/api/identity/register';
  private loginUrl = environment.apiUrl + '/api/identity/login';

  constructor(private http: HttpClient) {}

  public login(data): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }

  public register(data): Observable<any> {
    return this.http.post(this.registerUrl, data);
  }

  public saveToken(data: any) {
    localStorage.setItem('token', data.token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
