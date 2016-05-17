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
var NgSwitch = (function () {
    function NgSwitch() {
        this.choice = 1;
    }
    NgSwitch.prototype.nextChoice = function () {
        this.choice += 1;
        if (this.choice > 5) {
            this.choice = 1;
        }
    };
    NgSwitch = __decorate([
        core_1.Component({
            selector: 'ng-switch',
            template: " <h4 class=\"ui horizontal divider header\">\n      Current choice is {{ choice }}\n    </h4>\n\n    <div class=\"ui raised segment\">\n      <ul [ngSwitch]=\"choice\">\n        <li *ngSwitchWhen=\"1\">First choice</li>\n        <li *ngSwitchWhen=\"2\">Second choice</li>\n        <li *ngSwitchWhen=\"3\">Third choice</li>\n        <li *ngSwitchWhen=\"4\">Fourth choice</li>\n        <li *ngSwitchWhen=\"2\">Second choice, again</li>\n        <li *ngSwitchDefault>Default choice</li>\n      </ul>\n    </div>\n\n    <div style=\"margin-top: 20px;\">\n      <button class=\"ui primary button\" (click)=\"nextChoice()\">\n        Next choice\n      </button>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], NgSwitch);
    return NgSwitch;
}());
exports.NgSwitch = NgSwitch;
//# sourceMappingURL=app.components.ngSwitch.js.map