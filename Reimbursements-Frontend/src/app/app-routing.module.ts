

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { ReimbursementDetailsComponent } from './reimbursement-details/reimbursement-details.component';
import { ReimbursementListComponent } from './reimbursement-list/reimbursement-list.component';
import { UpdateReimbursementComponent } from './update-reimbursement/update-reimbursement.component';



const routes: Routes = [

  { path: '', redirectTo: 'reimbursement', pathMatch: 'full' },
  { path: 'reimbursements', component: ReimbursementListComponent },
 { path: 'add', component: CreateReimbursementComponent  },
  { path: 'update/:id', component: UpdateReimbursementComponent },
  { path: 'details/:id', component: ReimbursementDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
