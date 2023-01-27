import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Etudiant } from '../../model/etudiant';
import { ServiceService } from '../../shared/service.service';

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.scss']
})
export class EditUtilisateurComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  objetEtudiant : Etudiant = {
    id :"",
    name:"",
    email:"",
    phone:"",
    number:"",
    date:"",
    username:""
  };

  id=""
  photo= ""
  name=""
  email=""
  phone=""
  date =""
  number=""
  username=""
 
  
  constructor( private servicesEtudient : ServiceService, private breakpointObserver: BreakpointObserver, private http : HttpClient, private router: ActivatedRoute){}

  ngOnit(): void {
    const ide = this.router.snapshot.paramMap.get('id');

    this.servicesEtudient.getStudentbyId(ide).subscribe((result:any)=>{
      this.id=result.id,
      this.photo=result.photo,
      this.name=result.name,
      this.email=result.email,
      this.phone=result.phone,
      this.date=result.date,
      this.username=result.username
    })
  }

  dataUpdate(){
    const idee = this.router.snapshot.paramMap.get('id');

    this.objetEtudiant.id = this.id
    this.objetEtudiant.name = this.name
    this.objetEtudiant.email = this.email
    this.objetEtudiant.phone = this.phone
    this.objetEtudiant.number = this.number
    this.objetEtudiant.date = this.date
    this.objetEtudiant.username = this.username

    this.servicesEtudient.getStudentupdate(idee,this.objetEtudiant).subscribe((result)=>{
      //console.log(result)
    })
 
  }

}
