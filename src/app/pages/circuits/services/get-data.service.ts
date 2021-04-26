import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { IFlags } from '../../../interfaces/IFlags';
import { ICircuit } from '../../../interfaces/ICircuit';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  onGetAllYearChanged: BehaviorSubject<any>;

  api = `${environment.apiEndPoint}`;
  apiFlages = `${environment.apiEndFlags}`;

  constructor(private http: HttpClient) {
    this.onGetAllYearChanged = new BehaviorSubject([]);
  }

  getAllYear(year: number): Observable<ICircuit> {
    return new Promise((resolve, reject) => {
      this.http.get<ICircuit>(`${this.api}/${year}/circuits.json`);
    });
  }

  getFlags(): Observable<IFlags> {
    return this.http.get<IFlags>(this.apiFlages);
  }
}
