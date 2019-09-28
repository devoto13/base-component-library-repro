import { Component } from '@angular/core';
import { BaseTestDirective } from './base-test.directive';

@Component({
  selector: 'lib-test',
  template: `
    <p>
      {{ baseInput }} works!
    </p>
  `,
  styles: [],
})
export class TestComponent extends BaseTestDirective {
}
