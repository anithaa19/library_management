import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs'; 
import { BookList } from '../interfaces/books';
import { APP_CONFIG_SERVICE } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  getBooks$ = this.http.get<BookList[]>('/api/books').pipe(shareReplay(1));

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig, private http: HttpClient) {}

  // getBooks()  {
  //   return this.http.get<BookList[]>('/api/books');
  // }

  getBookbyId(bookId: string) {
    return this.http.get<BookList>('api/getbook/'+bookId);
  }

  addBooks(book: BookList) {
    return this.http.post<BookList[]>('/api/book', book);
  }

  deleteBook(bookId: string) {
    return this.http.delete('/api/book/'+bookId)
  }
}
