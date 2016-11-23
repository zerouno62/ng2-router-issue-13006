import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <h1>Home</h1>
    [ <a href="/">Home</a> ]
    [ <a href="/user/searchView/(search:find/1)">find/1</a> ]
    [ <a href="/user/searchView/(search:find/2)">find/2</a> ]
    [ <a href="/user/searchView/(search:find/3)">find/3</a> ]
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
