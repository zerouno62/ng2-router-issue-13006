import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2>Search View</h2>
        <p>
            The dialog flow is: Search -> Nav -> Main.
            <br/>First click on 'nav-1' in 'Search' and then on 'main-1' or 'main-2' in 'Nav'. 
            <br/>These are the only paths that work. 
            <br/>The other 'nav-*' links are here to discuss the unexpected behavior (see Remarks).
        </p>
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
        
        <h3>Remarks on links in Search</h3>
        <table ngNonBindable>
          <tr>
            <th>Link</th>
            <th>State</th>
            <th>routerLink</th>
            <th>Comment, expected behavior</th>
          </tr>
          <tr>
            <td>
              nav-1
            </td>
            <td>
              OK
            </td>
            <td>
              <div>[routerLink]="['/user/searchView', &#123; outlets: &#123; nav: 'obj/1'&#125; &#125;]"</div>
            </td>
            <td>
               Works, but bad bacause routerLink contains the whole path (same for main-1 and main-2 links in Nav).
            </td>
          </tr>
          <tr>
            <td>
              nav-2
            </td>
            <td>
              NOK
            </td>
            <td>
              <div>[routerLink]="[&#123; outlets: &#123; nav: 'obj/2'&#125; &#125;]"</div>
            </td>
            <td>
                <h6>Result</h6>
                Outlet 'nav' is appended as child of outlet 'search'
                <br/>/user/searchView/(search:find/1/(nav:obj/2))
                <h6>Possible improvement</h6>
                The [routerLink] could analyze the config and find out that the 'nav' outlet is a sibling an produce the following url
                <br/>/user/searchView/(search:find/1//nav:obj/2)
            </td>
          </tr>
          <tr>
            <td>
              nav-3
            </td>
            <td>
              NOK
            </td>
            <td>
              <div>[routerLink]="['./', &#123; outlets: &#123; nav: 'obj/2'&#125; &#125;]"</div>
            </td>
            <td>
                see above nav-2
            </td>
          </tr>
          <tr>
            <td>
              nav-4
            </td>
            <td>
              NOK
            </td>
            <td>
              <div>[routerLink]="['../', &#123; outlets: &#123; nav: 'obj/2'&#125; &#125;]"</div>
            </td>
            <td>
                <h6>Result</h6>
                '../' causes that the 'nav' outlet is applied one level up within the 'search' outlet. The produced URL can't be used and doesn't exists in the config.
                <br/>/user/searchView/(search:find/(1//nav:obj/4))
            </td>
          </tr>
          <tr>
            <td>
              nav-5
            </td>
            <td>
              NOK
            </td>
            <td>
              <div>[routerLink]="['/', &#123; outlets: &#123; nav: 'obj/2'&#125; &#125;]"</div>
            </td>
            <td>
              <h6>Result</h6>
              '/' causes that the 'nav' outlet is additionally applied a (root?) sibling of the current path. The produced URL can't be used and doesn't exists in the config.
              <br/>/user/searchView/(search:find/1)(nav:obj/5)
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
