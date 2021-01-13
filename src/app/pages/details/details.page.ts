import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private storage: Storage) { }
    
  titre = 'Ceci est mon deuxième titre';
    
  maVariable = 'Texte truc blabla'
    
  monTableau = [];
    
  ajoutVar(){
      this.monTableau.push(this.maVariable);
      console.log(this.monTableau);
      this.storage.set('monTableau',this.monTableau);
  }
    
  supprIndex(i){
      console.log(i);
      this.monTableau.splice(i,1);
      this.storage.set('monTableau',this.monTableau);
  }
  
  methodeSoustitre(){
        return 'Ceci est mon sous-titre depuis une méthode';
  }

    // mot-clé async 
  async getStorage(){
      
      // utilisation du mot-clé await pour "bloquer" l'execution de la suite du code tant que les données ne sont pas retourné
      const data = await this.storage.get('monTableau');
      
      console.log('Données récupéré du storage', data);
      
      if(data)this.monTableau = data;

      
      /*this.storage.get('monTableau').then((data) =>{
        if(data){this.monTableau = data}
        console.log('Données récupéré du storage', data);
        
      })*/
  }
    
  ngOnInit() {
        this.getStorage();
  }

}
