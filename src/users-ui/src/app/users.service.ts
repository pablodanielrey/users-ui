import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

import { HttpClient, HttpParams } from '@angular/common/http'
import { Http } from '@angular/http'

import { Observable, of } from 'rxjs'
import 'rxjs/Rx'

import { Usuario, PrecondicionesData, Mail } from './entities/usuario'
import {Md5} from 'ts-md5/dist/md5';

const USUARIO_API_URL = environment.usersApiUrl
const AVATAR_API_URL = environment.avatarApiUrl

@Injectable()
export class UsersService {

  foto: string = ""; //eliminar cuando este  implemantado en el servidor la foto

  constructor(private http: HttpClient) { }
  
  obtenerUsuario(uid:string): Observable<Usuario> {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}`;
    return this.http.get<Usuario>(apiUrl).pipe(map(u => new Usuario(u)));
  }

  actualizarUsuario(uid: string, usuario: Object): Observable<string> {
    /*
     * TODO: 
     * usuario {
          apellido:"Pais",
          ciudad:null,
          correos:(2) [{…}, {…}],
          direccion:null,        
          nombre:"Emanuel",
          pais:null,
          genero:"masculino",
          telefonoFijo:"448484",
          telefonoMovil:""
     * }
    */ 
   let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}`;
   return this.http.post<any>(apiUrl, usuario);
  }

  obtenerAvatar(uid:string): string {
    let hash = Md5.hashStr(uid);
    return `${AVATAR_API_URL}/avatar/${hash}`;
  }

  actualizarAvatar(uid: string, avatar: object): Observable<string> {
    let hash = Md5.hashStr(uid);
    let apiUrl = `${AVATAR_API_URL}/avatar/${hash}`
    return this.http.post<any>(apiUrl, avatar);
  }

  obtenerCorreos(uid:string): Observable<Array<Mail>> {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}/correos/`;
    return this.http.get<Array<Mail>>(apiUrl).pipe(map(datos => datos.map(d => new Mail(d))));
  }

  agregarCorreo(uid: string, correo: string): Observable<any>  {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}/correos/`;
    let data = {
      'email':correo
    }
    return this.http.post<any>(apiUrl, data);
  }

  confirmarCorreo(uid: string, cid: string, codigo: string):Observable<any> {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}/correos/${cid}/confirmar`;
    let data = {
      'codigo': codigo
    }
    return this.http.post<any>(apiUrl, data);
  }

  eliminarCorreo(uid: string, cid: string): Observable<string> {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}/correos/${cid}`;
    return this.http.delete<any>(apiUrl);
  }

  precondiciones():Observable<PrecondicionesData> {
    /*
      false => entonces tiene que redirigir al proceso para cargar el dato determinado
      true => la precondicion esta correcta, por lo que no redirige.
    */
   let apiUrl = `${USUARIO_API_URL}/precondiciones`;
   return this.http.get<PrecondicionesData>(apiUrl);
  }

}
