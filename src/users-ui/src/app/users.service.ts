import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

import { HttpClient, HttpParams } from '@angular/common/http'
import { Http } from '@angular/http'

import { Observable, of } from 'rxjs'
import 'rxjs/Rx'

import { Usuario, PrecondicionesData } from './entities/usuario'

const USUARIO_API_URL = environment.usersApiUrl

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  
  obtenerUsuario(uid:string): Observable<Usuario> {
    /**
     * return: usuario {
                actualizado:null
                apellido:"Pais"
                avatar:null
                ciudad:null
                creado:"2018-01-20 02:14:55.620457"
                direccion:null
                dni:"31381082"
                genero:null
                google:null
                id:"0cd70f16-aebb-4274-bc67-a57da88ab6c7"
                legajo:"6590/5"
                mails:Array[0]
                nacimiento:null
                nombre:"Emanuel"
                pais:null
                telefonos:Array[0]
                tipo:null 
              }
     */
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}`;
    return this.http.get<Usuario>(apiUrl).pipe(map(u => new Usuario(u)));
  }

  actualizarUsuario(usuario: Object) {
    return
  }

  obtenerAvatar(uid:string): Observable<string> {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}/avatar/`;
    return this.http.get<string>(apiUrl);
  }

  agregarAvatar(uid: string, avatar: string) {
    return
  }

  obtenerCorreos(uid:string): Observable<string> {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}/correos/`;
    return this.http.get<string>(apiUrl);
  }

  agregarCorreo(uid: string, correo: string): Observable<any>  {
    let apiUrl = `${USUARIO_API_URL}/usuarios/${uid}/correos/`;
    let data = {
      'email':correo
    }
    return this.http.post<any>(apiUrl, data);
  }

  confirmarCorreo(uid: string, cid: string, codigo: string) {
    return
  }

  eliminarCorreo(cid: string) {
    return
  }

  cambiarClave(uid, clave) {
    return
  }


  precondiciones(uid):Observable<PrecondicionesData> {
    /*
      false => entonces tiene que redirigir al proceso para cargar el dato determinado
      true => la precondicion esta correcta, por lo que no redirige.
    */
    let r : PrecondicionesData = {
      correo: true,
      clave: false
    }
    return of(r);
  }

}
