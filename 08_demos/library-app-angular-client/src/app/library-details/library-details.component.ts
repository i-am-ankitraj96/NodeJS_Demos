import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.css']
})
export class LibraryDetailsComponent implements OnInit {

  
 library:any ={
    "name":"The National Library of India",
    "city":"Kolkatta",
     "members":45234
  }

  currentColor:string ="#e4dcdc";
  isBlueColor:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addMember(){

    alert("Adding member")
  }

}

