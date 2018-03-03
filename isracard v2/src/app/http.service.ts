
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class webApi {
  urlWebApi:string ="http://94.159.248.154/isracardApi/api/"
  constructor(private http: Http) { }
    getData(method:string, search_keywoard: string) {// get data from url or webapi 
      return this.http.get(this.urlWebApi+method+"/" + search_keywoard)
            .map((res: Response) => {
                   return res.json();
            }).catch((error: any) => {
              return Observable.throw(error);
          });
    }
    
   

   
  postData(obj:any,ctrName:string): Observable<MyResponse> {
      
      const body = JSON.stringify(obj);
     let myheaders = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
     return this.http.post(this.urlWebApi + ctrName , body, {headers: myheaders})
          .map((resp: Response) => {
               let myresponse: MyResponse = resp.json();
              return myresponse;

          }).catch((error: any) => {
              return Observable.throw(error);
          });
  }


  
}
export class MyResponse {
  Date: Date
  Status: number;
  Result: any;
}