import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {NgxGalleryModule} from 'ngx-gallery';


/* Modules */
import { AppHeaderModule } from './components/header/app.header.module';
import { AppFooterModule } from './components/footer/app.footer.module';
import { AppMenuModule } from './components/menu/app.menu.module';

/* Components */
import { AppComponents, AppRoutes } from './app.routing';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgxGalleryModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    AppComponent,
    ...AppComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
