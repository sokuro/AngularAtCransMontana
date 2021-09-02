import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { IToDo, ToDo } from 'src/models/to-do';

export interface IToDoRepositoryService {}

@Injectable({
  providedIn: 'root'
})
export class ToDoRepositoryService implements IToDoRepositoryService {

  currentToDo: ToDo|null = null;

  constructor(
    private http: HttpClient,
    private activatedRoute:ActivatedRoute
    ) { }

  public getToDoes() : Observable<ToDo[]> {
    let toDoItemsStore: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>(new Array<ToDo>());
    let toDoItemObservable = toDoItemsStore.asObservable();

    this.http.get<IToDo[]>('https://todoapp42.azurewebsites.net/api/todoes/')
    .subscribe(result => {
      let toDoItems = result.map((receivedData: IToDo) => {
        return new ToDo(
          receivedData.id,
          receivedData.title,
          receivedData.date,
          receivedData.categoryId,
          new Category(
            receivedData.category?.id,
            receivedData.category?.title,
            // receivedData.category?.color
            ),
          receivedData.description
        )
      });

      toDoItemsStore.next(toDoItems);
    }, error => console.error(error));

    return toDoItemObservable;
  }

  public getToDoById(toDo: ToDo): Observable<ToDo[]> {
    let toDoItemsStore: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>(new Array<ToDo>());
    let toDoItemObservable = toDoItemsStore.asObservable();

    this.activatedRoute.params.subscribe(params => {
      const id = params['Id'];
      this.http.get<IToDo[]>('https://todoapp42.azurewebsites.net/api/todoes/' + toDo.Id)
      .subscribe(result => {

        let toDoItems = result.map((receivedData: IToDo) => {

          return new ToDo(
            receivedData.id,
            receivedData.title,
            receivedData.date,
            receivedData.categoryId,
            null,
            receivedData.description
          )
        });

        toDoItemsStore.next(toDoItems);
      }, error => console.error(error));
    })

    return toDoItemObservable;
  } 
}
