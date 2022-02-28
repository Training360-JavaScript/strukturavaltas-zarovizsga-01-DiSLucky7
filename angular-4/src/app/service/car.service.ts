import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = `https://nettuts.hu/jms/dislucky7/cars`;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}`)
  }

  get(id: number): Observable<Car> {
    console.log('id: ', id);
    return this.http.get<Car>(`${this.apiUrl}/${id}`)
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}`, car)
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(`${this.apiUrl}/${car.id}`, car)
  }

  delete(car: Car): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}/${car.id}`)
  }

}
