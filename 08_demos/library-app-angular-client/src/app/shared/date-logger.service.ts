import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateLoggerService {

  constructor() { }

  info(msg:any){
    console.log("INFO " + new Date() + "==>" + msg);
  }

  debug(msg:any){
    console.log("DEBUG " + new Date() + "==>" + msg);
  }

  error(msg:any){
    console.log("ERROR " + new Date() + "==>" + msg);
  }

  warn(msg:any){
    console.log("WARNING " + new Date() + "==>" + msg);
  }

}
