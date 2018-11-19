import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static baseUrl = 'http://ab.rest.com/';

  constructor(private http: HttpClient) {

  }

  static createUrl(ctr: string, act: string){
    return ApiService.baseUrl + ctr + '/' + act;
  }

  public post(ctr: string, act: string, data: object, type?: string){
    if(type){
      return this.answer(this.http.type(ApiService.createUrl(ctr, act), data).toPromise());
    }else {
      return this.answer(this.http.post(ApiService.createUrl(ctr, act), data).toPromise());
    }
  }

  private answer(response: Promise){
    response.then((data) => {
      return data.results;
    }).catch((error) => {
      AlertService.send(error, AlertService.DANGER);
    });
  }

  public get(ctr: string, act: string, params?: object): Promise{
    let paramsString = '';
    if(params){
      paramsString += '?';
      for(let param in params){
        paramsString += param + '=' + params[param] + '&';
      }
      paramsString += 'params=true';
    }
    return this.answer(this.http.get(ApiService.createUrl(ctr, act) + paramsString).toPromise());
  }
}
