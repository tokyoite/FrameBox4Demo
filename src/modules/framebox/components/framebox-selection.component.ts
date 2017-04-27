import { Component, HostListener, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter, NgZone, AfterViewInit } from "@angular/core";
import { Http } from "@angular/http";


@Component({
    selector: 'framebox-selection',
    template: `<img *ngFor='let f of framepieces'
                [src]="framing_url + 'small/' + f.packageName + '.png'" 
                (click)="ChangePackage(f.packageName);"
                class="img-responsive 
                frameCorner"/>
`,
    styles: [`
.frameCorner {
    cursor: pointer;
    float: left;
    padding: 10px;
}
.frameSelection {
    padding: 20px;
    position: absolute;
    z-index: +2;
    overflow-y:scroll;
}

.frameCorner:hover {
    -moz-transform: rotate(-10.0deg);
    -ms-transform: rotate(-10.0deg);
    -o-transform: rotate(-10.0deg);
    -webkit-transform: rotate(-10.0deg);
    transform: rotate(-10.0deg);
}

.frameCorner:active {
    -moz-transform: rotate(-10.0deg);
    -ms-transform: rotate(-0.0deg);
    -o-transform: rotate(-0.0deg);
    -webkit-transform: rotate(-0.0deg);
    transform: rotate(-0.0deg);
}

.framePart {
    display: block;
}
    `]})
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