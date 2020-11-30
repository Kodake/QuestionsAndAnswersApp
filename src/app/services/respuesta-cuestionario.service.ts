import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { RespuestaCuestionario } from '../models/respuestaCuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {
  myAppURL: string;
  myApiURL: string;

  nombreParticipante: string;
  idCuestionario: number;
  respuestas: number[] = [];
  cuestionario: Cuestionario;

  constructor(private http: HttpClient) {
    this.myAppURL = environment.endPoint;
    this.myApiURL = '/api/RespuestaCuestionario/';
  }

  guardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionario): Observable<any> {
    return this.http.post(this.myAppURL + this.myApiURL, respuestaCuestionario);
  }

  getListCuestionarioRespuesta(idCuestionario: number): Observable<any> {
    return this.http.get(this.myAppURL + this.myApiURL + idCuestionario);
  }

  eliminarRespuestaCuestionario(idRespuestaCuestionario: number): Observable<any> {
    return this.http.delete(this.myAppURL + this.myApiURL + idRespuestaCuestionario);
  }

  getCuestionarioByIdRespuesta(idRespuesta: number): Observable<any> {
    return this.http.get(this.myAppURL + this.myApiURL + "GetCuestionarioByIdRespuesta/" + idRespuesta);
  }
}
