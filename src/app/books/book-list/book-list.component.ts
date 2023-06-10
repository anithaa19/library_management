import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { BookList } from '../../interfaces/books';

@Component({
  selector: 'bms-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {

  @Input() books: BookList[] = [];
  
  @Output() selectedBook = new EventEmitter<string>();
  @Output() deletedBook = new EventEmitter<string>();

  constructor() {  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
    
  // }

  ngOnInit() {
  }

  selectBook(bookId: string) {
    this.selectedBook.emit(bookId);
  }

  // deleteBooks(bookId: string) {
  //   this.deletedBook.emit(bookId);
  // }

  deleteBooks(book: BookList){
    this.deletedBook.emit(book._id);
  } 
}
