"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Models_1 = require('./../Shared/Models');
var Service_1 = require('./../Shared/Service');
var ListProducts_component_1 = require('./../Owners/ListProducts.component');
var router_1 = require('@angular/router');
var OwnerStart = (function () {
    function OwnerStart(productservice) {
        this.productservice = productservice;
        this.products = new Array();
        this.product = new Models_1.Product();
    }
    OwnerStart.prototype.ngOnInit = function () {
    };
    OwnerStart = __decorate([
        core_1.Component({
            selector: 'product-owner',
            providers: [Service_1.Service],
            directives: [ListProducts_component_1.ListProductsComponent, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'App/Owners/OwnerStart.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service])
    ], OwnerStart);
    return OwnerStart;
}());
exports.OwnerStart = OwnerStart;
//# sourceMappingURL=OwnerStart.component.js.map