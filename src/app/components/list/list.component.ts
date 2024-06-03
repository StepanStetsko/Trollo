import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() data!: any;
  @ViewChild('container', {read: ViewContainerRef}) 
  container!: ViewContainerRef;
  taskForm!: FormGroup

  constructor(fb: FormBuilder){
    this.taskForm = fb.group({
      task: ["", Validators.required]
    });
  }

  AddNewTask(){
    if(this.taskForm.valid){
      this.container.createComponent(TaskCardComponent).setInput("task", this.taskForm.value.task);
      this.taskForm.reset()
    }
  }
}
