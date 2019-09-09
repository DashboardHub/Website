import { AfterContentChecked, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dhHeadlineImage]',
})
export class HeadlineImageDirective implements AfterContentChecked {

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
    ) { }

    public ngAfterContentChecked(): void {
        this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
        this.renderer.setStyle(this.element.nativeElement, 'transform', 'scaleX(-1)');
    }

}
