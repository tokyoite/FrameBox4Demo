import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'docs',
    templateUrl: './docs.component.html'
})
export class DocsComponent {

    data: any = this.ds.AppData;

    constructor(private ds: DataService) {


    }

}