import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  apiUrl: string = `https://nettuts.hu/jms/dislucky7/constructions`;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}`)
  }

  get(id: number): Observable<Construction> {
    console.log('id: ', id);
    return this.http.get<Construction>(`${this.apiUrl}/${id}`)
  }

  create(construction: Construction): Observable<Construction> {
    return this.http.post<Construction>(`${this.apiUrl}`, construction)
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(`${this.apiUrl}/${construction.id}`, construction)
  }

  delete(construction: Construction): Observable<Construction> {
    return this.http.delete<Construction>(`${this.apiUrl}/${construction.id}`)
  }

}
