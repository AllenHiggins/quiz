import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  timer;
  seconds:number;
  qnProgress: number;
  qns: boolean = true;

  constructor() { }

  displayTimeElapsed(){
    return Math.floor(this.seconds /3600)+":"+Math.floor(this.seconds /60)+":"+Math.floor(this.seconds % 60 );
  }

 
}
