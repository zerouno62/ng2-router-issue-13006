import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'nav',
    template: `
        <h2>Nav</h2>
        <p>currentId: {{ currentId }} </p>
        <ul>
          <li><a [routerLink]="['/user/searchView', { outlets: { main: 'obj/1'} }]">main-1</a> // OK, but bad</li>
          <li><a [routerLink]="['/user/searchView', { outlets: { main: 'obj/2'} }]">main-2</a> // OK, but bad</li>
        </ul>
        
        
     `
})
export class NavComponent implements OnInit {
    currentId: string = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        console.log("*** NavComponent constructor()");
    }

    ngOnInit(): void {
        console.log("--> NavComponent ngOnInit()");
        this.route.params
            .switchMap((params: Params) => {
                return Promise.resolve(params['id']);
            })
            .subscribe((id: string) => {
                console.log("--> NavComponent subscribe() id[" + id + "]");
                this.currentId = id;
            });
    }
}
