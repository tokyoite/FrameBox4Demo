import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {

    data: any = this.ds.AppData;

    CF: any = {};

    pieceName: string = "My babies and I";

    selectedPieceName: string = "";

    imageLocation: string = "";

    image: string = "https://lh3.googleusercontent.com/9zY5eVw98XgUY9thAI5QmbYHPCX4tnhTcxkQ9_nTfr0PN3Rk7i5oCa00PZkc2li6rZ-B_-VI_gdg_Cxudu_vOpj7w3CzWLkw=w1920-h1080-rw-no";

    frameStyle: string = "Package_2525";

    constructor(private ds: DataService) {


    }

    submitForm() {

    }

    clearForm() {

    }

}