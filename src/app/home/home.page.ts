import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router : Router) {}
    
    titre = 'Ceci est mon titre (une chaine)';
    
    showAlert(message){
        alert(message);
        console.log(message);
    }
    
    openDetails(){
        this.router.navigateByUrl("/details");
    }
}
