(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\RachitWork\angular_2024\nextsocial\src\main.ts */"zUnb");


/***/ }),

/***/ "7VQO":
/*!**************************************************!*\
  !*** ./src/app/component/faqs/faqs.component.ts ***!
  \**************************************************/
/*! exports provided: FAQsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQsComponent", function() { return FAQsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function FAQsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#" + faq_r1.q_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", faq_r1.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", faq_r1.q_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](faq_r1.answer);
} }
class FAQsComponent {
    constructor() {
        this.faqs = [
            { q_no: 'q1', question: 'What services does NextSocial offer?', answer: 'we provide a social media marketing and web development. Our goal is to help your brand grow and stand out in the digital world.', isOpen: false },
            { q_no: 'q2', question: 'Why should I choose NextSocial?', answer: 'NextSocial stands out for its tailored strategies, data-driven decisions, and a passionate team of experts. We focus on understanding your unique business goals and delivering measurable results to help you achieve them.', isOpen: false },
            { q_no: 'q3', question: 'How can I get started with NextSocial?', answer: 'It’s easy! Simply contact us through our website or drop us an email. Our team will connect with you to understand your requirements and propose the best digital marketing solutions for your business.', isOpen: false }
        ];
    }
    ngOnInit() {
    }
}
FAQsComponent.ɵfac = function FAQsComponent_Factory(t) { return new (t || FAQsComponent)(); };
FAQsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FAQsComponent, selectors: [["app-faqs"]], decls: 9, vars: 1, consts: [["id", "faqs"], [1, "my-3"], [1, "card"], [1, "card-body"], [1, "heading-3", "text-voilet", "text-center"], [1, "px-3", "py-4"], [4, "ngFor", "ngForOf"], ["data-bs-toggle", "collapse", 1, "d-flex", "justify-content-between", "align-items-center", "border-bottom"], [1, "p-2", "heading-5"], [1, "bootstrap-icon"], [1, "bi", "bi-plus-circle"], [1, "collapse", 3, "id"], [1, "p-2", "heading-6"]], template: function FAQsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " FAQs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FAQsComponent_ng_container_8_Template, 9, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faqs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E8dp":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services.component */ "Fh9w");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../work/work.component */ "ICzh");
/* harmony import */ var _owners_owners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owners/owners.component */ "lrNY");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pricing/pricing.component */ "u57/");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../faqs/faqs.component */ "7VQO");






class HomeComponent {
    constructor() {
        this.phoneNumber = '9410813778'; // Replace with your WhatsApp number
        this.defaultMessage = 'Hello! I would like to chat with you.';
    }
    openWhatsApp() {
        const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
        window.open(url, '_blank');
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 60, vars: 0, consts: [[1, "container-fluid", "main-section"], [1, "pb-5", "row", "linear-gradient"], [1, "col-xl"], [1, "mt-5"], [1, "my-3", "heading-1", "text-voilet", "text-center"], [1, "add_line"], [1, "text-black"], [1, "heading-4", "text-center"], [1, "my-5", "d-flex", "justify-content-center", "gap-4"], [1, "px-md-5", "btn", "btn-lg", "rounded-pill", "landing_button", "button-voilet", 3, "click"], [1, "px-md-5", "btn", "btn-lg", "rounded-pill", "landing_button", "opacity-75", "button-voilet"], ["href", "#pricing", 1, "nav-link"], [1, "col-xl-5", "d-none", "d-xl-block"], [1, "position-relative", 2, "width", "540px"], ["src", "/assets/landing_page.svg", 1, "img-fluid"], [1, "card", "landing-card", "landing_card2"], [1, "card-body"], [1, "heading-5", "fw-semibold"], [1, "heading-5_5"], [1, "card", "landing-card", "landing_card1"], [1, "card", "landing-card", "landing_card3"], [1, "mx-auto", 2, "max-width", "740px", "transform", "translateY(-60px)"], [1, "card", "card-landing"], [1, "mx-3", "card-body"], [1, "heading-4", "poppins-semibold"], [1, "", 2, "text-align", "justify", "font-size", "0.8rem"], [1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Elevate Your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Brand.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Expand Your Business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Through Social Media.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " From compelling content to engagement plans,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " we craft personalized solutions aligned with your goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_19_listener() { return ctx.openWhatsApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Chat\u00A0Now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "View\u00A0Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Seamless Execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "From ideation to execution, our experts handle every details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Customized Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "We craft strategies to align with your brand goals and audience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Why NextSocial?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Transformed social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "media presence. boosting engagement by 200%.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Driving Innovation, Empowering Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "We are a social media marketing agency dedicated to transforming businesses through creative strategies. We help brands thrive in the digital era. Let\u2019s take your brand to the next level!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-owners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-faqs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_services_services_component__WEBPACK_IMPORTED_MODULE_1__["ServicesComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"], _owners_owners_component__WEBPACK_IMPORTED_MODULE_3__["OwnersComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"], _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_5__["FAQsComponent"]], styles: [".main-section[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n}\r\n.linear-gradient[_ngcontent-%COMP%]{\r\n    background-color:hsla(60,15%,94%,1);\r\n    background-image:\r\n    radial-gradient(at 25% 77%, hsla(240,75%,62%,0.3) 0px, transparent 50%),\r\n    radial-gradient(at 46% 67%, hsla(241,76%,62%,0.3) 0px, transparent 50%),\r\n    radial-gradient(at 95% 15%, hsla(60,14%,94%,1) 0px, transparent 50%),\r\n    radial-gradient(at 16% 20%, hsla(60,15%,94%,1) 0px, transparent 50%);\r\n}\r\n.add_line[_ngcontent-%COMP%]{\r\n    background-image: url(/assets/blue_line.svg);\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: 0px 45px;\r\n    padding-bottom: 10px;\r\n}\r\n.landing-card[_ngcontent-%COMP%]{\r\n position: absolute;   \r\n width: 250px;\r\n text-align: center;\r\n box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n.landing_card1[_ngcontent-%COMP%]{\r\n    left: 0;\r\n    top: calc(50% - 70px);\r\n}\r\n.landing_card1[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 20px;\r\n    left: calc(50% - 20px);\r\n    top: -20px;\r\n    background-color: var(--theme-white);\r\n    background-image: url('/assets/eye_star.png');\r\n    background-size: cover;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n}\r\n.landing_card2[_ngcontent-%COMP%]{\r\n    right: 10%;\r\n    top: 10%;\r\n}\r\n.landing_card2[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 20px;\r\n    left: calc(50% - 20px);\r\n    top: -20px;\r\n    background-color: var(--theme-white);\r\n    background-image: url('/assets/fire.png');\r\n    background-size: cover;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n}\r\n.landing_card3[_ngcontent-%COMP%]{\r\n    bottom: 10%;\r\n    right: 10%;\r\n    transform: rotateZ(11deg);\r\n}\r\n.landing_card3[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 20px;\r\n    left: calc(50% - 20px);\r\n    top: -20px;\r\n    background-color: var(--theme-white);\r\n    background-image: url('/assets/eye_heart.png');\r\n    background-size: cover;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n}\r\n.landing_button[_ngcontent-%COMP%]:hover{\r\n    background-color: #191919 !important;\r\n    border-color: #191919 !important;\r\n}\r\n.card-landing[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/pattern-shape.png');\r\n    background-size: cover;\r\n    background-position: bottom;\r\n    background-color: var(--theme-voilet) !important;\r\n    color: var(--theme-white);\r\n}\r\n@media screen and (max-width:600px) {\r\n    .add_line[_ngcontent-%COMP%]{\r\n        background-image: url(/assets/blue_line.svg);\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n        background-position: 0px 30px;\r\n        padding-bottom: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DOzs7O3dFQUlvRTtBQUN4RTtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4QjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsMkNBQTJDO0FBQzVDO0FBRUE7SUFDSSxPQUFPO0lBQ1AscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7QUFDWjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsOENBQThDO0lBQzlDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZ0RBQWdEO0lBQ2hELHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7UUFDSSw0Q0FBNEM7UUFDNUMsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0Isb0JBQW9CO0lBQ3hCO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VjdGlvbntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5saW5lYXItZ3JhZGllbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoNjAsMTUlLDk0JSwxKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgMjUlIDc3JSwgaHNsYSgyNDAsNzUlLDYyJSwwLjMpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChhdCA0NiUgNjclLCBoc2xhKDI0MSw3NiUsNjIlLDAuMykgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDk1JSAxNSUsIGhzbGEoNjAsMTQlLDk0JSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgMTYlIDIwJSwgaHNsYSg2MCwxNSUsOTQlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKTtcclxufVxyXG4uYWRkX2xpbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9ibHVlX2xpbmUuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggNDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubGFuZGluZy1jYXJke1xyXG4gcG9zaXRpb246IGFic29sdXRlOyAgIFxyXG4gd2lkdGg6IDI1MHB4O1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxufVxyXG5cclxuLmxhbmRpbmdfY2FyZDF7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDcwcHgpO1xyXG59XHJcblxyXG4ubGFuZGluZ19jYXJkMTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtd2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2V5ZV9zdGFyLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubGFuZGluZ19jYXJkMntcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB0b3A6IDEwJTtcclxufVxyXG4ubGFuZGluZ19jYXJkMjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtd2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ZpcmUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmxhbmRpbmdfY2FyZDN7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTFkZWcpO1xyXG59XHJcbi5sYW5kaW5nX2NhcmQzOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS13aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZXllX2hlYXJ0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubGFuZGluZ19idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxOTE5MTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtbGFuZGluZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wYXR0ZXJuLXNoYXBlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLXZvaWxldCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS13aGl0ZSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIC5hZGRfbGluZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9ibHVlX2xpbmUuc3ZnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMzBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "Fh9w":
/*!**********************************************************!*\
  !*** ./src/app/component/services/services.component.ts ***!
  \**********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ServicesComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " arrow_forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r3, " ");
} }
function ServicesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServicesComponent_div_10_div_7_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", service_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", service_r1.types);
} }
class ServicesComponent {
    constructor() {
        this.services = [{ icon: '/assets/icons/strategy.png', name: 'Social Marketing', types: ['Performance Analytics', 'Social Media Strategy', 'Content Creation'] },
            { icon: '/assets/icons/design.png', name: 'Web Development', types: ['Front-End Development', 'Responsive Web Design', 'CMS Integration'] },
            { icon: '/assets/icons/setting.png', name: 'Customized Plan', types: ['Marketing Collateral', 'Logo & Branding', 'Creative Design'] }];
    }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 11, vars: 1, consts: [["id", "service"], [1, "my-5", "text-center"], [1, "heading-3", "text-voilet"], [1, "heading-2"], [1, "heading-5"], [1, "my-3", "container"], [1, "d-flex", "flex-wrap", "justify-content-evenly", "gap-2"], ["class", "card service-card", 4, "ngFor", "ngForOf"], [1, "card", "service-card"], [1, "card-body"], [1, "p-3"], [1, "service-icon", 3, "src"], [1, "my-3", "heading-4", "fw-semibold"], [1, "text-grey"], ["class", "my-2 heading-5 d-flex align-items-center gap-2", 4, "ngFor", "ngForOf"], [1, "my-2", "heading-5", "d-flex", "align-items-center", "gap-2"], [1, "material-symbols-rounded"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Creative Design Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Professional Design Agency to provide solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServicesComponent_div_10_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".service-card[_ngcontent-%COMP%]{\r\n    transition: transform 250ms;\r\n    width: 320px;\r\n}\r\n.service-card[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-10px);\r\n}\r\n.service-icon[_ngcontent-%COMP%]{\r\n    width: 55px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWNhcmR7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbn1cclxuLnNlcnZpY2UtY2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbn1cclxuLnNlcnZpY2UtaWNvbntcclxuICAgIHdpZHRoOiA1NXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "Fut9":
/*!****************************************************!*\
  !*** ./src/app/component/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 72, vars: 0, consts: [[1, "my-5", "container"], [1, "about-border-black"], [1, "row", "my-4"], [1, "col-md"], [1, "heading-2", "text-uppercase", "fw-bolder", 2, "line-height", "38px"], [1, "heading-6", "text-end"], [1, "fw-semibold"], [1, "my-3", "py-3", "d-flex", "flex-wrap", "about-gradient", "rounded-4", "justify-content-center", "gap-4"], [1, "card"], [1, "p-2"], ["src", "/assets/about/JATIN_KUMAR_(FOUNDER).jpg", "alt", "founder", 1, "img-fluid", "rounded-4", "about-image"], [1, "mb-3", "fw-semibold"], [1, "px-3", "py-2", "heading-6", "bg-voilet", "rounded-3", 2, "transform", "translateY(-15px)", "line-height", "17px"], [1, "px-3", "heading-6", "fw-semibold"], ["src", "/assets/about/HARMESH_KANT_(CO-FOUNDER).jpg", "alt", "user", 1, "img-fluid", "rounded-4", "about-image"], [1, "mb-3"], ["src", "/assets/about/HARSHIT_KUMAR_(DIRECTOR).jpg", "alt", "user", 1, "img-fluid", "rounded-4", "about-image"], [1, "my-3", "p-5", "bg-voilet", "rounded-4"], [1, "my-5"], [1, "row", "align-items-center"], [1, "heading-2", "fw-semibold"], [1, "heading-6"], [1, "my-3"], [1, "about-border"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Meet The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Founders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " At ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NextSocial,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " we empower businesses with data-driven social marketing solutions to help them connect, engage, and grow. From startups to enterprises, we are your trusted partner on the path to digital excellence. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JATIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " KUMAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "FOUNDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "HARMESH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "KANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "CO-FOUNDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "HARSHIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "KUMAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DIRECTOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " OUR VISION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " To empower brands with cutting-edge strategies, social marketing, and technology-driven solutions that elevate their digital presence and unlock their true potential. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " OUR MISSION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " To become a global leader in social marketing, known for innovation, excellence, and building lasting partnerships with our clients. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Social Media Marketing:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Build meaningful connections, grow your audience, and amplify engagement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Web Development:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Create stunning, responsive websites that resonate with your brand\u2019s identity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-border-black[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid var(--theme-black);\r\n}\r\n.about-gradient[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to top,#5956e9 50%,transparent 50%);\r\n}\r\n.about-image[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n}\r\n.about-border[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid var(--theme-white);\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLCtEQUErRDtBQUNuRTtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkNBQTJDOztBQUUvQyIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWJvcmRlci1ibGFja3tcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10aGVtZS1ibGFjayk7XHJcbn1cclxuLmFib3V0LWdyYWRpZW50e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjNTk1NmU5IDUwJSx0cmFuc3BhcmVudCA1MCUpO1xyXG59XHJcbi5hYm91dC1pbWFnZXtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4uYWJvdXQtYm9yZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRoZW1lLXdoaXRlKTtcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "ICzh":
/*!**************************************************!*\
  !*** ./src/app/component/work/work.component.ts ***!
  \**************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 15, vars: 0, consts: [[1, "my-5", "p-5", "work-section", "text-white", "rounded-5"], [1, "heading-3"], [1, "heading-1"], [1, "my-4"], [1, "btn", "work-button"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Let\u2019s Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Experience & innovative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " solutions for creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " design & development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " agency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Let's Work together");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".work-section[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/map.png');\r\n    background-color: var(--theme-voilet);\r\n    background-attachment: fixed;\r\n}\r\n.work-button[_ngcontent-%COMP%]{\r\n    border: 1px solid var(--theme-white);\r\n    color: var(--theme-white);\r\n    padding: 12px 35px;\r\n}\r\n.work-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #191919;\r\n    border-color: #191919;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxxQ0FBcUM7SUFDckMsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yay1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL21hcC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLXZvaWxldCk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi53b3JrLWJ1dHRvbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLXdoaXRlKTtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS13aGl0ZSk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDM1cHg7XHJcbn1cclxuLndvcmstYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICAgIGJvcmRlci1jb2xvcjogIzE5MTkxOTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ObfR":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavbarComponent {
    constructor() {
        this.phoneNumber = '9410813778'; // Replace with your WhatsApp number
        this.defaultMessage = 'Hello! I would like to chat with you.';
    }
    openWhatsApp() {
        const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
        window.open(url, '_blank');
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 32, vars: 0, consts: [[1, "mx-3", "sticky-top"], ["id", "navbar", 1, "mx-md-auto", "my-3", "navbar", "navbar-expand-lg", "rounded"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "./assets/logo/logo_black.png", "alt", "logo", 1, "logo"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar", "aria-controls", "offcanvasNavbar", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["tabindex", "-1", "id", "offcanvasNavbar", "aria-labelledby", "offcanvasNavbarLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "offcanvas-body"], [1, "navbar-nav", "justify-content-center", "flex-grow-1", "pe-3", "gap-3"], [1, "nav-item"], ["href", "/about", 1, "nav-link"], ["aria-current", "page", "href", "#service", 1, "nav-link"], ["href", "#owners", 1, "nav-link"], ["href", "#pricing", 1, "nav-link"], ["href", "#faqs", 1, "nav-link"], [1, "d-grid", "gap-2"], [1, "m-3", "m-lg-0", "btn", "btn-sm", "button-voilet", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NextSocial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Meet\u00A0Our\u00A0Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_30_listener() { return ctx.openWhatsApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Chat\u00A0Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%]{\r\n    box-shadow: var(--box-shadow) !important;\r\n    background-color: var(--theme-white); \r\n    max-width: 1115px;   \r\n    \r\n}\r\n.sticky-top[_ngcontent-%COMP%]{\r\n    top:1rem;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    max-width: 150px;\r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--bs-gray-200);\r\n    border-radius: 0.375rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakI7eUNBQ3FDO0FBQ3pDO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtd2hpdGUpOyBcclxuICAgIG1heC13aWR0aDogMTExNXB4OyAgIFxyXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigxMnB4KTsgKi9cclxufVxyXG4uc3RpY2t5LXRvcHtcclxuICAgIHRvcDoxcmVtO1xyXG59XHJcbi5sb2dve1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG4ubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ncmF5LTIwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/main/main.component */ "vH0y");


class AppComponent {
    constructor() {
        this.title = 'nextsocial';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_component_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/main/main.component */ "vH0y");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _component_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/services/services.component */ "Fh9w");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/footer/footer.component */ "xb3B");
/* harmony import */ var _component_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/faqs/faqs.component */ "7VQO");
/* harmony import */ var _component_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/pricing/pricing.component */ "u57/");
/* harmony import */ var _component_owners_owners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/owners/owners.component */ "lrNY");
/* harmony import */ var _component_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/work/work.component */ "ICzh");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/about/about.component */ "Fut9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _component_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _component_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _component_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_8__["FAQsComponent"],
        _component_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"],
        _component_owners_owners_component__WEBPACK_IMPORTED_MODULE_10__["OwnersComponent"],
        _component_work_work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"],
        _component_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "lrNY":
/*!******************************************************!*\
  !*** ./src/app/component/owners/owners.component.ts ***!
  \******************************************************/
/*! exports provided: OwnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersComponent", function() { return OwnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function OwnersComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", owner_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r2.position);
} }
function OwnersComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r4 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", owner_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r3.position);
} }
class OwnersComponent {
    constructor() {
        this.owners = [
            { image: '/assets/teams/SHRUTI_PANCHAL_(BUSINESS-DEVELOPMENT-MANAGER).jpg', name: 'Shruti Panchal', position: 'Bussiness Head' },
            { image: '/assets/teams/MUSKAN_SHARMA_(HR-HEAD).jpg', name: 'Muskan Sharma', position: 'HR Head' },
            { image: '/assets/teams/PRADUMN_CHAUHAN_(MARKETING-HEAD).jpg', name: 'Pradumn Chauhan', position: 'Marketing Head' },
            { image: '/assets/teams/RACHIT_GAUR_(WEB-DEVELOPER).jpg', name: 'Rachit Gaur', position: 'Web Developer' },
            { image: '/assets/teams/ANANYA_(CONTENT-CREATOR).jpg', name: 'Ananya', position: 'Content Creator' },
            { image: '/assets/teams/PUSHPENDRA_SHARMA_(GRAPHIC-DESIGNER).jpg', name: 'Pushpendra', position: 'Graphic Designer' },
            { image: '/assets/teams/ANUJ_(VIDEO-EDITOR).jpg', name: 'Anuj', position: 'Video Editor' },
        ];
    }
    ngOnInit() {
    }
}
OwnersComponent.ɵfac = function OwnersComponent_Factory(t) { return new (t || OwnersComponent)(); };
OwnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OwnersComponent, selectors: [["app-owners"]], decls: 23, vars: 2, consts: [["id", "owners", 1, "my-5", "text-center"], [1, "heading-3", "text-voilet"], [1, "heading-2"], [1, "heading-5"], [1, "d-none", "d-md-block"], [1, "d-flex", "flex-wrap", "justify-content-center", "gap-3"], ["class", "card owner-card", 4, "ngFor", "ngForOf"], [1, "d-block", "d-md-none"], ["id", "carouselExampleFade", "data-bs-ride", "carousel", 1, "carousel", "carousel-dark", "slide", "carousel-fade"], [1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "card", "owner-card"], [1, "card-body", "d-flex", "flex-column", "justify-content-center"], [1, "text-center"], [1, "owner-image", "rounded-circle", 3, "src"], [1, "my-3"], [1, "heading-4", "fw-semibold", "text-voilet"], [1, "carousel-item"], [1, "mx-auto", "card", "owner-card-carousel"]], template: function OwnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Meet Our Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experience Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Professional Design Agency to provide solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OwnersComponent_div_10_Template, 9, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OwnersComponent_div_14_Template, 10, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.owners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.owners);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".owner-card[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 370px;\r\n    transition: transform 250ms;\r\n}\r\n.owner-card-carousel[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 370px;\r\n}\r\n.owner-card[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-10px);\r\n}\r\n.owner-image[_ngcontent-%COMP%]{\r\n    max-width: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm93bmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJvd25lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vd25lci1jYXJke1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcclxufVxyXG4ub3duZXItY2FyZC1jYXJvdXNlbHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbn1cclxuLm93bmVyLWNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG59XHJcbi5vd25lci1pbWFnZXtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "u57/":
/*!********************************************************!*\
  !*** ./src/app/component/pricing/pricing.component.ts ***!
  \********************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function PricingComponent_ng_container_9_ng_container_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 32);
} }
function PricingComponent_ng_container_9_ng_container_1_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    const plan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", plan_r4.background_voilet ? "text-white" : "text-voilet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r8);
} }
function PricingComponent_ng_container_9_ng_container_1_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r10 = ctx.$implicit;
    const plan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", plan_r4.background_voilet ? "text-white" : "text-voilet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r10);
} }
function PricingComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PricingComponent_ng_container_9_ng_container_1_i_6_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Benefits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PricingComponent_ng_container_9_ng_container_1_li_24_Template, 4, 2, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PricingComponent_ng_container_9_ng_container_1_li_25_Template, 4, 2, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " / month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Start\u00A0Your\u00A0Journey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", plan_r4.background_voilet ? "bg-voilet" : "bg-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", plan_r4.tag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", plan_r4.background_voilet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plan_r4.extra_days);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", plan_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", plan_r4.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", plan_r4.notInclude);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", plan_r4.cross_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", plan_r4.background_voilet ? "/assets/limited_offer_white.png" : "/assets/limited_offer_black.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", plan_r4.background_voilet ? "text-white" : "text-black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", plan_r4.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", plan_r4.background_voilet ? "text-white" : "text-black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", plan_r4.background_voilet ? "button-white" : "button-black");
} }
function PricingComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PricingComponent_ng_container_9_ng_container_1_Template, 41, 13, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.MarketingPlans);
} }
function PricingComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coming Soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PricingComponent {
    constructor() {
        this.marketingPlan = true;
        this.MarketingPlans = [
            {
                name: 'Startups & Small Businesses',
                tag: 'Next Launch',
                extra_days: '15',
                cross_price: '4,999',
                price: '4,499',
                background_voilet: false,
                features: ['Social media management (2 platforms)', '10 Post monthly', '1-2 Stories week', '3 Reels per month', 'Hashtag research (Basic)'],
                notInclude: ['Query handling'],
                buttonText: 'Choose Silver'
            },
            {
                name: 'Growing Brands & Bussiness',
                tag: 'Next Boost',
                extra_days: '15',
                cross_price: '7,999',
                price: '7,199',
                background_voilet: true,
                features: ['Social media management (3 platforms)', '15 Post monthly (Gif)', '2-3 Stories week', '6 Reels per month', 'Hashtag research (Moderate)', 'Query handling'],
                notInclude: [],
                buttonText: 'Choose Gold'
            },
            {
                name: 'Brands & Industry Leaders',
                tag: 'Next Prime',
                extra_days: '30',
                cross_price: '11,999',
                price: '9,599',
                background_voilet: false,
                features: ['Social media management  (4 platforms)', '20 Post monthly (Gif / Motion images)', '3-4 Stories week', '10 Reels per month', 'Hashtag research (Advance)', 'Query handling'],
                notInclude: [],
                buttonText: 'Choose Platinum'
            }
        ];
        this.webDevelopmentPlans = [
            {
                name: 'Startups & Small Businesses',
                tag: 'Next Launch',
                extra_days: '15',
                cross_price: '4,999',
                price: '9.99',
                background_voilet: false,
                features: ['1 User', '5GB Storage', 'Basic Support', 'Basic Features', 'Basic Support', 'Basic Features'],
                notInclude: [],
                buttonText: 'Choose Silver'
            },
            {
                name: 'Gold2',
                tag: 'Next Boost',
                extra_days: '15',
                cross_price: '4,999',
                price: '19.99',
                background_voilet: false,
                features: ['5 Users', '25GB Storage', 'Priority Support', 'Advanced Features', 'Basic Support', 'Basic Features'],
                notInclude: [],
                buttonText: 'Choose Gold'
            },
            {
                name: 'Platinum2',
                tag: 'Next Prime',
                extra_days: '15',
                cross_price: '4,999',
                price: '29.99',
                background_voilet: false,
                features: ['Unlimited Users', '100GB Storage', '24/7 Support', 'Premium Features', 'Basic Support', 'Basic Features'],
                notInclude: [],
                buttonText: 'Choose Platinum'
            }
        ];
    }
    changePlans(selectedPlan) {
        selectedPlan == 'marketing' ? this.marketingPlan = true : this.marketingPlan = false;
    }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 18, vars: 4, consts: [["id", "pricing", 1, "container", "my-5"], [1, "heading-3", "text-voilet", "text-center", "mb-5"], [1, "mx-auto", "my-5", "p-1", "d-flex", "plans-switch", "rounded-pill"], [1, "px-3", "px-md-5", "py-2", "heading-6", "rounded-pill", 3, "ngClass", "click"], [1, "py-5", "d-flex", "flex-wrap", "justify-content-center", "row-gap-5", "column-gap-3"], [4, "ngIf", "ngIfElse"], ["webDevelopmentPlan", ""], [1, "heading-6"], [4, "ngFor", "ngForOf"], [1, "card", "card-pricing", 3, "ngClass"], [1, "card-body"], [1, "p-3", "position-relative"], [1, "px-2", "py-1", "heading-6", "text-white", "bg-dark", "rounded-3", "pricing-tag", "position-absolute"], ["class", "bi bi-star-fill", 4, "ngIf"], [1, "p-2", "text-uppercase", "fw-bold", "heading-6", "text-center", "pricing-circle-tag", "position-absolute"], [1, "position-relative", 2, "font-size", "10px", "top", "-5px"], [1, "d-flex", "flex-column"], [1, "heading-4", "text-center"], [1, "mx-3"], [1, "my-2", "heading-5"], [1, "list-unstyled", "my-3"], ["class", "mb-2 d-flex", 4, "ngFor", "ngForOf"], ["class", "mb-2 d-flex opacity-50", 4, "ngFor", "ngForOf"], [1, "heading-5", "fw-semibold"], [1, "d-flex", "align-items-center", "fw-semibold", "gap-2"], [1, "heading-4", "cross_price", "position-relative"], [1, "limited_offer", 3, "src"], [1, "my-2", "heading-2", "text-center", "fw-semibold", 3, "ngClass"], [1, "heading-5", "position-relative", 2, "top", "-16px"], [1, "heading-4", 3, "ngClass"], [1, "mt-auto", "mx-3"], ["type", "button", 1, "w-100", "btn", "btn-sm", "rounded-pill", 3, "ngClass"], [1, "bi", "bi-star-fill"], [1, "mb-2", "d-flex"], [1, "bi", "bi-check-circle-fill", "me-2", 3, "ngClass"], [1, "mb-2", "d-flex", "opacity-50"], [1, "heading-4"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Pricing Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingComponent_Template_div_click_4_listener() { return ctx.changePlans("marketing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Marketing\u00A0Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingComponent_Template_div_click_6_listener() { return ctx.changePlans("webDevelopment"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WebDevelopment\u00A0Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PricingComponent_ng_container_9_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PricingComponent_ng_template_10_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " *T&C Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " All prices are exclusive of GST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Complimentary days are valid only for annual payment plans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.marketingPlan ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.marketingPlan ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marketingPlan)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".card-pricing[_ngcontent-%COMP%]{\r\n    \r\n    transition: transform 0.2s;\r\n    width: 350px;\r\n}  \r\n.card-pricing[_ngcontent-%COMP%]:hover {\r\ntransform: translateY(-5px);\r\n}  \r\n.pricing-tag[_ngcontent-%COMP%]{\r\n  top: -30px;\r\n  left: 10px;\r\n}  \r\n.crown-emoji[_ngcontent-%COMP%]{\r\n  width: 20px;\r\n}  \r\n.pricing-rated-tag[_ngcontent-%COMP%]{\r\n  top:50px;\r\n  left: -30px;\r\n  transform: rotateZ(-90deg);\r\n}  \r\n.pricing-circle-tag[_ngcontent-%COMP%]{\r\n  width: 80px;\r\n  height: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  line-height: 15px;\r\n  right:20px;\r\n  top: -55px;\r\n  color: var(--theme-white);\r\n  background-image: url('/assets/tag_circle.png');\r\n  background-size: 98px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}  \r\n.cross_price[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  position: absolute;\r\n  left: -10px;\r\n  width: calc(100% + 20px);\r\n  height: 35px;\r\n  background: url(/assets/red_line.svg);\r\n  background-size: cover;\r\n}  \r\n.limited_offer[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n}  \r\n.plans-switch[_ngcontent-%COMP%]{\r\n  max-width: -moz-fit-content;\r\n  max-width: fit-content;\r\n  background-color: var(--theme-white);\r\n}  \r\n.active[_ngcontent-%COMP%]{\r\n  background-color: var(--theme-voilet);\r\n  color: var(--theme-white);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFFBQVE7RUFDUixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wcmljaW5ne1xyXG4gICAgLyogbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTsgKi9cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59ICBcclxuLmNhcmQtcHJpY2luZzpob3ZlciB7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxufVxyXG5cclxuLnByaWNpbmctdGFne1xyXG4gIHRvcDogLTMwcHg7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG4uY3Jvd24tZW1vaml7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLnByaWNpbmctcmF0ZWQtdGFne1xyXG4gIHRvcDo1MHB4O1xyXG4gIGxlZnQ6IC0zMHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWigtOTBkZWcpO1xyXG59XHJcblxyXG4ucHJpY2luZy1jaXJjbGUtdGFne1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgcmlnaHQ6MjBweDtcclxuICB0b3A6IC01NXB4O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3RhZ19jaXJjbGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA5OHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5jcm9zc19wcmljZTo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvcmVkX2xpbmUuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5saW1pdGVkX29mZmVye1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnBsYW5zLXN3aXRjaHtcclxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLXdoaXRlKTtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS12b2lsZXQpO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS13aGl0ZSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vH0y":
/*!**************************************************!*\
  !*** ./src/app/component/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "ObfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "xb3B");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/about/about.component */ "Fut9");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xb3B":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
        // currentYear: number = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 62, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row", "align-items-center", "text-center"], [1, "col-md"], ["src", "./assets/logo/logo_black_2.png", "alt", "Logo", 1, "footer-logo"], [1, "d-none", "d-md-block", "p-0", "vr"], [1, "heading-3", "fw-semibold"], [1, "text-voilet"], [1, "p-3", "row", "align-items-center"], [1, "col-lg"], [1, "my-2", "heading-5", "fw-semibold"], [1, "d-flex", "gap-2"], [1, "bi", "bi-telephone-fill"], [1, "bi", "bi-envelope-at-fill"], [1, "bi", "bi-geo-alt-fill"], [1, "my-2", "heading-5", "text-lg-end", "fw-semibold"], [1, "row", "justify-content-lg-end"], [1, "p-0", "col-auto"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], [1, "bi", "bi-chat-left-text-fill"], ["type", "email", "placeholder", "Email Address", 1, "form-control"], [1, "p-0", "px-2", "col-auto"], ["type", "submit", 1, "btn", "button-voilet"], [1, "row", "align-items-center"], [1, "my-2", "col-lg"], [1, "d-flex", "justify-content-lg-start", "justify-content-center", "flex-wrap"], ["href", "#", 1, "px-1", "py-0", "nav-link", "text-primary"], [1, "col-lg", "text-center"], [1, "nav", "justify-content-center", "justify-content-lg-end"], ["href", "https://www.linkedin.com/company/nextsocialagency", "target", "_blank", 1, "p-0", "nav-link", "bootstrap-icon"], [1, "bi", "bi-linkedin"], ["href", "https://www.instagram.com/nextsocial.in", "target", "_blank", 1, "p-0", "nav-link", "bootstrap-icon"], [1, "bi", "bi-instagram"], ["href", "https://x.com/nextsocial_in", "target", "_blank", 1, "p-0", "nav-link", "bootstrap-icon"], [1, "bi", "bi-twitter-x"], ["href", "https://www.facebook.com/nextsocial.in", "target", "_blank", 1, "p-0", "nav-link", "bootstrap-icon"], [1, "bi", "bi-facebook"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Modern Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " For ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Creative Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+91 9410813778,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+91 7017186969");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "info@nextsocial.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "K-13 Vikram Colony Ram Ghat Road Aligarh UP 202001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Subscribe Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A9 2025 NextSocial | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  background-color:hsla(60,15%,94%,1);\r\nbackground-image:\r\nradial-gradient(at 0% 5%, hsla(60,15%,94%,1) 0px, transparent 50%),\r\nradial-gradient(at 42% 99%, hsla(60,15%,94%,1) 0px, transparent 50%),\r\nradial-gradient(at 60% 8%, hsla(60,15%,94%,1) 0px, transparent 50%),\r\nradial-gradient(at 78% 98%, hsl(240deg 100% 61%) 0px, transparent 50%),\r\nradial-gradient(at 11% 57%, hsl(240deg 100% 61% / 50%) 0px, transparent 50%);\r\n  padding: 20px 0;\r\n}\r\n\r\n.footer-logo[_ngcontent-%COMP%] {\r\n  max-width: 340px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQXVEO0VBQ3ZEOzs7OzJFQUl5RTtFQUN6RSxtQ0FBbUM7QUFDckM7Ozs7OzRFQUs0RTtFQUMxRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsI2Y4ZjlmYSwjZjJmMWYwKTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoNjAsMTUlLDk1JSwxKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gIHJhZGlhbC1ncmFkaWVudChhdCA5MCUgNjQlLCBoc2xhKDYwLDE1JSw5NSUsMSkgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChhdCAyNyUgNTElLCBoc2xhKDYwLDE1JSw5NSUsMSkgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChhdCA3MSUgODglLCBoc2xhKDI0MSwxMDAlLDYyJSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjpoc2xhKDYwLDE1JSw5NCUsMSk7XHJcbmJhY2tncm91bmQtaW1hZ2U6XHJcbnJhZGlhbC1ncmFkaWVudChhdCAwJSA1JSwgaHNsYSg2MCwxNSUsOTQlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcclxucmFkaWFsLWdyYWRpZW50KGF0IDQyJSA5OSUsIGhzbGEoNjAsMTUlLDk0JSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXHJcbnJhZGlhbC1ncmFkaWVudChhdCA2MCUgOCUsIGhzbGEoNjAsMTUlLDk0JSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXHJcbnJhZGlhbC1ncmFkaWVudChhdCA3OCUgOTglLCBoc2woMjQwZGVnIDEwMCUgNjElKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXHJcbnJhZGlhbC1ncmFkaWVudChhdCAxMSUgNTclLCBoc2woMjQwZGVnIDEwMCUgNjElIC8gNTAlKSAwcHgsIHRyYW5zcGFyZW50IDUwJSk7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWxvZ28ge1xyXG4gIG1heC13aWR0aDogMzQwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map