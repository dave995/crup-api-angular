import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
        this.router.navigate(['dashboard'])

     
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  } 

//register

register(email : string, password : string){
  this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
    alert('Connnexion reussi');
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/logout']);
  }
  )
}

//signout
logout() {
  this.fireauth.signOut().then( () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }, err => {
    alert(err.message);
  }
  )
}

// forgot password
forgotPassword(email : string) {
  this.fireauth.sendPasswordResetEmail(email).then(() => {
    this.router.navigate(['/varify-email']);
  })
}
 // email varification
 sendEmailForVarification(user : any) {
  console.log(user);
  user.sendEmailVerification().then((res : any) => {
    this.router.navigate(['/varify-email']);
  }, (err : any) => {
    alert('Something went wrong. Not able to send mail to your email.')
  })
}

 //sign in with google
 googleSignIn() {
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

    this.router.navigate(['/frontdashboard']);
    localStorage.setItem('token',JSON.stringify(res.user?.uid));

  }, err => {
    alert(err.message);
  })
}


}
