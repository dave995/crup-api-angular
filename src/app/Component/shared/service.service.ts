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
  
  saveEtudiant( data :any){

    return this.http.post(this.STUDENT_API_URL,data)
  }

  // onDelete(){
  //   this.http.delete('https://jsonplaceholder.typicode.com/users/'+this.onDelete);
  // }

  deleteStudent(id : any) {
  return this.http.delete( `${this.STUDENT_API_URL}/${id}` )
}

getStudentbyId(id : any){
  return this.http.get(`${this.STUDENT_API_URL}/${id}` )
}

getStudentupdate(id: any , data : any){
    return this.http.put(`${this.STUDENT_API_URL}/${id}`,data)
}

  getpayment():Observable<Payment[]>{
    return this.http.get<Payment[]>(this.Payment_API_URL)
  }

 
}
