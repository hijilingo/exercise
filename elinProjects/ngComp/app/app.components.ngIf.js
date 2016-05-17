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
var NgIf = (function () {
    function NgIf() {
        this.isSpecial = true;
        this.a = 2;
        this.b = 1;
    }
    NgIf.prototype.resultFunc = function () {
        return true;
    };
    NgIf = __decorate([
        core_1.Component({
            selector: 'ng-If',
            template: "\n    <div *ngIf=\"false\"></div> <!-- never displayed -->\n    <div *ngIf=\"a > b\"> displayed if a is more than b </div>\n    <div *ngIf=\"resultFunc()\">resultFunc return true</div>\n    <p></p>\n    \n    <!-- isSpecial is true -->\n    <div [class.hidden]=\"!isSpecial\">Show with class</div>\n    <div [class.hidden]=\"isSpecial\">Hide with class</div>\n\n    <div [style.display]=\"isSpecial ? 'block' : 'none'\">Show with style</div>\n    <div [style.display]=\"isSpecial ? 'none'  : 'block'\">Hide with style</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NgIf);
    return NgIf;
}());
exports.NgIf = NgIf;
//# sourceMappingURL=app.components.ngIf.js.map