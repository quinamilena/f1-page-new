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

  ngOnInit(): void {
    this.navScrollFunction();
  }
}
