import { Component, OnInit } from '@angular/core';
import { Input, Output,EventEmitter } from '@angular/core';
import { Member } from '../models/member';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {

  
  @Input() member:Member;
  @Output() OnEdit = new EventEmitter();
  @Output() OnDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
