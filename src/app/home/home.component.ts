import { AsyncPipe, CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { CommonService } from '../shared/services/common.service';
import * as AOS from 'aos';
import { ProductDataService } from '../shared/services/products-data.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  ndtAdvImageSmall = 'assets/images/banner-one.jpg';
  ndtAdvImageMedium = 'assets/images/banner-one.jpg';
  ndtAdvImageLarge = 'assets/images/banner-one.jpg';
  products: Product[] = [];

  constructor(@Inject(PLATFORM_ID)
  private platformId: Object,
    private router: Router,
    private commonService: CommonService,
    private productDataService: ProductDataService
  ) {
    this.products = this.productDataService.getProducts();
  }

  aerospaceServicesCard = [
    {
      image: '../../assets/images/icon/safety.webp',
      title: 'Best Warranty Terms In Industry',
      description: 'We ensure that your products arrive exactly when you need them, keeping your projects on schedule.',
    },
    {
      image: '../../assets/images/icon/mechanical-testing.webp',
      title: 'Technically Superior Products',
      description: 'Our products are designed for durability and ease of maintenance, reducing downtime and operational costs.',
    },
    {
      image: '../../assets/images/icon/testing.webp',
      title: 'Low Maintenance',
      description: 'We offer unmatched warranty terms, providing peace of mind and long-term value.',
    }
  ]


  scrollToServices(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const swiper = new Swiper('.services_swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 1000,
        effect: 'fade'
      });
    }
  }

  viewProductDetails(product: Product) {
    this.router.navigate(['/product-details'], { state: { product } });
  }

  ngOnInit(): void {
    AOS.init();
    this.commonService.windowScroll();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
