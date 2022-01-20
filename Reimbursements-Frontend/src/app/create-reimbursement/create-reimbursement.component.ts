import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from '../reimbursement';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-create-reimbursement',
  templateUrl: './create-reimbursement.component.html',
  styleUrls: ['./create-reimbursement.component.css']
})
export class CreateReimbursementComponent implements OnInit {
  reimbursement: Reimbursement= new Reimbursement();
  submitted = false;

  constructor(private reimbursementService: ReimbursementService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.reimbursement = new Reimbursement();
  }

  save() {
    this.reimbursementService
    .createReimbursement(this.reimbursement).subscribe(data => {
      console.log(data)
      this.reimbursement = new Reimbursement();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/reimbursements']);
  }

}
