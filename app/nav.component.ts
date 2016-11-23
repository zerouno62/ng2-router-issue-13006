import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'nav',
    template: `
    <h2>Nav</h2>
    <div>current: {{ currentId }} </div>
    <a [routerLink]="['/', { outlets: { main: 'obj/1'} }]">Main 1</a>
    <a [routerLink]="['/', { outlets: { main: 'obj/2'} }]">Main 2</a>   
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
