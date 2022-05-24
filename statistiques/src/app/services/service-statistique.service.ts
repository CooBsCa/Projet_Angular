import { Injectable, OnInit } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Injectable({
  providedIn: 'root'
})
export class ServiceStatistiqueService implements OnInit{

  public stat1: Statistique = {identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", titre: "Démographie en France",valeur:"60M"};
  public stat2: Statistique = {identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", titre: "Démographie en Europe",valeur:"80M"};
  public mesStats: Statistique[] = [this.stat1,this.stat2];

  
  ngOnInit(): void {
    
  }

  constructor() { }
}
