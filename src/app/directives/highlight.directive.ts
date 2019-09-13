import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

//  this will heighlight automatically
//  constructor(el: ElementRef) {
//    el.nativeElement.style.backgroundColor = 'yellow';
//  }

// Highlight on mouse enter
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
