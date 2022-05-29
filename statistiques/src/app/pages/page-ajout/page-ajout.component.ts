import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceStatistiqueService } from 'src/app/services/service-statistique.service';
import { Statistique } from 'src/models/statistique';

@Component({
  selector: 'app-page-ajout',
  templateUrl: './page-ajout.component.html',
  styleUrls: ['./page-ajout.component.css']
})
export class PageAjoutComponent implements OnInit {
  identifiant!: string;
  titre!: string;
  valeur!: string


  constructor(public serviceStat : ServiceStatistiqueService, public router : Router) { }

  ngOnInit(): void {
  }

  ajouterStat(){
    let nouvelleStat : Statistique = {
      identifiant : this.identifiant,
      titre : this.titre,
      valeur : this.valeur
    };

    this.serviceStat.mesStats.push(nouvelleStat);
    this.router.navigateByUrl("liste")
  }

}
