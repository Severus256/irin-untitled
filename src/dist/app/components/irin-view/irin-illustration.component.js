"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppContainerComponent = (function () {
    function AppContainerComponent() {
    }
    return AppContainerComponent;
}());
AppContainerComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace("dist", "/"),
        selector: 'app-container',
        templateUrl: 'app.container.html'
    })
], AppContainerComponent);
exports.AppContainerComponent = AppContainerComponent;
//# sourceMappingURL=irin-illustration.component.js.map