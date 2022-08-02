import { Component, OnInit } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  n = 0

  constructor(private obsSrv:ObsService) { }

  ngOnInit(): void {
    this.obsSrv.obs.subscribe((res)=>{
      console.log("navbar");

      this.n = res.length
    })
  }

}
