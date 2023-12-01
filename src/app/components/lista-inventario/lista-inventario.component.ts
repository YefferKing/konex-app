import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css']
})
export class ListaInventarioComponent implements OnInit {

  inventarios:Inventario[]=[];
  filtroNombre: string = '';

  constructor(private _inventarioServicio:InventarioService) { }

  ngOnInit(): void {
    this.cargarInventarios();
  }

  cargarInventarios(): void {
    this._inventarioServicio.lista().subscribe(
      data => this.inventarios = data
    );
  }

  filtrar(): void {
    if (this.filtroNombre.trim() !== '') {
      this._inventarioServicio.detailName(this.filtroNombre).subscribe(
        data => {
          // Assuming detailName returns either an Inventario object or an array of Inventario
          this.inventarios = Array.isArray(data) ? data : [data];
        },
        error => {
          console.error('Error al filtrar inventarios por nombre', error);
        }
      );
    } else {
      // If filterName is empty, reload the full list
      this.cargarInventarios();
    }
  }


  borrar(inventarioId: number | undefined): void {
    this._inventarioServicio.delete(inventarioId).subscribe(
      () => {
        this.cargarInventarios();
      },
      error => {
        console.error('Error al borrar inventario', error);
      }
    );
  }


}
