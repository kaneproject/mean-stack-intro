import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Libro } from './libro'
@Injectable()
export class BibliotecaService {
  private url = "http://localhost:3000/libros"
  constructor(private http: Http) { }

  getLibros(): Observable<Libro[]>{
    return this.http.get(this.url)
        .map((response: Response)=>{
            return response.json()
        })
        .catch((error:any)=>{
          console.log("Error al procesar la peticion");
          return Observable
          .throw(error.json().error || "Error de servidor");
        })
  }
}
