import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalService} from "../../local-storage/local.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../../models/user";

@Injectable({
  providedIn: 'root'
})
export class ApiUserService  {

  constructor(
    private http:HttpClient,
    private localStore: LocalService
  ) { }

  private URL_API:string = environment.api

  setoption(){
    const token = this.localStore.getData('token')
    const headerDict = {
      'Authorization': `Bearer ${token}`,
      'Accept' : 'application/json'
    }
    return {
      headers: new HttpHeaders(headerDict),
    }
  }



  postUser(user: User){
    return this.http.post(`${this.URL_API}api/users`,user, this.setoption())
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.URL_API}api/users`, this.setoption());
  }
  getUser(id):Observable<User>{
    return this.http.get<User>(`${this.URL_API}api/users/${id}`, this.setoption());
  }
  findByEmail(email):Observable<User>{
    return this.http.get<User>(`${this.URL_API}api/users?email=${email}`, this.setoption());
  }


  putUser(user: User) {
    return this.http.put(`${this.URL_API}api/users/${user.id}`,user, this.setoption())
  }
}
