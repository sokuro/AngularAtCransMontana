import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/category';
import { IToDo, ToDo } from 'src/models/to-do';

@Component({
  selector: 'app-delete-to-do',
  templateUrl: './delete-to-do.component.html',
  styleUrls: ['./delete-to-do.component.css']
})
export class DeleteToDoComponent implements OnInit {

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
          new Category(
            result.category?.id, 
            result.category?.title, 
            // result.category?.color
            ),
          result.description
        )
      }, error => console.error(error));
    })
  }

  delete() {
    if (this.currentToDo != null) {
      this.http.delete('https://todoapp42.azurewebsites.net/api/todoes/' + this.currentToDo.Id)
      .subscribe(result => {
        this.router.navigate( ["/"] );
      }, error => console.error(error));
    }
  }

  cancel() {
    this.router.navigate( ["/"] );
  }
}
