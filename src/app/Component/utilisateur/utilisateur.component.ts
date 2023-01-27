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
  
  
  constructor( private servicesEtudient : ServiceService, private breakpointObserver: BreakpointObserver, private http : HttpClient) {}
  ngOnInit(): void {
    this.servicesEtudient.getStudents().subscribe({
      next : etudiant => {
        this.liststudent = etudiant
      }
    })

   
  }

  deleteStudent( etudiant : Etudiant){
    if(window.confirm('Etes vous sures  de vouloir supprimer etudiant : '+etudiant.name+ "?"))
    this.servicesEtudient.deleteStudent(etudiant.id).subscribe((result)=>{
      console.log(result)
    })
    this.ngOnInit()
  }
}
