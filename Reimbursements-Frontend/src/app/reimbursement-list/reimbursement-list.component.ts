import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css']
})
export class ReimbursementListComponent implements OnInit {

  reimbursements: Observable<Reimbursement[]>;

  constructor(private reimbursementService: ReimbursementService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.reimbursements = this.reimbursementService.getReimbursementsList();
  }

  deleteReimbursement(id: number) {
    this.reimbursementService.deleteReimbursement(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  reimbursementDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
