import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Image } from '../../models/image.model';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-edit',
  imports: [CommonModule, FormsModule, ImageCropperComponent],
  templateUrl: './image-edit.component.html',
  styleUrl: './image-edit.component.css',
})
export class ImageEditComponent implements OnInit {
  image!: Image;
  imageChangedEvent: any = '';
  croppedImage: string = '';

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    const foundImage = this.imageService.getImageById(id);
    if (foundImage) {
      this.image = foundImage;
      this.croppedImage = this.image.url; // Preload existing image
    } else {
      this.router.navigate(['/']);
    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64 || '';
  }

  onSave(): void {
    if (this.croppedImage) {
      this.image.url = this.croppedImage;
      this.imageService.updateImage(this.image.id, this.image);
      this.router.navigate(['/']);
    } else {
      alert('Please crop the image before saving.');
    }
  }
}
