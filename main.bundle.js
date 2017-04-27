webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout_navbar_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_layout_footer_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_features_home_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_features_about_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_features_contact_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_features_docs_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_data_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_framebox__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//MY COMPONENTS









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_features_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_features_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_features_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_features_docs_component__["a" /* DocsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_layout_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_layout_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_framebox__["a" /* FrameBoxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__components_features_home_component__["a" /* HomeComponent */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__components_features_about_component__["a" /* AboutComponent */] },
                { path: 'docs', component: __WEBPACK_IMPORTED_MODULE_11__components_features_docs_component__["a" /* DocsComponent */] },
                { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__components_features_contact_component__["a" /* ContactComponent */] },
            ]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(ds) {
        this.ds = ds;
        this.data = this.ds.AppData;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'about',
        template: __webpack_require__(170)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(ds) {
        this.ds = ds;
        this.data = this.ds.AppData;
    }
    ContactComponent.prototype.submitForm = function () {
    };
    ContactComponent.prototype.clearForm = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'contact',
        template: __webpack_require__(171)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocsComponent = (function () {
    function DocsComponent(ds) {
        this.ds = ds;
        this.data = this.ds.AppData;
    }
    return DocsComponent;
}());
DocsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'docs',
        template: __webpack_require__(172)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], DocsComponent);

var _a;
//# sourceMappingURL=docs.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(ds) {
        var _this = this;
        this.ds = ds;
        this.data = this.ds.AppData;
        this.MyArtWork = [];
        this.pieceName = "Dog Heaven 4";
        this.selectedPieceName = "";
        this.imageLocation = "";
        this.image = "http://wylandflorida.com/Images/JimWarren/65/thumbsXL/thumb_Dog Heaven 4.jpg";
        this.frameStyle = "Package_2552";
        this.ds.MyArtWork(10).then(function (data) {
            _this.MyArtWork = data;
            var l = _this.MyArtWork[0];
            _this.image = 'http://wylandflorida.com/images/' + l.artistFirstName + l.artistLastName + '/' + l.collectionID + '/thumbsXL/thumb_' + l.imgLocation;
        });
    }
    HomeComponent.prototype.Next = function () {
    };
    HomeComponent.prototype.Prev = function () {
    };
    HomeComponent.prototype.viewDetails = function (l) {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'home',
        template: __webpack_require__(173)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(ds) {
        this.ds = ds;
        this.data = this.ds.AppData;
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'PageFooter',
        template: __webpack_require__(174)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(ds) {
        this.ds = ds;
        this.data = this.ds.AppData;
        this.collapseIn = false;
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'Navbar',
        template: __webpack_require__(175)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.AppData = {
            project: {
                name: "FrameBox.js",
                description: "Angular Components for Generating Beautiful Framing around Images",
                about: "FrameBox.js was designed to be an open source framing engine for Fine Art websites to incorporate beautiful framing into their online galleries." +
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
                    image2: "../images/16387187_10102251278721763_7958877551063873192_n.jpg"
                },
                copyright: "Octavio Gomez Jr.",
                download: "https://github.com/tokyoite/FrameBox/zipball/master",
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
    }
    DataService.prototype.MyArtWork = function (count) {
        var _this = this;
        return this.http
            .post("http://wylandflorida.com/api/disney/latestDisney/" + count, {})
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(function (err) { return _this.handleError(err); });
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<Navbar></Navbar>\r\n\r\n<div class=\"hidden-xs \">\r\n    <br /><br />\r\n</div>\r\n\r\n<div class=\"row\">\r\n        <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n    <PageFooter></PageFooter>\r\n</div>  \r\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"container\">\r\n        <hr />\r\n        <h1 class='h1'>About FrameBox.js </h1>\r\n        <hr />\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"well\">\r\n                    <p>\r\n                        FrameBox.js was designed to be an open source framing engine for Fine Art websites to incorporate beautiful framing into their online galleries.\r\n                        We also provide a secondary framing service for e-commerce websites that are interested in selling high quality framing with their artwork. Please contact us by email at <a href=\"mailTo:tavig123@hotmail.com\">tavig123@hotmail.com </a> &nbsp;if you are interested or have any questions regarding our API.\r\n                        Directives built by <a href=\"{{data.project.author.git}}\">Octavio Gomez Jr.</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h4 class=\"h4 text-center\"><a class=\"ng-binding\" href=\"mailto:{{data.project.author.email}}\">Lead Developer</a></h4>\r\n                <section>\r\n                    <div class=\"col-sm-12\">\r\n                        <!--<div frame-it image=\"{{data.project.author.image1}}\" piecename=\"Octavio Gomez Jr.\" framestyle=\"Package_2517\"></div>-->\r\n                    </div>\r\n                </section>\r\n                <div class=\"clearfix\"></div>\r\n                <br />\r\n                <section>\r\n                    <a class=\"btn btn-default\" style=\"width: 100%;\" routerLink=\"/contact\">Send a Message</a>\r\n                </section>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <br /><br />\r\n                <section>\r\n                    <div class=\"panel panel-primary\">\r\n                        <div class=\"panel-heading\"><i class=\"fa fa-user\"></i> General Information</div>\r\n                        <table class=\"table table-striped\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <th>Full Name</th>\r\n                                    <td>{{data.project.author.first + ' ' + data.project.author.last}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Location</th>\r\n                                    <td>{{data.location.state + ', ' + data.location.country}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Job Title</th>\r\n                                    <td>{{data.project.author.jobtitle}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Programming Languages</th>\r\n                                    <td>C#, VB.Net Javascript, TypeScript</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Frameworks</th>\r\n                                    <td>\r\n                                        <b>Backend</b>NodeJs,.NET Core, MVC and Web API Frameworks. <br />\r\n                                        <b>Frontend</b>: Angular 1.0, Angular 4.0, IONIC FrameWork, jQuery, Twitter Bootstrap.\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Email</th>\r\n                                    <td><a href=\"mailto:{{data.project.author.email}}\">{{data.project.author.email}}</a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>About</th>\r\n                                    <td>I spend most of my time keeping myself up to date on the latest technologies and writing code. I also enjoy billiards and happy hour on Friday's.</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <br />\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a onclick=\"ga.push(['_trackEvent','View GitHub','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox.js\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">View on GitHub</a>\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a href=\"#/docs\" onclick=\"ga.push(['_trackEvent','View Docs','Documentation',this.href]);\" class=\"btn btn-primary btn-lg\" style=\"width:100%;\">View Docs</a>\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox.js/zipball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .zip</a>\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a onclick=\"ga.push(['_trackEvent', 'Download', '.tar.gz', this.href]);\" href=\"https://github.com/tokyoite/FrameBox.js/tarball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .tar.gz</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br /><br /><br /><br />\r\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\">\r\n    <h1 class='h1'>Contact</h1>\r\n    <hr>\r\n    <div class='row'>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"well bs-component\" style=\"overflow:hidden;\">\r\n                <!--<form class=\"form-horizontal\" #f=\"ngForm\" name=\"contactForm\" (ngSubmit)=\"submitForm()\" novalidate>-->\r\n                    <fieldset>\r\n                        <legend>Contact Octavio</legend>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">First Name</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"First Name:\" name=\"firstname\" [(ngModel)]=\"CF.firstName\" type=\"text\" required>\r\n                                <!--<p *ngIf=\"contactForm.firstname.$invalid && !contactForm.firstname.$pristine\" class=\"help-block\">You first name is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Last Name</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"Last Name:\" [(ngModel)]=\"CF.lastName\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Email</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"CF.email\" type=\"text\" required>\r\n                                <!--<p *ngIf=\"contactForm.email.$invalid && !contactForm.email.$pristine\" class=\"help-block\">You email is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Subject</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"Subject\" name=\"subject\" [(ngModel)]=\"CF.subject\" type=\"text\" required>\r\n                                <!--<p *ngIf=\"contactForm.subject.$invalid && !contactForm.subject.$pristine\" class=\"help-block\">Subject is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Message</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <textarea class=\"form-control\" placeholder=\"Message\" name=\"message\" [(ngModel)]=\"CF.message\" rows=\"7\" required></textarea>\r\n                                <!--<p *ngIf=\"contactForm.message.$invalid && !contactForm.message.$pristine\" class=\"help-block\">Subject is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-lg-10 col-lg-offset-2\">\r\n                                <button type=\"reset\" (click)=\"clearForm()\" class=\"btn btn-default\">Cancel</button>\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                <!--</form>-->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n            <h3 class=\"h3 text-center text-warning\">Lead Developer <a href=\"https://www.facebook.com/octavio.gomez.3745?fref=ts\">Octavio Gomez</a></h3>\r\n            <div class=\"col-sm-12\">\r\n                <!--<div frame-it image=\"{{data.project.author.image1}}\" piecename=\"Octavio Gomez Jr.\" framestyle=\"Package_2516\" id=\"1\"></div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                <a onclick=\"ga.push(['_trackEvent','View GitHub','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox.js\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">View on GitHub</a>\r\n\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                <a href=\"#/docs\" onclick=\"ga.push(['_trackEvent','View Docs','Documentation',this.href]);\" class=\"btn btn-primary btn-lg\" style=\"width:100%;\">View Docs</a>\r\n\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox.js/zipball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .zip</a>\r\n\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                <a onclick=\"ga.push(['_trackEvent', 'Download', '.tar.gz', this.href]);\" href=\"https://github.com/tokyoite/FrameBox.js/tarball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .tar.gz</a>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"container animated fadeIn\">\r\n    <hr />\r\n    <h2 class='h2'>Install <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"{{data.project.download}}\" class=\"btn btn-primary btn-lg pull-right\">Download Zip</a></h2>\r\n    <hr />\r\n    <div class=\"well row\">\r\n        <div class=\"col-sm-12\">\r\n            <span><b>Download FrameBox from npm.</b></span>\r\n            <pre><code>npm install framebox@4.3.0 </code></pre>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <span><b>Import FrameBoxModule from node_modules folder </b></span>\r\n            <pre><code>import { FrameBoxModule } from 'framebox';</code></pre>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <span><b>Add FrameBoxModule to @ngModule imports.</b></span>\r\n            <pre>\r\n<code>\r\n             @NgModule({\r\n                &nbsp;declarations: [\r\n                &nbsp;&nbsp;AppComponent,\r\n                &nbsp;&nbsp;HomeComponent,\r\n                &nbsp;&nbsp; AboutComponent,\r\n                &nbsp;&nbsp; ContactComponent,\r\n                &nbsp;&nbsp;  DocsComponent,\r\n                &nbsp;&nbsp; NavbarComponent,\r\n                &nbsp;&nbsp;  FooterComponent\r\n                &nbsp; ],\r\n                &nbsp;imports: [\r\n                &nbsp;&nbsp;BrowserModule,\r\n                &nbsp;&nbsp;FormsModule,\r\n                &nbsp;&nbsp;HttpModule,\r\n                &nbsp;&nbsp;<b>FrameBoxModule</b>,\r\n                &nbsp;&nbsp;RouterModule.forRoot([\r\n                &nbsp;&nbsp;&nbsp;{ path: '', redirectTo: '/home', pathMatch: 'full' },\r\n                &nbsp;&nbsp;&nbsp;{ path: 'home', component: HomeComponent },\r\n                &nbsp;&nbsp;&nbsp;{ path: 'about', component: AboutComponent },\r\n                &nbsp;&nbsp;&nbsp;{ path: 'docs', component: DocsComponent },\r\n                &nbsp;&nbsp;&nbsp;{ path: 'contact', component: ContactComponent },\r\n                &nbsp;&nbsp;]),\r\n                &nbsp;],\r\n                &nbsp;providers: [DataService],\r\n                &nbsp;bootstrap: [AppComponent]\r\n              })\r\n                </code>\r\n</pre>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <hr />\r\n    <h2>Usage</h2>\r\n    <hr />\r\n    <div class=\"well row\">\r\n        <div class=\"col-sm-12\">\r\n            <span><b class=\"lead\">Selector [Select-It]</b>: Provides a box with a select list of frames. Click event will update image framing.</span>\r\n            <pre><code>&lt;div select-it &gt;&lt;/div&gt;</code></pre>\r\n        </div>\r\n    </div>\r\n    <div class=\"well row\">\r\n        <div class=\"col-sm-12\">\r\n            <span><b class=\"lead\">Selector [Frame-It] </b>: Generates the frame around the image. Requires values for 3 directive attributes, image, piecename, and frameStyle.  </span><br />\r\n            <b>Attributes</b>:\r\n            <div class=\"col-sm-12\">\r\n                <b>-image (string)</b>: Image URL to be framed. <br />\r\n                <b>-pieceName (string)</b>: Name of Image. <br />\r\n                <b>-frameStyle (string)</b>: Identifier for type of frame style. Styles listed below.... <br />\r\n                <b>-EnableSelection (boolean)</b>: Enables or disables frame selection on hover.<br /><br />\r\n                <i style=\"color:yellow\">\r\n                    Package_2514,\r\n                    Package_2515,\r\n                    Package_2516,\r\n                    Package_2517,\r\n                    Package_2519,\r\n                    Package_2525,\r\n                    Package_2544,\r\n                    Package_2533,\r\n                    Package_2552,\r\n                    Package_2554,\r\n                    Package_2559,\r\n                    Package_2566,\r\n                    Package_2567,\r\n                    Package_2569,\r\n                    Package_2571\r\n                </i>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <br />\r\n            <pre>\r\n<code>\r\n                \r\n                </code>\r\n</pre>\r\n        </div>\r\n    </div>\r\n    <div class=\"bs-docs-section\">\r\n        <h2 id=\"template\" class=\"h2 page-header\">\r\n            <a style=\"font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; position: absolute; margin-left: -1em; padding-right: 0.5em;\" class=\"anchorjs-link \" href=\"#template\" aria-label=\"Anchor link for: template\" data-anchorjs-icon=\"\"></a>Basic template\r\n        </h2>\r\n        <p class=\"lead\">Start with the basic FrameBox template below.</p>\r\n\r\n        <pre style=\"overflow-x:scroll;overflow:hidden;\">\r\n        <code data-lang=\"html\" style=\"\">\r\n                \r\n      </code>\r\n</pre>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\">\r\n    <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <hr />\r\n                <div class=\"bs-component\">\r\n                    <div class=\"jumbotron\">\r\n                        <h1 class=\"text-center\">{{data.project.name}}</h1>\r\n                        <p class=\"text-center\">{{data.project.description}}</p>\r\n                        <p style=\"background-color:black;color:white;text-align:center;border-radius:10px;\">npm install framebox@4.3.0</p>\r\n                        <div class=\"text-center form-inline\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a onclick=\"ga.push(['_trackEvent','View GitHub','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">View on GitHub</a>\r\n\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a href=\"#/docs\" onclick=\"ga.push(['_trackEvent','View Docs','Documentation',this.href]);\" class=\"btn btn-primary btn-lg\" style=\"width:100%;\">View Docs</a>\r\n\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox/zipball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .zip</a>\r\n\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a onclick=\"ga.push(['_trackEvent', 'Download', '.tar.gz', this.href]);\" href=\"https://github.com/tokyoite/FrameBox/tarball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .tar.gz</a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"page-header\" id=\"banner\">\r\n        <div class=\"row\">\r\n       \r\n\r\n            <div style=\"border-top-left-radius:15px;border-bottom-right-radius:15px;border-bottom-left-radius:15px;\" class=\"well col-lg-8 col-md-9 col-sm-12 col-xs-12\">\r\n                <h3 class=\"text-warning\">\"{{pieceName}}\",&nbsp; by: <a onclick=\"window.open('http://wylandflorida.com/#/artPiece/9726')\">Jim Warren</a>  | Size: 24 x 36</h3>\r\n                <div class=\"col-sm-12\">\r\n                    <framebox [image]=\"image\" [pieceName]=\"pieceName\" [frameStyle]=\"frameStyle\" [EnableSelection]=\"false\"></framebox>\r\n                </div>\r\n\r\n            </div>\r\n            <div style=\"border-top-right-radius:15px;border-bottom-right-radius:15px;border-bottom-right-radius:15px;height:500px;overflow-y:scroll;\" class=\"well col-lg-4 col-md-3 col-sm-12 col-xs-12\">\r\n                <framebox-selection [(frameStyle)]=\"frameStyle\"></framebox-selection>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <!--<div class=\"form-group col-sm-4\">\r\n                    <p class=\"lead\">Name:</p>\r\n                    <input type=\"text\" placeholder=\"Name\" class=\"form-control\" (blur)=\"piecename = selectedPieceName\" [(ngModel)]=\"selectedPieceName\" />\r\n                </div>-->\r\n                <!--<div class=\"form-group col-sm-2\">\r\n                <p class=\"lead\">Dimensions:</p>\r\n                <input type=\"text\" placeholder=\"Dimensions. 15x30 etc.. \" class=\"form-control\" (blur)=\"dim = selectedDim\" [(ngModel)]=\"selectedDim\" />\r\n            </div>-->\r\n                <div class=\"form-group col-sm-8\">\r\n                    <p class=\"lead\">Give it a try! Paste an image URL in the textbox below.</p>\r\n                    <input type=\"text\" placeholder=\"Image URL here.....\" class=\"form-control\" [(ngModel)]=\"image\" />\r\n                </div>\r\n                <!--<div class=\"form-group col-sm-2\">\r\n                <p class=\"lead\">Go</p>\r\n                <input type=\"button\" class=\"btn btn-primary\" value=\"Generate Frame\" (click)=\"changeImage()\" />\r\n            </div>-->\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!--<div class=\"row\" *ngFor=\"let l of MyArtWork\">\r\n        <div style=\"border-top-left-radius:15px;border-bottom-left-radius:15px;border-bottom-right-radius:15px\" class=\"well col-lg-8 col-md-9 col-sm-12 col-xs-12\">\r\n            <h3 class=\"text-warning\">\"{{l.pieceName}}\",&nbsp; by: <a (click)=\"viewArtist(l)\">{{ l.artistFirstName + ' ' + l.artistLastName}}</a>  | Size: {{l.dim}}</h3>\r\n            <div (click)=\"viewDetails(l.prodID)\" class=\"col-sm-12\">\r\n                <div frame-it\r\n                     image=\"{{'http://wylandflorida.com/images/' + l.artistFirstName + l.artistLastName + '/' + l.collectionID + '/thumbsXL/thumb_' + l.imgLocation}}\"\r\n                     piecename=\"{{l.pieceName}}\"\r\n                     framestyle=\"{{frameStyle}}\"\r\n                     id=\"1\"></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"border-top-right-radius:15px;border-bottom-right-radius:15px;\" class=\"well col-lg-4 col-md-3 col-sm-12 col-xs-12\">\r\n            <div select-it=\"\"></div>\r\n        </div>\r\n    </div>-->\r\n\r\n\r\n    <hr />\r\n\r\n    <div class=\"row\">\r\n        <div class=\"well col-sm-12\">\r\n            <h3 class=\"text-center\">\r\n                Also check out,\r\n                <a style=\"color:skyblue\" href=\"http://www.WylandFlorida.com\">www.WylandFlorida.com</a> <img src=\"http://wylandflorida.com/Images/Logos/Logo1.png\" class=\"animated bounceIn animation-delay-5\" style=\"width: 75px; padding-right: 10px;\">\r\n            </h3>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<br /><br /><br />"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<hr />\r\n<footer>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <p>Angular Framing Module/Directive built by <a href=\"{{data.project.author.git}}\" rel=\"nofollow\">{{data.project.author.first + ' ' + data.project.author.last }}</a>. &nbsp;</p>\r\n            <p>\r\n                <a href=\"http://getbootstrap.com\" rel=\"nofollow\">Twitter Bootstrap</a> custom CSS written by <a href=\"https://github.com/thomaspark\">Thomas Park</a>.\r\n                &nbsp;Icons from <a href=\"http://fortawesome.github.io/Font-Awesome/\" rel=\"nofollow\">Font Awesome</a>.\r\n                &nbsp;Web fonts from <a href=\"http://www.google.com/webfonts\" rel=\"nofollow\">Google</a>.\r\n                &nbsp;Custom Module/Directives Built with <a rel=\"nofollow\" href=\"https://angularjs.org/\">Angular.js</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\r\n        <div class=\"navbar-header\">\r\n            <a href=\"#/home\" class=\"navbar-brand\">&nbsp;{{data.project.name}}</a>\r\n            <button class=\"navbar-toggle\" type=\"button\" (click)=\"collapseIn = !collapseIn\">\r\n                <span *ngFor=\"let i of [1,2,3]\" class=\"icon-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"blink navbar-collapse collapse {{collapseIn ? 'collapse in' : ''}}\" id=\"navbar-main\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li *ngFor=\"let l of data.project.links\" routerLink=\"{{l.route}}\" routerLinkActive #rla=\"routerLinkActive\" class=\"btn-sm {{rla.isActive ? 'active' : ''}}\">\r\n                    <a style=\"cursor:pointer;\" >&nbsp;&nbsp;{{l.name}}</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"https://github.com/tokyoite\" target=\"_blank\">By: Octavio Gomez Jr.</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(169),
        styles: [__webpack_require__(164)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.bundle.js.map