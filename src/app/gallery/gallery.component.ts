import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Images } from '../shared/product';
import { ProductDataService } from '../shared/services/products-data.service';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, GalleriaModule, DialogModule,CarouselModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  imageGallery: Images[] = [];
  displayModal: boolean = false;
  selectedImage: string | null = null;
  selectedTitle: string | null = null;
  galleryImages: string[] = [];
  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.imageGallery = this.productDataService.getImageGallery();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  openModal(image: string, title: string, images: string[]): void {
    this.selectedImage = image;
    this.selectedTitle = title;
    this.galleryImages = images;
    this.displayModal = true;
  }
  closeModal(): void {
    this.displayModal = false;
    this.selectedImage = null;
    this.selectedTitle = null;
    this.galleryImages = [];
  }
}
