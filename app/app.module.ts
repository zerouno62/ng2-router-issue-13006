import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { SearchComponent }   from './search.component';
import { NavComponent }   from './nav.component';
import { MainComponent }   from './main.component';
import { SearchViewComponent }   from './search-view.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'user', children: [
                { path: 'searchView', component: SearchViewComponent, children: [
                    { path: 'find/:keyword', component: SearchComponent, outlet: 'search' },
                    { path: 'obj/:id', component: NavComponent, outlet: 'nav' }
                ] },

            ] },
            {
                path: '',
                redirectTo: '/user',
                pathMatch: 'full'
            }
            
            /*,
            { path: 'page', component: PageComponent },
            { path: 'find/:keyword', component: SearchComponent, outlet: 'search' },
            { path: 'obj/:id', component: NavComponent, outlet: 'nav' },
            { path: 'obj/:id', component: MainComponent, outlet: 'main' },

            { path: 'sub', children: [
                { path: '', component: PageComponent, children: [
                { path: 'find/:keyword', component: SearchComponent, outlet: 'search' },
                { path: 'obj/:id', component: NavComponent, outlet: 'nav' },
                { path: 'obj/:id', component: MainComponent, outlet: 'main' }
            ]}*/

        ])
    ],

    declarations: [
        AppComponent,
        SearchViewComponent,
        SearchComponent,
        NavComponent,
        MainComponent

    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
