import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[scroll-directive]",
  })
  export class HorizontalScrollDirective {
    constructor(private element: ElementRef) {}
  
    @HostListener("wheel", ["$event"])
    public onScroll(event: WheelEvent) {
      this.element.nativeElement.scrollLeft += event.deltaY;
      console.log('SRCOLLLL')
    }
  }