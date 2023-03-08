"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SendDataService = void 0;
var core_1 = require("@angular/core");
var environment_prod_1 = require("./../../environments/environment.prod");
var SendDataService = /** @class */ (function () {
    function SendDataService(httpClient) {
        this.httpClient = httpClient;
    }
    SendDataService.prototype.sendContactusForm = function (contactusInfo) {
        return this.httpClient.post(environment_prod_1.environment.baseUrl + "/emails/contact-us", contactusInfo);
    };
    SendDataService.prototype.sendSubscribeForm = function (subscribeInfo) {
        return this.httpClient.post(environment_prod_1.environment.baseUrl + "/updates-subscribers", subscribeInfo);
    };
    SendDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SendDataService);
    return SendDataService;
}());
exports.SendDataService = SendDataService;
