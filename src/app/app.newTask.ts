import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    templateUrl: './app.newTask.html'
})
export class NewTaskComponent {
    name: String;
    description: String;
    deadline: Date;
    deadline_datetime: Date;
    _http: HttpClient;
    _errorMessage: String = "";
    _validation: String;
 


    constructor(private http: HttpClient) {
        this._http = http;
    }


    createTask() {
        let now = new Date();
        this.deadline_datetime = new Date(this.deadline);
        if(this.deadline_datetime.getTime() < now.getTime()) {
            this._errorMessage = "Invalided deadline input."
        } 
        else {
            let url = "http://127.0.0.1:5000/newTask";
            let newTask = {
                "name": this.name,
                "description": this.description,
                "deadline": this.deadline
            }
            this._http.post<any>(url, newTask)
            .subscribe(data =>{
                console.log(data)
                if(data.status == 204) {
                    this._validation = "New task has been added successfully."
                } 
                else {
                    this._validation = ""
                };
            })
        }

    }

}

