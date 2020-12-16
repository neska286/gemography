import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IRepos} from '../repos';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient ) { }


// load the first page
  getAllRepos():Observable<IRepos[]>{

    const url = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";

   return  this.httpClient.get<IRepos[]>(url);

  }



}
