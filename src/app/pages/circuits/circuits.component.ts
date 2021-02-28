import { Component, OnInit } from '@angular/core';
import { NavScrollService } from '../../services/nav-scroll.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {
  constructor(private NavScroll: NavScrollService) {}

  navScrollFunction(): void {
    return this.NavScroll.navScroll();
  }

  getYearsCircuits(): Array<number> {
    let endYears: number = 1950;
    let today: Date = new Date();
    let getYear: number = today.getFullYear();
    let allYears: Array<number> = Array();

    for (let index = getYear; index >= endYears; index--) {
      allYears.push(index);
    }

    return allYears;
  }

  years = this.getYearsCircuits();

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.navScrollFunction();
  }
}
