import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { ReimbursementDetailsComponent } from './reimbursement-details/reimbursement-details.component';
import { ReimbursementListComponent } from './reimbursement-list/reimbursement-list.component';
import { UpdateReimbursementComponent } from './update-reimbursement/update-reimbursement.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateReimbursementComponent,
    ReimbursementDetailsComponent,
    ReimbursementListComponent,
    UpdateReimbursementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
