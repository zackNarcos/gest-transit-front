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

  private URL_API:string = `${environment.api}/users`


  postUser(user: User){
    return this.http.post(this.URL_API,user)
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.URL_API)
  }
  getUser(id):Observable<User>{
    return this.http.get<User>(`${this.URL_API}/${id}`)
  }
  findByEmail(email):Observable<User>{
    return this.http.get<User>(`${this.URL_API}/email/${email}`)
  }

  putUser(user: User) {
    return this.http.put(`${this.URL_API}/${user._id}`,user)
  }

  deleteUser(user: User) {
    return this.http.delete(`${this.URL_API}/${user._id}`)
  }
}
