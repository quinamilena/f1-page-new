import { Component, OnInit } from '@angular/core';
import { NavScrollService } from '../../services/nav-scroll.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {
  constructor(private NavScroll: NavScrollService) {}

  years = this.getYearsCircuits();
  statusLeft = false;
  statusRight = true;

  navScrollFunction(): void {
    return this.NavScroll.navScroll();
  }

  getYearsCircuits(): Array<number> {
    const endYears = 1950;
    const today: Date = new Date();
    const getYear: number = today.getFullYear();
    const allYears: Array<number> = Array();

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
    console.log(year);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.navScrollFunction();
  }
}
