import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-button-to-form',
  templateUrl: './button-to-form.component.html',
  styleUrl: './button-to-form.component.css'
})
export class ButtonToFormComponent {

  @Output() addList = new EventEmitter<any>();

  isFormVisible: boolean = false;
  listForm!: FormGroup;

  constructor(fb: FormBuilder) { 
    this.listForm = fb.group({
      tittle: ["", Validators.required],
      color: [""]
    });
  }


  toggleForm(): void {
    this.isFormVisible = this.isFormVisible ? false : true;
  }

  onSubmit(): void{
    if(this.listForm.valid){
      this.toggleForm()
      this.addList.emit(this.listForm.value);
      this.listForm.reset()
    }
  }

}
