import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { ErrorComponent } from './error/error.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OpenSourceComponent } from './opensource/opensource.component';
import { TeamComponent } from './team/team.component';
import { WorksComponent } from './works/works.component';

import { DashboardHubModule } from '../components/dashboard-hub.module';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        ErrorComponent,
        EventsComponent,
        FeaturesComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        OpenSourceComponent,
        TeamComponent,
        WorksComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        DashboardHubModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
