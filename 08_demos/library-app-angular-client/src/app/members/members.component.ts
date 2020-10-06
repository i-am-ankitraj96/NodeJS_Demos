import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/member.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members:Array<Member>;
  
  constructor(public memberService:MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();

  }

  getDate(curDate:Date){

    return curDate.getDate() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getFullYear();
  }

  canShowActivate(curDate:Date){

    const today = new Date();

    return today.getTime() > curDate.getTime() ;
  }
}
