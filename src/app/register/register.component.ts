import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private _quizService:QuizService, private _route: Router) { }

  ngOnInit() {
  }

  onSubmi(name: string ,email:string){

  }

}
