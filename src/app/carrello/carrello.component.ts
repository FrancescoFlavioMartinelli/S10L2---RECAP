import { Component, OnInit } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  carrello:any[] = []

  constructor(private obsSrv:ObsService) { }

  ngOnInit(): void {
    this.obsSrv.carrelloUpdate().subscribe((res)=>{
      console.log("carrello");
      this.carrello = res
    })
  }

  ngOnDestroy() {
    
  }

}
