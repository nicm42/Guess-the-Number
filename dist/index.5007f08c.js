!function(){var e={};Object.defineProperty(e,"__esModule",{value:!0});var t=function(){const e=document.querySelector(".guess"),t=document.querySelector(".guessing");let r=0;const n=100,o=document.querySelector(".min"),a=document.querySelector(".max");o.innerHTML=1..toString(),a.innerHTML=n.toString(),e.setAttribute("min",1..toString()),e.setAttribute("max",n.toString()),e.setAttribute("size",(n.toString().length+1).toString());const i=(0,u.default)(1,n);console.log("number to guess = "+i),t.addEventListener("submit",(t=>{t.preventDefault();let n=(0,s.default)(parseInt(e.value),i);r++,(0,d.default)(n,r)}))};e.default=t;var r={};Object.defineProperty(r,"__esModule",{value:!0});var n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};r.default=n;var u=c(r),o={};Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){if(0===Math.abs(e-t))return"Correct";if(1===Math.abs(e-t))return"Boiling";if(Math.abs(e-t)<=5)return"Hot";if(Math.abs(e-t)<=10)return"Warm";if(Math.abs(e-t)<=74)return"Cold";if(Math.abs(e-t)>=75)return"Freezing";return""};o.default=a;var s=c(o),i={};Object.defineProperty(i,"__esModule",{value:!0});var l=function(e,t){const r=document.querySelector(".guess"),n=document.querySelector(".submit-guess"),u=document.querySelector(".temperature"),o=document.createElement("li");o.classList.add("history");let a=e.toLowerCase();if(o.classList.add(a),1===t)u.appendChild(o);else{const e=document.querySelector(".history");u.insertBefore(o,e)}if(o.innerHTML=`<span class="history-counter">${t}</span> <span class="history-guess">${r.value}</span> <span class="history-heat">${e}</span>`,"Correct"===e){r.disabled=!0,n.disabled=!0;const e=document.querySelector(".congrats"),u=1===t?"guess":"guesses";e.innerHTML=`Well done! You found the number in ${t} ${u}. <br>Refresh the page to play again.`,e.style.opacity="1"}r.value=""};i.default=l;var d=c(i);function c(e){return e&&e.__esModule?e:{default:e}}var f,m=(f=e)&&f.__esModule?f:{default:f};document.addEventListener("DOMContentLoaded",(function(){(0,m.default)()}))}();
//# sourceMappingURL=index.5007f08c.js.map