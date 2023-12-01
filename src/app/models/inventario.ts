export class Inventario {
    id?:number;
    nombre: string = '';
    laboratorioFabrica: string = '';
    fechaFabricacion: Date = new Date();
    fechaVencimiento: Date = new Date();
    stock: number = 0;
    valorUnitario: number = 0;
}


