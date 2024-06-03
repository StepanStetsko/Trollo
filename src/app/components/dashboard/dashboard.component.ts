import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef;

  AddNewList(data: any){
    this.container.createComponent(ListComponent).setInput("data", {tittle: data.tittle, color: data.color})
  } 
}
