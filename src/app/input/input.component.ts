import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  response = null;
  show: boolean = false;
  constructor(private todos: AppService) { }

  ngOnInit(): void {
  }
  
  // OnChange(event: any) {
  //   console.log(event.target.value)
  // }
  
  headers = ["userId", "id", "title", "completed"]

  OnClick() {
    this.show = true;
    this.todos.getData().subscribe((resp: any) => {
      this.response = resp
      
    });
    console.log(this.response);
  }
}
