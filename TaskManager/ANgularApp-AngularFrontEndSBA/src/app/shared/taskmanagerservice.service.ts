import { Injectable } from '@angular/core';
import {Taskdetails} from '../Models/taskdetails';
import {projectdetails} from '../Models/projectdetails';
import {projects} from '../Models/projects';
import {userdetails} from '../Models/userdetails';
import {Observable} from 'rxjs'
import {Http,Response} from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
//import 'rxjs/add/operator/map';
//import './rxjs-operators';
import {map} from 'rxjs/operators';

@Injectable()
export class TaskmanagerserviceService {
  selectedTask:Taskdetails;
  selectedUser:userdetails;
  selectedProject:projectdetails;
getURL:string = "http://localhost/TaskManagerWebApi/api/GetAllTasksJoin";
saveURL:string = "http://localhost/TaskManagerWebApi/api/AddTaskwithParent";
editURL:string = "http://localhost/TaskManagerWebApi/api/EditTask";
getURLByID:string = "http://localhost/TaskManagerWebApi/api/GetTaskByID/";
endTaskURL:string = "http://localhost/TaskManagerWebApi/api/EndTask/";
getProjectURL:string = "http://localhost/TaskManagerWebApi/api/GetAllProjects";
getUserURL:string = "http://localhost/TaskManagerWebApi/api/GetAllUsers";
addUserURL:string = "http://localhost/TaskManagerWebApi/api/adduser";
editUserURL:string = "http://localhost/TaskManagerWebApi/api/edituser";
getUserByID:string = "http://localhost/TaskManagerWebApi/api/GetUser/";
getProjectByID:string = "http://localhost/TaskManagerWebApi/api/GetProjectByID/";
addProjectURL:string = "http://localhost/TaskManagerWebApi/api/addproject";
editProjectURL:string = "http://localhost/TaskManagerWebApi/api/editproject";

  constructor(private http:HttpClient,private httpget:Http) { }
  GetAllTasks():Observable<Taskdetails[]>
  {
    return this.httpget.get(this.getURL)
    .pipe(map((data:Response)=><Taskdetails[]>data.json()))
  }
  GetAllProjects():Observable<projects[]>
  {
    return this.httpget.get(this.getProjectURL)
    .pipe(map((data:Response)=><projects[]>data.json()))
  }
  GetAllUsers():Observable<userdetails[]>
  {
    return this.httpget.get(this.getUserURL)
    .pipe(map((data:Response)=><userdetails[]>data.json()))
  }
  GetTaskByID(task_id:number):Observable<Taskdetails[]>
  {
    return this.httpget.get(this.getURLByID + task_id )
    .pipe(map((data:Response)=><Taskdetails[]>data.json()));    
  }
  GetProjectByID(project_id:number):Observable<projectdetails[]>
  {
    return this.httpget.get(this.getProjectByID + project_id )
    .pipe(map((data:Response)=><projectdetails[]>data.json()));    
  }
  Add(task:Taskdetails)  
{ debugger;
  const headers = new HttpHeaders().set('content-type', 'application/json');  
  var body = {task_id:0, parent_task:'', parent_id:task.parent_id, task:task.task, 
  start_date:task.start_date,end_date:task.end_date,
    priority:task.priority,taskended:0, project_id:task.project_id, user_id:task.user_id,
    project:task.project,username:task.username,isparent:task.isparent==true?1:0 }  
    if(task.isparent)
    {
      body= {task_id:0, parent_task:'', parent_id:0, task:task.task, 
      start_date:null,end_date:null,
        priority:0,taskended:0, project_id:task.project_id, user_id:null,
        project:task.project,username:'',isparent:task.isparent==true?1:0 }; 
    }
  console.log(body);
return this.http.post<Taskdetails>(this.saveURL,body,{headers})  
  
}
Edit(task:Taskdetails)  
{ 
  const headers = new HttpHeaders().set('content-type', 'application/json');  
  var body = {task_id:task.task_id, parent_id:task.parent_id, task:task.task, start_date:task.start_date,
    end_date:task.end_date,priority:task.priority,taskended:0, project_id:task.project_id, user_id:task.user_id}    
if(task.isparent)
{
  body = {task_id:task.task_id, parent_id:null, task:task.task, start_date:null,
    end_date:null,priority:null,taskended:0, project_id:task.project_id, user_id:null}   
}

return this.http.post<Taskdetails>(this.editURL,body,{headers})    
}
EndTask(task_id:number) :Observable<string> 
{ 
  return this.httpget.get(this.endTaskURL + task_id )
    .pipe(map((data:Response)=><string>data.json()));        
}
///////////////////User
AddUser(user:userdetails)  
{ debugger;
  const headers = new HttpHeaders().set('content-type', 'application/json');  
  var body = {user_id:0, firstname:user.firstname, lastname:user.lastname, employee_id:user.employee_id, 
    project_id:0 ,task_id:0}  
  console.log(body);
return this.http.post<userdetails>(this.addUserURL,body,{headers})  
  
}
EditUser(user:userdetails)  
{ 
  const headers = new HttpHeaders().set('content-type', 'application/json');  
  var body = {user_id:user.user_id , firstname:user.firstname, lastname:user.lastname, employee_id:user.employee_id, 
    project_id:user.project_id ,task_id:user.task_id}    
return this.http.post<userdetails>(this.editUserURL,body,{headers})    
}
GetUserByID(user_id:number):Observable<userdetails[]>
{
  return this.httpget.get(this.getUserByID + user_id )
  .pipe(map((data:Response)=><userdetails[]>data.json()));    
}



////Project
AddProject(p:projectdetails)  
{ debugger;
  const headers = new HttpHeaders().set('content-type', 'application/json');  
  var body = {project_id:0, project:p.project, startdate:p.startdate, enddate:p.enddate,
  priority:p.priority, user_id:p.user_id, username:p.username }  
  console.log(body);
return this.http.post<projectdetails>(this.addProjectURL,body,{headers})
}
EditProject(p:projectdetails)  
{ debugger;
  const headers = new HttpHeaders().set('content-type', 'application/json');  
  var body = {project_id:p.project_id, project:p.project, start_date:p.startdate, end_date:p.enddate,
  priority:p.priority, user_id:p.user_id, username:p.username }  
  console.log(body);
return this.http.post<projectdetails>(this.editProjectURL,body,{headers})  
  
}

}