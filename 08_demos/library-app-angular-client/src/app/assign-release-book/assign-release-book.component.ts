import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssignReleaseBookService } from '../shared/assign-release-book.service';
import { Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-assign-release-book',
  templateUrl: './assign-release-book.component.html',
  styleUrls: ['./assign-release-book.component.css']
})
export class AssignReleaseBookComponent implements OnInit {
  assignReleaseFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private assignReleaseBookService:AssignReleaseBookService,private route: ActivatedRoute) {

   }

  changeBookId(bookId:string){
    this.assignReleaseFormGroup.controls['bookId'].setValue(bookId)
  }
  ngOnInit() {
    this.assignReleaseFormGroup = this.formBuilder.group({
      operationType:'assign',
      bookId: ['', [
        Validators.required,
        Validators.minLength(4)

      ]],
      memberId: ['', [
        Validators.required,        
        Validators.minLength(4)
      ]]
    
    })

    this.route.params.subscribe( params =>  this.changeBookId(params["bookId"]) )



  }


  updateBook(){
    let currentOperation = this.assignReleaseFormGroup.get("operationType").value;
    let memberId = this.assignReleaseFormGroup.get("memberId").value;
    let bookId = this.assignReleaseFormGroup.get("bookId").value;

    if(currentOperation === "assign")
        this.assignReleaseBookService.assignBook(memberId,bookId).subscribe(response=>{
          alert("Successfully Assigned Book to member");      
          this.router.navigate(['/books']);

        })

    if(currentOperation === "release")
        this.assignReleaseBookService.releaseBook(memberId,bookId).subscribe(response=>{
          alert("Successfully released Book from member");      
          this.router.navigate(['/books']);

        })

  }
 get operationType() {
  return this.assignReleaseFormGroup.get('operationType');
}

get memberId() {
  return this.assignReleaseFormGroup.get('memberId');
}

get bookId() {
  return this.assignReleaseFormGroup.get('bookId');
}

}
