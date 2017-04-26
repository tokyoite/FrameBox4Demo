import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'Navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    data: any = this.ds.AppData;

    collapseIn = false;

    constructor(private ds: DataService) {


    }

}