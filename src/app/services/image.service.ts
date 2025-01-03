import { Image } from '../models/image.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: Image[] = [];
  private nextId = 1;

  constructor() {}

  // Add an image
  addImage(image: Omit<Image, 'id' | 'dateAdded'>): Image {
    const newImage: Image = {
      id: this.nextId++,
      ...image,
      dateAdded: new Date(),
    };
    this.images.push(newImage);
    return newImage;
  }

  // Get all images
  getImages(): Image[] {
    return this.images;
  }

  // Get an image by ID
  getImageById(id: number): Image | undefined {
    return this.images.find((image) => image.id === id);
  }

  updateImage(id: number, updatedImage: Partial<Image>): Image | undefined {
    const image = this.getImageById(id);
    if (image) {
      Object.assign(image, updatedImage);
    }
    return image;
  }

  // Delete an image
  deleteImage(id: number): void {
    this.images = this.images.filter((image) => image.id !== id);
  }
}
