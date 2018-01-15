"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_header_component_1 = require("./components/header/app.header.component");
var app_footer_component_1 = require("./components/footer/app.footer.component");
var app_menu_component_1 = require("./components/menu/app.menu.component");
var irin_home_component_1 = require("./components/irin-home/irin-home.component");
var irin_view_component_1 = require("./components/irin-view/irin-view.component");
var irin_illustration_component_1 = require("./components/irin-illustration/irin-illustration.component");
exports.AppRoutes = [
    { path: '', redirectTo: 'irin-home', pathMatch: 'full' },
    { path: 'irin-home', component: irin_home_component_1.IrinHomeComponent },
    { path: 'irin-view', component: irin_view_component_1.IrinViewComponent },
    { path: 'irin-illustration', component: irin_illustration_component_1.IrinIllustrationComponent },
];
exports.AppComponents = [
    app_header_component_1.AppHeaderComponent,
    app_footer_component_1.AppFooterComponent,
    app_menu_component_1.AppMenuComponent,
    irin_home_component_1.IrinHomeComponent,
    irin_view_component_1.IrinViewComponent,
    irin_illustration_component_1.IrinIllustrationComponent
];
//# sourceMappingURL=app.routing.js.map