!function(){"use strict";function e(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}document.addEventListener("DOMContentLoaded",(function(){var t,n,s,o,i,c,l,r,a,d,u;document.getElementById("top"),document.getElementById("service"),window.innerWidth,window.innerHeight,function(){document.getElementById("globalHeader");var e=document.getElementById("globalHeader-menuBtn"),t=document.getElementById("menu"),n=(t.querySelectorAll(".menu-item"),t.querySelector(".menu-charge")),s=t.querySelector(".innerCross"),o="is-open";e.addEventListener("click",(function(n){t.classList.contains(o)?(e.classList.remove(o),t.classList.remove(o)):(e.classList.add(o),t.classList.add(o))})),s.addEventListener("click",(function(e){n.classList.contains(o)?n.classList.remove(o):n.classList.add(o)}))}(),l=document.getElementById("top"),r=document.getElementById("topMv"),a=window.innerWidth,d=window.innerHeight,u="is-loop",l&&(a<768&&(r.style.height="".concat(d-70,"px")),o=r.querySelectorAll(".topMv-loop-item"),i=o.length-1,c=0,o[0].classList.add(u),setInterval((function(){c<i?(n=o[c],s=o[++c]):(n=o[c],s=o[c=0]),n.classList.remove(u),s.classList.add(u),setTimeout((function(){n.classList.remove(u)}),1400)}),5e3)),t="is-show",e(document.querySelectorAll(".scroll-show"),(function(e){var n=e.getBoundingClientRect(),s=window.pageYOffset,o=window.innerHeight,i=n.top+s,c=s+.8*o;if(e.classList.contains(t))return!0;i>c&&e.classList.add(t)})),e(document.querySelectorAll(".split-text"),(function(e){var t=e.textContent;e.innerHTML="",t.split("").forEach((function(t){e.innerHTML+="<span>"+t+"</span>"})),e.querySelectorAll("span").forEach((function(e,t,n){var s=.032*t;e.style.transitionDelay="".concat(s,"s")}))}))}))}();