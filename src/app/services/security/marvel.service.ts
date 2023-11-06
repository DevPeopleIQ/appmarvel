import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs";
import { SecurityService } from "./security.service";


@Injectable({
  providedIn: "root",
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  getAllCharacters(token:string): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('authorization', token);

    return this.http.get('/marvel/v1/public/characters', {
      headers:headers});
  }

  getAllCharactersById(token:string, id:string): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('authorization', token);

    return this.http.get('/marvel/v1/public/characters/'+id, {
      headers:headers});
  }

  getBitacora(token:string): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('authorization', token);

    return this.http.get('/marvel/v1/public/bitacora', {
      headers:headers});
  }
 
}
