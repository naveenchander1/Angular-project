import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  constructor(private http: HttpClient,) {
    console.log('-----SERVICE CREATED ------')
   }

  getData () {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(map((data: any) => {
      return data
    }), catchError((error, src) => {
      throw new Error(error)
    }));
  }
}
