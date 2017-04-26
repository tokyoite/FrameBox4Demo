import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//FRAMEBOX COMPONENTS
import { FrameBoxComponent } from './components/framebox.component';
import { FrameBoxSelectionComponent } from './components/framebox-selection.component';

@NgModule({
    declarations: [
        FrameBoxComponent,
        FrameBoxSelectionComponent
    ],
    imports: [BrowserModule],
    exports: [
        FrameBoxComponent,
        FrameBoxSelectionComponent
    ]
})

export class FrameBoxModule { }
