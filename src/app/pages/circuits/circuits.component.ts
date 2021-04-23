import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

import { NavScrollService } from '../../services/nav-scroll.service';
import { GetDataService } from './services/get-data.service';
import { IFlags } from '../../interfaces/IFlags';
import { ICircuit } from '../../interfaces/ICircuit';
import { CCircuit } from '../../class/CCircuit';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {
  constructor(
    private NavScroll: NavScrollService,
    private serviceCircuits: GetDataService
  ) {}

  years = this.getYearsCircuits();
  statusLeft = false;
  statusRight = true;
  todayYear!: number;
  allCircuits!: Array<CCircuit>;
  flags: any;

  navScrollFunction(): void {
    return this.NavScroll.navScroll();
  }

  getYearsCircuits(): Array<number> {
    const endYears = 1950;
    const today: Date = new Date();
    const getYear: number = today.getFullYear();
    const allYears: Array<number> = Array();

    this.todayYear = getYear;

    for (let index = getYear; index >= endYears; index--) {
      allYears.push(index);
    }

    return allYears;
  }

  scrollOl(type: string): void {
    const headTimelineD: any = document.querySelector<HTMLElement>(
      '#headTimelineD'
    );

    if (type === 'left') {
      headTimelineD.scrollBy({
        left: 900,
        behavior: 'smooth',
      });
    } else {
      headTimelineD.scrollBy({
        left: -900,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      if (headTimelineD.scrollLeft === 0) {
        this.statusRight = true;
      } else {
        this.statusRight = false;
      }

      if (
        headTimelineD.scrollLeft + headTimelineD.offsetWidth ===
        headTimelineD.scrollWidth
      ) {
        this.statusLeft = true;
      } else {
        this.statusLeft = false;
      }
    }, 500);
  }

  getCircuitforYear(year: number): void {
    this.todayYear = year;

    this.serviceCircuits.getAllYear(year).subscribe({
      next: (data: ICircuit) => {
        const resAllCircuits = data.MRData.CircuitTable.Circuits;

        this.allCircuits = resAllCircuits.map((circuit: any) => {
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

        this.allCircuits.sort((a, b) => {
          return a.circuitName > b.circuitName
            ? 1
            : b.circuitName > a.circuitName
            ? -1
            : 0;
        });
      },
    });
  }

  getImgCircuit(): void {
    this.serviceCircuits.getFlags().subscribe({
      next: (value: IFlags): void => {
        this.flags = value;
      },
      error: (error: any) => console.error(error),
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.navScrollFunction();
    this.getCircuitforYear(this.todayYear);
    this.getImgCircuit();
  }
}
