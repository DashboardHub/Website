import { AfterContentChecked, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dhNavImage]',
})
export class NavigationImageDirective implements AfterContentChecked {

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
    ) { }

    public ngAfterContentChecked(): void {
        this.renderer.setStyle(this.element.nativeElement, 'width', 'auto');
        this.renderer.setStyle(this.element.nativeElement, 'height', '50px');
    }

}
