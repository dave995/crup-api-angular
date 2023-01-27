import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Etudiant } from 'src/app/Component/model/etudiant'
import { ServiceService } from 'src/app/Component/shared/service.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent {
 
 objetEtudiant : Etudiant = {
      
      id : "",
      name :"",
      username : "",
      email  :"",
      phone :"",
      date : "",
      number: "",
     
  };

      id=""
    photo= ""
    name=""
    email=""
    phone=""
    date =""
    number=""
    username=""
   

    constructor( private servicesEtudient : ServiceService, private breakpointObserver: BreakpointObserver, private http : HttpClient) {}
    ngOnit(): void {}

    savedata(){
      if (this.name =='' || this.email == '' || this.username == '' || this.date == '' ) {
        alert('veuiller saisir tout les champs')
        return;
      }
      this.objetEtudiant.id = this.id
      this.objetEtudiant.name = this.name
      this.objetEtudiant.email = this.email
      this.objetEtudiant.username = this.username
      this.objetEtudiant.date = this.date


      this.servicesEtudient.saveEtudiant(this.objetEtudiant).subscribe((result)=>{

      })
    }

  
}
