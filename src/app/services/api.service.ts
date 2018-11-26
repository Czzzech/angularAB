import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { AlertService } from "./alert.service";

const apiUrl = 'http://ab.rest.com';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public static createUrl(apiPath){
    return apiUrl + '/' + apiPath
  }

  constructor(private http:HttpClient) {}

  query(type, apiPath, data?, options?){
    return this.http[type](ApiService.createUrl(apiPath));
  }

}
