import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from '../environments/environment'

import { HttpClient, HttpParams } from '@angular/common/http'
import { Http } from '@angular/http'

import { Observable, of } from 'rxjs'

import { CambiarClaveData } from './entities/usuario';

const LOGIN_API_URL = environment.loginApiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  cambiar_clave(uid:string, clave:string):Observable<CambiarClaveData> {
    let apiUrl = `${LOGIN_API_URL}/usuario/${uid}/clave`;
    let data = {
      'clave':clave
    }
    return this.http.post<CambiarClaveData>(apiUrl, data);
  }
}
