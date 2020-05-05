import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    templateUrl: './app.main.html'
})
export class MainComponent {
    _today;
    _allTasksArray: Array<any>;
    _sortedTasksArray: Array<any>;
    _todayTasksArray: Array<any> = [];
    _otherTasksArray: Array<any> = [];
    _http: HttpClient;
    selectedTask;
 


    constructor(private http: HttpClient) {
        this._http = http;
        this.getAllTasks();
        this._today = new Date();
        this._today = this.formatDate(this._today);
        console.log(this._today)
    }

    formatDate(_date) {
        let month = '' + (_date.getMonth() + 1);
        let day = '' + _date.getDate();
        let year = _date.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
            return [year, month, day].join('-');
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
            for(let i=0; i<this._sortedTasksArray.length; i++) {
                if(this.formatDate(this._sortedTasksArray[i].deadline) == this._today) {
                    this._todayTasksArray.push(this._sortedTasksArray[i])
                }
                else{
                    this._otherTasksArray.push(this._sortedTasksArray[i])
                }
            }
        })
    }

    
    onSelect(task) {
        this.selectedTask = task;
    }

    deleteTask() {
        let url = "http://127.0.0.1:5000/deleteTask";

        this.http.post(url,this.selectedTask)
            .subscribe(
                (data) => {
                    console.log(data)
                },
                error => {
                    alert(JSON.stringify(error));
                });
        location.reload();

    }

    completeTask() {
        let url = "http://127.0.0.1:5000/completeTask";

        this.http.post(url,this.selectedTask)
        .subscribe(
            (data) => {
                console.log(data)
            },
            error => {
                alert(JSON.stringify(error));
            });
        location.reload();


    }




}