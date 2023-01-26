import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { ServiceService } from '../shared/service.service';
import { Observable } from 'rxjs';
import {  map ,shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
  
  constructor( private servicesEtudient : ServiceService, private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.servicesEtudient.getStudents().subscribe({
      next : etudiant => {
        this.liststudent = etudiant
      }
    })
  }
}
