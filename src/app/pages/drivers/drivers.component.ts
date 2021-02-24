import { Component, OnInit } from '@angular/core';
import { NavScrollService } from '../../services/nav-scroll.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  constructor(private NavScroll: NavScrollService) {}

  navScrollFunction(): void {
    return this.NavScroll.navScroll();
  }

  ngOnInit(): void {
    this.navScrollFunction();
  }
}
