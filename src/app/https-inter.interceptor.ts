import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, take, tap, throwError } from 'rxjs';

@Injectable()
export class HttpsInterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(request)

    let token = "abcd"

    //Clonare la request e impostare le modifiche come oggetto parametro
    let req = request.clone({
      //modifico l'url per aggiugnere localhost:3000
      url: "http://localhost:3000"+request.url,
      //usiamo setHeaders per impsotare le voci di header come oggetto
      setHeaders: {
        Authorization: token
      }
    })

    // //SE non stiamo facendo get aggiungo informazioni sui dati che invio
    if(req.method != "GET") {
      req = request.clone({
        url: "http://localhost:3000"+request.url,
        setHeaders: {
          Authorization: token,
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })
    }

    console.log(req)


    //Invio la request modificata
    // return next.handle(req);


    //SE vogliamo controllare gli errori possiamo aggiungere al .handle()
    //prima di redstituire l'oibservable eseguo una pipe per gestire eventuali next che rappresentano errori
    let returnHandler = next.handle(request).pipe(
      //Catturo gli errori con catchError e solo sugli errori eseguo la funzione parametro
      catchError((err)=>{
        //Manipolo l'errore
        console.log(err);
        
        if(err.status == 404) {
          console.log("LA RISORSA NON È STATA TROVATA")
        }
        
        //restituire un errore custom
        return throwError(err)
      })
    )
    return returnHandler
    
  }
}
