import { gsap } from 'gsap';
import eachElm from './eachElm';

export default function() {
  const loopClass = 'is-loop';
  const showClass = 'is-show';

  function addScrollShow() {
    const scrollShowClass = document.querySelectorAll('.scroll-show');
    eachElm(scrollShowClass, (elm) => {
      const rect = elm.getBoundingClientRect();
      const scrollTop = window.pageYOffset;
      const wh = window.innerHeight;
      const position = rect.top + scrollTop;
      const scrollBottom = scrollTop + wh * .8;

      if (elm.classList.contains(showClass)) return true;
      if (position > scrollBottom) {
        elm.classList.add(showClass);
      }
      // if (scrollBottom == wh) {
      //   globalHeader.classList.remove(showClass);
      // }
      return;
    });
  }

  addScrollShow();
}