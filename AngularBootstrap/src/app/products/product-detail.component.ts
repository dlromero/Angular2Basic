import { Component } from '@angular/core';
import { IProduct } from './product';


@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent {
    tittlePage: string = 'Detalle de producto';
    product: IProduct;
}