import eachElm from './eachElm';

export default function() {
  const splitTexts = document.querySelectorAll('.split-text');
  eachElm(splitTexts, (elm) => {
    const text = elm.textContent;
    elm.innerHTML = '';
    text.split('').forEach((t) => {
      elm.innerHTML += '<span>' + t +'</span>'
    });

    const textChild = elm.querySelectorAll('span');
    textChild.forEach((item, index, array) => {
      const delayTime = index * .032;
      item.style.transitionDelay = `${delayTime}s`;
    });
  });
}