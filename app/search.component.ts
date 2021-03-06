import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    template: `
        <h2>Search</h2>
        <p>keyword: {{ keyword }}</p>
        <ul>
            <li><a [routerLink]="['/user/searchView', { outlets: { nav: 'obj/1'} }]">nav-1</a> // OK, but bad</li>
            <li><a [routerLink]="[{ outlets: { nav: 'obj/2'} }]">nav-2</a> // NOK</li>
            <li><a [routerLink]="['./', { outlets: { nav: 'obj/3'} }]">nav-3</a> // NOK</li>
            <li><a [routerLink]="['../', { outlets: { nav: 'obj/4'} }]">nav-4</a> // NOK</li>
            <li><a [routerLink]="['/', { outlets: { nav: 'obj/5'} }]">nav-5</a> // NOK</li>
        </ul>
 `
})
export class SearchComponent implements OnInit {

    keyword: string = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        console.log("*** SearchComponent constructor()");
    }

    ngOnInit(): void {
        console.log("--> SearchComponent ngOnInit()");
        this.route.params
            .switchMap((params: Params) => {
                return Promise.resolve(params['keyword']);
            })
            .subscribe((keyword: string) => {
                    console.log("--> SearchComponent subscribe() keyword[" + keyword + "]");
                    this.keyword = keyword;
            })
    };

}
