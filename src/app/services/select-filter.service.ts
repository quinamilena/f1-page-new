import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectFilterService {
  constructor() {}

  funcSelect(): void {
    const allOptions: NodeListOf<Element> =
      document.querySelectorAll('.default_option');
    const dropdownAll: NodeListOf<Element> =
      document.querySelectorAll('.dropdown ul');
    const dropdownDiv = document.querySelectorAll('.dropdown');
    const allLi: NodeListOf<Element> =
      document.querySelectorAll('.dropdown ul li');

    allOptions[0].addEventListener('click', (): void => {
      dropdownDiv[0].classList.toggle('downup');

      dropdownAll.forEach((item: any) => {
        item.classList.toggle('active');
      });
    });

    allLi.forEach((item) => {
      item.addEventListener('click', (): void => {
        dropdownDiv[0].classList.toggle('downup');

        const text: any = item.innerHTML;
        const defaultClass: any = document.querySelector('.default_option');
        defaultClass.innerHTML = text;
        dropdownAll.forEach((dropAll: any) => {
          dropAll.classList.remove('active');
        });
      });
    });
  }
}
