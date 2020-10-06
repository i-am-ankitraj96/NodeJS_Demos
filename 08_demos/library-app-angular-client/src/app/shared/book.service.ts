import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient,) { }

getBooks():Observable<Book[]>{
  const getBookUrl = environment.apiUrl + "/books"
  return this.http.get<Book[]>(getBookUrl)

}

addBook(book:Book):Observable<Book>{
  const addBookUrl = environment.apiUrl + "/books"
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  return this.http.post<Book>(addBookUrl, book, httpOptions);

}

deleteBook(book:Book):Observable<any>{

  const deleteBookUrl = environment.apiUrl + "/books/" + book.id
  return this.http.delete(deleteBookUrl)

}

}


  /*
   books:Array<Book> =[{       id:"TECH-100001",       title:"HTML & CSS: Design and Build Websites",  price:2382.21,     author:"Jon Duckett",       category:"Technical",       publishYear:2011,       availableCopies:3,       totalCopies:5,       imageUrl:"assets/books/TECH-100001.jpg"   },
  {       id:"FICT-120819",       title:"A Tale of Two Cities",     price:839.00,    author:"Charles Dickens",       category:"Fiction",       publishYear:1859,       availableCopies:1,       totalCopies:2,       imageUrl:"assets/books/FICT-120819.jpg"   },
  {       id:"HIST-000111",       title:"The Discovery of India",    price:7700.00,     author:"Jawaharlal Nehru",       category:"History",       publishYear:1946,       availableCopies:0,       totalCopies:2,       imageUrl:"assets/books/HIST-000111.jpg"   },
  {       id:"BIO-078796",       title:"The Story of My Experiments With Truth",  price:989.00,       author:"Mohandas K. Gandhi",       category:"Biography",       publishYear:1928,       availableCopies:3,       totalCopies:15,       imageUrl:"assets/books/BIO-078796.jpg"   }];

    getBooks():Array<Book>{
    return this.books;
  }

*/