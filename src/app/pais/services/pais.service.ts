import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
      return new HttpParams().set('fields','name;capital;flag;alpha2Code;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
    // .pipe(
    //   catchError(error => of([]))
    // );
  }

  buscarCapital(termino:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});    
  }

  getPaisPorAlpha( id:string):Observable<Country>{
    
    const url = `
      ${this.apiUrl}/alpha/${id}
    `;
    return this.http.get<Country>(url);    
  }

  buscarRegion(termino:string):Observable<Country[]>{
    

    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams})
    .pipe(tap(console.log));    
  }
}
