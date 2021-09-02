import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IToDo, ToDo } from 'src/models/to-do';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  currentToDo: ToDo = new ToDo(0, "", new Date(Date.now()), null, null, "", "");

  constructor(
    @Inject('IToDoRepositoryService') private repository,
    private http:HttpClient, 
    private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.http.post<IToDo>('https://todoapp42.azurewebsites.net/api/todoes', this.currentToDo)
    .subscribe(result => {
      this.router.navigate( ["/"] );
    }, error => console.error(error));
  }

  cancel() {
    this.router.navigate( ["/"] );
  }
}
