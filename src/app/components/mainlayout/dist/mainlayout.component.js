"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainlayoutComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MainlayoutComponent = /** @class */ (function () {
    function MainlayoutComponent(FormBuild, sendFormsApi, userMessageSnackBar) {
        this.FormBuild = FormBuild;
        this.sendFormsApi = sendFormsApi;
        this.userMessageSnackBar = userMessageSnackBar;
        this.showNavBar = false;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.contactUsForm = FormBuild.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9]{4,}(@)[a-zA-Z0-9]{3,}(?!\s)(.com)')]],
            name: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z /s]{4,}')]],
            phone_number: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[01][0-9]{9}')]],
            subject: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9 /s]{4,}')]],
            message: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9 /s]{10,}')]]
        });
        this.subscribeForm = FormBuild.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9]{4,}(@)[a-zA-Z0-9]{3,}(?!\s)(.com)')]]
        });
    }
    MainlayoutComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MainlayoutComponent.prototype, "SubscribeEmail", {
        get: function () {
            return this.subscribeForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainlayoutComponent.prototype, "Email", {
        get: function () {
            return this.contactUsForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainlayoutComponent.prototype, "Name", {
        get: function () {
            return this.contactUsForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainlayoutComponent.prototype, "MobileNumber", {
        get: function () {
            return this.contactUsForm.get('phone_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainlayoutComponent.prototype, "Subject", {
        get: function () {
            return this.contactUsForm.get('subject');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainlayoutComponent.prototype, "Message", {
        get: function () {
            return this.contactUsForm.get('message');
        },
        enumerable: false,
        configurable: true
    });
    MainlayoutComponent.prototype.SubmitContactUsForm = function () {
        var _this = this;
        var ContactusObserver = {
            next: function (ressponse) {
                console.log(ressponse);
                _this.openSnackBar('Thank you ... we will contact soon...');
            },
            error: function (err) {
                console.log(err);
                _this.openSnackBar('error');
            }
        };
        var contactusInfo = this.contactUsForm.value;
        this.sendFormsApi.sendContactusForm(contactusInfo).subscribe(ContactusObserver);
    };
    MainlayoutComponent.prototype.SubmitSubscribeForm = function () {
        var _this = this;
        var subscribeObserver = {
            next: function () {
                _this.openSnackBar('Thank you for subscribing...');
            },
            error: function (err) {
                console.log(err);
                _this.openSnackBar('error');
            }
        };
        var subscribeInfo = this.subscribeForm.value;
        this.sendFormsApi.sendSubscribeForm(subscribeInfo).subscribe(subscribeObserver);
    };
    MainlayoutComponent.prototype.toggle = function () {
        this.showNavBar = true;
        document.getElementsByClassName("navslide")[0].classList.toggle("navslide2");
    };
    MainlayoutComponent.prototype.openSnackBar = function (snackBarMessage) {
        this.userMessageSnackBar.open(snackBarMessage, "", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 5 * 1000,
            panelClass: ["mt-5", "fs-6", "fw-bold"]
        });
    };
    MainlayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-mainlayout',
            templateUrl: './mainlayout.component.html',
            styleUrls: ['./mainlayout.component.scss']
        })
    ], MainlayoutComponent);
    return MainlayoutComponent;
}());
exports.MainlayoutComponent = MainlayoutComponent;
