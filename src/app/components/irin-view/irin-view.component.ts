import {Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';



@Component({
    moduleId: module.id,
    selector: 'irin-view',
    templateUrl: 'irin-view.component.html'
})
export class IrinViewComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    private loadImages(): void {
    };
    
    ngOnInit(): void {

        this.galleryOptions = [
            {
                image: false, height: ' 600px', width: '1200px',
                imageAnimation: NgxGalleryAnimation.Rotate,
                thumbnailsColumns: 4,
                thumbnailsRows: 2
            }
            ];

        this.galleryImages = [
            {
                small: 'dist/assets/gallery/views/1.jpg',
                medium: 'dist/assets/gallery/views/1.jpg',
                big: 'dist/assets/gallery/views/1.jpg',
            },
            {
                small: 'dist/assets/gallery/views/2.jpg',
                medium: 'dist/assets/gallery/views/2.jpg',
                big: 'dist/assets/gallery/views/2.jpg',
            },
            {
                small: 'dist/assets/gallery/views/3.jpg',
                medium: 'dist/assets/gallery/views/3.jpg',
                big: 'dist/assets/gallery/views/3.jpg',
            },
            {
                small: 'dist/assets/gallery/views/4.png',
                medium: 'dist/assets/gallery/views/4.png',
                big: 'dist/assets/gallery/views/4.png',
            },
            {
                small: 'dist/assets/gallery/views/5.jpg',
                medium: 'dist/assets/gallery/views/5.jpg',
                big: 'dist/assets/gallery/views/5.jpg',
            },
            {
                small: 'dist/assets/gallery/views/6.jpg',
                medium: 'dist/assets/gallery/views/6.jpg',
                big: 'dist/assets/gallery/views/6.jpg',
            },
            {
                small: 'dist/assets/gallery/views/7.jpg',
                medium: 'dist/assets/gallery/views/7.jpg',
                big: 'dist/assets/gallery/views/7.jpg',
            }
        ];
    };

}
