import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavScrollService {

  constructor() { }
  
  navScroll() {
	let headline = document.querySelector(".headline");
	let inner = document.querySelector(".inner");
	let nav = document.querySelectorAll("nav");
	let navHeight = 75;

	window.onscroll = function (e) {
	  var scrollTop = document.body.scrollTop;
	  let headlineHeight = headline.offsetHeight - navHeight;
	  let navOffset = nav[0].getBoundingClientRect().top + window.scrollY;

	  headline.style.opacity = 1 - scrollTop / headlineHeight;

	  for (let i = 0; i < inner.length; i++) {
		const element = inner[i];
		element.style.transform = "translateY(" + scrollTop * 0.4 + "px)";
	  }

	  if (navOffset > headlineHeight) {
		nav[0].classList.add("scrolled");
	  } else {
		nav[0].classList.remove("scrolled");
	  }
	};
  }
}
