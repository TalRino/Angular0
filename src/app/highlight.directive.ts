import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('style.color') myTextColor:string
  @HostBinding('style.fontSize') myFontSize:string

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myTextColor = 'red'
    this.myFontSize = '32px'
    
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myTextColor = 'black'  
    this.myFontSize = '16px'
  }
}
