import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly url='http://localhost:7001/test/api.php?method=allusers';
 readonly posturl='http://localhost:7001/test/api.php?method=allusers';
 readonly getUrl='http://localhost:7001/test/api.php?method=getuser&id=';
  //  constructor(private httpClient:HttpClient) { }

  constructor(private http: HttpClient) { }

  // addUser(): Observable<any> {
  //   return this.http.get(this.url)
  // }

getUsers(): Observable<any> {
  return this.http.get(this.url)
}

getUserDtl(id:any): Observable<any> {
// readonly getUrl='http://localhost:7001/test/api.php?method=getuser&id='+id;
return this.http.get(this.getUrl+id)
}
  
}
