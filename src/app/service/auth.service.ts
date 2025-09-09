import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AuthResponse } from '../model/auth-response';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'http://localhost:2025/api/auth';
  private tokenKey = 'lib_token';
  private rolesKey = 'lib_roles';
  private usernameKey = 'lib_username';

  private _isLoggedIn = new BehaviorSubject<boolean>(!!this.getToken());
  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<AuthResponse>(`${this.base}/login`, { username, password })
      .pipe(tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.rolesKey, JSON.stringify(res.roles || []));
        localStorage.setItem(this.usernameKey, res.username);
        this._isLoggedIn.next(true);
      }));
  }

  register(username: string, password: string) {
    return this.http.post(`${this.base}/register`, { username, password });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.rolesKey);
    localStorage.removeItem(this.usernameKey);
    this._isLoggedIn.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRoles(): string[] {
    const raw = localStorage.getItem(this.rolesKey);
    return raw ? JSON.parse(raw) : [];
  }

  getUsername(): string | null {
    return localStorage.getItem(this.usernameKey);
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }
}
