import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'page',
    template: `
    <h6>Page</h6>
    <table>
        <tr>
            <td>
                <router-outlet name="nav"></router-outlet>
            </td>
            <td rowspan="2">
                <router-outlet name="main"></router-outlet>
            </td>
        </tr>
        <tr>
            <td>
                <router-outlet name="search"></router-outlet>
            </td>
        </tr>
    </table>
 `
})
export class PageComponent {

    constructor(
    ) {
        console.log("*** PageComponent constructor()");
    }
}
