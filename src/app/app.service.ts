import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpData: HttpClient) {
   }

  getData(): Observable<any>  {    
    return this.httpData.get(`https://jsonplaceholder.typicode.com/todos`);
  }

}
