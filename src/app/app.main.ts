import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    templateUrl: './app.main.html'
})
export class MainComponent {
    _allTasksArray: Array<any>;
    _sortedTasksArray: Array<any>;
    _http: HttpClient;
    _errorMessage: String = "";
    selectedTask:Object;
 


    constructor(private http: HttpClient) {
        this._http = http;
        this.getAllTasks();
    }

  

    getAllTasks() {
        let url = "http://127.0.0.1:5000/toDoTasks";
        this._http.get<any>(url)
        .subscribe(result => {
            this._allTasksArray = result;
            for(let i=0; i<this._allTasksArray.length; i++){
                this._allTasksArray[i].deadline = new Date(this._allTasksArray[i].deadline)
            }
            this._sortedTasksArray = this._allTasksArray.sort((a, b)=>  a.deadline -  b.deadline)
        })


    }
    onSelect(task) {
        this.selectedTask = task;
    }

    completeTask() {
        
    }

    deleteTask() {

    }


}