import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IFlags } from '../interfaces/IFlags';
import { ICircuit } from '../interfaces/ICircuit';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  api = `${environment.apiEndPoint}`;
  apiFlages = `${environment.apiEndFlags}`;

  constructor(private http: HttpClient) {}

  getAllYear(year: number): Observable<ICircuit> {
    return this.http.get<ICircuit>(`${this.api}/${year}/circuits.json`);
  }

  getFlags(): Observable<IFlags> {
    return this.http.get<IFlags>(this.apiFlages);
  }
}
