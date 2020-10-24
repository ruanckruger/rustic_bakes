import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if(window.pageYOffset > 100){
      return true;
    }
    return false;
  }
  constructor() { }
}
