/* tooltip */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/* Window Width for Resizing fonts */
// window width
let wW = $(document).width();

function wWf() {
  wW = $(document).width();
  myTimer();
}
// window on resize
window.onresize = wWf;

/* click and copy function */
clickCopy = (event) => {
  console.log(event);
  let el = $("<textarea></textarea>");
  let elId = "#" + event.target.id;
  let text =
    elId === "#section8"
      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      : $(elId).text();
  $(el).val(text);
  $("#app").append(el);
  $(el).select();
  document.execCommand("copy");
  $(el).remove();
};

// password generator
let password = [];
password = password.join();

/* set interval for everysecond */
setInterval(myTimer, 1000);
function myTimer() {
  // current time
  let time = moment();

  // adding Year Month Date Hour Minute in one code
  let code = `${time.format("YY")}${time.format("MM")}${time.format(
    "DD"
  )}${time.format("HH")}${time.format("mm")}`;

  // adding value in section one
  $("#section1")
    .text(code)
    .addClass("btn-sect-1")
    .css(
      "font-size",
      wW / 1.0625 + "%"
    ) /* .hover(function(){$(this).css('font-size', (wW/1.0625) + "%")},function(){$(this).css('font-size', (wW/1.075) + "%")}).active(function(){$(this).css('font-size', (wW/1.0725) + "%")}) */
    .click(function () {
      $(this).css("font-size", wW / 1.0725 + "%");
    })
    .click((event) => {
      clickCopy(event);
    });

  // adding Year Quarter Week log code2
  let code2 = `${time.format("YY")}0${time.format("Q")}${time.format("ww")}`;

  // adding value in section two
  $("#section2")
    .text(code2)
    .addClass("btn btn-light btn-lg btn-fix-width")
    .click((event) => {
      clickCopy(event);
    });

  // adding Year Quarter Week log code2
  let code3 = `${time.format("YY")}0${time.format("Q")}${time.format(
    "ww"
  )}0${time.format("E")}${time.format("HH")}${time.format("mm")}`;

  // adding value in section three
  $("#section3")
    .text(code3)
    .addClass("btn btn-light btn-lg btn-fix-width")
    .click((event) => {
      clickCopy(event);
    });

  // if you don't want to use moment.js then use this one (vanila javascript)
  // let d = new Date();
  // let dd = `${d.getFullYear().toString()[2]}${d.getFullYear().toString()[3]}${!d.getMonth().toString()[1] ? 0 + "" + (d.getMonth() + 1) : (d.getMonth() + 1)}${!d.getDate().toString()[1] ? 0 + "" + d.getDate() : d.getDate()}${!d.getHours().toString()[1] ? 0 + "" + d.getHours() : d.getHours()}${!d.getMinutes().toString()[1] ? 0 + "" + d.getMinutes() : d.getMinutes()}${!d.getSeconds().toString()[1] ? 0 + "" + d.getSeconds() : d.getSeconds()}`;
  let code4 = `${time.format("YY")}0${time.format("Q")}${time.format(
    "ww"
  )}0${time.format("E")}${time.format("HH")}${time.format("mm")}${time.format(
    "ss"
  )}`;

  // adding value in section four
  $("#section4")
    .text(code4)
    .addClass("btn btn-light btn-lg btn-fix-width btn-block")
    .click((event) => {
      clickCopy(event);
    });

  // adding time from 1970 till now in microsecond
  let code5 = Date.now();
  // adding value in section five
  $("#section5")
    .text(code5)
    .addClass("btn btn-light btn-lg btn-fix-width btn-block")
    .click((event) => {
      clickCopy(event);
    });

  // password
  $("#section6")
    .text(password.join(""))
    .addClass("btn btn-warning btn-lg btn-block")
    .click((event) => {
      clickCopy(event);
    });

  // flip coin
  $("#section7")
    .text("Flip the Coin")
    .addClass("btn btn-success btn-lg btn-fix-width btn-block");

  // adding value in section three
  $("#section8")
    .text("Lorem Ipsum")
    .addClass("btn btn-info btn-lg btn-fix-width")
    .click((event) => {
      clickCopy(event);
    });
}

// set interval for every minute
setInterval(oneMinute, 60000);
function oneMinute() {
  // password generator
  password = [];
  let a = "$#@abcdefghkmnpqrstuvwxyz23456789";
  let b = a.toUpperCase();
  let c = a.concat(b).split("");
  for (let i = 0; i < 20; i++) {
    let d = Math.floor(Math.random() * c.length);
    password.push(c[d]);
  }
}
oneMinute();

// flip the coin script
function flipCoin() {
  let a = ["HEAD", "TAIL"];
  alert("First, select your side.");
  let b = confirm("Is it HEAD? \n\nOK to confirm.");
  let c = "";
  if (b) {
    alert("Good choice, you select HEAD.");
    c = "HEAD";
  } else {
    alert("Good choice, you select TAIL.");
    c = "TAIL";
  }
  let d;
  do {
    d = parseInt(
      prompt(
        "How many times do you want to flip your coin? \n\nRemember: Flip number has to be odd only to get the final result."
      )
    );
  } while (isNaN(d) || d % 2 === 0);
  alert("You choose to flip " + d + " times and we did it for you...");
  let e = [];
  for (let i = 0; i < d; i++) {
    let f = Math.floor(Math.random() * 2);
    e.push(a[f]);
  }
  g = {};
  e.forEach(function (x) {
    g[x] = (g[x] || 0) + 1;
  });
  let h = g.HEAD;
  let j = g.TAIL;
  let k;
  if (j === undefined) {
    j = 0;
    k = "HEAD";
  } else if (h === undefined) {
    h = 0;
    k = "TAIL";
  } else if (h > j) {
    k = "HEAD";
  } else {
    k = "TAIL";
  }
  let l;
  if (c === k) {
    l = "You are the winner.";
  } else {
    l = "You are the looser.";
  }
  alert(
    "You got " +
      h +
      " times HEAD and " +
      j +
      " times TAIL. \n\nAfter all winner is " +
      k +
      ". " +
      l + 
    "\n\nCheck your result:\n\n" +
    e.join(", ")
  );
}
