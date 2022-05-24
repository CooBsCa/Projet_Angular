import { Component } from '@angular/core';
import { statistique } from 'src/models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mesStats: statistique[] = [
    {identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", titre: "Démographie en France",valeur:"60M"},
    {identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", titre: "Démographie en Europe",valeur:"80M"},
];
  title = 'statistiques';
}

