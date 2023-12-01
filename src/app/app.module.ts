import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from"@angular/common/http";
import{RouterModule, Routes} from"@angular/router";
import{FormsModule}from"@angular/forms";

import { AppComponent } from './app.component';
import { ListaInventarioComponent } from './components/lista-inventario/lista-inventario.component';
import { AddInventarioComponent } from './components/add-inventario/add-inventario.component';
import { EditInventarioComponent } from './components/edit-inventario/edit-inventario.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routers:Routes=[
  {path:'productos', component:ListaInventarioComponent},
  {path:'agregarproducto',component:AddInventarioComponent},
  {path:'editar/:id',component:EditInventarioComponent},
  {path:'',redirectTo: '/producto',pathMatch:'full'},


];

@NgModule({
  declarations: [
    AppComponent,
    ListaInventarioComponent,
    AddInventarioComponent,
    EditInventarioComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
