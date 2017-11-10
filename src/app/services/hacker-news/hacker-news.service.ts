import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HackerNewsServiceService {
  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  getFeed(feedType: string, page: number) {
    return this._http
      .get(`${this.baseUrl}/${feedType}?page=${page}`)
      .map(this.extractData);
  }

  getUser(userId: string) {
    return this._http
      .get(`${this.baseUrl}/user/${userId}`)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    const body = res.json();
    if (body) {
      return body;
    } else {
      return res.text;
    }
  }
}
