import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  private contentData = new BehaviorSubject<string>('default data');
  currentData = this.contentData.asObservable();

  constructor() { }

  getData(data: any) {
    this.contentData.next(data);
  }
}
