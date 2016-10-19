"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_service_1 = require('../auth/auth.service');
var HeaderComponent = (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
        this.title = "Système abordable de réservation et agenda";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.estLogIn = function () {
        return this._authService.estLogIn();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header class=\"row\">\n            <div class=\"col-md-12\">\n                <my-logo></my-logo>\n            </div>\n            <nav class=\"col-md-12\" *ngIf=\"estLogIn()\">\n                <ul class=\"nav nav-pills\">\n                    <li><a>Agenda</a></li>\n                    <li><a [routerLink]=\"['/clients']\" routerLinkActive=\"router-link-active\">Clients</a></li>\n                    <li><a>\u00C9v\u00E8nements</a></li>\n                    <li><a>Ressources</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            styles: ["\n        header {\n            width: auto;\n            height:auto;\n            margin-top: 0px;\n            padding: 0 0 0 0;\n            background-color: #d7e1ee;\n        }\n\n        .row{\n            margin-left:0;\n            margin-right:0;\n        }\n\n        nav{\n            background-color: white;\n            padding:1% 0 1% 0;\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        div{\n            float:left;\n            margin:0;\n            padding:0;\n            background-color: #d7e1ee;\n        }\n\n        ul{\n          text-align: left;  \n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding: 0 3% 0 0;\n        }\n\n        li a{\n            font-size:1.5vw;\n        }\n\n        li:nth-of-type(1){\n            padding: 0 3% 0 5%;\n        }\n        \n        .router-link-active{\n            background-color: #337ab7;\n            color: white;\n        }\n\n        .my-login{\n            position:absolute;\n            bottom:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLHNCQUFzQixDQUFDLENBQUE7QUE2RW5EO0lBR0kseUJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsNENBQTRDLENBQUM7SUFDOUQsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUF2Rkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHlqQkFjVDtZQUNELE1BQU0sRUFBRSxDQUFDLDhrQ0F3RFIsQ0FBQztTQUNMLENBQUM7O3VCQUFBO0lBY0Ysc0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHVCQUFlLGtCQWEzQixDQUFBIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxteS1sb2dvPjwvbXktbG9nbz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJjb2wtbWQtMTJcIiAqbmdJZj1cImVzdExvZ0luKClcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGE+QWdlbmRhPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2NsaWVudHMnXVwiIHJvdXRlckxpbmtBY3RpdmU9XCJyb3V0ZXItbGluay1hY3RpdmVcIj5DbGllbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPsOJdsOobmVtZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5SZXNzb3VyY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2UxZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hdntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MSUgMCAxJSAwO1xyXG4gICAgICAgICAgICBjbGVhcjpib3RoO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlMWVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMyUgMCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkgYXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuNXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMyUgMCA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm15LWxvZ2lue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiU3lzdMOobWUgYWJvcmRhYmxlIGRlIHLDqXNlcnZhdGlvbiBldCBhZ2VuZGFcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgfVxyXG5cclxuICAgIGVzdExvZ0luKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmVzdExvZ0luKCk7XHJcbiAgICB9XHJcbn0iXX0=
