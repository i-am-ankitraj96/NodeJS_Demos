import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/member.service';
import { Member } from '../models/member';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member:Member ={
    id:"",
    name:"",
    startDate:new Date(),
    endDate:null,  
    imageUrl:""
   };

  ngOnInit() {
  }
  constructor(private memberService:MemberService) { }

 

  onAdd(addMemberForm:NgForm){

    //No need of wiring here , All the updated values are available in this.member


    //By default all Copies are available
    this.member.startDate =new Date();
    this.memberService.addMember(this.member);
    
   //reset values after added , or go back to some screen
    addMemberForm.reset()
  }
}
