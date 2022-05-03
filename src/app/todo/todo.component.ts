import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';// drop text
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ITask } from '../models/task';
// khuôn, biểu mẫu, trình xác thực

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // '!:' kiểm tra chặt chẽ về góc độ trong TL
  todoForm !: FormGroup;
  // all quyen va ds
  tasks: ITask [] = [];
  inprogress: ITask [] = [];
  done: ITask [] = [];
  updateIndex!:any;
  isEditEnable: boolean = false; //nhap vao la true. nguoc lai
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item : ['', Validators.required]
    })
  }
  addTask() {
    // du lieu ban dau trong ngay
    this.tasks.push({
      description: this.todoForm.value.item,
      done: false 
    });
    this.todoForm.reset();//dat lai bieu mau bat ky khi nao them
  }
  // methods
  onEdit(item:ITask, i: number) {
    // dat lai value khi mun nhap vao nut chinh sua
    this.todoForm.controls['item'].setValue(item.description);
    this.updateIndex = i; // cap nhat tu mang
    this.isEditEnable = true;//de dang chinh chinhg sua dc kick hoat noh thg true
  }
  updateTask() {
    this.tasks[this.updateIndex].description = this.todoForm.value.item;
    this.tasks[this.updateIndex].done = false;
    this.todoForm.reset();
    this.updateIndex = undefined;
    this.isEditEnable = false;
  }
  deleteTask(i: number) {
    this.tasks.splice(i,1)
  }
  deleteInProgressTask(i: number) {
    this.inprogress.splice(i,1)
  }
  deleteDoneTask(i: number) {
    this.done.splice(i,1)
  }


  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
