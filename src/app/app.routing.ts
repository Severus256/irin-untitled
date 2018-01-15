import {AppModule} from './app.module';
import {AppComponent} from './app.component';

import { AppHeaderComponent } from './components/header/app.header.component';
import { AppFooterComponent } from './components/footer/app.footer.component';
import { AppMenuComponent } from './components/menu/app.menu.component';

import { IrinHomeComponent } from './components/irin-home/irin-home.component';
import { IrinViewComponent } from './components/irin-view/irin-view.component';
import { IrinIllustrationComponent } from './components/irin-illustration/irin-illustration.component';


export const AppRoutes: any = [
    {path: '', redirectTo: 'irin-home', pathMatch: 'full'},
    {path: 'irin-home', component: IrinHomeComponent},
    {path: 'irin-view', component: IrinViewComponent},
    {path: 'irin-illustration', component: IrinIllustrationComponent},
    
];

export const AppComponents: any = [
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent, 
    IrinHomeComponent,
    IrinViewComponent,
    IrinIllustrationComponent
];