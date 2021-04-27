import { gsap } from 'gsap';
import common from './common';
import eachElm from './eachElm';
import mv from './mv';
import scrollShow from './scrollShow';
import splitText from './splitText';

document.addEventListener('DOMContentLoaded', function(){
  const top = document.getElementById('top');
  const service = document.getElementById('service');

  const ww = window.innerWidth;
  const wh = window.innerHeight;

  common();
  mv();
  scrollShow();
  splitText();
});