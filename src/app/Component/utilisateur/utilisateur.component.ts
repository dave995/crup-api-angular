import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { ServiceService } from '../shared/service.service';
import { Observable } from 'rxjs';
import {  map ,shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})


export class UtilisateurComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
 

  liststudent: Etudiant[] = []

  // objetStudent : Etudiant = {
  //     id:"",
  //     photo: "",
  //     name:"",
  //     email:"",
  //     phone:"",
  //     EnrollNumber:"",
  //     deleteAdmission: ""
  // };
  
    // onDelete(){
    //   this.http.delete('https://jsonplaceholder.typicode.com/users/'+this.onDelete);
    // }
  
  
  constructor( private servicesEtudient : ServiceService, private breakpointObserver: BreakpointObserver, private http : HttpClient) {}
  ngOnInit(): void {
    this.servicesEtudient.getStudents().subscribe({
      next : etudiant => {
        this.liststudent = etudiant
      }
    })

    // id=""
    // photo= ""
    // name=""
    // email=""
    // phone=""
    // EnrollNumber=""
    // deleteAdmission= ""

    // onDelete(id){
    //   this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
    // }
  }
}
