$(document).ready((()=>{}));const createButton=(e,t,o,n,a)=>{$("<button>",{id:e,text:t,class:`btn btn-lg ${o}`,click:function(){n(this)}}).appendTo(a)},clickCopy=e=>{if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(e).then((()=>{void 0!==audio&&audio.play()})).catch((e=>{}));{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")&&void 0!==audio&&audio.play()}catch(e){}return document.body.removeChild(t),Promise.resolve()}},camelize=e=>e.toLowerCase().replace(/(?:^\w|\b\w)/g,((e,t)=>0===t?e:e.toUpperCase())).replace(/\s+/g,""),randombetween=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,randomArrayShuffle=e=>{for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e};$((()=>{$('[data-toggle="tooltip"]').tooltip()}));const audio=document.getElementById("audio"),timeButton=(e,t,o="",n=!1,a,l)=>{$(e).text(t).addClass(o).css(a,l).val(n?t:"")};$("input").attr({autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1}),$(window).resize((()=>{$("#showQR").empty().addClass("invisible d-none")}));const selectText=e=>{if(document.body.createTextRange){const t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){const t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o)}};$(".copyable").click((function(){$(this).attr("contenteditable",!0),selectText(this),document.execCommand("copy"),window.getSelection().removeAllRanges(),$(this).removeAttr("contenteditable"),void 0!==audio&&audio.play()}));const makeTextFile=e=>URL.createObjectURL(new Blob([e],{type:"text/plain"})),download=e=>{const t=$("<a>",{href:e,download:Date.now()}).appendTo("body");t[0].click(),t.remove()},locationReload=()=>{location.reload()},showHidePopUp=(e,t,o)=>{$(e).on("click",(()=>{$("#bottomPopup").slideDown(),$("#messagePopUp").html(`<p>Explore <a href="${t}" target="_blank">${o}</a> for enhanced engagement and a richer interactive experience.</p><br/>`)})),$("#closeButton").on("click",(()=>$("#bottomPopup").slideUp()))};window.addEventListener("beforeunload",(function(){}));const mathFloorRandom=e=>e[Math.floor(Math.random()*e.length)],runAtNextMinute=e=>{const t=new Date,o=1e3*(60-t.getSeconds())-t.getMilliseconds();setTimeout((()=>{e(),setInterval(e,6e4)}),o)};