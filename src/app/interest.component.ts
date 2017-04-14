import { Component } from '@angular/core';

@Component({
  selector: 'st-interest',
  templateUrl : 'app/interest.component.html'
})
export class InterestComponent  { 

    amount : number = 0;
    rate  : number = 0;

    clearAll() : void
    {
       this.amount = 0;
       this.rate = 0;
    }

}
