import { Component } from '@angular/core';

import { NgIf } from './app.components.ngIf';
import { NgClass } from './app.components.ngClass';
import { NgSwitch } from './app.components.ngSwitch';
import { NgStyle } from './app.components.ngStyle';
import { NgFor } from './app.components.ngFor';
import { NgNonBindable } from './app.components.ngNonBindable';

@Component({
  selector: 'my-app',
  template: `
  <h1>1. NgIf</h1>
  <ng-If></ng-If>
  
  <p>
  <h1>2. NgSwitch</h1>
  <ng-Switch></ng-Switch>
  
  <p>
  <h1>3. NgStyle</h1>
  <ng-Style></ng-Style>
  
  <p>
  <h1>4. NgClass</h1>
  <ng-Class></ng-Class>
  
  <p>
  <h1>5. NgFor</h1>
  <ng-For></ng-For>
  
  <p>
  <h1>6. NgNonBindable</h1>
  <ng-NonBindable></ng-NonBindable>
  -------------------------------------------------------------
  `
})

export class AppComponent {
   
}
