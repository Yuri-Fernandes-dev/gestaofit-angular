import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Temporariamente permitindo acesso a todas as rotas
    return true;
    
    /* Código original comentado para evitar redirecionamentos indesejados
    if (this.authService.isAuthenticated() && this.authService.isSubscriptionActive()) {
      return true;
    } else if (this.authService.isAuthenticated() && !this.authService.isSubscriptionActive()) {
      // Redirecionar para página de upgrade
      this.router.navigate(['/upgrade']);
      return false;
    } else {
      this.router.navigate(['/']);
      return false;
    }
    */
  }
}