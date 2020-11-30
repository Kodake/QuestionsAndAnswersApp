import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  myAppURL: string;
  myApiURL: string;

  constructor(private http: HttpClient) {
    this.myAppURL = environment.endPoint;
    this.myApiURL = '/api/Cuestionario/';
  }

  guardarCuestionario(cuestionario: Cuestionario): Observable<any> {
    return this.http.post(this.myAppURL + this.myApiURL, cuestionario);
  }

  getListCuestionarioByUser(): Observable<any> {
    return this.http.get(this.myAppURL + this.myApiURL + 'GetListCuestionarioByUser');
  }

  deleteCuestionario(idCuestionario: number):Observable<any> {
    return this.http.delete(this.myAppURL + this.myApiURL + idCuestionario);
  }

  getCuestionario(idCuestionario: number):Observable<any> {
    return this.http.get(this.myAppURL + this.myApiURL + idCuestionario);
  }

  getListCuestionarios(): Observable<any> {
    return this.http.get(this.myAppURL + this.myApiURL + "GetListCuestionarios");
  }
}