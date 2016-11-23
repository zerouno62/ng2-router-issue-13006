import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { SearchViewComponent }   from './search-view.component';
import { SearchComponent }   from './search.component';
import { NavComponent }   from './nav.component';
import { MainComponent }   from './main.component';
import { AuthGuard } from "./auth.guard";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'user', canActivate: [AuthGuard], children: [
                { path: 'searchView', component: SearchViewComponent, children: [
                    { path: 'find/:keyword', component: SearchComponent, outlet: 'search' },
                    { path: 'obj/:id', component: NavComponent, outlet: 'nav' },
                    { path: 'obj/:id', component: MainComponent, outlet: 'main' }
                ] },

            ] },
            {
                path: '',
                redirectTo: '/user',
                pathMatch: 'full'
            }
        ])
    ],

    declarations: [
        AppComponent,
        SearchViewComponent,
        SearchComponent,
        NavComponent,
        MainComponent
    ],

    providers: [
        AuthGuard
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
