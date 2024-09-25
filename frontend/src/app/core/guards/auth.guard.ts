import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  if (localStorage.getItem('isLoggedIn') === 'true') {
    return true; // User is logged in, allow access
  } else {
    router.navigate(['/login']); // User not logged in, redirect to login
    return false; // Deny access
  }
};
