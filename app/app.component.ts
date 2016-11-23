import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <h1>Home</h1>
    [ <a [routerLink]="['/']">Home</a> ]
    [ <a [routerLink]="['/user/searchView', { outlets: { 'search': 'find/1'}}]">find-1</a> ]
    <hr/>
    <router-outlet></router-outlet>
   
 `
})
export class AppComponent {
    constructor(
        private router: Router
    ) {
        console.log("*** AppComponent constructor()");
    }
}
