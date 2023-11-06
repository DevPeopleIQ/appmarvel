import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  getJWT(): Observable<any>{
    const params = new HttpParams()
    .set('user', "cuamatzi")
    .set('password', "pass")  ;  

    return this.http.post('/user?',params);
  }

}
