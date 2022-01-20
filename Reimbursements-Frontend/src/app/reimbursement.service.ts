import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {


  private baseUrl = 'http://localhost:8082/api/v1/reimbursements';

  constructor(private http: HttpClient) { }

  getReimbursement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createReimbursement(riembursement: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, riembursement);
  }


  updateReimbursement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteReimbursement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getReimbursementsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
