import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DataService {

    data: string;

    AppData: any = {
        project: {
            name: "FrameBox.js",
            description: "Angular Components for Generating Beautiful Framing around Images",
            about: "FrameBoxTs was designed to be an open source framing engine for Fine Art websites to incorporate beautiful framing into their online galleries." +
            "We also provide a secondary framing service for e-commerce websites that are interested in selling high quality framing with their artwork." +
            "Please contact us by email at <a href='laila.gomez@wylandflorida.com'>laila.gomez@wylandflorida.com</a> &nbsp;" +
            "if you are interested or have any questions regarding our API.",
            author: {
                first: "Octavio",
                last: "Gomez Jr.",
                born: "04/12/2986",
                email: "tavig123@hotmail.com",
                jobtitle: "Full Stack Developer",
                git: "https://github.com/tokyoite/",
                image1: "../images/16387187_10102251278721763_7958877551063873192_n_2.jpg",
                image2:"../images/16387187_10102251278721763_7958877551063873192_n.jpg"
            },
            copyright: "Octavio Gomez Jr.",
            download: "https://github.com/tokyoite/FrameBox.js/zipball/master",
            links: [
                { name: "Home", route: "/home" },
                { name: "About", route: "/about" },
                { name: "Docs", route: "/docs" },
                { name: "Contact", route: "/contact" },
            ]
        },
        location: {
            state: "FL",
            country: "United States"
        }
    };

    constructor(private http: Http) {

    }

    MyArtWork(count: number) {
        return this.http
            .post("http://wylandflorida.com/api/disney/latestDisney/" + count, {})
            .toPromise()
            .then((response) => {
                return response.json() as any;
            }).catch((err) => this.handleError(err))
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
     
}

