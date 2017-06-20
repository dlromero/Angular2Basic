import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  tittlePage: string = 'Lista de Productos';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'Car';
  products: IProduct[] = [

    {
      "idProducto": 2,
      "productName": "Carretilla",
      "codigoProducto": "GDN-0023",
      "fechaPublicacion": "Marzo 18, 2016",
      "descripcion": "Carretilla rodante con capacidad para 15 galones",
      "precio": 32.99,
      "rating": 4.2,
      "imagenURL": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "idProducto": 5,
      "productName": "Martillo",
      "codigoProducto": "TBX-0048",
      "fechaPublicacion": "Mayo 21, 2016",
      "descripcion": "Martillo garra curvada de acero inoxidable",
      "precio": 8.9,
      "rating": 4.8,
      "imagenURL": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "idProducto": 1,
      "productName": "Rastrillo",
      "codigoProducto": "GDN-0011",
      "fechaPublicacion": "Marzo 19, 2016",
      "descripcion": "Rastrillo de 48 pulgadas con mango de madera",
      "precio": 19.95,
      "rating": 3.2,
      "imagenURL": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }

  ];


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor() { }

  ngOnInit() {
    console.log('En OnInit');
  }

}
