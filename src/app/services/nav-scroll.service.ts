import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavScrollService {
  constructor() {}

  navScroll(): void {
    let headline: any = document.querySelector<HTMLElement>('.headline');
    let inner: any = document.querySelector<HTMLElement>('.inner');
    let nav: any = document.querySelectorAll('nav');
    let navHeight = 75;

    window.onscroll = function (e: any) {
      var scrollTop = document.body.scrollTop;
      let headlineHeight = headline.offsetHeight - navHeight;
      let navOffset =
        nav.length > 0
          ? nav[0].getBoundingClientRect().top + window.scrollY
          : 0;

      if (nav.length === 0) return;

      headline.style.opacity = String(1 - scrollTop / headlineHeight);

      for (let i = 0; i < inner.length; i++) {
        const element = inner[i];
        element.style.transform = 'translateY(' + scrollTop * 0.4 + 'px)';
      }

      if (navOffset > headlineHeight) {
        nav[0].classList.add('scrolled');
      } else if (nav.length > 0) {
        nav[0].classList.forEach((item: string) => {
          if (item === 'scrolled') nav[0].classList.remove('scrolled');
        });
      }
    };
  }
}
