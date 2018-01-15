"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_gallery_1 = require("ngx-gallery");
var IrinViewComponent = (function () {
    function IrinViewComponent() {
    }
    IrinViewComponent.prototype.loadImages = function () {
    };
    ;
    IrinViewComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [
            {
                image: false, height: ' 600px', width: '1200px',
                imageAnimation: ngx_gallery_1.NgxGalleryAnimation.Rotate,
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
    ;
    return IrinViewComponent;
}());
IrinViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'irin-view',
        templateUrl: 'irin-view.component.html'
    })
], IrinViewComponent);
exports.IrinViewComponent = IrinViewComponent;
//# sourceMappingURL=irin-view.component.js.map