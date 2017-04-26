import { Component, HostListener, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter, NgZone, AfterViewInit } from "@angular/core";
import { Http } from "@angular/http";


@Component({
    selector: 'framebox-selection',
    template: `<img *ngFor='let f of framepieces'
                [src]="framing_url + 'small/' + f.packageName + '.png'" 
                (click)="ChangePackage(f.packageName);"
                class="img-responsive 
                frameCorner"/>
`})
export class FrameBoxSelectionComponent {

    private el: HTMLElement;
    private framepieces: any = null;
    @Input() frameStyle: any = "Package_2525";
    @Output() frameStyleChange: EventEmitter<any> = new EventEmitter()
    framing_url: string = "http://wylandflorida.com/Images/Framing/";

    constructor(el: ElementRef, private http: Http) {
        this.el = el.nativeElement;

        //GET SOME FRAMES
        this.http
            .post("http://wylandflorida.com/api/" + "eStore/" + "getFrames/" + "1", {})
            .toPromise()
            .then(data => this.framepieces = data.json());
    }

    ChangePackage(f: string) {
        this.frameStyle = f;
        this.frameStyleChange.emit(f);
    }

}