import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  readonly STUDENT_API_URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http : HttpClient) { }

  getStudents():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.STUDENT_API_URL)
  }
}
