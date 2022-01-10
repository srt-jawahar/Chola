import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requester } from './modal/requesters';

@Injectable()
export class RequesterService {
  constructor(private http: HttpClient) {}

  getRequesters() {
    return this.http
      .get<any>('assets/agents.json')
      .toPromise()
      .then((res) => <Requester[]>res.data)
      .then((data) => {
        return data;
      });
  }

  generateId() {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
