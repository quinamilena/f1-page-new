import { Component, OnInit } from '@angular/core';

import { NavScrollService } from '../../services/nav-scroll.service';
import { GetDataService } from './services/get-data.service';
import { CCircuit } from '../../class/circuit.class';

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
  page = 'Circuits';

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
    const headTimelineD: any =
      document.querySelector<HTMLElement>('#headTimelineD');

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

    this.serviceCircuits
      .getAllYear(year)
      .then((response: any) => {
        this.allCircuits = response;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.navScrollFunction();
    this.getCircuitforYear(this.todayYear);
  }
}
