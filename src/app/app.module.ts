import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatIconModule} from '@angular/material/icon';
import { ButtonToFormComponent } from './components/button-to-form/button-to-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskCardComponent } from './components/task-card/task-card.component';
 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    NavigationComponent,
    ButtonToFormComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
