import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { CreateToDoComponent } from './to-do/create-to-do/create-to-do.component';
import { FormsModule } from '@angular/forms';
import { DeleteToDoComponent } from './to-do/delete-to-do/delete-to-do.component';
import { EditToDoComponent } from './to-do/edit-to-do/edit-to-do.component';
import { ToDoRepositoryService } from './services/to-do-repository.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoComponent,
    CreateToDoComponent,
    DeleteToDoComponent,
    EditToDoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    {
      provide: 'IToDoRepositoryService', useClass: ToDoRepositoryService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }