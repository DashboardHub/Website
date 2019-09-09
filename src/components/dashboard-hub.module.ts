import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { HeadlineComponent } from './headline/headline.component';
import { HeadlineImageDirective } from './headline/headline-image.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationImageDirective } from './navigation/navigation-image.directive';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    fab,
    faGithub,
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {
    far,
    faCalendar,
} from '@fortawesome/free-regular-svg-icons';

import {
    fas,
    faCogs,
    faCheck,
    faFileAlt,
    faList,
    faLockOpen,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [
        ContentComponent,
        HeadlineComponent,
        HeadlineImageDirective,
        NavigationComponent,
        NavigationImageDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
    ],
    exports: [
        CommonModule,
        FontAwesomeModule,
        ContentComponent,
        HeadlineComponent,
        NavigationComponent,
        NavigationImageDirective,
        HeadlineImageDirective,
    ],
})
export class DashboardHubModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fab, far, fas);
        library.addIcons(
            faGithub,
            faFacebook,
            faInstagram,
            faLinkedin,
            faTwitter,
            faYoutube,
            faCalendar,
            faCogs,
            faCheck,
            faFileAlt,
            faList,
            faLockOpen,
            faUsers,
        );
    }
}
