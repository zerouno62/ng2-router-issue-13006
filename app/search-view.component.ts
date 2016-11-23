import { Component, OnInit } from '@angular/core';


@Component({
    template: `
    <h2>Search View</h2>
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
export class SearchViewComponent {

    constructor(
    ) {
        console.log("*** SearchViewComponent constructor()");
    }
}
