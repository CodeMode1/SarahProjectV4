"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./login/home.component');
var auth_component_1 = require('./auth/auth.component');
var user_routes_1 = require('./auth/user.routes');
var clients_component_1 = require('./clients/clients.component');
var client_routes_1 = require('./clients/client.routes');
var evenements_component_1 = require('./evenements/evenements.component');
var evenement_routes_1 = require('./evenements/evenement.routes');
var ressource_list_component_1 = require('./ressources/ressource-list.component');
var routes = ([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'auth', component: auth_component_1.AuthComponent, children: user_routes_1.USER_ROUTES },
    { path: 'clients', component: clients_component_1.ClientsComponent, children: client_routes_1.CLIENT_ROUTES },
    { path: 'evenements', component: evenements_component_1.EvenementsComponent, children: evenement_routes_1.EVENEMENT_ROUTES },
    { path: 'ressources', component: ressource_list_component_1.RessourceListComponent }
]);
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFtRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JFLCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXZELCtCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELDRCQUE0QixvQkFBb0IsQ0FBQyxDQUFBO0FBRWpELGtDQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELDhCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXhELHFDQUFvQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3hFLGlDQUFpQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWpFLHlDQUF1Qyx1Q0FBdUMsQ0FBQyxDQUFBO0FBSS9FLElBQU0sTUFBTSxHQUFpQixDQUFDO0lBQzFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUNyQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFLHlCQUFXLEVBQUU7SUFDakUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxRQUFRLEVBQUUsNkJBQWEsRUFBQztJQUN4RSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFLFFBQVEsRUFBRSxtQ0FBZ0IsRUFBQztJQUNqRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO0NBQzVELENBQUMsQ0FBQztBQUVVLGVBQU8sR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyQ29uZmlnLCBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2hvbWUuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVU0VSX1JPVVRFUyB9IGZyb20gJy4vYXV0aC91c2VyLnJvdXRlcyc7XHJcblxyXG5pbXBvcnQgeyBDbGllbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ0xJRU5UX1JPVVRFUyB9IGZyb20gJy4vY2xpZW50cy9jbGllbnQucm91dGVzJztcclxuXHJcbmltcG9ydCB7IEV2ZW5lbWVudHNDb21wb25lbnQgfSBmcm9tICcuL2V2ZW5lbWVudHMvZXZlbmVtZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFVkVORU1FTlRfUk9VVEVTIH0gZnJvbSAnLi9ldmVuZW1lbnRzL2V2ZW5lbWVudC5yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IHsgUmVzc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcmVzc291cmNlcy9yZXNzb3VyY2UtbGlzdC5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlckNvbmZpZyA9IChbXHJcbiAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxyXG4gICAgeyBwYXRoOiAnYXV0aCcsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCwgY2hpbGRyZW46IFVTRVJfUk9VVEVTIH0sXHJcbiAgICB7IHBhdGg6ICdjbGllbnRzJywgY29tcG9uZW50OiBDbGllbnRzQ29tcG9uZW50LCBjaGlsZHJlbjogQ0xJRU5UX1JPVVRFU30sXHJcbiAgICB7IHBhdGg6ICdldmVuZW1lbnRzJywgY29tcG9uZW50OiBFdmVuZW1lbnRzQ29tcG9uZW50LCBjaGlsZHJlbjogRVZFTkVNRU5UX1JPVVRFU30sXHJcbiAgICB7IHBhdGg6ICdyZXNzb3VyY2VzJywgY29tcG9uZW50OiBSZXNzb3VyY2VMaXN0Q29tcG9uZW50IH1cclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7Il19
