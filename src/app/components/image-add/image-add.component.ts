import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Image } from '../../models/image.model';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-add',
  standalone: true,
  imports: [ImageCropperComponent, FormsModule, CommonModule],
  templateUrl: './image-add.component.html',
  styleUrl: './image-add.component.css',
})
export class ImageAddComponent {
  image: Omit<Image, 'id' | 'dateAdded'> = {
    titre: '',
    description: '',
    displayStatus: true,
    url: '',
  };

  imageChangedEvent: any = '';
  croppedImage: string = '';

  constructor(private imageService: ImageService, private router: Router) {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.objectUrl || '';
    console.log('Cropped image:', this.croppedImage);
  }

  onSave(): void {
    if (this.croppedImage) {
      this.image.url = this.croppedImage;
      this.imageService.addImage(this.image);
      this.router.navigate(['/']);
    } else {
      alert('Please crop the image before saving.');
    }
  }
}
