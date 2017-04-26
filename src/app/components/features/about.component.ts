import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent {

    data: any = this.ds.AppData;

    constructor(private ds: DataService) {


    }

}