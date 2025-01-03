import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Image } from '../../models/image.model';
import { ImageService } from '../../services/image.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css',
})
export class ImageListComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  deleteImage(id: number): void {
    this.imageService.deleteImage(id);
    this.images = this.imageService.getImages();
  }
}
