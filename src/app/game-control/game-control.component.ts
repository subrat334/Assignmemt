import { Component } from '@angular/core';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent { 
  arr = [];
  arrleap =[];
  count: number = 1;
  con: any;
  leap: number;
  name: string = "Start";
  //Start Button
  counterStart() {
    this.con = setInterval(() => {
      this.arr = [...this.arr, this.count]
      this.count++;
    }, 1000 * 1);
    this.name = "Resume";
  }
  //Stop Button
  counterStop() {
    clearInterval(this.con);
  }
  //Reset Button
  counterReset() {
    this.arr = [];
    this.arrleap=[];
    this.counterStop();
    this.leap = 0;
    this.count = 1;
    this.name = "Start";
  }
  //Leap Button
  counterLeap() {
    this.leap = this.arr[this.arr.length - 1];
    this.arrleap=[...this.arrleap,new Date()];
        
  }
}
