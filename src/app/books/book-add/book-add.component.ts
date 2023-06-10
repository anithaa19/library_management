import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { BookList } from 'src/app/interfaces/books';
import { BooksService } from '../../services/books.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bms-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  title: string = 'Add Book';
  successMessage: string = '';
  // id$ = this.router.params.pipe( map(params => params['id']));
  id$ = this.router.paramMap.pipe( map(params => {
    params.get('id') 
  }) );

  book: BookList = {
    // _id:"76771",
    name:'',
    authorname: '',
    bookcategory:'',
    isbn:'',
    copiesavailable:0,
    rentedcopies:0,
    coverimage:'',
    rating:0,
  };
  
  constructor(private router: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    console.log(this.id$);
    if(this.id$) {
      this.title = 'Edit Book';
    }
  }

  AddBook(bookForm: NgForm) {

    this.booksService.addBooks(this.book).subscribe((data) => {
      this.successMessage = "Book Added Successfully";
      bookForm.reset();
    });
  }

}
