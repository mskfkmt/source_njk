import { gsap } from 'gsap';
import eachElm from './eachElm';

export default function() {
  const top = document.getElementById('top');
  const topMv = document.getElementById('topMv');
  
  const ww = window.innerWidth;
  const wh = window.innerHeight;

  const loopClass = 'is-loop';

  function mvLoop() {
    const loop_item = topMv.querySelectorAll('.topMv-loop-item');
    const loop_total_num = loop_item.length - 1;
    const fadeTime = 1400; // フェードの時間
    const viewTime = 5000; // 1枚の表示時間
    let loop_active_num = 0;
    let nowSlide;
    let nextSlide;

    loop_item[0].classList.add(loopClass);

    setInterval(() => {
      if (loop_active_num < loop_total_num) {
        nowSlide = loop_item[loop_active_num];
        nextSlide = loop_item[++loop_active_num];
      } else {
        nowSlide = loop_item[loop_active_num];
        nextSlide = loop_item[loop_active_num = 0];
      }

      nowSlide.classList.remove(loopClass);
      nextSlide.classList.add(loopClass);

      setTimeout(() => {
        nowSlide.classList.remove(loopClass);
      }, fadeTime);
    }, viewTime);
  }

  if (top) {
    if (ww < 768) {
      topMv.style.height = `${wh - 70}px`;
    }
    mvLoop();
  }
}