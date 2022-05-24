import { Component, OnInit } from '@angular/core';
import { Statistique} from 'src/models/statistique';
import {ServiceStatistiqueService } from 'src/app/services/service-statistique.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'statistiques';
  public stat3: Statistique = {identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb47", titre: "Démographie en Asie",valeur:"100M"};
  ngOnInit(): void {    
  }
  
  constructor(public serviceStats: ServiceStatistiqueService){
    setTimeout(() => {
      this.serviceStats.mesStats.push(this.stat3)
    }, 3000);
  }
}


