import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    templateUrl: './app.main.html'
})
export class MainComponent {
    _allTasksArray: Array<any>;
    _http: HttpClient;
    _errorMessage: String = "";
 


    constructor(private http: HttpClient) {
        this._http = http;
        this.getAllTasks();
    }


    getAllTasks() {
        let url = "http://127.0.0.1:5000/Tasks/All";
        this._http.get<any>(url)
        .subscribe(result => {
            this._allTasksArray = result;
            console.log(this._allTasksArray)
        })

    }

}