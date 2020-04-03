import { Component } from '@angular/core';
import{ ToDo } from "./to-do";
import { compileComponentFromMetadata } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ToDoList';
  lastID:number=0;
  ToDoList:ToDo[]=[];
  newToDo:ToDo=new ToDo();
  addTodo(){
    this.lastID++;
   
    
    this.ToDoList.push({id:this.lastID,text:this.newToDo.text,complete:this.newToDo.complete});
  }

  removeTodo(td:ToDo){
    this.ToDoList=this.ToDoList.filter(todo=>todo.id!=td.id);
  }

  toggleTodo(td:ToDo){
    this.ToDoList.forEach(todo=>{
      if(todo==td){
        todo.complete=!todo.complete;
      }
    });
  }

  numberNotFinished():any{
    let notCompleted=0;
    this.ToDoList.forEach(todo=>{
      if(!todo.complete){
        notCompleted++;
      }
    })

    return notCompleted;
  }

  ngOnInit(){
  }
}
