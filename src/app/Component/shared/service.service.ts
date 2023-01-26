import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/model/payment';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  readonly STUDENT_API_URL =  'http://localhost:3000/utilisateur'
  readonly Payment_API_URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http : HttpClient) { }

  getStudents():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.STUDENT_API_URL)
  }

  getpayment():Observable<Payment[]>{
    return this.http.get<Payment[]>(this.Payment_API_URL)
  }
//    // delete student
//    deleteStudents(etudiant : Etudiant) {
//     this.http.delete('/Etudiant/'+etudiant.id).delete();
//  }
 
}
