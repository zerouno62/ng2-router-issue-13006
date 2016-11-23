import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'main',
    template: `
   <h2>Main</h2>
   <div>current: {{ currentId }} </div>
 `
})
export class MainComponent implements OnInit {
    currentId: string = null;

    constructor(
        private route: ActivatedRoute
    ) {
        console.log("*** MainComponent constructor()");
    }

    ngOnInit(): void {
        console.log("--> MainComponent ngOnInit()");
        this.route.params
            .switchMap((params: Params) => {
                return Promise.resolve(params['id']);
            })
            .subscribe(id => {
                console.log("--> MainComponent subscribe() id[" + id + "]");
                this.currentId = id;
            });
    }

}
