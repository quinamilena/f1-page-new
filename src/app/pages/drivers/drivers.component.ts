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

  funcSelect(): void {
    const allOptions: NodeListOf<Element> = document.querySelectorAll(
      '.default_option'
    );
    const dropdownAll: NodeListOf<Element> = document.querySelectorAll(
      '.dropdown ul'
    );
    const allLi: NodeListOf<Element> = document.querySelectorAll(
      '.dropdown ul li'
    );

    allOptions[0].addEventListener('click', (): void => {
      dropdownAll.forEach((item: any) => {
        item.classList.toggle('active');
      });
    });

    allLi.forEach((item) => {
      item.addEventListener('click', (): void => {
        const text: any = item.innerHTML;
        const defaultClass: any = document.querySelector('.default_option');
        defaultClass.innerHTML = text;
        dropdownAll.forEach((dropAll: any) => {
          dropAll.classList.remove('active');
        });
      });
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.navScrollFunction();
    this.funcSelect();
  }
}
