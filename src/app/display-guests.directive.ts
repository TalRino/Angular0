import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ViewContainerData } from '@angular/core/src/view';

@Directive({
  selector: '[appDisplayGuests]'
})
export class DisplayGuestsDirective {

  @Input() set appDisplayGuests(condition:boolean) {
    if (true) {
      this.vwRef.createEmbeddedView(this.tplRef);
     } else {
      this.vwRef.clear();
    }
  }
  constructor(private tplRef: TemplateRef<any>, private vwRef:ViewContainerRef) { }

}
