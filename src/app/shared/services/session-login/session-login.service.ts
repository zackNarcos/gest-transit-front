import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalService} from "../local-storage/local.service";
import {ApiUserService} from "../api/user/api-user.service";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

  private URL_API:string = environment.api
  private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjEwMDkyNTUsImV4cCI6MTY2MzYwMTI1NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InphY2thYmVzc0BnbWFpbC5jb20ifQ.bSVx9sDWGsE0NfEmRElKr_wmejBsExcp01P4JrOq_4m24tEYclyNSnHRdAvcj7bNCK4vDLJACCI9hfoZG9A0go1oV1LYu1FfS4lv7eJ_evZyN1Tm8V-uWyfg8jh3DNsUza72RxlfcbX2xiJ_CeihOauAgUAljHXRnEop1sdTWbygvJGKlhxXvtEmToaxhdgrTU1gJajP0_LEmBg5ucXTGjAe_UAnPEB8Zkb7wghbr9lZuFTSh4caMLMN3mxAZrSy8mf7jBScZ5V-u9QhF5h4DnZfL0KbWHl3gXoGQVfbrp02QVSBnyw6sx2WbTWwKNXt44TVZ0c54oSdVmAHpDSBbw"
  LOGIN_URL = 'api/login_check'
  LOGOUT_URL = 'api/logout'


  constructor(
    private http:HttpClient,
    private localStore: LocalService,
    private userService: ApiUserService
  ) { }

  login(pEmail,pPassword){
    const loginDada= {
      email : pEmail,
      password : pPassword
    }
    let user: User

    return new Observable<boolean>((observer) => {
      this.http.post(this.URL_API+this.LOGIN_URL,loginDada).subscribe( result => {
        observer.next(true)
        observer.complete()
        this.userService.findByEmail(loginDada.email).subscribe(user => {
          user = user[0]
          this.localStore.saveData('userId', user.id.toString());
          this.localStore.saveData('userName', user.nom);
          this.localStore.saveData('userFisrtName', user.prenom);
          this.localStore.saveData('userEmail', user.email);
          for (let userRole in user.roles) {
            if (userRole == 'ROLE_ADMIN'){
              this.localStore.saveData('userRoles', userRole);
            }
            if (userRole == 'ROLE_EMPLOYE'){
              this.localStore.saveData('userRoles', userRole);
            }
          }
        })
        this.localStore.saveData('token', result['token']);
      },error => {
        observer.error(false)
        observer.complete()
      })
    })
  }

  logout(){
    return new Observable<boolean>((observer) => {
      this.localStore.clearData();
      this.http.get(this.URL_API+this.LOGOUT_URL).subscribe( result => {
        observer.next(true)
        observer.complete()
      },error => {
        observer.error(false)
        observer.complete()
      })
    })
  }
}
