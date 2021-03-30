import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavScrollService {
  constructor() {}

  navScroll(): void {
    const headline: any = document.querySelector<HTMLElement>('.headline');
    const inner: any = document.querySelectorAll<HTMLElement>('inner');
    const nav: any = document.querySelectorAll('nav');
    const navHeight = 75;

    window.onscroll = (e: any) => {
      const scrollTop = document.body.scrollTop;
      const headlineHeight = headline.offsetHeight - navHeight;
      const navOffset =
        nav.length > 0
          ? nav[0].getBoundingClientRect().top + window.scrollY
          : 0;

      if (nav.length === 0) {
        return;
      }

      headline.style.opacity = String(1 - scrollTop / headlineHeight);

      for (const [index] of inner.entries()) {
        const element = inner[index];
        element.style.transform = 'translateY(' + scrollTop * 0.4 + 'px)';
      }

      if (navOffset > headlineHeight) {
        nav[0].classList.add('scrolled');
      } else if (nav.length > 0) {
        nav[0].classList.forEach((item: string) => {
          if (item === 'scrolled') {
            nav[0].classList.remove('scrolled');
          }
        });
      }
    };
  }
}
