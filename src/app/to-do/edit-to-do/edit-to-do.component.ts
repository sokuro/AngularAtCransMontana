import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IToDo, ToDo } from 'src/models/to-do';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css']
})
export class EditToDoComponent implements OnInit {

  currentToDo: ToDo|null = null;

  constructor(
    private http:HttpClient,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['Id'];
      this.http.get<IToDo>('https://todoapp42.azurewebsites.net/api/todoes/' + id)
      .subscribe(result => {
        this.currentToDo = new ToDo(
          result.id,
          result.title,
          result.date,
          result.categoryId,
          null,
          result.description
        )
      }, error => console.error(error));
    })

    // const id = params['Id'];

    // this.repository.getToDoById(id).subscribe(result => this.ToDoItems = result);
  }

  save() {
    this.http.put<IToDo>('https://todoapp42.azurewebsites.net/api/todoes/' + this.currentToDo?.Id, this.currentToDo)
    .subscribe(result => {
      this.router.navigate( ["/"] );
    }, error => console.error(error));
  }
  
  cancel() {
    this.router.navigate( ["/"] );
  }
}
