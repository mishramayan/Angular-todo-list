import { Todo } from '../../Todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string;
  todos: Todo[];
  constructor(){
    this.localItem = JSON.parse(localStorage.getItem("todos") || '{}');
    this.todos =[]
    if(this.localItem === null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(localStorage.getItem("todos") || '{}');
    }
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
