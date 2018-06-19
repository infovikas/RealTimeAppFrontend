import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // dataURL = '../../../assets/data.json';
  constructor(private http: HttpClient) { }

  // getContact() {
  //   return this.http.get(this.dataURL);
  // }
  sendmsg({ title: title, content: content }) {
    const body = {
      title: title,
      content: content
    };
    return this.http.post('http://localhost:3000/', body, httpOptions);
  }

  getOldMsg() {
    return this.http.get('http://localhost:3000/data');
  }
}
