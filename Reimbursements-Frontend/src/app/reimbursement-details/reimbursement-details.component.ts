import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from '../reimbursement';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-reimbursement-details',
  templateUrl: './reimbursement-details.component.html',
  styleUrls: ['./reimbursement-details.component.css']
})
export class ReimbursementDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['reimbursements']);
  }

}
