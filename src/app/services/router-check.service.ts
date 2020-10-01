import {Injectable, Type} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {DataThemeService} from './data-theme.service';

@Injectable({
  providedIn: 'root'
})
export class RouterCheckService implements CanActivate {
  constructor(public dataThemeService: DataThemeService) {
  }

  // tslint:disable-next-line:max-line-length
  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(activatedRouteSnapshot);
    // tslint:disable-next-line:no-unused-expression
    if (+activatedRouteSnapshot.params.id > 500) {
    return true;
   }
   else {
     return true;
   }
  }
}
