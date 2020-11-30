import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppURL: string;
  myApiURL: string

  constructor(private http: HttpClient) {
    this.myAppURL = environment.endPoint;
    this.myApiURL = '/api/Login';
  }

  login(usuario: Usuario): Observable<any> {
    return this.http.post(this.myAppURL + this.myApiURL, usuario);
  }

  setLocalStorage(data): void {
    localStorage.setItem('token', data);
  }

  // getItemStorage(): string {
  //   return localStorage.getItem('nombreUsuario');
  // }

  getTokenDecoded(): any {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    return decodedToken;
  }

  removeLocalStorage(): void {
    localStorage.removeItem('token');
  }
}
