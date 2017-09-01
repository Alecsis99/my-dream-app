import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  @Input() defaultColor: string = 'transparent';
  // tslint:disable-next-line:no-inferrable-types
  @Input() highlightColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

  @HostListener ('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    // this.backgroundColor = '#ffc000';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener ('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
