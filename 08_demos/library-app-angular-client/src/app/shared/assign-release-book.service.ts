import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignReleaseBookService {

  constructor(private http: HttpClient ) { }

  assignBook(memberId: string, bookId: string): Observable<Book> {


    const assignBookUrl = environment.apiUrl + "/assignbook/" + bookId
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    var req = {
      "memberId": memberId
    }
    return this.http.put<Book>(assignBookUrl, req, httpOptions);




  }



  releaseBook(memberId: string, bookId: string): Observable<Book> {
  
    const releaseBookUrl = environment.apiUrl + "/releasebook/" + bookId
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    var req = {
      "memberId": memberId
    }
    return this.http.put<Book>(releaseBookUrl, req, httpOptions);

  }

  hasCopy(bookId: string): boolean {
    return true;
  }

}
