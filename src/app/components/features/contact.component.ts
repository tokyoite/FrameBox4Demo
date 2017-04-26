import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {

    data: any = this.ds.AppData;

    constructor(private ds: DataService) {


    }

    submitForm() {

    }

    clearForm() {

    }

}