import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('token')!=null)
    return true;
    else {
    this.router.navigate(['login']);
    return false;
  }
}
}



// 	canActivate(
// 		route: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot): boolean | Promise<boolean> {
// 		var isAuthenticated = this.authService.getAuthStatus();
// 		if (!isAuthenticated) {
// 			this.router.navigate(['/login']);
// 		}
// 		return isAuthenticated;
// 	}



// canActivate(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): boolean {
//     if(localStorage.getItem('token')!=null)
//     return true;
//   else {
//     this.router.navigate(['login']);
//     return false;
//   }
// }
