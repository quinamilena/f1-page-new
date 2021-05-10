import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { IFlags } from '../../../interfaces/IFlags';
import { ICircuit } from '../../../interfaces/ICircuit';
import { CCircuit } from '../../../class/circuit.class';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  onGetAllYearChanged: BehaviorSubject<any>;

  api = `${environment.apiEndPoint}`;
  apiFlages = `${environment.apiEndFlags}`;
  flags: any;

  constructor(private http: HttpClient) {
    this.onGetAllYearChanged = new BehaviorSubject([]);
  }

  getFlags(): Observable<IFlags> {
    return this.http.get<IFlags>(this.apiFlages);
  }

  getImgCircuit(): void {
    this.getFlags().subscribe({
      next: (value: IFlags): void => {
        this.flags = value;
      },
      error: (error: any) => console.error(error),
    });
  }

  getAllYear(year: number): Promise<CCircuit[]> {
    return new Promise((resolve, reject) => {
      try {
        this.getImgCircuit();

        this.http
          .get<ICircuit>(`${this.api}/${year}/circuits.json`)
          .subscribe((response) => {
            const resAllCircuits = response.MRData.CircuitTable.Circuits;
            const allCircuits = resAllCircuits.map((circuit: any) => {
              const img = this.flags.filter(
                (fl: any) => fl.name === circuit.Location.country
              )[0].img
                ? this.flags.filter(
                    (fl: any) => fl.name === circuit.Location.country
                  )[0].img
                : this.flags[this.flags.length - 1].img;

              const cirObj = new CCircuit(
                circuit.Location.country,
                circuit.Location.lat,
                circuit.Location.locality,
                circuit.Location.long,
                circuit.circuitId,
                circuit.circuitName,
                circuit.url,
                img
              );

              return cirObj;
            });
            return resolve(allCircuits);
          });
      } catch (error) {
        return reject(error);
      }
    });
  }
}
