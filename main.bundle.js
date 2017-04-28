webpackJsonp([1,5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(245),
        styles: [__webpack_require__(177)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout_navbar_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_layout_footer_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_features_home_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_features_about_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_features_contact_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_features_docs_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_framebox__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_primeng__);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
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
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_framebox__["a" /* FrameBoxModule */],
            __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["CodeHighlighterModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot([
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
        this.pieceName = "My babies and I";
        this.selectedPieceName = "";
        this.imageLocation = "";
        this.image = "https://lh3.googleusercontent.com/9zY5eVw98XgUY9thAI5QmbYHPCX4tnhTcxkQ9_nTfr0PN3Rk7i5oCa00PZkc2li6rZ-B_-VI_gdg_Cxudu_vOpj7w3CzWLkw=w1920-h1080-rw-no";
        this.frameStyle = "Package_2552";
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'about',
        template: __webpack_require__(246)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
        this.CF = {};
        this.pieceName = "My babies and I";
        this.selectedPieceName = "";
        this.imageLocation = "";
        this.image = "https://lh3.googleusercontent.com/9zY5eVw98XgUY9thAI5QmbYHPCX4tnhTcxkQ9_nTfr0PN3Rk7i5oCa00PZkc2li6rZ-B_-VI_gdg_Cxudu_vOpj7w3CzWLkw=w1920-h1080-rw-no";
        this.frameStyle = "Package_2525";
    }
    ContactComponent.prototype.submitForm = function () {
    };
    ContactComponent.prototype.clearForm = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact',
        template: __webpack_require__(247)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'docs',
        template: __webpack_require__(248)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], DocsComponent);

var _a;
//# sourceMappingURL=docs.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(249)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'PageFooter',
        template: __webpack_require__(250)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'Navbar',
        template: __webpack_require__(251)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 119:
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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(85);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<Navbar></Navbar>\r\n\r\n<div class=\"hidden-xs \">\r\n    <br /><br />\r\n</div>\r\n\r\n<div class=\"row\">\r\n        <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n    <PageFooter></PageFooter>\r\n</div>  \r\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"container\">\r\n        <hr />\r\n        <h1 class='h1'>About FrameBox.js </h1>\r\n        <hr />\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"well\">\r\n                    <p>\r\n                        FrameBox.js was designed to be an open source framing engine for Fine Art websites to incorporate beautiful framing into their online galleries.\r\n                        We also provide a secondary framing service for e-commerce websites that are interested in selling high quality framing with their artwork. Please contact us by email at <a href=\"mailTo:tavig123@hotmail.com\">tavig123@hotmail.com </a> &nbsp;if you are interested or have any questions regarding our API.                       \r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h4 class=\"h4 text-center\"><a class=\"ng-binding\" href=\"mailto:{{data.project.author.email}}\">Lead Developer</a></h4>\r\n                <section>\r\n                    <div class=\"col-sm-12\">                       \r\n                        <framebox [image]=\"image\" [pieceName]=\"pieceName\" [frameStyle]=\"frameStyle\" [EnableSelection]=\"false\"></framebox>\r\n                    </div>\r\n                </section>\r\n                <div class=\"clearfix\"></div>\r\n                <br />\r\n                <section>\r\n                    <a class=\"btn btn-default\" style=\"width: 100%;\" routerLink=\"/contact\">Send a Message</a>\r\n                </section>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <br /><br />\r\n                <section>\r\n                    <div class=\"panel panel-primary\">\r\n                        <div class=\"panel-heading\"><i class=\"fa fa-user\"></i> General Information</div>\r\n                        <table class=\"table table-striped\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <th>Full Name</th>\r\n                                    <td>{{data.project.author.first + ' ' + data.project.author.last}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Location</th>\r\n                                    <td>{{data.location.state + ', ' + data.location.country}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Job Title</th>\r\n                                    <td>{{data.project.author.jobtitle}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Programming Languages</th>\r\n                                    <td>C#, VB.Net Javascript, TypeScript</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Frameworks</th>\r\n                                    <td>\r\n                                        <b>Backend</b>: NodeJs,.NET Core, MVC and Web API Frameworks. <br />\r\n                                        <b>Frontend</b>: Angular 1.0, Angular 2.0, Angular 4.0, IONIC FrameWork, jQuery, HTML5/CSS, Twitter Bootstrap.\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Email</th>\r\n                                    <td><a href=\"mailto:{{data.project.author.email}}\">{{data.project.author.email}}</a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>About</th>\r\n                                    <td>I spend most of my time keeping myself up to date on the latest technologies and writing code. I also enjoy billiards and happy hour on Friday's.</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <br />\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                        <a onclick=\"ga.push(['_trackEvent','View GitHub','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">View on GitHub</a>\r\n\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                        <a routerLink=\"/docs\" onclick=\"ga.push(['_trackEvent','View Docs','Documentation',this.href]);\" class=\"btn btn-primary btn-lg\" style=\"width:100%;\">View Docs</a>\r\n\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                        <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox/zipball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .zip</a>\r\n\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                        <a onclick=\"ga.push(['_trackEvent', 'Download', '.tar.gz', this.href]);\" href=\"https://github.com/tokyoite/FrameBox/tarball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .tar.gz</a>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br /><br /><br /><br />\r\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\">\r\n    <h1 class='h1'>Contact</h1>\r\n    <hr>\r\n    <div class='row'>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"well bs-component\" style=\"overflow:hidden;\">\r\n                <!--<form class=\"form-horizontal\" #f=\"ngForm\" name=\"contactForm\" (ngSubmit)=\"submitForm()\" novalidate>-->\r\n                    <fieldset style=\"display:none;\">\r\n                        <legend>Contact Octavio</legend>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">First Name</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"First Name:\" name=\"firstname\" [(ngModel)]=\"CF.firstName\" type=\"text\" required>\r\n                                <!--<p *ngIf=\"contactForm.firstname.$invalid && !contactForm.firstname.$pristine\" class=\"help-block\">You first name is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Last Name</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"Last Name:\" [(ngModel)]=\"CF.lastName\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Email</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"CF.email\" type=\"text\" required>\r\n                                <!--<p *ngIf=\"contactForm.email.$invalid && !contactForm.email.$pristine\" class=\"help-block\">You email is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Subject</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <input class=\"form-control\" placeholder=\"Subject\" name=\"subject\" [(ngModel)]=\"CF.subject\" type=\"text\" required>\r\n                                <!--<p *ngIf=\"contactForm.subject.$invalid && !contactForm.subject.$pristine\" class=\"help-block\">Subject is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-lg-2 control-label\">Message</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <textarea class=\"form-control\" placeholder=\"Message\" name=\"message\" [(ngModel)]=\"CF.message\" rows=\"7\" required></textarea>\r\n                                <!--<p *ngIf=\"contactForm.message.$invalid && !contactForm.message.$pristine\" class=\"help-block\">Subject is required. <span class=\"text-danger\">*</span></p>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-lg-10 col-lg-offset-2\">\r\n                                <button type=\"reset\" (click)=\"clearForm()\" class=\"btn btn-default\">Cancel</button>\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                <p class=\"lead\">Please feel free to contact me on my personal social media accounts.<br/></p>\r\n                <p class=\"lead\">\r\n                    Facebook: <a href=\"https://www.facebook.com/gomez.tavi\">https://www.facebook.com/gomez.tavi</a><br /><br />\r\n                    Twitter: <a href=\"https://twitter.com/TaviGomez\">https://twitter.com/TaviGomez</a><br /><br />\r\n                    LinkedIn: <a href=\"https://www.linkedin.com/in/octavio-gomez-7622209b/\">https://www.linkedin.com/in/octavio-gomez-7622209b/</a><br /> <br />\r\n                </p>\r\n                <!--</form>-->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n            <h3 class=\"h3 text-center text-warning\">Lead Developer <a href=\"https://www.facebook.com/octavio.gomez.3745?fref=ts\">Octavio Gomez</a></h3>\r\n            <div class=\"col-sm-12\">\r\n                <framebox [image]=\"image\" [pieceName]=\"pieceName\" [frameStyle]=\"frameStyle\" [EnableSelection]=\"false\"></framebox>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a onclick=\"ga.push(['_trackEvent','View GitHub','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">View on GitHub</a>\r\n\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a routerLink=\"/docs\" onclick=\"ga.push(['_trackEvent','View Docs','Documentation',this.href]);\" class=\"btn btn-primary btn-lg\" style=\"width:100%;\">View Docs</a>\r\n\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox/zipball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .zip</a>\r\n\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                    <a onclick=\"ga.push(['_trackEvent', 'Download', '.tar.gz', this.href]);\" href=\"https://github.com/tokyoite/FrameBox/tarball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .tar.gz</a>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"container animated fadeIn\">\r\n    <hr />\r\n    <h2 class='h2'>Install <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"{{data.project.download}}\" class=\"btn btn-primary btn-lg pull-right\">Download Zip</a></h2>\r\n    <hr />\r\n    <div class=\"well row\">\r\n        <div class=\"col-sm-12\">\r\n            <span><b>Download FrameBox from npm.</b></span>\r\n            <pre><code class=\"TypeScript\" pCode>npm install framebox@4.3.0 </code></pre>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <span><b>Import FrameBoxModule from node_modules folder </b></span>\r\n            <pre><code class=\"TypeScript\" pCode>import &#123; FrameBoxModule &#125; from 'framebox';</code></pre>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <span><b>Add FrameBoxModule to @ngModule imports. </b></span>\r\n            <pre>\r\n<code class=\"TypeScript\" pCode>\r\n@NgModule(&#123;\r\n    &nbsp;declarations: [\r\n        &nbsp;&nbsp;AppComponent,\r\n        &nbsp;&nbsp;NavbarComponent,\r\n        &nbsp;&nbsp;FooterComponent\r\n    &nbsp;],\r\n    &nbsp;imports: [\r\n        &nbsp;&nbsp;BrowserModule,\r\n        &nbsp;&nbsp;FormsModule,\r\n        &nbsp;&nbsp;HttpModule,\r\n        &nbsp;&nbsp;<b>FrameBoxModule</b>\r\n    &nbsp;],\r\n    &nbsp;providers: [DataService],\r\n    &nbsp;bootstrap: [AppComponent]\r\n&#125;)   \r\n                </code>\r\n</pre>\r\n        </div>\r\n\r\n    </div>\r\n    <hr />\r\n    <h2>Usage</h2>\r\n    <hr />\r\n    <div class=\"well row\">\r\n        <div class=\"col-sm-12\">\r\n            <p class=\"lead\">Typical Angular 2 component using typescript.</p>\r\n\r\n            <p></p>\r\n            <pre><code class=\"html\" pCode>\r\nimport &#123; Component &#125; from &#x27;@angular/core&#x27;;\r\n@Component(&#123;\r\n    selector: &#x27;home&#x27;,\r\n    templateUrl: &#x27;./home.component.html&#x27;\r\n&#125;)\r\nexport class HomeComponent &#123;\r\n    pieceName: string = &#x22;Dog Heaven 4&#x22;;\r\n    selectedPieceName: string = &#x22;&#x22;;\r\n    imageLocation: string = &#x22;&#x22;;\r\n    image: string = &#x22;http://wylandflorida.com/Images/JimWarren/65/thumbsXL/thumb_Dog Heaven 4.jpg&#x22;;\r\n    frameStyle: string = &#x22;Package_2552&#x22;;\r\n\r\n    constructor() &#123; &#125;\r\n\r\n&#125;         \r\n                </code></pre>\r\n\r\n            <p class=\"lead\">Typical Template using Twitter Bootstrap</p>\r\n            <pre><code class=\"html\" pCode>\r\n&#x3C;div class=&#x22;row&#x22;&#x3E;\r\n    &#x3C;div class=&#x22;well col-lg-8 col-md-9 col-sm-12 col-xs-12&#x22;&#x3E;\r\n        &#x3C;framebox [image]=&#x22;image&#x22; [pieceName]=&#x22;pieceName&#x22; [frameStyle]=&#x22;frameStyle&#x22; [EnableSelection]=&#x22;false&#x22;&#x3E;&#x3C;/framebox&#x3E;\r\n        &#x3C;/div&#x3E;\r\n    &#x3C;div class=&#x22;well col-lg-4 col-md-3 col-sm-12 col-xs-12&#x22;&#x3E;\r\n        &#x3C;framebox-selection [(frameStyle)]=&#x22;frameStyle&#x22;&#x3E;&#x3C;/framebox-selection&#x3E;\r\n    &#x3C;/div&#x3E;\r\n&#x3C;/div&#x3E;                \r\n                </code></pre>\r\n        </div>\r\n    </div>\r\n    <h2>Selectors</h2>\r\n    <hr />\r\n    <div class=\"well row\">\r\n        <div class=\"col-sm-12\">\r\n            <b class=\"lead\">[framebox]:</b>\r\n            <pre><code class=\"TypeScript\" pCode><b class=\"lead\">&#x3C;framebox&#x3E;&#x3C;/ framebox&#x3E;</b></code></pre>\r\n\r\n            <span><b class=\"lead\">Attributes:</b></span>\r\n            <table class=\"table table-responsive table-bordered table-hover\">\r\n                <thead style=\"background-color:white;color:black;\">\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>[image]</td>\r\n                        <td>(string)</td>\r\n                        <td>Your image URL.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>[pieceName]</td>\r\n                        <td>(string)</td>\r\n                        <td>Name of Image.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>[EnableSelection]</td>\r\n                        <td>(boolean)</td>\r\n                        <td>Enables or disables frame selection on hover.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>[frameStyle]</td>\r\n                        <td>(string)</td>\r\n                        <td>\r\n                            List of available packages:<br />\r\n                            <i style=\"color:yellow\">\r\n                                Package_2514,\r\n                                Package_2515,\r\n                                Package_2516,\r\n                                Package_2517,\r\n                                Package_2519,\r\n                                Package_2525,\r\n                                Package_2544,\r\n                                Package_2533,\r\n                                Package_2552,\r\n                                Package_2554,\r\n                                Package_2559,\r\n                                Package_2566,\r\n                                Package_2567,\r\n                                Package_2569,\r\n                                Package_2571\r\n                            </i>\r\n                        </td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n\r\n            <hr />\r\n\r\n            <b class=\"lead\">[framebox-selection]:</b>\r\n            <pre><code class=\"html\" pCode>&lt;framebox-selection [(frameStyle)]=\"frameStyle\"&gt;&lt;/framebox-selection&gt;</code></pre>\r\n            <table class=\"table table-responsive table-bordered table-hover\">\r\n                <thead style=\"background-color:white;color:black;\">\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>[frameStyle]</td>\r\n                        <td>(string)</td>\r\n                        <td>\r\n                            List of available packages:<br />\r\n\r\n                            <i style=\"color:yellow\">\r\n                                Package_2514,\r\n                                Package_2515,\r\n                                Package_2516,\r\n                                Package_2517,\r\n                                Package_2519,\r\n                                Package_2525,\r\n                                Package_2544,\r\n                                Package_2533,\r\n                                Package_2552,\r\n                                Package_2554,\r\n                                Package_2559,\r\n                                Package_2566,\r\n                                Package_2567,\r\n                                Package_2569,\r\n                                Package_2571\r\n                            </i>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\">\r\n    <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <hr />\r\n                <div class=\"bs-component\">\r\n                    <div class=\"jumbotron\">\r\n                        <h1 class=\"text-center\">{{data.project.name}}</h1>\r\n                        <p class=\"text-center\">{{data.project.description}}</p>\r\n                        <div class=\"text-center form-inline\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a onclick=\"ga.push(['_trackEvent','View GitHub','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">View on GitHub</a>\r\n\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a routerLink=\"/docs\" onclick=\"ga.push(['_trackEvent','View Docs','Documentation',this.href]);\" class=\"btn btn-primary btn-lg\" style=\"width:100%;\">View Docs</a>\r\n\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a onclick=\"ga.push(['_trackEvent','Download','zip',this.href]);\" href=\"https://github.com/tokyoite/FrameBox/zipball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .zip</a>\r\n\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\r\n                                    <a onclick=\"ga.push(['_trackEvent', 'Download', '.tar.gz', this.href]);\" href=\"https://github.com/tokyoite/FrameBox/tarball/master\" style=\"width:100%;\" class=\"btn btn-primary btn-lg\">Download .tar.gz</a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                        <!--<pre><code class=\"typescript\" pCode>npm install framebox@4.3.0 -save</code></pre>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"page-header\" id=\"banner\">\r\n        <div class=\"row\">\r\n       \r\n\r\n            <div style=\"border-top-left-radius:15px;border-bottom-right-radius:15px;border-bottom-left-radius:15px;\" class=\"well col-lg-8 col-md-9 col-sm-12 col-xs-12\">\r\n                <h3 class=\"text-warning\">\"{{pieceName}}\",&nbsp; by: <a onclick=\"window.open('http://wylandflorida.com/#/artPiece/9726')\">Jim Warren</a>  | Size: 24 x 36</h3>\r\n                <div class=\"col-sm-12\">\r\n                    <framebox [image]=\"image\" [pieceName]=\"pieceName\" [frameStyle]=\"frameStyle\" [EnableSelection]=\"false\"></framebox>\r\n                </div>\r\n\r\n            </div>\r\n            <div style=\"border-top-right-radius:15px;border-bottom-right-radius:15px;border-bottom-right-radius:15px;height:500px;overflow-y:scroll;\" class=\"well col-lg-4 col-md-3 col-sm-12 col-xs-12\">\r\n                <framebox-selection [(frameStyle)]=\"frameStyle\"></framebox-selection>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <!--<div class=\"form-group col-sm-4\">\r\n                    <p class=\"lead\">Name:</p>\r\n                    <input type=\"text\" placeholder=\"Name\" class=\"form-control\" (blur)=\"piecename = selectedPieceName\" [(ngModel)]=\"selectedPieceName\" />\r\n                </div>-->\r\n                <!--<div class=\"form-group col-sm-2\">\r\n                <p class=\"lead\">Dimensions:</p>\r\n                <input type=\"text\" placeholder=\"Dimensions. 15x30 etc.. \" class=\"form-control\" (blur)=\"dim = selectedDim\" [(ngModel)]=\"selectedDim\" />\r\n            </div>-->\r\n                <div class=\"form-group col-sm-8\">\r\n                    <p class=\"lead\">Give it a try! Paste an image URL in the textbox below.</p>\r\n                    <input type=\"text\" placeholder=\"Image URL here.....\" class=\"form-control\" [(ngModel)]=\"image\" />\r\n                </div>\r\n                <!--<div class=\"form-group col-sm-2\">\r\n                <p class=\"lead\">Go</p>\r\n                <input type=\"button\" class=\"btn btn-primary\" value=\"Generate Frame\" (click)=\"changeImage()\" />\r\n            </div>-->\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!--<div class=\"row\" *ngFor=\"let l of MyArtWork\">\r\n        <div style=\"border-top-left-radius:15px;border-bottom-left-radius:15px;border-bottom-right-radius:15px\" class=\"well col-lg-8 col-md-9 col-sm-12 col-xs-12\">\r\n            <h3 class=\"text-warning\">\"{{l.pieceName}}\",&nbsp; by: <a (click)=\"viewArtist(l)\">{{ l.artistFirstName + ' ' + l.artistLastName}}</a>  | Size: {{l.dim}}</h3>\r\n            <div (click)=\"viewDetails(l.prodID)\" class=\"col-sm-12\">\r\n                <div frame-it\r\n                     image=\"{{'http://wylandflorida.com/images/' + l.artistFirstName + l.artistLastName + '/' + l.collectionID + '/thumbsXL/thumb_' + l.imgLocation}}\"\r\n                     piecename=\"{{l.pieceName}}\"\r\n                     framestyle=\"{{frameStyle}}\"\r\n                     id=\"1\"></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"border-top-right-radius:15px;border-bottom-right-radius:15px;\" class=\"well col-lg-4 col-md-3 col-sm-12 col-xs-12\">\r\n            <div select-it=\"\"></div>\r\n        </div>\r\n    </div>-->\r\n\r\n\r\n    <hr />\r\n\r\n    <div class=\"row\">\r\n        <div class=\"well col-sm-12\">\r\n            <h3 class=\"text-center\">\r\n                Also check out,\r\n                <a style=\"color:skyblue\" href=\"http://www.WylandFlorida.com\">www.WylandFlorida.com</a> <img src=\"http://wylandflorida.com/Images/Logos/Logo1.png\" class=\"animated bounceIn animation-delay-5\" style=\"width: 75px; padding-right: 10px;\">\r\n            </h3>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<br /><br /><br />"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<hr />\r\n<footer>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <p>Angular Framing Module/Directive built by <a href=\"{{data.project.author.git}}\" rel=\"nofollow\">{{data.project.author.first + ' ' + data.project.author.last }}</a>. &nbsp;</p>\r\n            <p>\r\n                <a href=\"http://getbootstrap.com\" rel=\"nofollow\">Twitter Bootstrap</a> custom CSS written by <a href=\"https://github.com/thomaspark\">Thomas Park</a>.\r\n                &nbsp;Icons from <a href=\"http://fortawesome.github.io/Font-Awesome/\" rel=\"nofollow\">Font Awesome</a>.\r\n                &nbsp;Web fonts from <a href=\"http://www.google.com/webfonts\" rel=\"nofollow\">Google</a>.\r\n                &nbsp;Custom Module/Directives Built with <a rel=\"nofollow\" href=\"https://angularjs.org/\">Angular.js</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\r\n        <div class=\"navbar-header\">\r\n            <a href=\"#/home\" class=\"navbar-brand\">&nbsp;{{data.project.name}}</a>\r\n            <button class=\"navbar-toggle\" type=\"button\" (click)=\"collapseIn = !collapseIn\">\r\n                <span *ngFor=\"let i of [1,2,3]\" class=\"icon-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"blink navbar-collapse collapse {{collapseIn ? 'collapse in' : ''}}\" id=\"navbar-main\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li *ngFor=\"let l of data.project.links\" routerLink=\"{{l.route}}\" routerLinkActive #rla=\"routerLinkActive\" class=\"btn-sm {{rla.isActive ? 'active' : ''}}\">\r\n                    <a style=\"cursor:pointer;\" >&nbsp;&nbsp;{{l.name}}</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"https://github.com/tokyoite\" target=\"_blank\">By: Octavio Gomez Jr.</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(119);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.bundle.js.map