import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    // Use a localStorage as we don't have a backend implementation.
    const token = localStorage.getItem('AUTH');

    const isAuth = !!token;

    // Prevent is user is authenticated and is on url '/auth'
    if (isAuth && state.url === '/auth') {
      // Update to service the user authentication
      this.userService.setUserAuth(isAuth);
      // Redirect back
      this.router.navigate(['/']);
      return false;
    }

    // Check is user is authenticated and is not /auth url
    if (isAuth && !state.url.includes('/auth')) {
      // Update to service the user authentication
      this.userService.setUserAuth(isAuth);
      return true;
    }
    
    // Check if user is not authenticated and is not on the url auth
    if (!isAuth && !state.url.includes('/auth')) {
      this.router.navigate(['/auth'], {queryParams: {returnUrl: state.url}});
      return false;
    }
    
    return true;
  }
  
}
