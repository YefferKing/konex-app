import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-add-inventario',
  templateUrl: './add-inventario.component.html',
  styleUrls: ['./add-inventario.component.css']
})
export class AddInventarioComponent implements OnInit {


  inventario:Inventario=new Inventario();

  constructor(private _inventarioServicio:InventarioService,
    private _router:Router) { }

  ngOnInit(): void {
  }


  onCreate(){
    this._inventarioServicio.save(this.inventario).subscribe(
      data=>{
        console.log('response', data);
        this._router.navigateByUrl("/productos");
      }
    )

  }

}
