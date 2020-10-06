import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Array<Book>;
  
  constructor(public bookService:BookService,private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(response => {
        this.books = response;
    });

  }

  deleteBook(book:Book){
    this.bookService.deleteBook(book).subscribe(response => {
     alert("Successfully deleted stuff")
     this.ngOnInit();
  });


  }

  assignReleaseBook(book:Book){

          
    this.router.navigate(['/assign-release',book.id]);

  }

  getCategory(category:string){

    return category.toLowerCase() + "-text";
  }
}
