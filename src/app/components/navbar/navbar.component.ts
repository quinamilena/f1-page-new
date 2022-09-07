import { Component, OnInit, Input } from '@angular/core';
import linkNavBar from 'src/app/config/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('title') title!: string;
  itens: Array<any> = [];

  constructor() {}

  ngOnInit() {
    this.itens = linkNavBar.map((item) => {
      if (item.name === this.title) {
        item.active = true;
      }

      return item;
    });
  }

  // define all UI variable

  // togglerClick function
  togglerClick() {
    const navToggler: any = document.querySelector<HTMLElement>('.nav-toggler');
    const navMenu: any = document.querySelector<HTMLElement>('.site-navbar ul');

    console.log('Oi carralho!!!!!!!!!!!');

    navToggler?.classList.toggle('toggler-open');
    navMenu?.classList.toggle('open');
  }

  // navLinkClick function
  navLinkClick() {
    const navMenu = document.querySelector('.site-navbar ul');
    // const navLinks = document.querySelectorAll('.site-navbar a');

    if (navMenu?.classList.contains('open')) {
      // this.navToggler?.click();
    }
  }
}
