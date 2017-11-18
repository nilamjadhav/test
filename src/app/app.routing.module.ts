import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserCardComponent } from './user-card/user-card.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const appRoutes: Routes = [
    {
        path: '', component: UserCardComponent,
        pathMatch: 'full',
        children: [
            // { path: '', redirectTo: 'user-toDo' },
            { path: 'user-toDo', component: ToDoListComponent }

        ]
    },
    //   {
    //     path: 'user-toDo', component: ToDoListComponent
    //   }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }