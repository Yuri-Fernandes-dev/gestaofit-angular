import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  tenantId: string;
  subscription: {
    plan: 'free' | 'pro' | 'enterprise';
    expiresAt: string;
    features: string[];
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  companyName: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    // Mock para demo - remover quando conectar com backend
    if (credentials.email === 'admin@gestaofit.com' && credentials.password === '123456') {
      const mockResponse: AuthResponse = {
        user: {
          id: 1,
          email: credentials.email,
          name: 'Administrador',
          role: 'admin',
          tenantId: 'tenant-001',
          subscription: {
            plan: 'pro',
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 dias
            features: ['unlimited_products', 'advanced_reports', 'api_access']
          }
        },
        token: 'mock-jwt-token',
        refreshToken: 'mock-refresh-token'
      };
      
      return new Observable<AuthResponse>(observer => {
        setTimeout(() => {
          observer.next(mockResponse);
          observer.complete();
        }, 1000);
      }).pipe(
        tap(response => this.handleAuthSuccess(response))
      );
    } else {
      return new Observable<AuthResponse>(observer => {
        setTimeout(() => {
          observer.error(new Error('Email ou senha inválidos'));
        }, 1000);
      });
    }
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/register`, userData)
      .pipe(
        tap(response => this.handleAuthSuccess(response))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  refreshToken(): Observable<AuthResponse> {
    // Mock para demo - remover quando conectar com backend
    const mockResponse: AuthResponse = {
      user: {
        id: 1,
        email: 'admin@gestaofit.com',
        name: 'Administrador',
        role: 'admin',
        tenantId: 'tenant-001',
        subscription: {
          plan: 'pro',
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          features: ['unlimited_products', 'advanced_reports', 'api_access']
        }
      },
      token: 'new-mock-jwt-token',
      refreshToken: 'new-mock-refresh-token'
    };
    
    return new Observable<AuthResponse>(observer => {
      setTimeout(() => {
        observer.next(mockResponse);
        observer.complete();
      }, 500);
    }).pipe(
      tap(response => this.handleAuthSuccess(response))
    );
  }

  private handleAuthSuccess(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('refreshToken', response.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.user));
    this.currentUserSubject.next(response.user);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  hasFeature(feature: string): boolean {
    const user = this.getCurrentUser();
    return user?.subscription.features.includes(feature) || false;
  }

  isSubscriptionActive(): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    const expiresAt = new Date(user.subscription.expiresAt);
    return expiresAt > new Date();
  }
} 