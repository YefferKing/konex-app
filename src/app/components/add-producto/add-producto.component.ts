import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {


  guardado:Producto=new Producto();

  constructor(private _productosServicio:ProductoService,
    private _router:Router) { }

  ngOnInit(): void {
  }


  saveProducto(){
    this._productosServicio.saveProducto(this.guardado).subscribe(
      data=>{
        console.log('response', data);
        this._router.navigateByUrl("/productos");
      }
    )

  }

}
