import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({ providedIn: 'root' })
export class BookService {
  private base = 'http://localhost:2025/api/books'; // <-- update port

  constructor(private http: HttpClient) {}

  getAvailable(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.base}/available`);
  }

  search(q: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.base}/search?q=${encodeURIComponent(q)}`);
  }

  borrow(id: number): Observable<Book> {
    return this.http.post<Book>(
      `${this.base}/${id}/borrow`,
      {},
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  returnBook(id: number): Observable<Book> {
    return this.http.post<Book>(
      `${this.base}/${id}/return`,
      {},
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(
      this.base,
      book,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
