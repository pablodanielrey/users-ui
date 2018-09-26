import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[disableCopyPaste]'
})
export class DisableCopyPasteDirective {

  constructor(el:ElementRef, renderer: Renderer) { 
    var events = 'cut copy paste';
    events.split(' ').forEach(e => {
      renderer.listen(el.nativeElement, e, (event) => {
        event.preventDefault();
      });
    });
  }

}
