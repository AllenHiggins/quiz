import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, private quizService:QuizService) { }

  ngOnInit() {
    this.quizService.seconds = 0;
    this.quizService.qnProgress = 0;
    this.startTimer();
  }

  startTimer(){
    this.quizService.timer = setInterval(() =>{
      this.quizService.seconds++;
    },1000);
  }

  answer(questionID, choice){
    this.quizService.qnProgress++;
    
    // Answer ten question to finish
    if(this.quizService.qnProgress == 10){
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

}
