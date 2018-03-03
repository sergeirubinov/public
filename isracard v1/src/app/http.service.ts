
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class githubApi {
  gitHubUrl: string = "https://api.github.com/search/repositories?q=";
    constructor(private http: Http) { }
    getData(search_keywoard: string) {// get data from url or webapi 
      return this.http.get(this.gitHubUrl + search_keywoard)
            .map((res: Response) => {
                   return res.json();
            });
    }
}
