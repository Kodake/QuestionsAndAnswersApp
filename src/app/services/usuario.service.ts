import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppURL: string;
  myApiURL: string

  constructor(private http: HttpClient) {
    this.myAppURL = environment.endPoint;
    this.myApiURL = '/api/Usuario';
  }

  saveUser(usuario: Usuario): Observable<any> {
    return this.http.post(this.myAppURL + this.myApiURL, usuario);
  }

  changePassword(changePassword): Observable<any> {
    return this.http.put(this.myAppURL + this.myApiURL + '/CambiarPassword', changePassword);
  }
}
