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
var NgNonBindable = (function () {
    function NgNonBindable() {
        this.content = 'Some text';
    }
    NgNonBindable = __decorate([
        core_1.Component({
            selector: 'ng-NonBindable',
            template: "\n  <div>\n    <span class=\"bordered\">{{ content }}</span>\n    <span class=\"pre\" ngNonBindable>\n      &larr; This is what {{ content }} rendered\n    </span>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NgNonBindable);
    return NgNonBindable;
}());
exports.NgNonBindable = NgNonBindable;
//# sourceMappingURL=app.components.ngNonBindable.js.map