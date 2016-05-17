import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';


import { NgIf } from './app.components.ngIf';
import { NgClass } from './app.components.ngClass';
import { NgSwitch } from './app.components.ngSwitch';
import { NgStyle } from './app.components.ngStyle';
import { NgFor } from './app.components.ngFor';
import { NgNonBindable } from './app.components.ngNonBindable';

bootstrap(AppComponent);
bootstrap(NgIf);
bootstrap(NgClass);
bootstrap(NgSwitch);
bootstrap(NgStyle);
bootstrap(NgFor);
bootstrap(NgNonBindable);