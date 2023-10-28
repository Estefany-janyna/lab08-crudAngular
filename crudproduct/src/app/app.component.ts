import { Component } from '@angular/core';

import { Products } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    Product: Products[] = [
    { codigo: 1, descripcion: 'coronita', precio: '0.50' },
    { codigo: 2, descripcion: 'incakola', precio: '2.50' },
    { codigo: 3, descripcion: 'cocacola', precio: '2.50' },
    {codigo: 4, descripcion: 'cañonazo', precio: '1.00'},
    {codigo: 5, descripcion: 'agua cielo', precio: '2.50'}
  ];
  
  selectedProduct: Products = new Products();

  openForEdit(prod: Products) {

    this.selectedProduct = prod;
  }

  addOrEdit() { 

    if (this.selectedProduct.codigo === 0) { 
      this.selectedProduct.codigo = this.Product.length + 1;
      this.Product.push(this.selectedProduct)
    }
   
    this.selectedProduct = new Products();

  }
  delete() { 
    if(confirm('Are you sure you want to delete it?')){
      this.Product = this.Product.filter(x => x != this.selectedProduct)
      this.selectedProduct = new Products();
    }
  }
}
