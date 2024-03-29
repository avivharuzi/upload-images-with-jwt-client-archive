import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../../models/user.model';
import { REGISTER_URL } from './../../constants/urls';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  setUser(user: User): Observable<any> {
    return this.http.post(REGISTER_URL, { user: user }).map((res: any) => {
      return res;
    })
    .catch((err: HttpErrorResponse) => Observable.throw(err));
  }
}
