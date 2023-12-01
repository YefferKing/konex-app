import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-inventario',
  templateUrl: './edit-inventario.component.html',
  styleUrls: ['./edit-inventario.component.css']
})
export class EditInventarioComponent implements OnInit {

  inventario: Inventario | null = null;

  constructor(
    private inventarioService: InventarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarInventario();
  }

  cargarInventario(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.inventarioService.detail(id).subscribe(
      data => {
        this.inventario = data;
      },
      err => {
        console.error('Error al cargar inventario', err);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    if (this.inventario !== null) {
      const id = this.activatedRoute.snapshot.params.id;
      this.inventarioService.update(id, this.inventario).subscribe(
        data => {
          console.log('Medicamento Actualizado', data);
          this.router.navigate(['/productos']);
        },
        err => {
          console.error('Error al actualizar inventario', err);
          this.router.navigate(['/']);
        }
      );
    }
  }

}
