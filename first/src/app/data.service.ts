import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any;

  public setData(data: any) {
    this.data = data;
    console.log("Hello", data);
  }

  public getData() {
    console.log('Hello', this.data);
    return this.data;
  }
}
