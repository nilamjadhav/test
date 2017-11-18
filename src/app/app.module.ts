import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClarityModule } from "clarity-angular";


import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const appRoutes: Routes = [
  
    // path: '', 
    // component: UserCardComponent,
    // pathMatch: 'full',
    // children: [
    //   // { path: '', redirectTo: 'user-toDo' },
    //   { path: 'user-toDo', component: ToDoListComponent }

    // ]
    
     { path: 'userCsrd', component: UserCardComponent },
  { path: 'user-toDo/:id', component: ToDoListComponent },
  

];
@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ClarityModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
