import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Producto } from '../models/producto';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private getUrl:string="http://localhost:9999/api/v1/productos";

  constructor(private _httpCliente:HttpClient) { }

  getProducto():Observable<Producto[]>{
    return this._httpCliente.get<Producto[]>(this.getUrl).pipe(
      map(response=>response)
    )
  }
  saveProducto(producto:Producto):Observable<Producto>{
    return this._httpCliente.post<Producto>(this.getUrl,producto);
  }



}
