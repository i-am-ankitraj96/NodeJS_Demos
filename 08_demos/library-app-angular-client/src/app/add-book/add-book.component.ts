import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../models/book';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

 
  //undefined helps to nullify integer values
  book:Book ={
    id:"",
    title:"",
    author:"",
    category:"",
    publishYear:undefined ,
    availableCopies:undefined,
    price:undefined,
    totalCopies:undefined,
    imageUrl:""
  }
  constructor(private bookService:BookService,private router: Router) { }

  ngOnInit() {

    
  }

  onAdd(addBookForm:NgForm){

    //No need of wiring here , All the updated values are available in this.book


    //By default all Copies are available
    this.book.availableCopies = this.book.totalCopies;
    this.bookService.addBook(this.book).subscribe(response => {
      alert("Successfully Added Book");      
      this.router.navigate(['/books']);
    });

  }
}
