import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastAdded:any = null

  prodotti:any[] = []

  sub!:Subscription

  constructor(private obsSrv:ObsService, private http:HttpClient) { }

  ngOnInit(): void {
    this.sub = this.obsSrv.obs.subscribe((res)=>{
      console.log("home");
      this.lastAdded = res[res.length-1]
    })


    this.http.get("/prodotto").subscribe((res:any)=>{
      console.log("http get") 
      this.prodotti = res
    })




  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
