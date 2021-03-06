import {Injectable} from  '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private  username:string;
  private client_id = 'd9b2658567b3261621ca';
  private client_secret = '98a465fd951272bd392c36f4e018ba9c88bfc36b';
  constructor(private _http:Http){
    console.log('Github Service Ready...');
    this.username ='sushantkumar';
  }
  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret' + this.client_secret ).map(res => res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret' + this.client_secret ).map(res => res.json());
  }
  updateUser(username:string){
    this.username=username;
  }
}
