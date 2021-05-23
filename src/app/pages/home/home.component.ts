import { Component, OnInit } from '@angular/core';
import { NavScrollService } from '../../services/nav-scroll.service';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Icons
  faGlobe = faGlobe;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebook = faFacebook;

  constructor(private NavScroll: NavScrollService) {}

  navScrollFunction(): void {
    return this.NavScroll.navScroll();
  }

  ngOnInit(): void {
    this.navScrollFunction();
  }
}
