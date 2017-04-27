import { Component, HostListener, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter, NgZone, AfterViewInit } from "@angular/core";
import { Http } from "@angular/http";

//var $ : any;
@Component({
    selector: 'framebox',
    templateUrl: './framebox.component.html'
})
export class FrameBoxComponent implements OnInit, OnChanges {
    @Input() frameStyle: string = null;
    @Input() image: string = null;
    @Input() pieceName: string = null;
    @Input() EnableSelection: boolean = null;
    framepieces: any = null;
    piece: any = null;
    frameWidth: number = 0;
    newimages: any = [];
    loadedimages: number = 0;
    frameOffset: number = 0;
    framing_url: string = "http://wylandflorida.com/Images/Framing/";
    showFramePart: boolean = false;
    outerDivStyle: any = null;
    overlayDivStyle: any = null;
    frameSelectionStyle: any = null;
    imageStyle: any = null;
    topStyle: any = null;
    bottomStyle: any = null;
    rightStyle: any = null;
    leftStyle: any = null;
    topRightStyle: any = null;
    topLeftStyle: any = null;
    bottomRightStyle: any = null;
    bottomLeftStyle: any = null;
    offsetHeight: number = 0;
    offsetWidth: number = 0;
    initialLoad: boolean = true;
    private el: HTMLElement;

    constructor(el: ElementRef, private ngZone: NgZone, private http: Http) {
        this.el = el.nativeElement;

        this.showFramePart = false;

        this.imageStyle = {
            width: "100%",
        };

        this.http.post("http://wylandflorida.com/api/" + "eStore/" + "getFrames/" + "1", {}).toPromise().then(data => this.framepieces = data.json());

    }

    ngOnInit() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
            window.onresize = (event) => {
                // Resize event
            };
        } else {
            window.onresize = (event) => {
                this.BuildFraming();
            };
        };

    }



    ngOnChanges() {

        //Reset image and outer div height to auto in order to fit parent containers full height
        if (!this.initialLoad) {
            this.outerDivStyle = {
                height: "auto"
            }
            this.imageStyle = {
                height: "auto",
            }
            this.overlayDivStyle = {
                height: "auto",
                width:"auto"
            }
        }

        //create new instance of image
        let img = new Image();
        img.src = this.image;

        //initialize main functionality once image is finished loading...
        img.onload = (() => {

            //Find and set Image
            for (let x in this.el.childNodes[0].childNodes) {
                if (this.el.childNodes[0].childNodes[x].localName == "img") {
                    this.piece = this.el.childNodes[0].childNodes[x];
                }
            }

            let prodDim = {
                height: 30,
                width: 30,
                outer: 7
            };

            let framePercent = {
                height: (this.piece["offsetHeight"]/ prodDim.height),
                width: (this.piece["offsetWidth"] / prodDim.width),
            };

            //Calculate frame width based on container and piece size
            if (prodDim.height < prodDim.width) {

                if (prodDim.height > 40) {
                    this.frameWidth = ((prodDim.height / this.piece["style"].height) * 100) * prodDim.outer;
                } else {
                    this.frameWidth = (framePercent.height * prodDim.outer);
                }
            } else {
                if (prodDim.width > 40) {
                    this.frameWidth = ((prodDim.width / this.piece["style"].width) * 100) * prodDim.outer;
                } else {
                    this.frameWidth = (framePercent.width * prodDim.outer);
                }
            }

            //Get Image Current Width
            if (this.initialLoad) {
                this.offsetWidth = this.piece["offsetWidth"] - this.frameWidth;                
            }

            this.piece["src"] = this.image;

            //Get Image Current Height
            this.offsetHeight = this.piece["offsetHeight"];

            //Lock outer div height and width
            this.outerDivStyle = {
                height: this.offsetHeight + "px",
                width: this.offsetWidth + "px",
            }

            //div overlay for frame selection
            this.overlayDivStyle = {
                height: this.offsetHeight + "px",               
                display: "none"
            }

            //Start building frame
            this.BuildFraming();

        });


    }

    BuildFraming() {

        this.offsetHeight = this.offsetHeight - this.frameWidth
        

        //Resize image to fit the dimensions of the framing
        this.imageStyle = {
            position: "relative",
            top: (this.frameWidth / 2) + "px",
            left: ((this.frameWidth / 2) - 15) + "px",
            height: (this.offsetHeight) + "px",
            width: (this.offsetWidth + 30).toString() + "px"
        }

        //div frame selection
        this.frameSelectionStyle = {
            padding: ((this.frameWidth / 2) + 10) + "px",
            height:  "100%",
            display: "none"
        }

        if (this.initialLoad) {
            this.overlayDivStyle.width = this.piece["offsetWidth"] + "px";
            this.frameSelectionStyle.width = this.piece["offsetWidth"] + "px";

        } else {
            this.overlayDivStyle.width = (this.piece["offsetWidth"] - (this.frameWidth / 2)) + "px";
            this.frameSelectionStyle.width = this.piece["offsetWidth"] + "px";

        }

        //Position and set framing sizes
        this.topStyle = {
            left: 0 + 'px',
            top: 0 + 'px',
            height: this.frameWidth + "px",
            width: '100%'
        };
        this.bottomStyle = {
            left: 0 + 'px',
            bottom: 0 + 'px',
            height: this.frameWidth + "px",
            width: '100%'
        };
        this.rightStyle = {
            right: 0 + 'px',
            top: 0,
            height: '100%',
            width: this.frameWidth + "px",
        };
        this.leftStyle = {
            left: 0 + "px",
            top: 0 + 'px',
            height: '100%',
            width: this.frameWidth + "px",
        };
        this.topRightStyle = {
            right: 0 + 'px',
            top: 0 + 'px',
            width: this.frameWidth + "px",
            height: this.frameWidth + "px",
        };
        this.topLeftStyle = {
            left: 0 + 'px',
            top: 0 + 'px',
            width: this.frameWidth + "px",
        };
        this.bottomRightStyle = {
            right: 0 + 'px',
            bottom: 0 + 'px',
            width: this.frameWidth + "px",
        };
        this.bottomLeftStyle = {
            left: 0 + 'px',
            bottom: 0 + 'px',
            width: this.frameWidth + "px",
        };

        //flag component has loaded for the first time
        this.initialLoad = false;

        //show frame pieces
        this.showFramePart = true;


    }

    SelectFraming() {
        this.overlayDivStyle.display = "block";
        this.frameSelectionStyle.display = "block";
    }

    ChangePackage(f: string) {
        this.frameStyle = f;
    }

    ViewFraming() {
        this.overlayDivStyle.display = "none";
        this.frameSelectionStyle.display = "none";

    }
}

