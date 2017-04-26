import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    data: any = this.ds.AppData;

    MyArtWork: any = [];

    pieceName: string = "Dog Heaven 4";

    selectedPieceName: string = "";

    imageLocation: string = "";

    image: string = "http://wylandflorida.com/Images/JimWarren/65/thumbsXL/thumb_Dog Heaven 4.jpg";

    frameStyle: string = "Package_2552";

    constructor(private ds: DataService) {

        this.ds.MyArtWork(10).then((data) => {
            this.MyArtWork = data;
            let l = this.MyArtWork[0];
            this.image = 'http://wylandflorida.com/images/' + l.artistFirstName + l.artistLastName + '/' + l.collectionID + '/thumbsXL/thumb_' + l.imgLocation
        });

    }

    Next() {

    }

    Prev() {

    }

    viewDetails(l) {

    }

}