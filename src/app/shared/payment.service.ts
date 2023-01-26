import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 
  readonly Payment_API_URL = 'http://localhost:3000/payment'

  constructor(private http : HttpClient) { }

  getpayment():Observable<Payment[]>{
    return this.http.get<Payment[]>(this.Payment_API_URL)
  }
}
