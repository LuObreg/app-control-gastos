import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = environment.url + "/users";
  user : any;
  id: any;

  constructor(private http: HttpClient) { }

    async getBalance(){
      try{
        let response: any;
        response = await this.http.get(this.url+'/'+this.id).toPromise();
        return response;
      }
      catch (error) {
        console.error(error);
      }
    }


    async getUsers(){
      try{
        let response: any;
        response = await this.http.get(this.url).toPromise();
        return response;
      }
      catch (error) {
        console.error(error);
      }
    }

    async selectUser(userid){
      try{
        let response: any;
        this.id = userid;
        response = await this.http.get(this.url+'/'+userid).toPromise();
        this.user = response;
        return this.user;
      }
      catch (error) {
        console.error(error);
      }
    }
}
