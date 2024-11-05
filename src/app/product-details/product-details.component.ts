import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductDataService } from '../shared/services/products-data.service';
import { Product } from '../shared/product';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private router: Router,
    private productDataService: ProductDataService
  ) {}

  getColumnIndex(col: string): number {
    return this.product?.displayedColumns.indexOf(col) || 0;
  }
  
  ngOnInit(): void {
    const stateProduct = history.state.product;
    this.product = stateProduct ? stateProduct : this.productDataService.getProducts()[0];

    if (!this.product) {
      this.router.navigate(['/']);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
