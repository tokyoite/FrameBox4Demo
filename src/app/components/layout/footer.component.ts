import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'PageFooter',
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    data: any = this.ds.AppData;

    constructor(private ds: DataService) {

       
    }

}