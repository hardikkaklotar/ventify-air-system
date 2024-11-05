import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

  constructor() { }

  windowScroll(){
    if (typeof window !== "undefined") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
