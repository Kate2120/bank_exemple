(()=>{"use strict";(()=>{function e(){var e=new Date,a=new Date(2024,0,1)-e;a<=0&&clearInterval(t);var r=a>0?Math.floor(a/1e3/60/60/24):"00",n=a>0?Math.floor(a/1e3/60/60)%24:"00",o=a>0?Math.floor(a/1e3/60)%60:"00",c=a>0?Math.floor(a/1e3)%60:"00";document.querySelectorAll(".item-time").forEach((function(e){switch(e.classList[1]){case"days-item":e.innerHTML=1===r.toString().length?"0"+r.toString():r;break;case"hours-item":e.innerHTML=1===n.toString().length?"0"+n.toString():n;break;case"minutes-item":e.innerHTML=1===o.toString().length?"0"+o.toString():o;break;case"seconds-item":e.innerHTML=1===c.toString().length?"0"+c.toString():c}}))}document.querySelectorAll(".items-nav li").forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector(".popap");t&&(t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active"))}))}));var t=setInterval(e,1e3);e();var a=document.querySelector("#progress-scale"),r=a.value;a.style.background="linear-gradient(to right, #08ddeb ".concat(100*r/a.max,"%, #ccc ").concat(r,"%)"),setInterval((function(){var e=Number(a.value)+Number(Math.random().toFixed(2));e>=Number(a.max)&&(a.value=0,e=0),a.value=e;var t=a.value;a.textContent=t;var r=t/a.max*100;a.style.background="linear-gradient(to right, #08ddeb ".concat(r,"%, #ccc ").concat(r,"%)");var n=document.getElementById("form-progress-slider");n.querySelector(".box-info-value").innerHTML=e+" mln",n.querySelector(".box-info-value").style.left="calc("+100*a.value/a.max+"% - 55px)"}),3e3);var n=document.createElement("script");n.src="https://www.youtube.com/player_api";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o),document.querySelectorAll(".button-video").forEach((function(e){e.addEventListener("click",(function(e){console.log("work");var t=document.querySelector("body"),a=document.createElement("div");a.classList.add("popap-background-style"),t.appendChild(a),a.addEventListener("click",(function(){a.remove()}));var r=document.createElement("div");r.classList.add("video-wrapper"),a.appendChild(r);var n=document.createElement("div");n.classList.add("close-popap-but"),r.appendChild(n);var o,c=document.createElement("div");c.classList.add("video-container"),r.appendChild(c),"info-video"===e.target.getAttribute("id")&&(c.setAttribute("id","LvQossUx7ss"),o="LvQossUx7ss",new YT.Player(o,{height:"360",width:"640",videoId:o,playerVars:{autoplay:1}}))}))}))})()})();