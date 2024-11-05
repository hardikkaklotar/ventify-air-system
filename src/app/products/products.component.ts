import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductDataService} from '../shared/services/products-data.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private router: Router, 
    private productDataService: ProductDataService) {
    this.products = this.productDataService.getProducts();
  }

  viewProductDetails(product: Product) {
    this.router.navigate(['/product-details'], { state: { product } });
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
