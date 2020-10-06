import { Injectable } from '@angular/core';
import { Member } from '../models/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  
   members:Array<Member> =[{       id:"STU-3415",       name:"John Doe",       startDate:new Date("2019-02-04T03:24:00"),  endDate:new Date("2020-02-03T03:24:00"),       imageUrl:"assets/members/STU-3415.jpg"   },
  {       id:"FAC-0078",       name:"Mark Smith",       startDate:new Date("2014-03-10T03:24:00"),  endDate:new Date("2024-03-09T03:24:00"),       imageUrl:"assets/members/FAC-0078.jpg"   },
  {       id:"FAC-0341",       name:"Ravi Shankar",       startDate:new Date("2013-10-25T03:24:01"),  endDate:new Date("2023-10-24T03:24:01"),       imageUrl:"assets/members/FAC-0341.jpg"   },
  {       id:"STU-2722",       name:"Steffy Xavier",       startDate:new Date("2017-06-20T03:24:01"),  endDate:new Date("2018-06-19T03:24:01"),       imageUrl:"assets/members/STU-2722.jpg"   }
  ];
  
  constructor() { }

  getMembers():Array<Member>{

    return this.members;
 }

 addMember(member:Member){
  console.log("attempting to add " ,member)
  return this.members.push(member);
}

}
