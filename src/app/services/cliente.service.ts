import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ClienteService {
 private apiUrl = "http://localhost:8090/api/clientes/consulta";
  constructor(private http:HttpClient) { }

  getCliente(tipoDocumento:string,numeroDocumento:string): Observable<any>{
    const params = new HttpParams()
    .set('tipoDocumento', tipoDocumento)
    .set('numeroDocumento', numeroDocumento);

  return this.http.get<any>(this.apiUrl, { params });
  }
}
