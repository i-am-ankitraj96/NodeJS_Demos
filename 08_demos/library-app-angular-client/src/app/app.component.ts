import { Component } from '@angular/core';
import { Book } from './models/book';
import { Member } from './models/member';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library App';

  

  constructor(public authenticationService:AuthenticationService){
    
  }


}

