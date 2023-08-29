import { Component } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  product = {
    name: 'iPhone 13',
    price: 999,
    color:'Red',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone14.jpg'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }
}
