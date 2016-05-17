import { Component } from '@angular/core';

@Component({
  selector: 'ng-NonBindable',
  template: `
  <div>
    <span class="bordered">{{ content }}</span>
    <span class="pre" ngNonBindable>
      &larr; This is what {{ content }} rendered
    </span>
  </div>
  `
})
export class NgNonBindable {
  content: string;

  constructor() {
    this.content = 'Some text';
  }
}