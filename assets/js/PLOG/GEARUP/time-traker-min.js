$(document).ready((function(){let e,t,r,a,n,o=!1;const i=new bootstrap.Modal($("#trackerModal")[0]),c=new bootstrap.Modal($("#trackerResultModal")[0]),l=()=>{$("#trackerModal").on("hidden.bs.modal",(function(){$(this).find("#trackerForm")[0].reset()}))};function d(e){const t=e%60;return`${Math.floor(e/60)}:${t<10?"0":""}${t}`}$("#timeTracker").on("click",(function(){if(o){clearInterval(e),o=!1;new Date;$(this).text("Time Tracker")}else i.show()}));$(".btn-close").click((()=>{i.hide(),l(),c.hide()})),$("#trackerForm").on("submit",(function(s){s.preventDefault(),r=$("#trackerName").val().trim(),a=parseInt($("#trackerDuration").val(),10),!r||isNaN(a)||a<=0?alert("Please provide a valid tracker name and a duration greater than 0."):(i.hide(),l(),n=a,t=new Date,o=!0,$("#timeTracker").text(d(n)),e=setInterval((function(){if(n--,$("#timeTracker").text(d(n)),n<=0){clearInterval(e),o=!1;const n=new Date;let i=`Timer "${r}" ran for ${a} seconds.\nStarted at: ${t.toLocaleTimeString()}\nEnded at: ${n.toLocaleTimeString()}`;c.show(),$("#showResult").text(i),$("#copyResult").attr("value",i).click((()=>(clickCopy(i),void c.hide()))),$("#timeTracker").text("Time Tracker")}}),1e3))}))})),timeButton("#timeTracker","Time Tracker","btn btn-success btn-lg btn-fix-width btn-block");