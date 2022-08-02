import { Component, Input, OnInit } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  @Input() prodotto:any

  constructor(private obsSrv:ObsService) { }

  ngOnInit(): void {
  }

  aggiungiAlCarrello(){
    this.obsSrv.addCart(this.prodotto)
  }

}
