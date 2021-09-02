import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { IToDo, ToDo } from 'src/models/to-do';
import { ToDoRepositoryService } from '../services/to-do-repository.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  public ToDoItems: ToDo[]|null = null;

  constructor(
    private http: HttpClient,
    private repository: ToDoRepositoryService) { }

  ngOnInit(): void {
    // this.http.get<IToDo[]>('https://todoapp42.azurewebsites.net/api/todoes') .subscribe(result => {
      // this.ToDoItems = result.map(( receivedData: IToDo ) => {
      //   return new ToDo(
      //     receivedData.id,
      //     receivedData.title,
      //     receivedData.date,
      //     receivedData.categoryId,
      //     new Category(
      //       receivedData.category?.id,
      //       receivedData.category?.title,
      //       // receivedData.category?.color
      //     ),
      //     receivedData.description
      //   )
      // });

      this.repository.getToDoes().subscribe(result => this.ToDoItems = result);
    // }, error => console.error(error));
  }
}
