import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  inventarioURL = 'http://localhost:8080/inventario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Inventario[]> {
    return this.httpClient.get<Inventario[]>(this.inventarioURL + 'lista');
  }

  public detail(id: number): Observable<Inventario> {
    return this.httpClient.get<Inventario>(this.inventarioURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Inventario> {
    return this.httpClient.get<Inventario>(this.inventarioURL + `detailname/${nombre}`);
  }

  public save(inventario: Inventario): Observable<any> {
    return this.httpClient.post<any>(this.inventarioURL + 'create', inventario);
  }

  public update(id: number, inventario: Inventario): Observable<any> {
    return this.httpClient.put<any>(this.inventarioURL + `update/${id}`, inventario);
  }

  public delete(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.inventarioURL + `delete/${id}`);
  }
}
