"use strict";
(self["webpackChunkrepublic_ng"] = self["webpackChunkrepublic_ng"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/home/home.component */ 2670);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/about/about.component */ 5650);
/* harmony import */ var _components_pages_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/lawyer/lawyer.component */ 7038);
/* harmony import */ var _components_pages_lawyer_details_lawyer_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/lawyer-details/lawyer-details.component */ 7956);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 506);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2338);
/* harmony import */ var _components_pages_practice_practice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/practice/practice.component */ 1581);
/* harmony import */ var _components_pages_practice_details_practice_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/practice-details/practice-details.component */ 8951);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/error/error.component */ 5948);
/* harmony import */ var _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/terms-conditions/terms-conditions.component */ 3823);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 6953);
/* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ 3676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);















const routes = [{
  path: '',
  component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'meet-our-team/:id/:name',
  component: _components_pages_lawyer_details_lawyer_details_component__WEBPACK_IMPORTED_MODULE_3__.AttorneyDetailsComponent
}, {
  path: 'meet-our-team',
  component: _components_pages_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_2__.AttorneyComponent
}, {
  path: 'blog/:id',
  component: _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_5__.BlogDetailsComponent
}, {
  path: 'blog',
  component: _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent
}, {
  path: 'practices/:id/:name',
  component: _components_pages_practice_details_practice_details_component__WEBPACK_IMPORTED_MODULE_7__.PracticeDetailsComponent
}, {
  path: 'practices',
  component: _components_pages_practice_practice_component__WEBPACK_IMPORTED_MODULE_6__.PracticeComponent
}, {
  path: 'error',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent
}, {
  path: 'terms-conditions',
  component: _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_9__.TermsConditionsComponent
}, {
  path: 'contact',
  component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__.ContactComponent
}, {
  path: 'careers',
  component: _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_11__.CareersComponent
}, {
  path: '**',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent
} // This line will remain down from the whole pages component list
];

class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layouts/preloader/preloader.component */ 3706);
/* harmony import */ var _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/navbar/navbar.component */ 6575);
/* harmony import */ var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layouts/footer/footer.component */ 624);








class AppComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.recallJsFuntions();
  }
  recallJsFuntions() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
        $('.loader').fadeIn('slow');
      }
    });
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel)).subscribe(event => {
      $.getScript('../assets/js/custom.js');
      $('.loader').fadeOut('fast');
      this.location = this.router.url;
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.PathLocationStrategy
    }])],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-preloader")(1, "app-navbar")(2, "router-outlet")(3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent, _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home/home.component */ 2670);
/* harmony import */ var _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layouts/navbar/navbar.component */ 6575);
/* harmony import */ var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/footer/footer.component */ 624);
/* harmony import */ var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layouts/preloader/preloader.component */ 3706);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/about/about.component */ 5650);
/* harmony import */ var _components_pages_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/lawyer/lawyer.component */ 7038);
/* harmony import */ var _components_pages_lawyer_details_lawyer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/lawyer-details/lawyer-details.component */ 7956);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 506);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2338);
/* harmony import */ var _components_pages_practice_practice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/practice/practice.component */ 1581);
/* harmony import */ var _components_pages_practice_details_practice_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/practice-details/practice-details.component */ 8951);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/error/error.component */ 5948);
/* harmony import */ var _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/terms-conditions/terms-conditions.component */ 3823);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 6953);
/* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ 3676);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/accordion */ 2088);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _dynamic_script_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dynamic-script.directive */ 7345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_21__.CdkAccordionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_5__.PreloaderComponent, _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent, _components_pages_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_7__.AttorneyComponent, _components_pages_lawyer_details_lawyer_details_component__WEBPACK_IMPORTED_MODULE_8__.AttorneyDetailsComponent, _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__.BlogComponent, _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_10__.BlogDetailsComponent, _components_pages_practice_practice_component__WEBPACK_IMPORTED_MODULE_11__.PracticeComponent, _components_pages_practice_details_practice_details_component__WEBPACK_IMPORTED_MODULE_12__.PracticeDetailsComponent, _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_13__.ErrorComponent, _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_14__.TermsConditionsComponent, _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__.ContactComponent, _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_16__.CareersComponent, _dynamic_script_directive__WEBPACK_IMPORTED_MODULE_17__.DynamicScriptDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgOptimizedImage, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_21__.CdkAccordionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 624:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 21,
    vars: 0,
    consts: [[1, "container"], [1, "copyright-area"], [1, "row"], [1, "col-sm-7", "col-lg-6", 2, "display", "flex", "align-items", "center"], ["src", "/assets/img/theRepublicLawLogo.webp", 1, "copyright-item", 2, "width", "200px", "height", "auto"], [1, "copyright-item"], [1, "col-sm-5", "col-lg-6", "footer-text", 2, "display", "flex", "align-items", "center", "justify-content", "end"], [1, "copyright-item", "copyright-right"], ["routerLink", "/terms-conditions", "target", "_blank"], [1, "footer-responsive", 2, "display", "flex", "align-items", "center", "flex-direction", "column"], [1, "row", "copyright-item", 2, "justify-content", "center"], [1, "copyright-item", "copyright-right", "row", 2, "justify-content", "center"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A9 The Republic Law 2023. All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A9 The Republic Law 2023. All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6575:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/navbar/navbar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _pages_blog_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/blog/postData */ 2297);
/* harmony import */ var _pages_practice_practiceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/practice/practiceData */ 6807);
/* harmony import */ var _pages_lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/lawyer/lawyerData */ 7997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);








const _c0 = function (a1, a2) {
  return ["/meet-our-team", a1, a2];
};
function NavbarComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 11)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lawyer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, lawyer_r3.id, lawyer_r3.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lawyer_r3.name);
  }
}
const _c1 = function (a1, a2) {
  return ["/practices", a1, a2];
};
function NavbarComponent_li_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 11)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const practice_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, practice_r4.id, practice_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](practice_r4.name);
  }
}
function NavbarComponent_div_47_ul_2_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, ctx_r10.lawyers[index_r11].id, ctx_r10.lawyers[index_r11].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.lawyers[index_r11].name);
  }
}
function NavbarComponent_div_47_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 37)(1, "h5", 38)(2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Meet Our Team: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NavbarComponent_div_47_ul_2_li_5_Template, 3, 5, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r5.attorneyResultIndexes.length, " Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.attorneyResultIndexes);
  }
}
function NavbarComponent_div_47_hr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function NavbarComponent_div_47_ul_5_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r12.practices[index_r13].id, ctx_r12.practices[index_r13].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.practices[index_r13].contentPreview);
  }
}
function NavbarComponent_div_47_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 37)(1, "h5", 38)(2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Practices Areas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NavbarComponent_div_47_ul_5_li_5_Template, 3, 5, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r7.practiceResultIndexes.length, " Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.practiceResultIndexes);
  }
}
function NavbarComponent_div_47_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
const _c2 = function (a1) {
  return ["/blog", a1];
};
function NavbarComponent_div_47_ul_8_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c2, ctx_r14.posts[index_r15].id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r14.posts[index_r15].contentPreview);
  }
}
function NavbarComponent_div_47_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 37)(1, "h5", 38)(2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Blogs: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NavbarComponent_div_47_ul_8_li_5_Template, 3, 4, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r9.postResultIndexes.length, " Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.postResultIndexes);
  }
}
function NavbarComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NavbarComponent_div_47_ul_2_Template, 6, 2, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NavbarComponent_div_47_hr_3_Template, 1, 0, "hr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NavbarComponent_div_47_ul_5_Template, 6, 2, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NavbarComponent_div_47_hr_6_Template, 1, 0, "hr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NavbarComponent_div_47_ul_8_Template, 6, 2, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.attorneyResultIndexes.length >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.attorneyResultIndexes.length >= 1 && ctx_r2.postResultIndexes.length >= 1 || ctx_r2.practiceResultIndexes.length >= 1 && ctx_r2.attorneyResultIndexes.length >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.practiceResultIndexes.length >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.postResultIndexes.length >= 1 && ctx_r2.practiceResultIndexes.length >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.postResultIndexes.length >= 1);
  }
}
const _c3 = function () {
  return {
    exact: true
  };
};
class NavbarComponent {
  constructor(route) {
    this.route = route;
    this.posts = _pages_blog_postData__WEBPACK_IMPORTED_MODULE_0__.postData;
    this.lawyers = _pages_lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_2__.attorneyData;
    this.practices = _pages_practice_practiceData__WEBPACK_IMPORTED_MODULE_1__.practiceData;
    this.attorneyResultIndexes = [];
    this.postResultIndexes = [];
    this.practiceResultIndexes = [];
    this.queryTypes = [this.posts, this.lawyers, this.practices];
    this.search = '';
    this.route.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
        this.attorneyResultIndexes = [];
        this.postResultIndexes = [];
        this.practiceResultIndexes = [];
        this.search = "";
      }
    });
  }
  ngOnInit() {
    this.getContentPreviews();
  }
  onChange() {
    if (this.search.length < 3) {
      this.attorneyResultIndexes = [];
      this.postResultIndexes = [];
      this.practiceResultIndexes = [];
    }
    if (this.search.length >= 3) {
      this.getAllQueryResults();
    }
  }
  getAllQueryResults() {
    // queryTypes is all the data types that will be filtered through
    this.queryTypes.forEach(queryType => {
      this.getQueryResults(queryType);
    });
  }
  getQueryResults(queryType) {
    // loop through all
    queryType.forEach(object => {
      let includesSearchString = object.name?.toLowerCase().includes(this.search.toLowerCase());
      // if name doesn't exist use contentPreview
      if (!object.name) {
        includesSearchString = object.contentPreview.toLowerCase().includes(this.search.toLowerCase());
      }
      // if we match the search string and we didn't already match these indexes add it to the respective result arrays
      switch (object.type) {
        case 'lawyer':
          if (includesSearchString && !this.attorneyResultIndexes.includes(object.id)) {
            this.attorneyResultIndexes.push(object.id);
          }
          break;
        case 'practice':
          if (includesSearchString && !this.practiceResultIndexes.includes(object.id)) {
            this.practiceResultIndexes.push(object.id);
          }
          break;
        case 'post':
          if (includesSearchString && !this.postResultIndexes.includes(object.id)) {
            this.postResultIndexes.push(object.id);
          }
          break;
      }
    });
  }
  getContentPreviews() {
    this.attorneyNames = this.getQueryStrings(this.lawyers);
    this.postContentPreviews = this.getQueryStrings(this.posts);
    this.practiceContentPreviews = this.getQueryStrings(this.practices);
  }
  getQueryStrings(data) {
    let array = data.map((object, index) => {
      let arrayOfStrings;
      if (object.contentPreview) {
        arrayOfStrings = object.contentPreview.split(" ");
      } else {
        arrayOfStrings = object.name.split(" ");
      }
      return arrayOfStrings;
    });
    return array;
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 48,
    vars: 12,
    consts: [[1, "navbar-area", "fixed-top"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["srcset", "/assets/img/theRepublicLawLogo.webp", "alt", "Logo", 2, "height", "auto"], [1, "main-nav", 2, "display", "flex", "justify-content", "center", "flex-direction", "column"], [1, "container"], [1, "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["srcset", "/assets/img/theRepublicLawLogo.webp", "alt", "Logo", 2, "width", "300px", "height", "100%"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/meet-our-team", 1, "nav-link"], [1, "dropdown-menu"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["routerLink", "/practices", 1, "nav-link"], [1, "nav-link"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/careers", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "nav-item", "contact-button"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "side-nav"], ["routerLink", "/contact"], [1, "search-container"], [1, "d-flex", "search-form"], ["type", "text", "placeholder", "Search for a lawyer or legal practice", "aria-label", "Search", 1, "form-control", "me-2", 2, "margin-left", "243px", 3, "ngModel", "ngModelChange"], [1, "icofont-search-1", 2, "position", "relative", "right", "40px"], ["style", "color: #161618; list-style-type: none; background-color: white; position: absolute; margin: 0px 15vw; box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.377); min-width: 70vw; top:175px;", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], [2, "color", "#161618", "list-style-type", "none", "background-color", "white", "position", "absolute", "margin", "0px 15vw", "box-shadow", "-8px 8px 8px rgba(0, 0, 0, 0.377)", "min-width", "70vw", "top", "175px"], [1, "search-result-lawyer", 2, "padding-top", "15px"], ["style", "list-style-type: none;", 4, "ngIf"], [4, "ngIf"], [1, "search-result-practice"], [1, "search-result-blog"], [2, "list-style-type", "none"], [2, "color", "#161618"], ["routerLink", "/meet-our-team", 1, "search-result", 2, "text-decoration", "none", "color", "inherit"], [4, "ngFor", "ngForOf"], [1, "search-result", 2, "text-decoration", "none", "color", "inherit", 3, "routerLink"], ["routerLink", "/practices", 1, "search-result", 2, "text-decoration", "none", "color", "inherit"], ["routerLink", "/blog", 1, "search-result", 2, "text-decoration", "none", "color", "inherit"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 11)(15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 11)(18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Meet Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, NavbarComponent_li_21_Template, 3, 5, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 11)(23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Practice Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, NavbarComponent_li_26_Template, 3, 5, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 11)(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ul", 15)(31, "li", 11)(32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Coming Soon!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li", 11)(35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li", 21)(38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 23)(41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 25)(44, "div", 26)(45, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_45_listener($event) {
          return ctx.search = $event;
        })("ngModelChange", function NavbarComponent_Template_input_ngModelChange_45_listener() {
          return ctx.onChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, NavbarComponent_div_47_Template, 9, 5, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lawyers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.practices);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attorneyResultIndexes.length >= 1 || ctx.postResultIndexes.length >= 1 || ctx.practiceResultIndexes.length >= 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3706:
/*!*********************************************************************!*\
  !*** ./src/app/components/layouts/preloader/preloader.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderComponent": () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PreloaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PreloaderComponent_Factory(t) {
    return new (t || PreloaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PreloaderComponent,
    selectors: [["app-preloader"]],
    decls: 8,
    vars: 0,
    consts: [[1, "loader"], [1, "d-table"], [1, "d-table-cell"], [1, "sk-folding-cube"], [1, "sk-cube1", "sk-cube"], [1, "sk-cube2", "sk-cube"], [1, "sk-cube4", "sk-cube"], [1, "sk-cube3", "sk-cube"]],
    template: function PreloaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5650:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 62,
    vars: 0,
    consts: [[1, "about-area"], [1, "section-title"], [1, "container"], [1, "row", "about-content", 2, "background-color", "rgba(209, 209, 209, 0.425)", "padding", "35px"], [1, "col-lg-4"], ["srcset", "/assets/img/about-us1.webp", "priority", "", 1, "about-img"], [1, "col-lg-8"], [1, "about-item"], [1, "about-information", 2, "padding-left", "25px"], [1, "about-title"], [1, "row", 2, "margin-top", "60px"], [1, "col", 2, "display", "flex", "align-items", "center", "padding-right", "40px", "border", "#CBBB7A 3px solid", "padding", "35px", "display", "flex", "align-items", "center"], [1, "about-content"], [1, "row", "about-values", 2, "margin-top", "40px", "background-color", "rgba(209, 209, 209, 0.425)", "padding", "35px"], [2, "margin-left", "20px", "line-height", "40px"], [2, "margin-top", "15px"], [2, "color", "#CBBB7A", "margin-left", "10px", "font-size", "20px"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OUR STORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The Republic Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Introducing The Republic Law: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Seeking Justice For All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "At The Republic Law, we take pride in being your trusted legal partner. With a demonstrated commitment to excellence, our experienced lawyers deliver personalized solutions to meet your specific needs. From personal injury and family to business and immigration matters, we are dedicated to providing you with the highest quality legal representation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Our firm's foundation is built on integrity, professionalism, and a client-centred approach. We understand that every case is unique, and we work closely with you to understand your goals and develop a strategic plan to achieve the best possible outcome. With our expertise and unwavering dedication, you can trust us to protect your rights, navigate complex legal challenges, and champion your interests.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Experience the difference of working with The Republic Law, where we combine our in-depth knowledge, skilled advocacy, and personalised attention to provide you with exceptional legal services. Contact us today to discuss your legal needs and embark on a successful legal journey with our trusted team by your side.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "div", 11)(26, "div", 12)(27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "About The Firm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "At our law firm, we have a unique and special purpose: to empower individuals, protect rights, expand happiness, and inspire justice. Justice is not just a lofty ideal, but we strive to excavate it, one project at a time, one mandate at a time, Justice in Motion. We do that through our unwavering commitment to integrity, virtue, compassion, ethics and excellence as we seek to make a meaningful impact on the lives of our clients and society as a whole. With a client-centred approach, we listen attentively, understand your unique challenges, and tailor our strategies and solutions to achieve the best outcomes. We believe in the power of the Law to bring about positive change and to create a more just and equitable world. By embracing innovation, fostering collaboration, and giving back to our community, we strive to be agents of positive transformation, providing comprehensive and holistic solutions to complex legal challenges.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "When you choose our law firm, you choose a partner for navigating legal complexities. We are dedicated to building long-term relationships with our clients, earning their trust, and becoming their trusted advisors for life. Together, we can create a world where justice prevails, and individuals are empowered to thrive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13)(34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Our Core Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ol", 14)(37, "li", 15)(38, "strong", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Client-Centered Approach");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Our clients are at the heart of everything we do. We prioritise listening attentively, understanding their unique needs, and providing personalized solutions that always emphasise their best interests. With empathy, we acknowledge the emotional and personal challenges clients face, offering support, understanding, and guidance throughout their legal journey. We aim to cultivate long-lasting relationships based on trust, reliability, and mutual respect, serving as their trusted legal advisors beyond individual cases.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 15)(43, "strong", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Integrity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "We uphold the highest standards of honesty, transparency, and ethical conduct in all aspects of our practice. Our commitment to integrity ensures that we consistently earn and maintain our clients' trust. We believe that trust is the foundation of a successful lawyer-client relationship, and we strive to act with integrity in every interaction and decision we make.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 15)(48, "strong", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Excellence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "We are dedicated to achieving excellence in every facet of our work. Through continuous professional development, ongoing learning, and staying abreast of the latest legal knowledge and development, we deliver top-quality service to our clients. We embrace technological advancements and innovative approaches to enhance the efficiency and effectiveness of our legal services. By embracing innovation, we continually find new ways to meet and exceed our clients' expectations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 15)(53, "strong", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Collaboration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "We foster a collaborative environment, both internally within our firm and externally with clients and other professionals. By leveraging the collective knowledge and expertise of our team, we provide comprehensive and innovative solutions to our clients legal challenges. We believe in giving back to the communities we serve, actively participating in pro bono work, community initiatives, and making charitable contributions. We strive to make a positive impact beyond the walls of our firm.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 15)(58, "strong", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Advocacy for Justice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "We are passionate advocates for justice and equality. We believe that a society unmoored from the tenets of justice for the greatest number of its citizens (and non-citizens alike) is hollow, and ultimately, is bound to unravel. We actively seek to protect the rights of our clients and work towards a fair and just legal system that serves the needs of all individuals. We are committed to promoting access to justice and ensuring that everyone receives fair representation regardless of their background or circumstances.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2338:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/blog-details/blog-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailsComponent": () => (/* binding */ BlogDetailsComponent)
/* harmony export */ });
/* harmony import */ var _blog_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog/postData */ 2297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = function (a1) {
  return ["/blog", a1];
};
function BlogDetailsComponent_li_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27)(3, "h4")(4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul")(7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcset", post_r3.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, post_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, post_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r3.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r3.date, "");
  }
}
function BlogDetailsComponent_li_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r4);
  }
}
function BlogDetailsComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3")(8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul")(11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, post_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcset", post_r5.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, post_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r5.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r5.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r5.contentPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, post_r5.id));
  }
}
class BlogDetailsComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.posts = _blog_postData__WEBPACK_IMPORTED_MODULE_0__.postData;
    this.lastPostId = this.posts[this.posts.length - 1].id;
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.post = _blog_postData__WEBPACK_IMPORTED_MODULE_0__.postData[id];
      this.currentRouteId = id;
    });
  }
  static #_ = this.ɵfac = function BlogDetailsComponent_Factory(t) {
    return new (t || BlogDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlogDetailsComponent,
    selectors: [["app-blog-details"]],
    decls: 58,
    vars: 16,
    consts: [[1, "blog-details-area", "pt-150", "pb-70", "important!"], [1, "container", "pt-100"], [1, "row"], [1, "col-lg-7"], [1, "blog-details-item"], [1, "blog-details-img"], ["alt", "Blog Details", 3, "srcset"], [1, "icofont-calendar"], [1, "icofont-user-alt-7"], [2, "white-space", "pre-wrap"], [1, "blog-details-social"], ["target", "_blank", "href", "#"], [1, "icofont-facebook"], [1, "icofont-twitter"], [1, "icofont-linkedin"], [1, "blog-details-nav"], [3, "ngClass"], [3, "routerLink"], [1, "col-lg-5"], [1, "blog-details-search"], [4, "ngFor", "ngForOf"], [1, "blog-details-tags"], [1, "blog-area", "blog-area-three"], [1, "container"], [1, "section-title", "text-start"], ["class", "col-sm-6 col-lg-4", 4, "ngFor", "ngForOf"], ["alt", "Blog Details", 2, "width", "100px", "height", "auto", "padding-top", "10px", 3, "srcset"], [1, "blog-details-recent"], ["routerLink", "/blog"], [1, "col-sm-6", "col-lg-4"], ["data-wow-delay", ".3s", 1, "blog-item", "wow", "animate__animated", "animate__fadeInUp"], ["alt", "Blog", 3, "srcset"], [1, "blog-inner"], [1, "blog-link", 3, "routerLink"], [1, "icofont-simple-right"]],
    template: function BlogDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul")(10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "ul")(20, "li")(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Share on:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15)(33, "div", 16)(34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16)(37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18)(40, "div", 4)(41, "div", 19)(42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Recent Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, BlogDetailsComponent_li_45_Template, 14, 10, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 21)(47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, BlogDetailsComponent_li_50_Template, 3, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "section", 22)(52, "div", 23)(53, "div", 24)(54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Related Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, BlogDetailsComponent_div_57_Template, 22, 15, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcset", ctx.post.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.post.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.post.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.post.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentRouteId !== 0 ? "nav-prev" : "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.currentRouteId - 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentRouteId !== ctx.lastPostId ? "nav-prev" : "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.currentRouteId + 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.post.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
;

/***/ }),

/***/ 506:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/blog/blog.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postData */ 2297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a1) {
  return ["/blog", a1];
};
function BlogComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3")(7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul")(10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, post_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcset", post_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, post_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r1.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r1.contentPreview, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, post_r1.id));
  }
}
class BlogComponent {
  constructor() {}
  ngOnInit() {
    this.posts = _postData__WEBPACK_IMPORTED_MODULE_0__.postData;
  }
  static #_ = this.ɵfac = function BlogComponent_Factory(t) {
    return new (t || BlogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 10,
    vars: 1,
    consts: [[1, "page-title-area", "title-img-blog", 2, "margin-bottom", "50px"], [1, "d-table"], [1, "d-table-cell"], [1, "page-title-text"], [1, "blog-area"], [1, "container"], [1, "blog-slider", "owl-theme", "owl-carousel", 2, "margin-top", "50px"], ["class", "blog-item", 4, "ngFor", "ngForOf"], [1, "blog-item"], [3, "routerLink"], ["alt", "Blog", 3, "srcset"], [1, "blog-inner"], [1, "icofont-calendar"], [1, "blog-link", 3, "routerLink"], [1, "icofont-simple-right"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Our Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BlogComponent_div_9_Template, 18, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2297:
/*!***************************************************!*\
  !*** ./src/app/components/pages/blog/postData.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = [{
  id: 0,
  title: "Understanding Workers' Compensation Claims in Alberta",
  img: "assets/img/blog-1.webp",
  author: "Tomy Shak",
  date: "1 May 2023",
  category: "Personal Injury Law",
  content: "As an employee in Alberta, you have rights when it comes to workplace injuries. If you're injured on the job, you may be entitled to workers' compensation benefits. Workers' compensation is a form of insurance that provides benefits to employees who are injured or become ill as a result of their work.\n\nThese benefits can include medical care, wage replacement, and other forms of support. To be eligible for workers' compensation benefits, you need to file a claim with the Workers' Compensation Board (WCB) of Alberta. The WCB will investigate your claim and determine whether you're eligible for benefits. There are many factors that can affect your workers' compensation claim, including the nature and severity of your injury, the circumstances surrounding the injury, and your employment status. It's important to work with an experienced workers' compensation lawyer who can help you navigate the claims process and ensure that you receive the benefits you're entitled to.\n\nAt our law firm, we have a team of experienced workers' compensation lawyers who can help you understand your rights and options. Contact us today to schedule a consultation and learn more about how we can assist you with your workers' compensation claim.",
  contentPreview: "Injured on the job? Learn about workers' compensation in Alberta, including how to file a claim and what injuries are covered.",
  tags: ["Personal Injury", "Workplace Injuries", "Workers' Compensation", "Alberta Laws & Regulations"],
  type: "post"
}, {
  id: 1,
  title: "The Importance of Estate Planning for Small Business Owners",
  img: "assets/img/blog-2.webp",
  author: "Aikin Ward",
  date: "1 May 2023",
  category: "Business Law",
  content: "As a small business owner, you have worked hard to build your business and create a secure financial future for yourself and your family. However, have you considered what will happen to your business when you pass away? Estate planning is a crucial step in ensuring that your business is protected and can continue to thrive after you're gone.\n\nOne of the main reasons why estate planning is so important for small business owners is that it allows you to determine who will take over the business when you're no longer able to run it. This can include choosing a family member or trusted employee to take over as the new owner, or it can involve selling the business to a third party. Without a clear plan in place, your business could be left in limbo, with no clear direction for its future. Another important aspect of estate planning for small business owners is minimizing taxes and expenses. When you pass away, your estate will be subject to estate taxes, which can be quite substantial.\n\nHowever, with careful planning, you can minimize these taxes and ensure that more of your hard-earned money goes to your family and your business. Finally, estate planning can also help to protect your personal assets. If your business is sued or goes bankrupt, your personal assets could be at risk. By creating a clear plan for your business, you can help to shield your personal assets from these types of risks. In conclusion, estate planning is an essential step for small business owners who want to ensure that their businesses are protected and can continue to thrive after they're gone.\n\nBy creating a clear plan for the future of your business, minimizing taxes and expenses, and protecting your personal assets, you can rest easy knowing that your hard work and dedication will be preserved for years to come.",
  contentPreview: "Protect your small business with estate planning. Learn why it's important, your options, and what to consider when creating a plan.",
  tags: ["Business Law", "Estate Planning", "Small Business", "Tax Planning"],
  type: "post"
}, {
  id: 2,
  title: "Divorce and Custody During the Pandemic",
  img: "assets/img/blog-3.webp",
  author: "Sarah Se",
  date: "1 May 2023",
  category: "Family Law",
  content: "Divorce and custody cases can be difficult to navigate under normal circumstances, but the ongoing pandemic has created additional challenges for families in the process of separating. With courts being closed or operating on a limited basis, and restrictions on travel and social gatherings, parents are faced with unique obstacles in settling their divorce and custody matters. But there are steps that can be taken to help ease the process.\n\nOne important step is to maintain clear communication with your ex-spouse, especially when it comes to scheduling and visitation arrangements. With school closures and work-from-home policies, it may be necessary to be flexible and work together to find a schedule that works for everyone. Another key consideration is the safety and well-being of all parties involved. If one parent or child is at high risk for complications from COVID-19, it may be necessary to make adjustments to visitation or custody arrangements.\n\nLegal counsel can also be a valuable resource during this time. An experienced family law lawyer can help you navigate the legal system and ensure that your rights and interests are protected.While the pandemic has added an extra layer of complexity to divorce and custody cases, it's important to remember that you're not alone. With patience, flexibility, and the right support, you can successfully navigate this challenging time and emerge stronger on the other side.",
  contentPreview: "COVID-19 has created new challenges for divorce and custody battles. Learn how to navigate the pandemic's impact on legal options.",
  tags: ["Family Law", "Divorce", "Custody", "Pandemic"],
  type: "post"
}];

/***/ }),

/***/ 3676:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/careers/careers.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareersComponent": () => (/* binding */ CareersComponent)
/* harmony export */ });
/* harmony import */ var _workspace_republic_law_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mail.service */ 5585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dynamic_script_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dynamic-script.directive */ 7345);






function CareersComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CareersComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class CareersComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.color = '';
    this.showAlert = false;
    this.alertMessage = '';
    this.onSubmit = false;
    this.formAPI = "fe0e3799-d772-4bc9-8411-aa9e723dc5d6";
    this.contactFormValues = {
      name: '',
      email: '',
      message: '',
      phone: '',
      subject: ''
    };
  }
  ngOnInit() {}
  submitEmail(contactForm) {
    var _this = this;
    return (0,_workspace_republic_law_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.onSubmit = true;
      let formData = new FormData();
      formData.append('name', _this.contactFormValues.name);
      formData.append('email', _this.contactFormValues.email);
      formData.append('phone', _this.contactFormValues.phone);
      formData.append('body', _this.contactFormValues.message);
      formData.append('access_key', _this.formAPI);
      formData.append('subject', _this.contactFormValues.subject);
      formData.append('from_name', 'Contact Notification');
      try {
        // -- send email
        const res = yield _this.mailService.sendEmail(formData);
        if (!res.ok) {
          _this.alertMessage = "Your message could not be delivered at this";
          alert(_this.alertMessage);
          throw new Error();
        }
        _this.alertMessage = "Your message has been sent successfully!";
        alert(_this.alertMessage);
        contactForm.reset();
      } catch (err) {}
      // -- reset submit and hide alert
      _this.onSubmit = false;
      // this.hideAlert();
    })();
  }
  static #_ = this.ɵfac = function CareersComponent_Factory(t) {
    return new (t || CareersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_1__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CareersComponent,
    selectors: [["app-careers"]],
    decls: 76,
    vars: 8,
    consts: [[1, "title-img-careers"], [1, "container-fluid", 2, "background-color", "#1b1b1bb4", "padding-top", "280px", "padding-bottom", "110px"], [1, "section-title"], [2, "color", "white"], [2, "color", "#ABABAB", "font-size", "15px", "padding-top", "15px"], ["href", "mailto:Info@republiclaw.ca"], ["action", "https://api.web3forms.com/submit", "method", "POST", 3, "ngSubmit"], ["contactForm", "ngForm"], ["type", "hidden", "name", "access_key", "value", "formAPI"], [1, "row", "contact-wrap"], [1, "col-sm-6", "col-lg-6"], [1, "form-group"], ["name", "name", "type", "text", "placeholder", "Your Full Name", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "ml-1 text-red-400 text-sm", 4, "ngIf"], ["name", "email", "type", "email", "placeholder", "Your Email", "required", "", "pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "phone", "id", "phone", "required", "", "data-error", "Please enter a valid phone number", "placeholder", "Your Phone Number", "minlength", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "data-error", "Please enter your subject", "placeholder", "Subject", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["subject", "ngModel"], [1, "col-md-12", "col-lg-12"], ["name", "message", "id", "message", "cols", "30", "rows", "8", "required", "", "minlength", "20", "data-error", "Please write your message", "placeholder", "Tell us about yourself", 1, "form-control", 3, "ngModel", "ngModelChange"], ["body", "ngModel"], ["type", "checkbox", "name", "botcheck", 1, "hidden", 2, "display", "none"], [1, "text-center"], [1, "contact-btn", 3, "disabled"], [1, "container-fluid", 2, "background-color", "#ECECEC", "padding", "30px"], [1, "row"], [1, "col-4", 2, "display", "flex", "flex-direction", "column", "justify-content", "center"], [2, "padding", "20px 30px", "color", "#161618"], [2, "list-style", "none", "padding", "10px 30px", "font-size", "20px", "color", "#161618"], [2, "padding-bottom", "20px"], [1, "icofont-smart-phone", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "icofont-fax", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "icofont-email", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "icofont-location-pin", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "col-8"], [1, "map-area"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.7978787667485!2d-114.0950067!3d51.05681980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716feaf904e0d9%3A0x4e3f37d81a0a02a!2s609%2014%20St%20NW%20Suite%20305%2C%20Calgary%2C%20AB%20T2N%202A1!5e0!3m2!1sen!2sca!4v1682647666523!5m2!1sen!2sca", "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["appDynamicScript", ""], ["src", "https://web3forms.com/client/script.js", "async", "", "defer", ""], [1, "ml-1", "text-red-400", "text-sm"]],
    template: function CareersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Join The Republic Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "At The Republic Law, we are continually seeking Students-At-Law and skilled Lawyers to join our dynamic team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Please send your resume and cover letter to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Info@republiclaw.ca");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " or fill out the form below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CareersComponent_Template_form_ngSubmit_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.submitEmail(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CareersComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.contactFormValues.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CareersComponent_p_22_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10)(24, "div", 11)(25, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CareersComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.contactFormValues.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, CareersComponent_p_27_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10)(29, "div", 11)(30, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CareersComponent_Template_input_ngModelChange_30_listener($event) {
          return ctx.contactFormValues.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 10)(33, "div", 11)(34, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CareersComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.contactFormValues.subject = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 21)(37, "div", 11)(38, "textarea", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CareersComponent_Template_textarea_ngModelChange_38_listener($event) {
          return ctx.contactFormValues.message = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 21)(43, "div", 25)(44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "ul", 31)(53, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Phone: 587-319-5916");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " Fax: 1-877-659-9376");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Email: info@republiclaw.ca");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Address: Suite #305, 609-14th Street NW");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Calgary, AB T2N 2A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 37)(72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "iframe", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.errors && _r1.touched && _r1.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.errors && _r3.touched && _r3.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || ctx.onSubmit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _dynamic_script_directive__WEBPACK_IMPORTED_MODULE_2__.DynamicScriptDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6953:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _workspace_republic_law_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mail.service */ 5585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dynamic_script_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dynamic-script.directive */ 7345);






function ContactComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ContactComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ContactComponent {
  constructor(mailService) {
    this.mailService = mailService;
    this.color = '';
    this.showAlert = false;
    this.alertMessage = '';
    this.onSubmit = false;
    this.formAPI = "fe0e3799-d772-4bc9-8411-aa9e723dc5d6";
    this.contactFormValues = {
      name: '',
      email: '',
      message: '',
      phone: '',
      subject: ''
    };
  }
  ngOnInit() {}
  submitEmail(contactForm) {
    var _this = this;
    return (0,_workspace_republic_law_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.onSubmit = true;
      let formData = new FormData();
      formData.append('name', _this.contactFormValues.name);
      formData.append('email', _this.contactFormValues.email);
      formData.append('phone', _this.contactFormValues.phone);
      formData.append('body', _this.contactFormValues.message);
      formData.append('access_key', _this.formAPI);
      formData.append('subject', _this.contactFormValues.subject);
      formData.append('from_name', 'Contact Notification');
      try {
        // -- send email
        const res = yield _this.mailService.sendEmail(formData);
        if (!res.ok) {
          _this.alertMessage = "Your message could not be delivered at this";
          alert(_this.alertMessage);
          throw new Error();
        }
        _this.alertMessage = "Your message has been sent successfully!";
        alert(_this.alertMessage);
        contactForm.reset();
      } catch (err) {}
      // -- reset submit and hide alert
      _this.onSubmit = false;
      // this.hideAlert();
    })();
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_1__.MailService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 71,
    vars: 8,
    consts: [[1, "title-img-contact"], [1, "container-fluid", 2, "background-color", "#1b1b1bb4", "padding-top", "280px", "padding-bottom", "110px"], [1, "section-title"], [2, "color", "white"], [2, "color", "#ABABAB", "font-size", "15px", "padding-top", "15px"], ["action", "https://api.web3forms.com/submit", "method", "POST", 3, "ngSubmit"], ["contactForm", "ngForm"], ["type", "hidden", "name", "access_key", "value", "formAPI"], [1, "row", "contact-wrap"], [1, "col-sm-6", "col-lg-6"], [1, "form-group"], ["name", "name", "type", "text", "placeholder", "Your Full Name", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "ml-1 text-red-400 text-sm", 4, "ngIf"], ["name", "email", "type", "email", "placeholder", "Your Email", "required", "", "pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "phone", "id", "phone", "required", "", "data-error", "Please enter a valid phone number", "placeholder", "Your Phone Number", "minlength", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "data-error", "Please enter your subject", "placeholder", "Subject", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["subject", "ngModel"], [1, "col-md-12", "col-lg-12"], ["name", "message", "id", "message", "cols", "30", "rows", "8", "required", "", "minlength", "20", "data-error", "Please write your message", "placeholder", "Share Your Story", 1, "form-control", 3, "ngModel", "ngModelChange"], ["body", "ngModel"], ["type", "checkbox", "name", "botcheck", 1, "hidden", 2, "display", "none"], [1, "text-center"], [1, "contact-btn", 3, "disabled"], [1, "container-fluid", 2, "background-color", "#ECECEC", "padding", "30px"], [1, "row"], [1, "col-4", 2, "display", "flex", "flex-direction", "column", "justify-content", "center"], [2, "padding", "20px 30px", "color", "#161618"], [2, "list-style", "none", "padding", "10px 30px", "font-size", "20px", "color", "#161618"], [2, "padding-bottom", "20px"], [1, "icofont-smart-phone", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "icofont-fax", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "icofont-email", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "icofont-location-pin", 2, "color", "#CBBB7A", "padding-right", "10px"], [1, "col-8"], [1, "map-area"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.7978787667485!2d-114.0950067!3d51.05681980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716feaf904e0d9%3A0x4e3f37d81a0a02a!2s609%2014%20St%20NW%20Suite%20305%2C%20Calgary%2C%20AB%20T2N%202A1!5e0!3m2!1sen!2sca!4v1682647666523!5m2!1sen!2sca", "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["appDynamicScript", ""], ["src", "https://web3forms.com/client/script.js", "async", "", "defer", ""], [1, "ml-1", "text-red-400", "text-sm"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Schedule a Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "We're here to help. No matter what legal matter you're facing, we're ready to provide guidance and support.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Don't wait until it's too late \u2013 take control of your situation today.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.submitEmail(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.contactFormValues.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ContactComponent_p_17_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.contactFormValues.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ContactComponent_p_22_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9)(24, "div", 10)(25, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.contactFormValues.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9)(28, "div", 10)(29, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_29_listener($event) {
          return ctx.contactFormValues.subject = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20)(32, "div", 10)(33, "textarea", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_33_listener($event) {
          return ctx.contactFormValues.message = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 20)(38, "div", 24)(39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 26)(43, "div", 27)(44, "div", 28)(45, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "ul", 30)(48, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Phone: 587-319-5916");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " Fax: 1-877-659-9376");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Email: info@republiclaw.ca");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Address: Suite #305, 609-14th Street NW");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Calgary, AB T2N 2A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 36)(67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "iframe", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.errors && _r1.touched && _r1.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.errors && _r3.touched && _r3.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactFormValues.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || ctx.onSubmit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _dynamic_script_directive__WEBPACK_IMPORTED_MODULE_2__.DynamicScriptDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5948:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/error/error.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ErrorComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["app-error"]],
    decls: 13,
    vars: 0,
    consts: [[1, "error-area"], [1, "error-item"], [1, "d-table"], [1, "d-table-cell"], [1, "error-text"], ["routerLink", "/"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sorry! The Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Oops! The page you are looking for does not exit. it might been moved or deleted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Return to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2670:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _blog_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog/postData */ 2297);
/* harmony import */ var _practice_practiceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../practice/practiceData */ 6807);
/* harmony import */ var _lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lawyer/lawyerData */ 7997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






const _c0 = function (a1, a2) {
  return ["/practices", a1, a2];
};
function HomeComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const practice_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", practice_r1.id == 0 || practice_r1.id == 1 ? "col-sm-6 col-lg-6" : "col-sm-6 col-lg-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](practice_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](practice_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](practice_r1.contentPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, practice_r1.id, practice_r1.name));
  }
}
class HomeComponent {
  constructor() {
    this.posts = _blog_postData__WEBPACK_IMPORTED_MODULE_0__.postData;
    this.lawyers = _lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_2__.attorneyData;
    this.practices = _practice_practiceData__WEBPACK_IMPORTED_MODULE_1__.practiceData;
    this.attorneyResultIndexes = [];
    this.postResultIndexes = [];
    this.practiceResultIndexes = [];
    this.queryTypes = [this.posts, this.lawyers, this.practices];
    this.search = '';
  }
  ngOnInit() {
    this.getContentPreviews();
  }
  onChange() {
    if (this.search.length < 3) {
      this.attorneyResultIndexes = [];
      this.postResultIndexes = [];
      this.practiceResultIndexes = [];
    }
    if (this.search.length >= 3) {
      this.getAllQueryResults();
    }
  }
  getAllQueryResults() {
    // queryTypes is all the data types that will be filtered through
    this.queryTypes.forEach(queryType => {
      console.log(queryType);
      this.getQueryResults(queryType);
    });
  }
  getQueryResults(queryType) {
    // loop through all
    queryType.forEach(object => {
      let includesSearchString = object.name?.toLowerCase().includes(this.search.toLowerCase());
      // if name doesn't exist use contentPreview
      if (!object.name) {
        includesSearchString = object.contentPreview.toLowerCase().includes(this.search.toLowerCase());
      }
      // if we match the search string and we didn't already match these indexes add it to the respective result arrays
      switch (object.type) {
        case 'lawyer':
          if (includesSearchString && !this.attorneyResultIndexes.includes(object.id)) {
            this.attorneyResultIndexes.push(object.id);
          }
          break;
        case 'practice':
          if (includesSearchString && !this.practiceResultIndexes.includes(object.id)) {
            this.practiceResultIndexes.push(object.id);
          }
          break;
        case 'post':
          if (includesSearchString && !this.postResultIndexes.includes(object.id)) {
            this.postResultIndexes.push(object.id);
          }
          break;
      }
    });
  }
  getContentPreviews() {
    this.attorneyNames = this.getQueryStrings(this.lawyers);
    this.postContentPreviews = this.getQueryStrings(this.posts);
    this.practiceContentPreviews = this.getQueryStrings(this.practices);
  }
  getQueryStrings(data) {
    let array = data.map((object, index) => {
      let arrayOfStrings;
      if (object.contentPreview) {
        arrayOfStrings = object.contentPreview.split(" ");
      } else {
        arrayOfStrings = object.name.split(" ");
      }
      return arrayOfStrings;
    });
    return array;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 143,
    vars: 1,
    consts: [[1, "banner-area", "banner-area-two", "banner-img-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-12"], [1, "banner-item"], [1, "banner-left"], ["routerLink", "/about"], [1, "icofont-arrow-right"], [1, "help-area", "help-area-two"], [1, "container-fluid"], [1, "col-lg-6"], [1, "help-item", "help-left", "hide"], ["srcset", "assets/img/diverse.webp", "alt", "", 1, "hide"], [1, "help-item"], [1, "help-right"], [2, "padding-top", "-80px", "font-weight", "500", "font-size", "15px", "color", "rgba(53, 53, 53, 0.507)"], ["routerLink", "/about", 1, "cmn-btn", 2, "margin-top", "30px"], [1, "help-shape"], [1, "practice-area", "practice-area-two", "pt-0"], [1, "section-title", 2, "margin-bottom", "-30px !important"], [1, "practice-area", "practice-area-three", "pt-100"], [1, "row"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "faq-wrap"], [1, "faq-head"], [1, "faq-item"], [1, "accordion"], ["data-wow-delay", ".3s", 1, "wow", "animate__animated", "animate__fadeInUp"], ["data-wow-delay", ".4s", 1, "wow", "animate__animated", "animate__fadeInUp"], ["data-wow-delay", ".5s", 1, "wow", "animate__animated", "animate__fadeInUp"], ["data-wow-delay", ".6s", 1, "wow", "animate__animated", "animate__fadeInUp"], ["data-wow-delay", ".7s", 1, "wow", "animate__animated", "animate__fadeInUp"], [3, "ngClass"], [1, "practice-item"], [1, "practice-icon"], [3, "routerLink"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "The Republic Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "We strive to provide legal solutions that empower our clients and promote the greater good.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 4)(18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12)(22, "div", 15)(23, "div", 16)(24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "The Republic Law is a business and litigation law firm serving the people. We are a dedicated team that believes everyone deserves access to high-quality legal services, regardless of their background or circumstances.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "- Ugo Ukpabi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Barrister, Solicitor & Notary Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "section", 20)(36, "div", 3)(37, "div", 21)(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "HOW CAN WE HELP YOU");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Practice Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "section", 22)(43, "div", 3)(44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, HomeComponent_div_45_Template, 10, 10, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "section")(47, "div", 3)(48, "div", 25)(49, "div", 5)(50, "div", 26)(51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "FAQ's");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 27)(54, "ul", 28)(55, "li", 29)(56, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "What are your fees for legal services?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Our fee structure varies depending on the complexity and type of legal service required. We offer transparent and competitive pricing, and we strive to provide cost-effective solutions for our clients. To get a detailed understanding of our fees, we recommend scheduling a consultation with one of our lawyers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li", 30)(61, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "How do you accept payment for your services? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "We understand the importance of convenience for our clients, which is why we offer various payment options. You can make payments through traditional methods such as cash, checks, or credit/debit cards. Additionally, we have an online payment system where you can conveniently settle your invoices by following a secure payment link.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li", 31)(66, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "What are you core practice areas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Our law firm offers a comprehensive range of legal services to meet our clients' needs. Some of our key practice areas include:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "br")(71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li")(73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Civil, Corporate /Commercial Litigation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " Representing clients in civil disputes, such as contract disputes, property disputes, and personal injury claims. We also appear for clients before disciplinary tribunals like the CPA, The CPSA and the Alberta Human Rights Tribunals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "li")(77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Family Law:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Handling matters related to divorce and division of matrimonial property.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "li")(81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Intellectual Property Law:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Assisting clients with copyright, trademark, patent, and trade secret matters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "li")(85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Real Estate Law:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " Advising clients on property transactions, leases, zoning, land use, and real estate disputes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "li")(89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Corporate Matters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " Drafting agreements, mergers and acquisitions and due diligence across international borders.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li", 32)(93, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Why should I choose The Republic Law? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "There are several reasons why you would choose The Republic Law:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "br")(98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "li")(100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Experience and Expertise:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " Our team of lawyers have extensive experience in their respective areas of practice, ensuring that you receive high-quality legal service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "li")(104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Client-Centered Approach:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " We prioritize our clients' needs and work closely with them, providing personalized solutions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "li")(108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Results-Driven:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, ": We are dedicated to achieving favourable outcomes for our clients and will diligently advocate for their rights and interests.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "li")(112, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Transparent Communication:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " We believe in open and transparent communication, keeping our clients informed at every stage of their legal matters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "li")(116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Integrity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " Much as we drive for success, it is critically important for us to do so within the bounds of our professional ethics. Ethics underpins and guides our practice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "li")(120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Commitment to Excellence:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, " Our firm upholds the highest standards of professionalism, ethics and integrity, striving to exceed clients expectations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "li", 33)(124, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "What if I cannot afford legal representation?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, " We understand that legal costs can be a concern for some clients. Our firm is committed to ensuring access to justice for all. In certain cases, we offer flexible payment plans or alternative fee arrangements. Additionally, we can provide guidance on potential sources of legal aid or pro bono services available in your area.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "li", 33)(129, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "What is your approach to resolving legal disputes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " At our law firm, we prioritize finding the most efficient and effective solutions for our clients. We strive to resolve legal disputes through negotiation, mediation, arbitration and settlement discussions whenever possible, as these approaches can often save time, money, and emotional stress. However, if litigation becomes necessary, we have skilled lawyers who will vigorously advocate for your rights in the courtroom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "li", 33)(134, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Do you handle cases on a contingency fee basis? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, " Yes, in certain types of cases, we offer representation on a contingency fee basis. This means that our fees are contingent upon successfully recovering compensation on your behalf. We will discuss the details of our fee structure during the initial consultation and ensure that you have a clear understanding of the terms before proceeding.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "li", 33)(139, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "How do I get started with your law firm?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " To get started, simply reach out to our firm via phone, email, or through the contact form on our website. Our friendly staff will assist you in scheduling an initial consultation with one of our lawyers. During the consultation, we will discuss your legal needs, provide an overview of our services, and determine the best course of action for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.practices);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7956:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/lawyer-details/lawyer-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttorneyDetailsComponent": () => (/* binding */ AttorneyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lawyer/lawyerData */ 7997);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function AttorneyDetailsComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r0.lawyer.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.lawyer.phone);
  }
}
function AttorneyDetailsComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r1.lawyer.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.lawyer.email);
  }
}
function AttorneyDetailsComponent_li_18_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "LinkedIn Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", link_r4.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AttorneyDetailsComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AttorneyDetailsComponent_li_18_a_2_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icofont-", link_r4.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", link_r4.link);
  }
}
function AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.lawyer[key_r8]);
  }
}
function AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_div_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const content_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](content_r16);
  }
}
function AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_div_2_li_2_Template, 2, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.lawyer[key_r8]);
  }
}
function AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_div_1_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_div_2_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.isString(ctx_r11.lawyer[key_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.isString(ctx_r11.lawyer[key_r8]));
  }
}
function AttorneyDetailsComponent_div_27_mat_expansion_panel_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel", 26)(1, "mat-expansion-panel-header", 27)(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AttorneyDetailsComponent_div_27_mat_expansion_panel_9_ng_template_4_Template, 3, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r9 = ctx.index;
    const isFirst_r10 = ctx.first;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", isFirst_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.attorneyKeysTitles[index_r9], " ");
  }
}
function AttorneyDetailsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 4)(2, "div", 23)(3, "div", 5)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-accordion", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AttorneyDetailsComponent_div_27_mat_expansion_panel_9_Template, 5, 2, "mat-expansion-panel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.lawyer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.lawyer.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.attorneyKeys);
  }
}
const _c0 = function (a1, a2) {
  return ["/meet-our-team", a1, a2];
};
class AttorneyDetailsComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.currentRouteId = id;
      this.lawyer = _lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_0__.attorneyData[+this.route.snapshot.paramMap.get('id')];
      if (!this.lawyer) {
        this.router.navigate(['/meet-our-team']);
      }
      this.lawyers = _lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_0__.attorneyData;
      this.nextAttorneyName = this.lawyers[id + 1]?.name;
      this.previousAttorneyName = this.lawyers[id - 1]?.name;
      this.finalAttorneyId = this.lawyers[this.lawyers.length - 1].id;
      this.getAttorneyKeys();
      this.getKeysTitles();
    });
  }
  ngOnInit() {}
  getAttorneyKeys() {
    this.attorneyKeys = Object.keys(this.lawyer).filter(key => {
      if (this.lawyer[key] && !(key !== "practiceAreas" && key !== "biography" && key !== "education" && key !== "admissions" && key !== "designation" && key !== "membership" && key !== "awards" && key !== "languages")) {
        return key;
      }
    });
  }
  getKeysTitles() {
    let attorneyKeysCopy = [...this.attorneyKeys];
    attorneyKeysCopy.forEach((key, index) => {
      switch (key) {
        case 'practiceAreas':
          attorneyKeysCopy[index] = 'Areas of Practice';
          break;
        case 'admission':
          attorneyKeysCopy[index] = 'Admissions';
          break;
        default:
          const startWithUpperCase = key.charAt(0).toUpperCase() + key.slice(1);
          attorneyKeysCopy[index] = startWithUpperCase;
          break;
      }
    });
    this.attorneyKeysTitles = attorneyKeysCopy;
  }
  isString(key) {
    return typeof key === 'string';
  }
  static #_ = this.ɵfac = function AttorneyDetailsComponent_Factory(t) {
    return new (t || AttorneyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AttorneyDetailsComponent,
    selectors: [["app-lawyer-details"]],
    viewQuery: function AttorneyDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatAccordion, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
      }
    },
    decls: 28,
    vars: 17,
    consts: [[1, "lawyer-details"], [1, "container"], [1, "row"], [1, "col-lg-5", "col-lg-1", "col-md-6"], [1, "attor-details-item"], [1, "attor-details-name"], [2, "color", "#C8B085", "padding-bottom", "0px"], ["alt", "Details", 1, "lawyer-img", 3, "srcset"], [1, "attor-details-left"], [1, "attor-social-details", 2, "padding-top", "50px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "attor-prev"], [3, "ngClass"], [3, "routerLink"], ["class", "col-lg-7 col-md-6", 4, "ngIf"], [1, "flaticon-call", 2, "padding-right", "10px"], [3, "href"], [1, "flaticon-email", 2, "padding-right", "10px"], [2, "padding-right", "10px"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "col-lg-7", "col-md-6"], [1, "attor-details-right"], [1, "wow", "animate__animated", "animate__fadeInUp", "material-accordion"], ["class", "accordion-panel", "data-wow-delay", ".3s", 3, "expanded", 4, "ngFor", "ngForOf"], ["data-wow-delay", ".3s", 1, "accordion-panel", 3, "expanded"], [1, "accordion-panel-header"], ["matExpansionPanelContent", ""], [1, "accordion-panel-content"], [2, "white-space", "pre-wrap"]],
    template: function AttorneyDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AttorneyDetailsComponent_li_16_Template, 4, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AttorneyDetailsComponent_li_17_Template, 4, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AttorneyDetailsComponent_li_18_Template, 3, 4, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12)(20, "ul")(21, "li", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 13)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AttorneyDetailsComponent_div_27_Template, 10, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lawyer.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lawyer.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcset", ctx.lawyer.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lawyer.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lawyer.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lawyer.socialLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentRouteId !== 0 ? "nav-prev" : "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, ctx.currentRouteId - 1, ctx.previousAttorneyName));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentRouteId !== ctx.finalAttorneyId ? "nav-prev" : "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c0, ctx.currentRouteId + 1, ctx.nextAttorneyName));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lawyer);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelContent],
    styles: [".material-accordion {\n  margin-left: 8px;\n  border-radius: 0px !important;\n}\n\n.accordion-panel {\n  border: 1px solid lightgray;\n}\n\n.accordion-panel-header {\n  border-radius: 0px !important;\n}\n\n.mat-expansion-panel-header {\n  padding: 15px;\n  border-radius: 0px !important;\n}\n\n.accordion-panel-content {\n  padding: 20px 0;\n  color: #4a4a4a;\n}\n\n.mat-expansion-panel-header-title {\n  padding: 11px !important;\n  font-size: 26px !important;\n  font-weight: 500;\n  letter-spacing: 1.5px;\n}\n\n.mat-expansion-panel-header.mat-expanded,\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #1F3147 !important;\n  color: white !important;\n  padding: 11px 35px 11px 10px !important;\n  border-radius: 0px !important;\n}\n\n.mat-expansion-panel {\n  box-shadow: 5px 3px 10px rgba(19, 17, 17, 0.144), -5px 3px 10px rgba(19, 17, 17, 0.158);\n  border-radius: 0px !important;\n  margin: 15px 0 !important;\n}\n\n.mat-expansion-panel-content {\n  background-color: white !important;\n}\n\n.mat-expansion-panel:hover {\n  box-shadow: 5px 3px 10px rgba(19, 17, 17, 0.144), -5px 3px 10px rgba(19, 17, 17, 0.158);\n  background-color: rgba(128, 128, 128, 0.048);\n  transition: 0.3s;\n  border-radius: 0px !important;\n  margin: 15px 0 !important;\n}\n\n.mat-expansion-panel-header {\n  padding: 11px 35px 11px 10px !important;\n}\n\n.mat-expansion-indicator::after {\n  color: #C2A878 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sYXd5ZXItZGV0YWlscy9sYXd5ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUFESjs7QUFLRTtFQUNFLDJCQUFBO0FBRko7O0FBSUU7RUFDRSw2QkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQU9FO0VBQ0Usd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFKSjs7QUFVRTs7RUFFRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtBQVBKOztBQVVFO0VBQ0UsdUZBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBUEo7O0FBV0E7RUFDRSxrQ0FBQTtBQVJGOztBQVVFO0VBQ0UsdUZBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQVBKOztBQVdFO0VBQ0UsdUNBQUE7QUFSSjs7QUFXRTtFQUNDLHlCQUFBO0FBUkgiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIC5tYXRlcmlhbC1hY2NvcmRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgfVxuXG4gIC5hY2NvcmRpb24tcGFuZWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgfVxuICAuYWNjb3JkaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWNjb3JkaW9uLXBhbmVsLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGNvbG9yOiAjNGE0YTRhO1xuICB9XG5cblxuXG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAxMXB4ICAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIFxuICB9XG5cblxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQsXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxRjMxNDcgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMXB4IDM1cHggMTFweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gIH1cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwgIHtcbiAgICBib3gtc2hhZG93OiA1cHggM3B4IDEwcHggcmdiYSgxOSwgMTcsIDE3LCAwLjE0NCksIC01cHggM3B4IDEwcHggcmdiYSgxOSwgMTcsIDE3LCAwLjE1OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcbiAgICBcbiAgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6aG92ZXIgIHtcbiAgICBib3gtc2hhZG93OiA1cHggM3B4IDEwcHggcmdiYSgxOSwgMTcsIDE3LCAwLjE0NCksIC01cHggM3B4IDEwcHggcmdiYSgxOSwgMTcsIDE3LCAwLjE1OCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA0OCk7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDE1cHggMCAhaW1wb3J0YW50O1xuICAgIFxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMXB4IDM1cHggMTFweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgIGNvbG9yOiAjQzJBODc4ICFpbXBvcnRhbnQ7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7038:
/*!*************************************************************!*\
  !*** ./src/app/components/pages/lawyer/lawyer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttorneyComponent": () => (/* binding */ AttorneyComponent)
/* harmony export */ });
/* harmony import */ var _lawyerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawyerData */ 7997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function AttorneyComponent_div_9_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lawyer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", lawyer_r1.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", lawyer_r1.email, " ");
  }
}
function AttorneyComponent_div_9_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lawyer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "tel:", lawyer_r1.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", lawyer_r1.phone, " ");
  }
}
const _c0 = function (a1, a2) {
  return ["/meet-our-team", a1, a2];
};
function AttorneyComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11)(4, "div", 12)(5, "h3", 13)(6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 16)(12, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AttorneyComponent_div_9_a_14_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AttorneyComponent_div_9_a_17_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const lawyer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, lawyer_r1.id, lawyer_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcset", lawyer_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, lawyer_r1.id, lawyer_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lawyer_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c0, lawyer_r1.id, lawyer_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lawyer_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lawyer_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lawyer_r1.phone);
  }
}
class AttorneyComponent {
  constructor() {
    this.lawyers = _lawyerData__WEBPACK_IMPORTED_MODULE_0__.attorneyData;
  }
  trackById(object) {
    return object.id;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AttorneyComponent_Factory(t) {
    return new (t || AttorneyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AttorneyComponent,
    selectors: [["app-lawyer"]],
    decls: 10,
    vars: 2,
    consts: [[1, "page-title-area", "title-img-our-team", "image-container", 2, "background-attachment", "fixed", "background-position", "center top 25%"], [1, "d-table"], [1, "d-table-cell"], [1, "page-title-text"], [1, "team-area", "team-area-two", "pt-100"], [1, "container"], [1, "row"], ["class", "col-sm-6 col-lg-4 wow animate__animated animate__fadeInUp", "data-wow-delay", ".3s", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-wow-delay", ".3s", 1, "col-sm-6", "col-lg-4", "wow", "animate__animated", "animate__fadeInUp"], [1, "image-container", 2, "display", "flex", "height", "350px", "overflow", "hidden", "align-items", "flex-start", 3, "routerLink"], ["alt", "Team", 2, "flex", "1", "object-fit", "cover", "object-position", "center", 3, "srcset"], [1, "team-item", 2, "background-color", "#ecececb4", "padding", "0px"], [1, "lawyer-card", 2, "padding", "15px"], [2, "padding-top", "10px", "color", "#CBBB7A", 3, "routerLink"], [2, "color", "#142233"], [2, "color", "#CBBB7A", 3, "routerLink"], [2, "list-style", "none", "padding", "0", "margin", "0"], [2, "padding-bottom", "10px !important"], [1, "icofont-envelope"], ["style", "color: #142233; font-size: 14px;", "target", "_blank", 3, "href", 4, "ngIf"], [1, "icofont-phone"], ["target", "_blank", 2, "color", "#142233", "font-size", "14px", 3, "href"]],
    template: function AttorneyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AttorneyComponent_div_9_Template, 18, 17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lawyers)("ngForTrackBy", ctx.trackById(ctx.lawyers));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7997:
/*!*******************************************************!*\
  !*** ./src/app/components/pages/lawyer/lawyerData.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attorneyData": () => (/* binding */ attorneyData)
/* harmony export */ });
let attorneyData = [{
  id: 0,
  type: "lawyer",
  name: "Ugo Ukpabi",
  title: "Lawyer",
  biography: "Dr. Ugo Ukpabi, the Founder and Principal at The Republic Law, possesses a wealth of experience as a highly respected litigator specializing in corporate, commercial, and civil litigation.\n\nWith over two decades of expertise and a comprehensive understanding of different legal markets, including international legal systems, he provides exceptional legal guidance and strong advocacy to his clients. Dr. Ugo Ukpabi has exposure to legal regimes in Nigeria, Geneva, USA, and Canada. Driven by a client-centered approach, he is dedicated to finding creative solutions to complex legal challenges while maintaining the highest ethical standards. Clients who work with Dr. Ukpabi can trust his unwavering commitment to protecting their interests and achieving their desired outcomes.\n\nDr. Ugo Ukpabi has excelled in handling a wide range of litigation matters, appearing before all levels of Alberta courts. His exposure to various legal systems and ability to navigate cross-border issues bring invaluable insights and strategic advantages to his clients. Known for his sensitivity, tact, and deep understanding of their unique circumstances, Dr. Ugo Ukpabi provides exceptional legal representation, making him a highly sought-after litigator in the corporate, commercial, and civil arenas.",
  practiceAreas: ["Litigation", "Personal Injury", "Select Family law Issues, Division of Matrimonial Property comprising of corporate assets", "Real Estate", "Commercial Corporate Transactions"],
  education: ["Ph.D. from Osgoode Hall Law, York University, Toronto", "MA from Carleton University, Ottawa", "LL.M from Obafemi Awolowo University, Ile-Ife (Nigeria)", "LL.B. (Hons) from the University of Nigeria", "BL. Nigerian Law School"],
  admissions: ["Nigeria, 1995", "Alberta, 2008"],
  designation: ["C.Dir. (2023)", "K.C. (King's Counsel) (2022)"],
  membership: ["Law Society of Alberta", "Canadian Bar Association", "Nigerian Bar Association", "Calgary Bar Association", "International Law Association, Canada"],
  awards: ["John Ware Fellow (2022)", "Hugo Grotius Visiting Research Scholar at the University of Michigan Law School, Ann Arbor, USA (2004)", "Peter Hogg Pre-Doctoral Fellow at Osgoode Hall Law School, York University, Toronto (2003)", "Harley D. Hallett Graduate Scholarship to Osgoode Hall Law School (2003)"],
  languages: ["English", "Igbo"],
  phone: "1-587-319-5916 Ext 101",
  email: "ugoukpabi@republiclaw.ca",
  img: "assets/img/Ugo.webp",
  socialLinks: [{
    name: "linkedin",
    link: "https://www.linkedin.com/in/ugo-ukpabi-5080299"
  }]
}, {
  id: 1,
  type: "lawyer",
  name: "George Akpan",
  title: "Student-At-Law",
  biography: "Dr. George Akpan is currently a Student-At-Law at The Republic Law, but has legal professional experience in petroleum and foreign investment law spanning over three decades. With extensive experience across various industries and regions, Dr. George Akpan's expertise is highly sought after.\n\nHaving spent over thirteen years at Mobil Producing Nigeria (an ExxonMobil affiliate), Dr. George's contributions were instrumental in his rise to the position of Senior Legal Counsel before departing in 2020. During his tenure at ExxonMobil, he excelled in roles such as Associate Counsel where he oversaw all legal functions within the MPN JV Operations. Dr. George adeptly handled high-stakes negotiations, reviewing multi- billion-dollar procurement and oil and gas contracts. He also played a pivotal role in securing external financing for asset development while ensuring compliance with Nigerian laws governing the company's operations. Notably, Dr. George served as the lead lawyer advising the company on legal and policy matters pertaining to the Nigerian Petroleum Industry Act, which was signed into law in 2021.\n\nIn addition to his remarkable tenure at ExxonMobil, Dr. George's career encompasses prestigious consulting roles with renowned international organizations, including the World Bank and the United Nations Conference on Trade and Development (UNCTAD). He has held esteemed teaching positions at globally recognized universities such as Aoyama Gakuin University in Japan and served as a visiting professor at the United Nations University, Tokyo, Japan. George's extensive publications in reputable journals have further solidified his standing as an authority in petroleum law, foreign investment, international trade, and policy. George’s wealth of experience, profound knowledge, and exceptional track record make him an invaluable asset to clients seeking unparalleled legal guidance in the realms of petroleum and investment law.",
  practiceAreas: ["Litigation", "Personal Injury", "Family Law", "Real Estate", "Commercial Corporate Transactions", "Oil & Gas Law", "Foreign Investment Negotiation/Investment Dispute Settlement"],
  education: ["Ph.D. in Foreign Investment Law and Policy from the National University of Singapore", "LL.M in Petroleum Law, Policy, and Economics from the University of Dundee", "LL.M from the University of Lagos", "LL.B (Hons) from the University of Uyo", "Advanced Certificate in Intellectual Property Law from the World Intellectual Property Organization (WIPO)", "BL. Nigerian Law School"],
  admissions: ["Nigeria, 1990"],
  designation: undefined,
  membership: ["Law Society of Alberta", "Nigerian Bar Association", "Canadian Bar Association", "International Law Association, Canada", "Calgary Bar Association"],
  awards: ["Visiting Fellow, United Nations University, Institute of Advanced Studies", "Visiting Scholar, WTO Centre, Aoyama Gakuin University, Shibuya, Tokyo", "JSPS-UNU Postdoctoral Fellowship, United Nations University- Institute of Advanced Studies, Japan", "University Graduate Fellowship, National University of Singapore", "Research Scholarship, National University of Singapore", "Laszlo Gombos Award for Outstanding Academic Performance from the Petroleum and Mineral Law Education Trust Fund, London", "University of Dundee Research Studentship", "Joint Japan/World Bank Scholarship Award", "University Prize, Best Graduating Student in Law, University of Uyo"],
  languages: ["Anang", "Efik", "English"],
  phone: "1-587-319-5916 Ext. 103",
  email: "georgeakpan@republiclaw.ca",
  img: "assets/img/george.webp",
  socialLinks: [{
    name: "linkedin",
    link: "https://www.linkedin.com/in/george-sampson-akpan-286615113"
  }]
}, {
  id: 2,
  type: "lawyer",
  name: "Theodore Oware",
  title: "Student-At-Law",
  biography: "Theodore Oware, is currently a Student-At-Law at The Republic Law. He is dedicated to honing his legal skills and knowledge under the guidance of experienced lawyers. He actively engages in a diverse range of legal matters, including intellectual property, commercial law, and litigation.\n\nTheodore's commitment to providing exceptional legal services stems from his expertise and passion for assisting clients in navigating the complexities of intellectual property law. With an LL.M degree in Intellectual Property and Information Technology from The University of Sussex, coupled with practical experience as a Trainee Trademark Agent, he possesses a comprehensive understanding of trademark law, prosecution, and protection.\n\nAt The Republic Law, Theodore has expanded his practice areas to include litigation, personal injury, and immigration. Theodore has developed skills in crafting persuasive arguments and legal strategies, gaining a deep understanding of courtroom dynamics. Theodore's dedication to seeking justice for those involved in personal injury cases and providing knowledgeable and personalized guidance in immigration matters make him an important asset to The Republic Law. With a client-centred approach, strong advocacy skills, and strategic thinking, Theodore confidently navigates complex legal landscapes, driven by the desire to make a positive impact and help clients achieve their legal goals.",
  practiceAreas: ["Litigation", "Intellectual Property", "Immigration", "Personal Injury"],
  education: ["LL.M in Intellectual Property and Information Technology from The University of Sussex", "LL.B. (Hons) with International Relations from The University of Sussex", "B.A. in Philosophy from McMaster University"],
  admissions: undefined,
  designation: undefined,
  membership: ["Law Society of Alberta", "The College of Patent Agents and Trademark Agents", "Calgary Bar Association", "International Law Association, Canada"],
  awards: undefined,
  languages: ["English"],
  phone: "1-587-319-5916 Ext 104",
  email: "TheodoreO@republiclaw.ca",
  img: "assets/img/theodore.webp",
  socialLinks: [{
    name: "linkedin",
    link: "https://www.linkedin.com/in/theodore-o-410a36b8"
  }]
}];

/***/ }),

/***/ 8951:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/practice-details/practice-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeDetailsComponent": () => (/* binding */ PracticeDetailsComponent)
/* harmony export */ });
/* harmony import */ var _practice_practiceData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../practice/practiceData */ 6807);
/* harmony import */ var _lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lawyer/lawyerData */ 7997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = function (a1, a2) {
  return ["/practices", a1, a2];
};
function PracticeDetailsComponent_ng_container_24_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li")(2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const practice_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, practice_r1.id, practice_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", practice_r1.name, " ");
  }
}
function PracticeDetailsComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PracticeDetailsComponent_ng_container_24_ul_1_Template, 5, 5, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const practice_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentPageName !== practice_r1.name);
  }
}
const _c1 = function (a0) {
  return {
    "background-image": a0
  };
};
class PracticeDetailsComponent {
  constructor(route) {
    this.route = route;
    this.route.paramMap.subscribe(() => {
      this.practice = _practice_practiceData__WEBPACK_IMPORTED_MODULE_0__.practiceData[+this.route.snapshot.paramMap.get('id')];
      this.headerImage = this.practice.img;
    });
  }
  ngOnInit() {
    let practiceId = this.route.snapshot.paramMap.get('id');
    this.practice = _practice_practiceData__WEBPACK_IMPORTED_MODULE_0__.practiceData[practiceId];
    this.practices = _practice_practiceData__WEBPACK_IMPORTED_MODULE_0__.practiceData;
    this.lawyers = _lawyer_lawyerData__WEBPACK_IMPORTED_MODULE_1__.attorneyData;
    this.currentPageName = this.practice.name;
    this.headerImage = this.practice.img;
  }
  static #_ = this.ɵfac = function PracticeDetailsComponent_Factory(t) {
    return new (t || PracticeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PracticeDetailsComponent,
    selectors: [["app-practice-details"]],
    decls: 25,
    vars: 7,
    consts: [[1, "page-title-area-practices", 3, "ngStyle"], [1, "d-table"], [1, "d-table-cell"], [1, "page-title-text"], [2, "padding-top", "80px"], [1, "page-title-text-responsive"], [1, "practice-details-area"], [1, "container"], [1, "row"], [1, "practice-details-item"], [1, "practice-details-content"], [1, "section-title", "text-start"], [2, "white-space", "pre-wrap", "padding-right", "20px"], [1, "practice-details-case"], [1, "blog-details-category"], [2, "color", "#161618", "padding-bottom", "10px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "routerLink"], [1, "icofont-arrow-right"]],
    template: function PracticeDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Other Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, PracticeDetailsComponent_ng_container_24_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, "url(" + ctx.headerImage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.practice.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.practice.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.practice.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.practices);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1581:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/practice/practice.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeComponent": () => (/* binding */ PracticeComponent)
/* harmony export */ });
/* harmony import */ var _practiceData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practiceData */ 6807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a1, a2) {
  return ["/practices", a1, a2];
};
function PracticeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const practice_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", practice_r1.id == 0 || practice_r1.id == 1 ? "col-sm-6 col-lg-6" : "col-sm-6 col-lg-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](practice_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](practice_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](practice_r1.contentPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, practice_r1.id, practice_r1.name));
  }
}
class PracticeComponent {
  constructor() {}
  ngOnInit() {
    this.practices = _practiceData__WEBPACK_IMPORTED_MODULE_0__.practiceData;
  }
  static #_ = this.ɵfac = function PracticeComponent_Factory(t) {
    return new (t || PracticeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PracticeComponent,
    selectors: [["app-practice"]],
    decls: 10,
    vars: 1,
    consts: [[1, "page-title-area-practices", "title-img-our-practice"], [1, "d-table"], [1, "d-table-cell"], [1, "page-title-text"], [1, "practice-area", "practice-area-three", "pt-100"], [1, "container"], [1, "row"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "practice-item"], [1, "practice-icon"], [2, "padding-top", "10px"], [3, "routerLink"]],
    template: function PracticeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Practices Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PracticeComponent_div_9_Template, 10, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.practices);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6807:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/practice/practiceData.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "practiceData": () => (/* binding */ practiceData)
/* harmony export */ });
const practiceData = [{
  id: 0,
  name: "Litigation",
  img: "../assets/img/litigation.webp",
  content: "Our law firm focuses on litigation, offering clients a unique blend of civil/corporate and commercial litigations. With a team of seasoned litigators, we provide exceptional representation personalized to each client's specific needs. From complex civil disputes, arbitrations, corporate/commercial disputes involving shareholders of corporations, administrative hearings before various regulatory bodies, to personal injury claims, we navigate intricate legal issues, conduct thorough investigations, and craft persuasive arguments to achieve optimal results. With a track record of success, we are dedicated to protecting our clients' rights and achieving justice. When you choose our firm for your litigation needs, you can expect a personalized approach, meticulous preparation, and unwavering dedication to your case. We understand the challenges of litigation and strive to minimize the stress and uncertainty involved. Let us be your trusted partner in the courtroom, guiding you through the complexities of the litigation process and fighting tirelessly to protect your interests. With our tenacity, we are committed to achieving the best possible outcome for you.",
  contentPreview: "Passionate litigators providing personalized representation for civil disputes and personal injury claims. Achieve optimal results with our strategic thinking and unwavering determination.",
  class: "icofont-law-alt-1",
  type: "practice"
}, {
  id: 1,
  name: "Commercial Corporate Transactions",
  img: "../assets/img/corporate-ct.webp",
  content: "When it comes to business matters, our law firm is well-versed in commercial and corporate transactions. We understand that each business has unique needs and objectives, and we provide legal solutions that help our clients achieve their commercial goals. With a team member with the C. Dir. (Chartered Director) designation, our law firm engages in drafting and negotiating a variety of simple and complex commercial contracts, handling mergers and acquisitions, and handling due diligence reviews across international boundaries. Our experienced team offers strategic guidance and meticulous attention to detail, ensuring the smooth execution of complex transactions in a dynamic business environment.",
  contentPreview: "Personalized legal solutions for your business goals. From contracts to mergers and acquisitions, we offer strategic guidance and attention to detail.",
  class: "icofont-briefcase-2",
  type: "practice"
}, {
  id: 2,
  name: "Personal Injury",
  img: "../assets/img/personal-injury.webp",
  content: "Our law firm prides itself as the go to law firm for all personal injury cases. We recognize the devastating impact personal injuries can have on individuals and their families. With a compassionate approach, we specialize in handling a wide range of personal injury cases, including slip and fall accidents, medical malpractice claims, motor vehicle accidents, and wrongful death. Our experienced team understands the complexities of these cases and works diligently to protect the rights of our clients. We conduct thorough investigations, collaborate with medical and other experts, to skillfully negotiate or litigate on behalf of our clients to secure the compensation they deserve. With unwavering dedication, we strive to bring justice and help rebuild lives affected by personal injuries.",
  contentPreview: "Compassionate representation for slip and fall accidents, medical malpractice, motor vehicle accidents, and wrongful death cases. We fight for your rights and secure the compensation you deserve.",
  class: "icofont-crutch",
  type: "practice"
}, {
  id: 3,
  name: "Immigration",
  img: "../assets/img/immigration.webp",
  content: "At our law firm, we understand the significance of immigration matters and the impact they have on individuals and families. With our deep experience in immigration law, we provide personalised guidance and strategic solutions to help clients navigate the immigration processes. Whether it is obtaining work permits, sponsoring family members, or addressing inadmissibility issues, we are committed to providing compassionate and effective representation, personalized to meet the needs of our clients and ensuring our clients' immigration goals become a reality.",
  contentPreview: "Whether it is obtaining work permits, sponsoring family members, or addressing inadmissibility issues, we are committed to providing compassionate and effective representation, personalized to meet the needs of our clients and ensuring our clients' immigration goals become a reality.",
  class: "icofont-airplane",
  type: "practice"
}, {
  id: 4,
  name: "Family Law",
  img: "../assets/img/family-law.webp",
  content: "At our firm, we recognize the sensitive nature of family law matters and the profound impact they have on individuals and families. We approach each case with empathy, offering personalized support and practical solutions to help clients navigate division of matrimonial property. Our goal is to minimize conflict while protecting our clients' rights and advocating for the best interests of the family, helping them move forward with confidence and stability.",
  contentPreview: "Our goal is to minimize conflict while protecting our clients' rights and advocating for the best interests of the family, helping them move forward with confidence and stability.",
  class: "icofont-group-students",
  type: "practice"
}, {
  id: 5,
  name: "Cyberlaw/Intellectual Property",
  img: "../assets/img/cyber-law2.webp",
  content: "In the ever-evolving digital landscape, our firm is increasing being retained for cyberlaw and intellectual property matters. We assist clients in safeguarding their creative works, trademarks, and patents, providing comprehensive legal protection against infringement and unauthorized use. We address issues such as data privacy, cybersecurity breaches, and online defamation. Our innovative approach combines legal knowledge with a keen understanding of technology, allowing us to provide cutting-edge solutions to the unique challenges posed by the digital age.",
  contentPreview: "Comprehensive protection for creative works, trademarks, and patents. We address data privacy, cybersecurity breaches, and online defamation.",
  class: "icofont-laptop-alt",
  type: "practice"
}, {
  id: 6,
  name: "Real Estate",
  img: "../assets/img/real-estate.webp",
  content: "At our law firm, we provide comprehensive legal services for all your real estate needs. Whether you are buying, selling, or refinancing a property, our team is here to guide you through the process with efficiency and expertise. Our team conducts contract reviews, negotiates terms, and ensures all legal requirements are met, protecting your interests throughout the process. Whether you are buying your dream home, selling a property, or refinancing, we strive to deliver a seamless experience.",
  contentPreview: "Efficient legal services for buying, selling, or refinancing property. We protect your interests and optimize your financial position.",
  class: "icofont-home",
  type: "practice"
}];

/***/ }),

/***/ 3823:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/terms-conditions/terms-conditions.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsComponent": () => (/* binding */ TermsConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TermsConditionsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TermsConditionsComponent_Factory(t) {
    return new (t || TermsConditionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TermsConditionsComponent,
    selectors: [["app-terms-conditions"]],
    decls: 11,
    vars: 0,
    consts: [[1, "about-area", "pt-100"], [1, "section-title"], [1, "privacy-area", "pt-50"], [1, "container"], [1, "privacy-item"]],
    template: function TermsConditionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "THE REPUBLIC LAW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2)(7, "div", 3)(8, "div", 4)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The information and articles contained in this web site are general in nature and are not intended to provide legal advice. You should not act or fail to act on anything based on any of the material contained herein without first consulting with a lawyer. Communication to you through this web site is not intended to create a solicitor-client relationship. You should consult a lawyer to address the specific circumstances of your matter. Any communication via the internet including e-mail communications are not secure and we, therefore, strongly discourage you from communicating confidential or sensitive information by e-mail. Any communication to our firm via e-mail will not create a solicitor-client relationship and the information sent will not be privileged unless you are already a client of our firm. In order to become a client of our firm, a formal retainer agreement must be entered into by the firm and the client. The contents of this web site are the property of The Republic Law, \u00A9\u00A0Copyright\u00A02023, all rights reserved. The contents cannot be reproduced, published, displayed, broadcast or retransmitted without the express written consent of Ugo Ukpabi. K.C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7345:
/*!*********************************************!*\
  !*** ./src/app/dynamic-script.directive.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicScriptDirective": () => (/* binding */ DynamicScriptDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class DynamicScriptDirective {
  constructor(el, document) {
    this.el = el;
    this.document = document;
  }
  ngAfterViewInit() {
    const templateEl = this.el.nativeElement.firstElementChild;
    if (templateEl) {
      this.replaceDivWithScript(templateEl);
    }
  }
  replaceDivWithScript(templateEl) {
    const script = this.document.createElement('script');
    // see full code below for implementations
    this.copyAttributesFromTemplateToScript(templateEl, script);
    this.copyTemplateContentToScript(templateEl, script);
    templateEl.remove();
    // add the new script element to the host div so the 
    // browser will execute it
    this.el.nativeElement.appendChild(script);
  }
  copyAttributesFromTemplateToScript(templateEl, script) {
    for (let a = 0; a < templateEl.attributes.length; a++) {
      script.attributes.setNamedItem(templateEl.attributes[a].cloneNode());
    }
  }
  copyTemplateContentToScript(templateEl, script) {
    const scriptContent = this.document.createTextNode(templateEl.textContent);
    script.appendChild(scriptContent);
  }
  static #_ = this.ɵfac = function DynamicScriptDirective_Factory(t) {
    return new (t || DynamicScriptDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DynamicScriptDirective,
    selectors: [["", "appDynamicScript", ""]]
  });
}

/***/ }),

/***/ 5585:
/*!******************************************!*\
  !*** ./src/app/services/mail.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailService": () => (/* binding */ MailService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MailService {
  constructor() {}
  sendEmail(formData) {
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
  }
  static #_ = this.ɵfac = function MailService_Factory(t) {
    return new (t || MailService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MailService,
    factory: MailService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map