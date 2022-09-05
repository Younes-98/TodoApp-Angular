import { Component } from '@angular/core';
import { Guid } from "guid-typescript";
import { TodoModule } from './models/todo/todo.module';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = '';
  y : boolean;
  isComplete: boolean;
  todos: TodoModule[] = [
    new TodoModule(Guid.create(), 'Par defaut', false),
  ]
  onSubmit(form: NgForm){
    let todo = new TodoModule(Guid.create(), this.title, false)
    this.title === null ? alert('Wrong') : 
      this.todos.push(todo);
      console.log(this.title)
      form.resetForm();
    
      
    
    // console.log(this.title)
    
  }

  onCheck(id: Guid, title: string, isComplete: boolean){
    this.isComplete = !isComplete;
    this.title = title;
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  onDelete(x: Guid){
    this.todos = this.todos.filter(todo => todo.id !== x)
  }
}
