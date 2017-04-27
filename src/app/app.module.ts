import {  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router,RouterOutletMap } from '@angular/router';
//MY COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar.component';
import { FooterComponent } from './components/layout/footer.component';
import { HomeComponent } from './components/features/home.component';
import { AboutComponent } from './components/features/about.component';
import { ContactComponent } from './components/features/contact.component';
import { DocsComponent } from './components/features/docs.component';
import { DataService } from './services/data.service';
import { FrameBoxModule } from 'framebox';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        DocsComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FrameBoxModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'docs', component: DocsComponent },
            { path: 'contact', component: ContactComponent },
        ]),
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})

export class AppModule { }
