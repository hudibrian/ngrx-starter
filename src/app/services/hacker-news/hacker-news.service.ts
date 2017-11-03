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

  private extractData(res: Response) {
    let body = res.json(); // If response is text use text()
    if (body) {
      return body;
    } else {
      return {};
    }
  }
}
