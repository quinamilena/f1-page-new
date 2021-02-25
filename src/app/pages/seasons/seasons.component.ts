import { Component, OnInit } from '@angular/core';
import { NavScrollService } from '../../services/nav-scroll.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  constructor(private NavScroll: NavScrollService) {}

  navScrollFunction(): void {
    return this.NavScroll.navScroll();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.navScrollFunction();
  }
}
