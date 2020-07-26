import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  view():Observable<any>{

    return this.http.get('http://localhost:8080/employee/viewEmployee')
  }
  add(model):Observable<any>
  {

    return this.http.post('http://localhost:8080/employee/addEmployee',model);
  }
  delete(id):Observable<any>{

    console.log("delete callled...")
    return this.http.delete('http://localhost:8080/employee/delete/'+id)
  }


}
