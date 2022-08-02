import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  private carrello:any[]=[]

  private subject:Subject<any[]> = new Subject() //oggetto che esegue i next all'interno del service
  readonly obs:Observable<any[]> = this.subject.asObservable()//oggettto su cui i component faranno subscribe


  constructor() {
    // this.subject = new Subject();
    // this.obs = this.subject.asObservable();
    // this.obs = new Observable<number>((sub)=>{
    //   let i = 0
    //   setInterval(()=>{
    //     i++
    //     sub.next(i)
    //   }, 1000)
    // });
  }

  carrelloUpdate(){
    return this.obs
  }

  addCart(p:any){
    this.carrello.push(p)
    this.subject.next(this.carrello)
  }

  removeCart(p:any) {
    this.carrello = this.carrello.filter(e=>e.id!=p.id)
    this.subject.next(this.carrello)
  }


}
