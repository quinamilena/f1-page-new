import { Component, OnInit } from '@angular/core';
import { NavScrollService } from '../../services/nav-scroll.service';
import { SelectFilterService } from '../../services/select-filter.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  constructor(
    private NavScroll: NavScrollService,
    private SelectFilter: SelectFilterService
  ) {}

  navScrollFunction(): void {
    return this.NavScroll.navScroll();
  }

  selectFilter(): void {
    return this.SelectFilter.funcSelect();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.navScrollFunction();
    this.selectFilter();
  }
}
