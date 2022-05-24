import { Component, Input, OnInit } from '@angular/core';
import { Statistique} from 'src/models/statistique';
import { ServiceStatistiqueService } from '../services/service-statistique.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  @Input() uneStat! : Statistique;

  constructor(private serviceStat: ServiceStatistiqueService) { }

  ngOnInit(): void {
  }

  supprimerStat(uneStat : Statistique) {
    let positionStat = this.serviceStat.mesStats.indexOf(uneStat);
    if (positionStat != -1) {
      this.serviceStat.mesStats.splice(positionStat, 1);
    }
  }

}
