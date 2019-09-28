import { Directive, Input } from '@angular/core';

@Directive()
export class BaseTestDirective {
  @Input() baseInput: string;
}
