import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private url =
    'https://catstagram-application-default-rtdb.europe-west1.firebasedatabase.app/cats.json'

  constructor(private http: HttpClient, private authService: AuthService) {}

  public create(data): Observable<Cat> {
    let headers = new HttpHeaders();
    let token = this.authService.getToken();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post<Cat>(this.url, data, {
      headers: headers,
      params: new HttpParams().set('auth', token),
    });
  }
}
