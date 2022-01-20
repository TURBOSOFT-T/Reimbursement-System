import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from '../reimbursement';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-update-reimbursement',
  templateUrl: './update-reimbursement.component.html',
  styleUrls: ['./update-reimbursement.component.css']
})
export class UpdateReimbursementComponent implements OnInit {

  id: number;
  reimbursement: Reimbursement;

  constructor(private route: ActivatedRoute,private router: Router,
    private reimbursementService: ReimbursementService) { }

  ngOnInit() {
    this.reimbursement = new Reimbursement();

    this.id = this.route.snapshot.params['id'];

    this.reimbursementService.getReimbursement(this.id)
      .subscribe(data => {
        console.log(data)
        this.reimbursement = data;
      }, error => console.log(error));
  }

  updateReimbursement() {
    this.reimbursementService.updateReimbursement(this.id, this.reimbursement)
      .subscribe(data => {
        console.log(data);
        this.reimbursement = new Reimbursement();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateReimbursement();
  }

  gotoList() {
    this.router.navigate(['/reimbursements']);
  }

}
