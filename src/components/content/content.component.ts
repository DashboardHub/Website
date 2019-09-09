import { Component, Input } from '@angular/core';

@Component({
    selector: 'dh-content',
    templateUrl: './content.component.html',
    styleUrls: [ './content.component.scss' ],
})
export class ContentComponent {

    @Input()
    public id: string;

    @Input()
    public dark: boolean;

}
