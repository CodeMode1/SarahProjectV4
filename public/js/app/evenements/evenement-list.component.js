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
var core_1 = require('@angular/core');
var erreur_service_1 = require('../erreurs/erreur.service');
var evenement_service_1 = require('./evenement.service');
var EvenementListComponent = (function () {
    function EvenementListComponent(_erreurService, _evenementService) {
        this._erreurService = _erreurService;
        this._evenementService = _evenementService;
        this.titre = "Liste des Évènements";
        this.noContratTextSearch = "";
        this.noContratFiltreList = "";
        this.boolSearchContrat = false;
        this.erreurNoContrat = "";
        this.specialTextSearch = "";
        this.erreurSpecialSearch = "";
        this.boolFullSearch = false;
    }
    EvenementListComponent.prototype.ngOnInit = function () {
        console.log("dans on init");
        // get evenements du service this.getEvenements()
        this.getEvenements();
    };
    EvenementListComponent.prototype.getEvenements = function () {
        var _this = this;
        // appelle methode service, subscribe
        this._evenementService.getEvenements().subscribe(function (data) {
            _this.evenements = data;
            //print données :
            for (var i = 0; i < _this.evenements.length; i++) {
                console.log('evenement du service : ');
                console.log(_this.evenements[i]);
            }
        }, function (error) { return _this._erreurService.handleErreur(error); });
    };
    EvenementListComponent.prototype.evenementSelect = function (evenement) {
        this.evenementSelected = evenement;
        console.log(this.evenementSelected);
        console.log('no evenement : ');
        console.log(this.evenementSelected.noEvenement);
        this.noEvenement = this.evenementSelected.noEvenement;
    };
    EvenementListComponent.prototype.onSearchNoContrat = function () {
        var _this = this;
        this.boolSearchContrat = false;
        if (this.noContratTextSearch === null || (this.noContratTextSearch).toString() === "") {
            this.noContratFiltreList = "";
            return;
        }
        else if (isNaN(Number(this.noContratTextSearch))) {
            this.erreurNoContrat = "Invalide. No Contrat doit être un nombre.";
            this.boolSearchContrat = true;
            return;
        }
        else if (this.noContratTextSearch.toString().length > 10) {
            this.erreurNoContrat = "Invalide. No Contrat dépasse la longueur acceptée.";
            this.boolSearchContrat = true;
            return;
        }
        this._evenementService.getEvenement(Number(this.noContratTextSearch))
            .subscribe(function (data) {
            _this.noContratFiltreList = (data.noEvenement).toString();
            console.log(_this.noContratFiltreList);
        }, function (error) {
            _this.boolSearchContrat = true;
            _this._erreurService.handleErreur(error);
        });
    };
    EvenementListComponent.prototype.logInput = function (value) {
        console.log(value);
    };
    EvenementListComponent.prototype.eventModal = function () {
        this.titreModal = "Suppression";
    };
    EvenementListComponent.prototype.onSpecialSearch = function () {
        var _this = this;
        this.boolFullSearch = false;
        if (this.specialTextSearch === null || (this.specialTextSearch).toString() === "") {
            this.getEvenements();
            return;
        }
        else if (this.specialTextSearch.toString().length > 150) {
            this.erreurSpecialSearch = "Invalide. Ne pas dépasser 150 caractères.";
            return;
        }
        this._evenementService.getEvenementsSpecialSearch(this.specialTextSearch)
            .subscribe(function (data) {
            _this.evenements = data;
            console.log('evx affiche table : ');
            console.log(_this.evenements);
        }, function (error) {
            _this._erreurService.handleErreur(error);
        });
    };
    EvenementListComponent.prototype.actualiser = function () {
        var _this = this;
        if (this.noContratTextSearch !== null && (this.noContratTextSearch).toString() !== "") {
            this._evenementService.getEvenement(Number(this.noContratTextSearch))
                .subscribe(function (data) {
                _this.noContratFiltreList = (data.noEvenement).toString();
                console.log('filtre table no contrat');
                console.log(_this.noContratFiltreList);
            }, function (error) {
                _this.boolSearchContrat = true;
                _this._erreurService.handleErreur(error);
            });
            return;
        }
        else {
            this.noContratFiltreList = "";
            this.getEvenements();
        }
    };
    EvenementListComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.evenementSelected !== null) {
            this._evenementService.deleteEvenement(this.evenementSelected)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this._erreurService.handleErreur(error); });
        }
    };
    EvenementListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-evenement-list',
            templateUrl: 'evenement-list.component.html',
            styles: ["\n        section{\n            padding: 2% 0 0 0;\n        }\n\n        td{\n            text-align: left;\n            padding-bottom: 0;\n            font-size: 0.8vw;\n            max-width: 300px;\n            word-wrap: break-word;\n        }\n\n        th{\n            font-size: 0.7vw;\n            white-space: pre; \n        }\n\n        thead > tr{\n            background-color: #fafafa;\n            border-bottom: 0.25em solid #1565c0;\n        }\n\n        tbody > tr:hover{\n            background-color: #a9d4f9;\n        }\n\n        tbody > tr{\n            border-bottom: 0.2em solid #ddd;\n            cursor: pointer;\n        }\n\n        .estSelectRange{\n             background-color: #519BDB;\n         }\n\n         h3{\n            padding: 0.5% 0 0.5% 0;\n            margin:0;\n            font-size: 1.5vw;\n        }\n\n        .panel-heading{\n            text-align:center;\n        }\n\n        .bg-danger{\n            text-align: center;\n            color: #CC0000;\n            font-weight: bolder;\n            font-size: 1vw;\n        }\n\n        #searchLabel{\n            margin-bottom:0;\n            text-align:left;\n            padding: 0;\n        }\n\n        #erreurContrat{\n            text-align: center;\n            padding: 0 5% 0 0;\n        }\n\n         #erreurFullSearch {\n            clear: both;\n            float: left;\n        }\n\n        .size{\n            font-size:1vw;\n            text-align:center;\n        }\n\n        .disableA{\n            pointer-events: none;\n            cursor: default;\n            color: #ddd;\n        }\n\n        .erreurSearchNoContrat, .erreurSpecialSearch{\n            background: #ff8080;\n        }\n\n        #boutonSearchNoContrat{\n            background: #519BDB;\n        }\n\n        #boutonSpecialSearch{\n            clear: both;\n            float: left;\n            background: #519BDB;\n        }\n\n        a{\n            color: #000;\n            display: block;\n            clear: both;\n            position: relative;\n        }\n\n        a span{\n            position: absolute;\n            display:none;\n            background: rgba(20, 20, 31, 0.84);\n            text-align: center;\n            border-left: 1px solid #111;\n            border-top: 1px solid #111;\n            border-right: 1px solid #333;\n            border-bottom: 1px solid #333;\n            border-radius: 3px;\n            color: #fff;\n            font-size: 0.7em;\n            text-indent: 0;\n            width: auto;\n            height:auto;\n        }\n\n        a span:after{\n            content: ' ';\n\t        height: 0;\n\t        position: absolute;\n\t        width: 0;\n            border: 10px solid transparent;\n\t        border-top-color: #333;\n            top: 100%;\n\t        left: 10px;\n        }\n\n        a:hover span{\n            display: block;\n            bottom: 1vw;\n            left:75%;\n            z-index: 9999;\n            -moz-animation: moveTooltip .25s linear;\n            -webkit-animation: moveTooltip .25s linear;\n        }\n\n        a:hover{\n            color: #337ab7;\n        }\n\n        .widgets{\n            display: inline-block;\n            padding-right: 5%;\n        }\n\n        .divFooter{\n            text-align:center;\n        }\n\n        .col-md-12 {\n            padding: 2%;\n        }\n\n        @-moz-keyframes moveTooltip {\n    0% {\n        -moz-transform: scale(0,0);\n        opacity: 0;\n    }\n\n    45% {\n        -moz-transform: scale(0.4,0.4);\n        opacity: 0.7;\n    }\n\n    75% {\n        -moz-transform: scale(1.3,1.3);\n        opacity: 0.4;\n    }\n\n    100% {\n        -moz-transform: scale(1,1);\n        opacity: 1;\n    };\n}\n\n@-webkit-keyframes moveTooltip {\n    0% {\n        -webkit-transform: scale(0,0);\n        opacity: 0;\n    }\n\n    45% {\n        -webkit-transform: scale(0.4,0.4);\n        opacity: 0.7;\n    }\n\n    75% {\n        -webkit-transform: scale(1.3,1.3);\n        opacity: 0.4;\n    }\n\n    100% {\n        -webkit-transform: scale(1,1);\n        opacity: 1;\n    };\n} \n    "]
        }), 
        __metadata('design:paramtypes', [erreur_service_1.ErreurService, evenement_service_1.EvenementService])
    ], EvenementListComponent);
    return EvenementListComponent;
}());
exports.EvenementListComponent = EvenementListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW5lbWVudHMvZXZlbmVtZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsK0JBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUErTXZEO0lBZ0JJLGdDQUFxQixjQUE2QixFQUFVLGlCQUFtQztRQUExRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDM0YsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVGLDhDQUFhLEdBQWI7UUFBQSxpQkFhQztRQVpHLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUM1QyxVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixpQkFBaUI7WUFDakIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFF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QUFNLEVBQUUsQ0FBQyxpaUlBc01SLENBQUM7U0FDTCxDQUFDOzs4QkFBQTtJQW1KRiw2QkFBQztBQUFELENBbEpBLEFBa0pDLElBQUE7QUFsSlksOEJBQXNCLHlCQWtKbEMsQ0FBQSIsImZpbGUiOiJldmVuZW1lbnRzL2V2ZW5lbWVudC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVuZW1lbnQgfSBmcm9tICcuL2V2ZW5lbWVudCc7XHJcbmltcG9ydCB7IEVycmV1clNlcnZpY2UgfSBmcm9tICcuLi9lcnJldXJzL2VycmV1ci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbmVtZW50U2VydmljZSB9IGZyb20gJy4vZXZlbmVtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb0V2ZW5lbWVudFBpcGUgfSBmcm9tICcuLi9waXBlcy9ub0V2ZW5lbWVudC5waXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktZXZlbmVtZW50LWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdldmVuZW1lbnQtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgc2VjdGlvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMiUgMCAwIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44dnc7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3Z3O1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoZWFkID4gdHJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMjVlbSBzb2xpZCAjMTU2NWMwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGJvZHkgPiB0cjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E5ZDRmOTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRib2R5ID4gdHJ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMmVtIHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lc3RTZWxlY3RSYW5nZXtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTlCREI7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGgze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjUlIDAgMC41JSAwO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iZy1kYW5nZXJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNDQzAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NlYXJjaExhYmVse1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNlcnJldXJDb250cmF0e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNSUgMCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICNlcnJldXJGdWxsU2VhcmNoIHtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxdnc7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpc2FibGVBe1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lcnJldXJTZWFyY2hOb0NvbnRyYXQsIC5lcnJldXJTcGVjaWFsU2VhcmNoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY4MDgwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2JvdXRvblNlYXJjaE5vQ29udHJhdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzUxOUJEQjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNib3V0b25TcGVjaWFsU2VhcmNoe1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MTlCREI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHNwYW57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMzEsIDAuODQpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzExMTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxMTE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSBzcGFuOmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiAnICc7XHJcblx0ICAgICAgICBoZWlnaHQ6IDA7XHJcblx0ICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdCAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcclxuICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG5cdCAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIgc3BhbntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMXZ3O1xyXG4gICAgICAgICAgICBsZWZ0Ojc1JTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IG1vdmVUb29sdGlwIC4yNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZVRvb2x0aXAgLjI1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzN2FiNztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53aWRnZXRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdkZvb3RlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sLW1kLTEyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBALW1vei1rZXlmcmFtZXMgbW92ZVRvb2x0aXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgNDUlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC40LDAuNCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIDc1JSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMywxLjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVUb29sdGlwIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwwKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDQ1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwwLjQpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMsMS4zKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH07XHJcbn0gXHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbmVtZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aXRyZTogc3RyaW5nO1xyXG4gICAgZXZlbmVtZW50czogRXZlbmVtZW50W107XHJcbiAgICBldmVuZW1lbnRTZWxlY3RlZDogRXZlbmVtZW50O1xyXG4gICAgbm9FdmVuZW1lbnQ6IG51bWJlcjtcclxuICAgIC8vIHNlYXJjaCBObyBDb250cmF0XHJcbiAgICBib29sU2VhcmNoQ29udHJhdDogYm9vbGVhbjtcclxuICAgIG5vQ29udHJhdFRleHRTZWFyY2g6IHN0cmluZztcclxuICAgIG5vQ29udHJhdEZpbHRyZUxpc3Q6IHN0cmluZztcclxuICAgIGVycmV1ck5vQ29udHJhdDogc3RyaW5nO1xyXG4gICAgLy8gc2VhcmNoIEZ1bGwgVGV4dFxyXG4gICAgYm9vbEZ1bGxTZWFyY2g6IGJvb2xlYW47XHJcbiAgICBzcGVjaWFsVGV4dFNlYXJjaDogc3RyaW5nO1xyXG4gICAgZXJyZXVyU3BlY2lhbFNlYXJjaDogc3RyaW5nO1xyXG4gICAgLy8gZmVuw6p0cmUgbW9kYWxcclxuICAgIHRpdHJlTW9kYWw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lcnJldXJTZXJ2aWNlOiBFcnJldXJTZXJ2aWNlLCBwcml2YXRlIF9ldmVuZW1lbnRTZXJ2aWNlOiBFdmVuZW1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50aXRyZSA9IFwiTGlzdGUgZGVzIMOJdsOobmVtZW50c1wiO1xyXG4gICAgICAgIHRoaXMubm9Db250cmF0VGV4dFNlYXJjaCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5ub0NvbnRyYXRGaWx0cmVMaXN0ID0gXCJcIjsgXHJcbiAgICAgICAgdGhpcy5ib29sU2VhcmNoQ29udHJhdCA9IGZhbHNlOyBcclxuICAgICAgICB0aGlzLmVycmV1ck5vQ29udHJhdCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zcGVjaWFsVGV4dFNlYXJjaCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lcnJldXJTcGVjaWFsU2VhcmNoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmJvb2xGdWxsU2VhcmNoID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYW5zIG9uIGluaXRcIik7XHJcbiAgICAgICAgLy8gZ2V0IGV2ZW5lbWVudHMgZHUgc2VydmljZSB0aGlzLmdldEV2ZW5lbWVudHMoKVxyXG4gICAgICAgIHRoaXMuZ2V0RXZlbmVtZW50cygpO1xyXG4gICAgIH1cclxuXHJcbiAgICBnZXRFdmVuZW1lbnRzKCl7XHJcbiAgICAgICAgLy8gYXBwZWxsZSBtZXRob2RlIHNlcnZpY2UsIHN1YnNjcmliZVxyXG4gICAgICAgIHRoaXMuX2V2ZW5lbWVudFNlcnZpY2UuZ2V0RXZlbmVtZW50cygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW5lbWVudHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgLy9wcmludCBkb25uw6llcyA6XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaSA8IHRoaXMuZXZlbmVtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW5lbWVudCBkdSBzZXJ2aWNlIDogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ldmVuZW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVuZW1lbnRTZWxlY3QoZXZlbmVtZW50OiBFdmVuZW1lbnQpe1xyXG4gICAgICAgIHRoaXMuZXZlbmVtZW50U2VsZWN0ZWQgPSBldmVuZW1lbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ldmVuZW1lbnRTZWxlY3RlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vIGV2ZW5lbWVudCA6ICcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbmVtZW50U2VsZWN0ZWQubm9FdmVuZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubm9FdmVuZW1lbnQgPSB0aGlzLmV2ZW5lbWVudFNlbGVjdGVkLm5vRXZlbmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoTm9Db250cmF0KCl7XHJcbiAgICAgICAgdGhpcy5ib29sU2VhcmNoQ29udHJhdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMubm9Db250cmF0VGV4dFNlYXJjaCA9PT0gbnVsbCB8fCAodGhpcy5ub0NvbnRyYXRUZXh0U2VhcmNoKS50b1N0cmluZygpID09PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5ub0NvbnRyYXRGaWx0cmVMaXN0ID0gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzTmFOKE51bWJlcih0aGlzLm5vQ29udHJhdFRleHRTZWFyY2gpKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyZXVyTm9Db250cmF0ID0gXCJJbnZhbGlkZS4gTm8gQ29udHJhdCBkb2l0IMOqdHJlIHVuIG5vbWJyZS5cIjtcclxuICAgICAgICAgICAgdGhpcy5ib29sU2VhcmNoQ29udHJhdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vQ29udHJhdFRleHRTZWFyY2gudG9TdHJpbmcoKS5sZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyZXVyTm9Db250cmF0ID0gXCJJbnZhbGlkZS4gTm8gQ29udHJhdCBkw6lwYXNzZSBsYSBsb25ndWV1ciBhY2NlcHTDqWUuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYm9vbFNlYXJjaENvbnRyYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V2ZW5lbWVudFNlcnZpY2UuZ2V0RXZlbmVtZW50KE51bWJlcih0aGlzLm5vQ29udHJhdFRleHRTZWFyY2gpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0NvbnRyYXRGaWx0cmVMaXN0ID0gKGRhdGEubm9FdmVuZW1lbnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub0NvbnRyYXRGaWx0cmVMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29sU2VhcmNoQ29udHJhdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nSW5wdXQodmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudE1vZGFsKCl7XHJcbiAgICAgICAgdGhpcy50aXRyZU1vZGFsID0gXCJTdXBwcmVzc2lvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3BlY2lhbFNlYXJjaCgpe1xyXG4gICAgICAgIHRoaXMuYm9vbEZ1bGxTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLnNwZWNpYWxUZXh0U2VhcmNoID09PSBudWxsIHx8ICh0aGlzLnNwZWNpYWxUZXh0U2VhcmNoKS50b1N0cmluZygpID09PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRFdmVuZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnNwZWNpYWxUZXh0U2VhcmNoLnRvU3RyaW5nKCkubGVuZ3RoID4gMTUwKXtcclxuICAgICAgICAgICAgdGhpcy5lcnJldXJTcGVjaWFsU2VhcmNoID0gXCJJbnZhbGlkZS4gTmUgcGFzIGTDqXBhc3NlciAxNTAgY2FyYWN0w6hyZXMuXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZXZlbmVtZW50U2VydmljZS5nZXRFdmVuZW1lbnRzU3BlY2lhbFNlYXJjaCh0aGlzLnNwZWNpYWxUZXh0U2VhcmNoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVuZW1lbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZ4IGFmZmljaGUgdGFibGUgOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW5lbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFjdHVhbGlzZXIoKXtcclxuICAgICAgICBpZih0aGlzLm5vQ29udHJhdFRleHRTZWFyY2ggIT09IG51bGwgJiYgKHRoaXMubm9Db250cmF0VGV4dFNlYXJjaCkudG9TdHJpbmcoKSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW5lbWVudFNlcnZpY2UuZ2V0RXZlbmVtZW50KE51bWJlcih0aGlzLm5vQ29udHJhdFRleHRTZWFyY2gpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0NvbnRyYXRGaWx0cmVMaXN0ID0gKGRhdGEubm9FdmVuZW1lbnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWx0cmUgdGFibGUgbm8gY29udHJhdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vQ29udHJhdEZpbHRyZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2xTZWFyY2hDb250cmF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9Db250cmF0RmlsdHJlTGlzdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RXZlbmVtZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuZXZlbmVtZW50U2VsZWN0ZWQgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVuZW1lbnRTZXJ2aWNlLmRlbGV0ZUV2ZW5lbWVudCh0aGlzLmV2ZW5lbWVudFNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19
