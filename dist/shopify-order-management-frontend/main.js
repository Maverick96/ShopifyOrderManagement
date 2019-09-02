(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app{\n    text-align: center;\n    height: 100vh;\n    width: 100vw;\n    background-color: beige;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-loader></app-loader>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shopify-order-management-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/order-details/order-details.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/http-interceptor.service */ "./src/app/shared/services/http-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// components





// third party dependencies

// routes


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_8__["OrderListComponent"],
                _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_12__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpInterceptorService"],
                    multi: true
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader{\n    /* height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center; */\n    position: absolute;\n  top: 0;\n  bottom: 0%;\n  left: 0;\n  right: 0%;\n  display: flex;\n    justify-content: center;\n  background-color: white;\n  align-items: center;\n  z-index: 99;\n}"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"isLoading\">\n  <img src=\"../../assets/images/Spinner-1s-200px.svg\" width=\"400\" height=\"500\" />\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loadingService) {
        this.loadingService = loadingService;
        this.isLoading = true;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.subscribeToLoaderService();
    };
    LoaderComponent.prototype.subscribeToLoaderService = function () {
        var _this = this;
        this.loader$ = this.loadingService.getLoaderState().subscribe(function (val) {
            _this.isLoading = val;
            console.log("LOADING STATUS ", _this.isLoading);
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        if (this.loader$) {
            this.loader$.unsubscribe();
        }
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/order-details/order-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-details/order-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top: 5vh;\n}\n\nlabel{\n    float: left;\n}\n\n.order-item{\n    display: flex;\n    padding: 1.25rem;\n}\n\n.bold{\n    font-weight: bold;\n}\n\n.heading{\n    float: left;\n}\n\n.details{\n    padding: 2rem;\n}"

/***/ }),

/***/ "./src/app/order-details/order-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-details/order-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details\">\n  <form *ngIf=\"isFormCreated\" [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"row mb-3\">\n      <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>\n    </div>\n\n    <div class=\"row align-items-center\">\n      <div class=\"col-5\">\n\n        <div class=\"form-group\">\n          <label class=\"bold\" for=\"exampleInputEmail1\">Email:</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\"\n            placeholder=\"Enter email\" (keyup)=\"checkFormStatus($event)\">\n          <small *ngIf=\"orderForm.controls['email'].invalid && orderForm.controls['email'].touched\"\n            class=\"form-text text-muted\">Email is invalid</small>\n        </div>\n\n\n      </div>\n\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label class=\"bold\" for=\"exampleInputEmail1\">Mobile:</label>\n          <input type=\"number\" formControlName=\"mobile\" class=\"form-control\" id=\"mobile\" aria-describedby=\"mobile\"\n            placeholder=\"Enter mobile\" (keyup)=\"checkFormStatus($event)\">\n          <small *ngIf=\"orderForm.controls['mobile'].invalid && orderForm.controls['mobile'].touched\"\n            class=\"form-text text-muted\">Mobile is invalid</small>\n        </div>\n\n      </div>\n\n      <div class=\"col-3\">\n        <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\"\n          [disabled]=\"orderForm.invalid || !hasFormChanged\">Update</button>\n      </div>\n    </div>\n\n    <div class=\"order-details\">\n      <div class=\"heading bold\">\n        Order Items :\n      </div>\n      <br>\n      <div class=\"card row mt-3\" *ngFor=\"let item of orderItems\">\n        <div class=\"order-item\" *ngFor=\"let column of itemDetailsColumns\">\n          <div class=\"mr-3 bold\">{{column['text']}}:</div>\n          <div class=\"ml-4\">\n            {{item[column['id']]}}\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/order-details/order-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-details/order-details.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_constants_app_contants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants/app.contants */ "./src/app/shared/constants/app.contants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(route, orderService, fb, router, location, toastrService) {
        this.route = route;
        this.orderService = orderService;
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.toastrService = toastrService;
        this.isFormCreated = false;
        this.orderItems = [];
        this.formValues = {
            email: null,
            mobile: null
        };
        this.initialState = {
            email: null,
            mobile: null
        };
        this.hasFormChanged = false;
        this.itemDetailsColumns = [
            {
                text: 'Item Name',
                id: 'name',
            },
            {
                text: 'Quantity',
                id: 'quantity',
            },
            {
                text: 'Price',
                id: 'cost',
            },
        ];
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        this.setInitialState();
        this.fetchDetails();
    };
    OrderDetailsComponent.prototype.setInitialState = function () {
        var order = JSON.parse(localStorage.getItem('order'));
        this.createForm(order);
        this.initialState = {
            email: order.email,
            mobile: order.mobile
        };
    };
    OrderDetailsComponent.prototype.createForm = function (values) {
        this.orderForm = this.fb.group({
            email: [values.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            mobile: [values.mobile],
        });
        this.isFormCreated = true;
    };
    OrderDetailsComponent.prototype.fetchDetails = function () {
        var _this = this;
        this.orderNumber = this.route.snapshot.params['id'];
        this.orderDetails$ = this.orderService.getOrderDetails(this.orderNumber).subscribe(function (res) {
            console.log(res);
            _this.orderItems = res['data'];
        }, function (err) {
            console.error(err);
        });
    };
    OrderDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    OrderDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.orderForm.valid && this.hasFormChanged) {
            var payload = {
                orderNumber: this.orderNumber,
                email: this.orderForm.value['email'],
                mobile: this.orderForm.value['mobile']
            };
            this.orderEdit$ = this.orderService.updateOrderDetails(payload)
                .subscribe(function (res) {
                console.log(res);
                if (res['success']) {
                    _this.toastrService.success("Details Edited Successfully", '', {
                        timeOut: 3000
                    });
                    _this.router.navigate(['order-list']);
                }
                else {
                    _this.toastrService.error("Details Edit Failed", '', {
                        timeOut: 5000
                    });
                    // revert changes if update fails
                    _this.setInitialState();
                }
            }, function (err) {
                _this.toastrService.error("Details Edit Failed", '', {
                    timeOut: 5000
                });
                // revert changes if update fails
                _this.setInitialState();
                console.error(err);
            });
        }
    };
    OrderDetailsComponent.prototype.checkFormStatus = function (event) {
        console.log("EVENT!!", event);
        if (this.orderForm.controls['email'].value !== this.initialState.email || this.orderForm.controls['mobile'].value !== this.initialState.mobile) {
            this.hasFormChanged = true;
        }
        else {
            this.hasFormChanged = false;
        }
        if (this.orderForm.controls['mobile'].value !== null) {
            this.orderForm.controls['mobile'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_constants_app_contants__WEBPACK_IMPORTED_MODULE_6__["MOBILE_REGEX"])]);
        }
        else {
            this.orderForm.controls['mobile'].setValidators(null);
        }
        this.orderForm.controls['mobile'].updateValueAndValidity();
    };
    OrderDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.orderDetails$) {
            this.orderDetails$.unsubscribe();
        }
        if (this.orderEdit$) {
            this.orderEdit$.unsubscribe();
        }
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/order-list/order-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-list/order-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-list{\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding: 2rem;\n}\n\ntable{\n    background-color: white;\n}\n\n.pagination{\n    align-items: center;\n}"

/***/ }),

/***/ "./src/app/order-list/order-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-list/order-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"order-list\">\n\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\" *ngFor=\"let column of columnList\" (click)=\"changeSort(column)\">\n          {{column.text}}\n\n          <span *ngIf=\"column.id === sortBy['id']\">\n            <img *ngIf=\"sortBy['sortAsc']\" src=\"../../assets/images/sort-down.svg\" width=\"15\" height=\"15\" />\n            <img *ngIf=\"!sortBy['sortAsc']\" src=\"../../assets/images/sort-up.svg\" width=\"15\" height=\"15\" />\n          </span>\n\n        </th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let order of orderListData;\" (click)=\"openDetails(order)\">\n        <td *ngFor=\"let column of columnList\">\n          <div>\n            {{order[column['id']]}}\n          </div>\n\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"pagination\">\n    <button class=\"btn btn-primary\" (click)=\"prevPage()\">\n      Previous\n    </button>\n\n    <div class=\"mx-4\">\n      {{currentPage}}\n    </div>\n\n    <button class=\"btn btn-primary\" (click)=\"nextPage()\">\n      Next\n    </button>\n\n    <select class=\"ml-4\" (change)=\"changePagination($event)\" [(ngModel)]=\"limit\">\n      <option *ngFor=\"let page of paginationList\" [selected]=\"page === limit\" [value]=\"page\">{{page}}</option>\n\n    </select>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order-list/order-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-list/order-list.component.ts ***!
  \****************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(orderService, toastrService, router) {
        this.orderService = orderService;
        this.toastrService = toastrService;
        this.router = router;
        this.offset = 0;
        this.currentPage = 1;
        this.orderListData = [];
        this.sortBy = {};
        this.totalItems = 0;
        this.columnList = [
            {
                text: 'Order Number',
                id: 'orderNumber',
                sortAsc: true
            },
            {
                text: 'Email Id',
                id: 'email',
                sortAsc: true
            },
            {
                text: 'Mobile',
                id: 'mobile',
                sortAsc: true
            },
            {
                text: 'Total Price',
                id: 'cost',
                sortAsc: true
            }
        ];
        this.paginationList = [5, 10, 20];
        this.sortBy = this.columnList[0];
        this.limit = this.paginationList[0];
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.setDefaultState();
        this.fetchList();
    };
    OrderListComponent.prototype.setDefaultState = function () {
        localStorage.removeItem('order');
        var page_size = localStorage.getItem('page_size');
        if (page_size) {
            this.limit = JSON.parse(page_size);
        }
        var current_page = localStorage.getItem('current_page');
        if (current_page) {
            this.currentPage = JSON.parse(current_page);
        }
        var sort_by = localStorage.getItem('sort_by');
        if (sort_by) {
            this.sortBy = JSON.parse(sort_by);
        }
    };
    OrderListComponent.prototype.fetchList = function () {
        var _this = this;
        console.log("FETCH ");
        var sort = this.sortBy['id'];
        if (!this.sortBy['sortAsc']) {
            sort = '-' + sort;
        }
        this.orderList$ = this.orderService.getOrdersList(sort, this.offset, this.limit).subscribe(function (res) {
            console.log(res);
            if (res['data']) {
                _this.orderListData = res['data'];
                _this.totalItems = res['total'];
            }
            else {
                _this.orderListData = [];
                _this.totalItems = 0;
            }
        }, function (err) {
            _this.toastrService.error("Order List Failed", '', {
                timeOut: 3000
            });
            console.error(err);
        });
    };
    OrderListComponent.prototype.openDetails = function (order) {
        console.log(order);
        localStorage.setItem('order', JSON.stringify(order));
        this.router.navigate(['order-details', order['orderNumber']]);
    };
    OrderListComponent.prototype.changeSort = function (column) {
        if (column['id'] === this.sortBy['id']) {
            this.sortBy['sortAsc'] = !this.sortBy['sortAsc'];
        }
        else {
            this.sortBy = column;
        }
        this.fetchList();
        this.setSortBy();
    };
    OrderListComponent.prototype.prevPage = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.offset = (this.currentPage - 1) * this.limit;
            this.fetchList();
            this.setCurrentPage();
        }
    };
    OrderListComponent.prototype.nextPage = function () {
        if (this.currentPage * this.limit < this.totalItems) {
            this.offset = this.currentPage * this.limit;
            this.currentPage++;
            this.fetchList();
            this.setCurrentPage();
        }
    };
    OrderListComponent.prototype.changePagination = function (event) {
        this.offset = 0;
        this.sortBy = this.columnList[0];
        this.fetchList();
        this.setPageSize();
    };
    OrderListComponent.prototype.setPageSize = function () {
        localStorage.setItem('page_size', JSON.stringify(this.limit));
    };
    OrderListComponent.prototype.setCurrentPage = function () {
        localStorage.setItem('currrent_page', JSON.stringify(this.currentPage));
    };
    OrderListComponent.prototype.setSortBy = function () {
        localStorage.setItem('sort_by', JSON.stringify(this.sortBy));
    };
    OrderListComponent.prototype.ngOnDestroy = function () {
        if (this.orderList$) {
            this.orderList$.unsubscribe();
        }
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/order-list/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/order-details/order-details.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");



var appRoutes = [
    {
        path: 'order-list',
        component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__["OrderListComponent"],
    },
    {
        path: 'order-details/:id',
        component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_1__["OrderDetailsComponent"],
    },
    {
        path: '',
        redirectTo: '/order-list',
        pathMatch: 'full'
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];



/***/ }),

/***/ "./src/app/shared/constants/app.contants.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/constants/app.contants.ts ***!
  \**************************************************/
/*! exports provided: BASE_URL, MOBILE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_REGEX", function() { return MOBILE_REGEX; });
var BASE_URL = '';
var MOBILE_REGEX = /^[7-9][0-9]{9}$/;



/***/ }),

/***/ "./src/app/shared/services/http-interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/http-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(loaderService) {
        this.loaderService = loaderService;
    }
    HttpInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        this.loaderService.setLoaderState(true);
        var self = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
                self.loaderService.setLoaderState(false);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.error("hi", error);
            _this.loaderService.setLoaderState(false);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/services/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.showLoader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showLoader$ = this.showLoader.asObservable();
    }
    LoaderService.prototype.setLoaderState = function (state) {
        this.showLoader.next(state);
    };
    LoaderService.prototype.getLoaderState = function () {
        return this.showLoader$;
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_app_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/app.contants */ "./src/app/shared/constants/app.contants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.getOrdersList = function (sort, offset, limit) {
        console.log("API ", _constants_app_contants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]);
        return this.http.get(_constants_app_contants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/order/list?sortby=" + sort + "&offset=" + offset + "&limit=" + limit);
    };
    OrderService.prototype.getOrderDetails = function (orderNumber) {
        return this.http.get(_constants_app_contants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/order/" + orderNumber);
    };
    OrderService.prototype.updateOrderDetails = function (payload) {
        return this.http.post(_constants_app_contants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/order/edit", payload);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:8000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ha40035575/Desktop/Web Dev/shopify/shopify-order-management-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map