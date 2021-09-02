import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateToDoComponent } from './to-do/create-to-do/create-to-do.component';
import { DeleteToDoComponent } from './to-do/delete-to-do/delete-to-do.component';
import { EditToDoComponent } from './to-do/edit-to-do/edit-to-do.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ToDo/Create', component: CreateToDoComponent },
  { path: 'ToDo/Delete/:Id', component: DeleteToDoComponent },
  { path: 'ToDo/Edit/:Id', component: EditToDoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }