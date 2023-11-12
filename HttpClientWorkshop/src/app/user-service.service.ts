import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from './core/User';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http: HttpClient) { }
  apiUrl = environment.baseUrl + 'users/';
  listusers: User[] = [];

  getAllUsers() {
    return new Observable((o) => {
      o.next(this.listusers),
        o.error('Error'),
        o.complete();
    });
  }
  fetchUsers(){
    return this._http.get(this.apiUrl)
  }
  removeUser(id:number){
    return this._http.delete(this.apiUrl+id)
  }

  //----------Ajout d'un user-----------//

  addUser(user:User){
    return this._http.post(this.apiUrl,user,)
  }
    

}
