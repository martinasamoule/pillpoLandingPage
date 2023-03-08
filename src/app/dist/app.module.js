"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var snack_bar_1 = require("@angular/material/snack-bar");
var core_2 = require("@videogular/ngx-videogular/core");
var controls_1 = require("@videogular/ngx-videogular/controls");
var overlay_play_1 = require("@videogular/ngx-videogular/overlay-play");
var buffering_1 = require("@videogular/ngx-videogular/buffering");
var mainlayout_component_1 = require("./components/mainlayout/mainlayout.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                mainlayout_component_1.MainlayoutComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                button_1.MatButtonModule,
                button_toggle_1.MatButtonToggleModule,
                core_2.VgCoreModule,
                controls_1.VgControlsModule,
                overlay_play_1.VgOverlayPlayModule,
                buffering_1.VgBufferingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                snack_bar_1.MatSnackBarModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
