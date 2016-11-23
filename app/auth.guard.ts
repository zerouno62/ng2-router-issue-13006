import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
    console.log("*** AuthGuard consturctor()");
  }

  canActivate(
    // Not using but worth knowing about
    nextRoute:  ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ) {
    console.log("--> AuthGuard canActivate()");
    return true;
  }
}
