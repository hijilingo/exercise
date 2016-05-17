import { Component } from '@angular/core';

@Component({
    selector: 'ng-If',
    template: `
    <div *ngIf="false"></div> <!-- never displayed -->
    <div *ngIf="a > b"> displayed if a is more than b </div>
    <div *ngIf="resultFunc()">resultFunc return true</div>
    <p></p>
    
    <!-- isSpecial is true -->
    <div [class.hidden]="!isSpecial">Show with class</div>
    <div [class.hidden]="isSpecial">Hide with class</div>

    <div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>
    <div [style.display]="isSpecial ? 'none'  : 'block'">Hide with style</div>
    `
})

export class NgIf{
    isSpecial = true;
    a = 2;
    b = 1;
    
    resultFunc(){
        return true;
    }
}
