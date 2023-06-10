import { Component, OnInit, SkipSelf } from '@angular/core';
import { Book, BookList } from '../interfaces/books';
import { BooksService } from '../services/books.service';
import { BookListComponent } from './book-list/book-list.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'bms-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  // providers: [BooksService]
})
export class BooksComponent implements OnInit {
  books: Book = {
    bookCategories:5,
    totalBooksAvailable: 10,
    rentedBooks: 2,
  };

  bookList: BookList[] | null = [];
  
  role = "Employee";
  getAllBooks$ = this.booksService.getBooks$;
  successMessage: string = '';

  constructor(@SkipSelf() private booksService: BooksService) {
  }

  ngOnInit() {
    // this.booksService.getBooks$.subscribe(books=> {
    //   this.bookList = books;
    //   console.log(this.bookList);
    // });
  }

  selectBook(book: string){
    console.log(book);
  }


  deleteBook(bookId: string) {
    this.booksService.deleteBook(bookId).subscribe((data) => {
      this.successMessage = "Book Deleted Successfully";
    });

    // deleteBooks({{book._id}})
  }
}
