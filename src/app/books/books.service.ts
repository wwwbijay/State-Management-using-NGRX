import { Injectable } from '@angular/core';
import { Books } from './store/books';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Books[]>('http://localhost:3000/books');
  }

  create(payload: Books) {
    return this.http.post<Books>('http://localhost:3000/books', payload);
  }

  update(payload: Books) {
    return this.http.put<Books>(
      `http://localhost:3000/books/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/books/${id}`);
  }


}
