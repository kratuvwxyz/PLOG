// =======================================================================================================
// =======================================================================================================
// Default Functions
/*
 ** document ready
 ** click to copy
 ** camel case string generator function
 ** random number generator between minimum and maximum
 ** random array shuffle function
 ** window width for resizing fonts
 ** tooltip
 ** audio
 ** button layout
 ** turn off autocorrect of input
 ** window resize // for all
 ** copy image
 ** make text file
 ** download file
 ** location reload
 ** popup window at the bottom
 */
// =======================================================================================================
// =======================================================================================================
/* document ready */
$(document).ready(() => {
  console.log("%cDESAIGN.STUDIO ", "font-weight: bold; font-size: 50px;color: white; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)");
  console.log("%c JS Main is running ", "color: green; background: yellow; font-size: 30px");
});

/* click and copy function */
clickCopy = (event) => {
  let el = $("<textarea></textarea>");
  let text = $(event).attr("id") === "sec82" ? lorIpsText() : $(event).attr("id") === "sec81" ? $(event).attr("value") : $("#" + event.target.id).text();
  $(el).val(text);
  $("#app").append(el);
  $(el).select();
  document.execCommand("copy");
  $(el).remove();
  // After copy play audio
  audio.play();
};

/* camel case string generator function */
const camelize = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

/* random number generator between minimum number and maximum number */
const randombetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* random array shuffle function */
const randomArrayShuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

/* tooltip */
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

/* audio */
let audio = document.getElementById("audio");

/* button layout */
/* 
a = id
b = text
c = add classes
d = add css condition
e = add css value
f = true/false to copy or not copy button text
*/
const timeButton = (a, b, c, f, d, e) => {
  $(a)
    .text(b)
    .addClass(c)
    .css(d, e)
    .click((event) => {
      if (f) {
        clickCopy(event);
      }
    });
};

/* input autocorrect = off */
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.setAttribute("autocomplete", "off");
  input.setAttribute("autocorrect", "off");
  input.setAttribute("autocapitalize", "off");
  input.setAttribute("spellcheck", false);
});

/* window resize.. for all */
$(window).resize(() => {
  $("#showQR").empty().addClass("invisible d-none");
});

/* Cross-browser function to select content */
const selectText = (element) => {
  var doc = document;
  if (doc.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};
$(".copyable").click((e) => {
  //Make the container Div
  $(this).attr("contenteditable", true);
  //Select the image
  selectText($(this).get(0));
  //Execute copy Command
  //Note: This will ONLY work directly inside a click listener
  document.execCommand("copy");
  //Unselect the content
  window.getSelection().removeAllRanges();
  //Make the container Div uneditable again
  $(this).removeAttr("contenteditable");
  // play audio
  audio.play();
});

/* make text file */
/* 
http://jsfiddle.net/UselessCode/qm5AG/
*/
const makeTextFile = (text) => {
  let textFile = null;
  let data = new Blob([text], { type: "text/plain" });

  textFile = window.URL.createObjectURL(data);

  return textFile;
};

/* download file */
/* 
https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript
*/
const download = (url) => {
  const a = document.createElement("a");
  a.href = url;
  // a.download = url.split("/").pop();
  a.download = Date.now();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

/* location reload */
const locationReload = () => {
  location.reload();
};

/* popup window */
const showHidePopUp = (a, b, c, d) => {
  $(a).on("click", () => {
    $("#bottomPopup").slideDown();
    $("#messagePopUp").html(`<a href=${b} target="_blank">${c}</a><br/><p>${d}</p>`);
  });
  // Close the pop-up when the close button is clicked
  $("#closeButton").on("click", function () {
    $("#bottomPopup").slideUp();
  });
};

// =======================================================================================================
// =======================================================================================================
// Password Generator
// =======================================================================================================
// =======================================================================================================

let password;
const createPassword = () => {
  password = [];
  let a = "$#@abcdefghkmnpqrstuvwxyz23456789&%?";
  let b = a.toUpperCase();
  let c = a.concat(b).split("");
  for (let i = 0; i < 20; i++) {
    let d = Math.floor(Math.random() * c.length);
    password.push(c[d]);
  }
  return password.join("");
};

// =======================================================================================================
// =======================================================================================================
// Random Word Generator
// =======================================================================================================
// =======================================================================================================

const thousandNoun = "ability absence abuse access accident accommodation account acid act action activity addition address administration adult advance advantage advice afternoon age agency agent agreement agriculture aid aim air aircraft alan alternative amount analysis animal answer appeal appearance application appointment approach approval area argument arm army arrival art article artist aspect assembly assessment assistance association atmosphere attack attempt attention attitude audience author authority autumn average award awareness baby back background bag balance ball band bank bar base basis bath battle beach beauty bed bedroom behalf behaviour belief benefit bill bird birth bishop block blood board boat bob body book border bottle bottom box boy brain branch bread break breakfast breath bridge brother brown budget bus bush business cabinet call campaign cancer candidate capacity capital captain car card care career cash castle cat cause cell centre century chain chair chairman challenge championship chance chancellor change channel chapter character charge charity chest chief child china choice christ church city claim clause client club coal coast code coffee collection college colour combination command commission commitment committee communication community company comparison competition computer concentration concept concern conclusion condition conference confidence conflict congress connection consequence consideration constitution construction consumer contact content context contract contrast contribution control convention conversation copy core corner corporation cost council country countryside county couple course court cover creation credit crime crisis criticism cross crowd crown culture cup currency curriculum customer dad damage danger date daughter day deal death debate debt decade decision decline defence definition degree delivery demand democracy department deputy description design desire desk detail development diet difference difficulty dinner direction director discipline discussion disease display distance distinction distribution district division doctor document dog door doubt drama dream dress drink drive driver drug duty earth east economy edge editor education effect efficiency effort election electricity element emergency emphasis empire employment end energy engine english enterprise entry environment equipment error establishment estate evidence examination example exchange executive exercise exhibition existence expansion expenditure experience expert explanation expression extension extent eye face fact factor factory failure faith fall family farm fashion father favour fear feature field figure file film finance fire firm fish flat flight floor flow focus food foot football force forest form formation foundation framework frank freedom friend front fruit fuel fun fund furniture future gallery game gap garden gas gate general generation gentleman girl glass goal god gold golf government graham grant grass green group growth guide gun guy hair half hall hand head health heart heat height hell help henry hill history hole holiday home hope horse hospital hotel hour house household husband ice idea identity image impact importance impression improvement incident income increase independence index individual industry inflation influence information initiative injury inquiry instance institute institution insurance intelligence intention interest interpretation interview introduction investigation investment involvement iron island issue item jack jane japan job joe john jones journey judge justice key kind king kingdom kitchen knowledge labour lack lady lake land lane language law lead leader leadership league lee leg legislation length letter level lewis liability library licence life lifespan light limit line link list literature loan location look lord loss lot love lunch machine magazine maintenance major majority man management manager manchester manner map march mark market marriage martin mary mass master match material may meal measure meat member membership memory message metal method middle mike milk mill mind minister ministry minority minute mirror miss mistake model moment money month morning mother motion motor mountain mouth move movement mum murder museum music name nation nature neck need network news newspaper night noise north northern nose note notice notion object occasion offence offer office officer oil operation opinion opportunity opposition option order organisation organization other outcome output owner oxford page pain pair palace panel paper parent parish park parliament part partner partnership party passage past path patient pattern paul pay payment peace pension performance period person peter phase philosophy phone picture piece place plan plane plant plastic plate play player pleasure point police policy pollution pool population port position possibility post potential pound power practice presence present president press pressure price prince principle priority prison problem procedure process product production professor profit program programme progress project property proportion proposal protection provision pub public publication purpose quality quarter queen question race radio rail railway rain range rate reaction reader reality reason recession recognition record recovery reduction ref reference reform regime region relation relationship release relief religion report representation republic reputation request research resistance resolution respect response responsibility rest restaurant result retirement revenue review revolution right ring rise risk river road rock role roof room round route row rugby rule run safety sale sample scale scene scheme school science scope screen sea search season seat second secretary section sector security selection self sense sentence sequence series service session set settlement sex shape share sheet ship shock shop shoulder show side sight sign significance silence silver simon sir sister site situation size skill skin sky sleep smile smith snow society software soil solution son song sort sound source south space speaker specialist species speech speed spirit spokesman sport spot spring square st staff stage standard star start state statement station status steel step stock stone store strategy street strength stress strike structure struggle student study stuff style subject success sugar sum summer sun supply support surface surprise survey system table talk tape target task tax taylor tea teacher team technique technology telephone television temperature term test text thatcher theatre theme theory thing threat time title tom tone tony top total touch tour town track trade tradition traffic train transfer transport travel treatment treaty tree trial trip trouble trust truth turn tv type un uncle unemployment union unit university us use user valley value van variety vehicle version victim victory video view village violence vision visit voice volume vote walk wall war waste water way wealth weather week weekend weight welfare west white whole wife will wind window wine winter woman wood word work worker world writer year youth";

// selection of words
let words = thousandNoun;

// find words thorough character sizes
const a3 = words
  .replace(/(\b(\w{1,2})\b(\s|$))/g, "")
  .replace(/(\b(\w{4,20})\b(\s|$))/g, "")
  .split(" ");
const a4 = words
  .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
  .replace(/(\b(\w{5,20})\b(\s|$))/g, "")
  .split(" ");
const a5 = words
  .replace(/(\b(\w{1,4})\b(\s|$))/g, "")
  .replace(/(\b(\w{6,20})\b(\s|$))/g, "")
  .split(" ");
const a6 = words
  .replace(/(\b(\w{1,5})\b(\s|$))/g, "")
  .replace(/(\b(\w{7,20})\b(\s|$))/g, "")
  .split(" ");
const a7 = words
  .replace(/(\b(\w{1,6})\b(\s|$))/g, "")
  .replace(/(\b(\w{8,20})\b(\s|$))/g, "")
  .split(" ");
const a8 = words
  .replace(/(\b(\w{1,7})\b(\s|$))/g, "")
  .replace(/(\b(\w{9,20})\b(\s|$))/g, "")
  .split(" ");
const a9 = words
  .replace(/(\b(\w{1,8})\b(\s|$))/g, "")
  .replace(/(\b(\w{10,20})\b(\s|$))/g, "")
  .split(" ");
// run the function first time
let drowCheck, drow;

// randomly create array
// a = r1 min, b = r1 max, c = r2 min, d = r2 max, e = r3 min, f = r3 max, max = no more than this number to show, total = total characters
const fourArray = (a, b, c, d, e, f, max, total) => {
  let r1 = randombetween(a, b);
  let r2 = randombetween(c, d);
  let r3 = randombetween(e, f);
  let x = r1 + r2 + r3;
  let r4 = total - x > max ? max : total - x;
  let items = [r1, r2, r3, r4];
  return randomArrayShuffle(items);
};

// using an array getting correct word
const createRandomWord = () => {
  let x = fourArray(3, 5, 4, 6, 5, 7, 9, 20);
  let y = [];
  for (let i = 0; i < x.length; i++) {
    let z = x[i] === 3 ? a3[Math.floor(Math.random() * a3.length)] : x[i] === 4 ? a4[Math.floor(Math.random() * a4.length)] : x[i] === 5 ? a5[Math.floor(Math.random() * a5.length)] : x[i] === 6 ? a6[Math.floor(Math.random() * a6.length)] : x[i] === 7 ? a7[Math.floor(Math.random() * a7.length)] : x[i] === 8 ? a8[Math.floor(Math.random() * a8.length)] : a9[Math.floor(Math.random() * a9.length)];
    y.push(z);
  }
  return camelize(y.join(" "));
};

// =======================================================================================================
// =======================================================================================================
// LOREM IPSUM
/*
 ** randomly select and copy
 */
// =======================================================================================================
// =======================================================================================================
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const loremIpsumBtn1 = $("<button>");
$(loremIpsumBtn1).addClass("btn btn-info btn-lg sec81").text("Lorem Ipsum").attr("id", "sec81").attr("value", loremIpsum).attr("onclick", "clickCopy(this)");
$("#section8").append(loremIpsumBtn1);

const lorIps = ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound on the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", "In a free hour, when our power of choice is untrammeled and when nothing prevents our ability to do what we like best, every pleasure is welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures must be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."];
const lorIpsText = () => lorIps[Math.floor(Math.random() * lorIps.length)];
const loremIpsumBtn2 = $("<button>");
$(loremIpsumBtn2).addClass("btn btn-success btn-lg sec81").text("Random Para").attr("id", "sec82").attr("onclick", "clickCopy(this)");
$("#section8").append(loremIpsumBtn2);

// =======================================================================================================
// =======================================================================================================
// FLIP THE COIN
/*
 ** add jAlert, jConfirm and jPrompt plugins from jquery
 */
// =======================================================================================================
// =======================================================================================================

const flipCoin = () => {
  let a = ["HEAD", "TAIL"];
  alert("First, select your side. \n\nClick OK to next.");
  let b = confirm("Is it HEAD? \n\nClick OK to confirm. CANCLE to select TAIL.");
  let c = "";
  if (b) {
    alert("Good choice, you select HEAD. \n\nClick OK to next.");
    c = "HEAD";
  } else {
    alert("Good choice, you select TAIL. \n\nClick OK to next.");
    c = "TAIL";
  }
  let d;
  do {
    d = parseInt(prompt("How many times do you want to flip your coin? \n\nRemember: Flip number has to be an odd number to get the conclusive result.", 1));
  } while (isNaN(d) || d % 2 === 0);
  alert("You choose to flip " + d + " times and we did it for you... \n\nClick OK to next.");
  let e = [];
  for (let i = 0; i < d; i++) {
    let f = Math.floor(Math.random() * 2);
    e.push(a[f]);
  }
  g = {};
  e.forEach((x) => {
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
    l = "You win.";
  } else {
    l = "You loose.";
  }
  alert("You got " + h + " times HEAD and " + j + " times TAIL. \n\nAfter all winner is " + k + ". " + l + "\n\nCheck your result:\n\n" + e.join(", "));
};

// =======================================================================================================
// =======================================================================================================
// Rock Paper Scissors
// =======================================================================================================
// =======================================================================================================

let rps = ["ROCK", "PAPER", "SCISSORS"],
  rpsResetTimeout;
const result = (x, y) => {
  (x === "ROCK" && y === "PAPER") || (x === "PAPER" && y === "SCISSORS") || (x === "SCISSORS" && y === "ROCK") ? createLayout(x, y, true, false) : createLayout(x, y, false, true);
};
const match = (x, y) => {
  $(".sec10").removeClass("btn-primary");
  rpsResetTimeout = setTimeout(createLayout, 3000);
  x != y ? result(x, y) : createLayout(x, y, true, true);
};
const startRPS = (x) => {
  $(".sec10").removeClass("btn-info btn-danger btn-success").addClass("btn-primary");
  let compRPS = rps[Math.floor(Math.random() * rps.length)];
  match(x.toUpperCase(), compRPS);
};
const getrpsvalue = (e) => {
  clearTimeout(rpsResetTimeout);
  startRPS(e.value);
};
const createLayout = (x, y, pw, uw) => {
  $("#section10").empty();
  for (let i = 0; i < rps.length; i++) {
    let buttona = $("<button>");
    $(buttona).addClass("btn btn-lg sec10").text(rps[i]).attr("value", rps[i]).attr("onclick", "getrpsvalue(this)");
    x === rps[i] && y === rps[i] && pw === true && uw === true ? $(buttona).css("font-weight", "bold").css("color", "white").css("background-color", "blue") : x === rps[i] && uw === true ? $(buttona).css("font-weight", "bold").css("color", "white").css("background-color", "green") : x === rps[i] && uw === false ? $(buttona).css("font-weight", "light").css("color", "black").css("text-decoration", "line-through").css("background-color", "red") : y === rps[i] && pw === true ? $(buttona).css("font-weight", "bold").css("color", "white").css("background-color", "green") : y === rps[i] && pw === false ? $(buttona).css("font-weight", "light").css("color", "black").css("text-decoration", "line-through").css("background-color", "red") : $(buttona).css("font-weight", "light").css("color", "#8700ff").css("background-color", "var(--cyan)");
    $("#section10").append(buttona);
  }
};
createLayout();

// =======================================================================================================
// =======================================================================================================
// QR Code Generator
// =======================================================================================================
// =======================================================================================================

const generateQR = () => {
  $("#qrInput").removeClass("invisible d-none");
};

$(".inputQR").keyup(() => {
  $("#showQR").empty().addClass("invisible d-none");
  if ($(".inputQR").val().length > 0) {
    $("#section11").text("Generate Code").removeClass("btn-danger btn-info").addClass("btn-success qrClass");
  } else {
    $("#section11").text("QR-CODE Generator").removeClass("btn-success btn-info qrClass").addClass("btn-danger");
  }
});

$(document).on("click", ".qrClass", () => {
  $("#showQR").empty();
  let qrA = $(".inputQR").val().replace("'", "&#39;").replace("#", "");
  let size = Math.floor($(".qrClass").width()) < 547 ? Math.floor($(".qrClass").width()) : 547;
  $("#section11").text("QR-CODE Generated").removeClass("btn-success btn-danger").addClass("btn-info");
  $("#showQR")
    .removeClass("invisible d-none")
    .append("<img src='http://chart.apis.google.com/chart?cht=qr&chl=" + qrA + "&chs=" + size + "&chd=t:90,1000,2700,3500|3968,-1,1100,2' alt='qr' class='p-3' />");
});

// =======================================================================================================
// =======================================================================================================
// Download TXT File
// =======================================================================================================
// =======================================================================================================

const downloadTxt = () => {
  $("#txtInput").removeClass("invisible d-none");
};

$(".inputTxt").keyup(() => {
  if ($(".inputTxt").val().length > 0) {
    $("#section12").text("Download TXT File").removeClass("btn-primary").addClass("btn-success txtClass");
  } else {
    $("#section12").text("TXT File Generator").removeClass("btn-success txtClass").addClass("btn-primary");
  }
});

$(document).on("click", ".txtClass", () => {
  let textbox = $(".inputTxt").val();
  download(makeTextFile(textbox));
});

// =======================================================================================================
// =======================================================================================================
// Coming Soon
// =======================================================================================================
// =======================================================================================================
/* Memory Game */
timeButton("#section13", "Memory Game", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Roll A Dice */
timeButton("#rollADice", "Roll A Dice", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Color Picker */
timeButton("#colorPicker", "Color Picker", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Meditate */
timeButton("#meditate", "Meditate", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Calculator */
timeButton("#calculator", "Calculator", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Metronome */
timeButton("#metronome", "Metronome", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Tic Tac Toe */
timeButton("#tic_tac_toe", "Tic Tac Toe", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Alphabate */
timeButton("#alphabate", "Alphabate", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Bingo */
timeButton("#bingo", "Bingo", "btn btn-secondary btn-lg btn-fix-width btn-block");
/* Weather */
timeButton("#weather", "Weather", "btn btn-secondary btn-lg btn-fix-width btn-block");

// =======================================================================================================
// =======================================================================================================
// Time with Moment JS
// =======================================================================================================
// =======================================================================================================
let stamps = [];

const onResetStamp = (x) => {
  stamps = ["yt", "mt", "dt", "ht", "it"];
  localStorage.setItem("stamps", JSON.stringify(stamps));
  onClickTimeStamp(x);
};

const stringTimeStamp = (x) => {
  stamps = JSON.parse(localStorage.stamps).filter((el) => el != null);
  $(".plt").addClass("disabled").removeClass("active");
  if (!stamps.includes(x)) {
    stamps.push(x);
  } else {
    stamps.splice(stamps.indexOf(x), 1);
  }
  stamps.includes("lt") ? ((str = Date.now()), (stamps = ["lt"])) : (str = `${stamps.includes("yt") ? moment().format("YY") : ""}${stamps.includes("qt") ? moment().format("Q") : ""}${stamps.includes("mt") ? moment().format("MM") : ""}${stamps.includes("wt") ? moment().format("WW") : ""}${stamps.includes("at") ? moment().day() + 1 : ""}${stamps.includes("dt") ? moment().format("DD") : ""}${stamps.includes("ht") ? moment().format("HH") : ""}${stamps.includes("it") ? moment().format("mm") : ""}${stamps.includes("st") ? moment().format("ss") : ""}`);
  for (let i in stamps) {
    if (stamps[i] != "resetTimeDate") {
      $(`#${stamps[i]}`).addClass("active").removeClass("disabled");
    }
  }
  localStorage.setItem("stamps", JSON.stringify(stamps));
  return str;
};

const onClickTimeStamp = (x) => {
  timeButton("#section1", stringTimeStamp(x.value), "btn-sect-1", true, "font-size", "9vw");
};

onResetStamp("");

/* One Minute */

const oneMinute = () => {
  // --
  // password
  // --
  timeButton("#section6", createPassword(), "btn btn-warning btn-lg btn-block", true);

  showHidePopUp("#section6", "https://kratuvwxyz.github.io/Password-Generator/", "Password Generator", "Explore this page for enhanced engagement and a richer interactive experience.");

  // --
  // generate random words
  // --
  do {
    drow = createRandomWord();
  } while (drow.length <= 19 || drow.length >= 21);
  timeButton("#section9", drow, "btn btn-warning btn-lg btn-block", true);

  showHidePopUp("#section9", "https://kratuvwxyz.github.io/Random-Words-Generator/", "Random Words Generator", "Explore this page for enhanced engagement and a richer interactive experience.");
};

oneMinute();

/* set interval for every second */
const myPlogTimer = () => {
  // set every second and minute changing buttons
  if (localStorage.stamps.includes("st") || localStorage.stamps.includes("lt")) {
    timeButton("#section1", stringTimeStamp(), "btn-sect-1", true, "font-size", "9vw");
  }

  // set interval for every minute
  if (moment().second() === 0) {
    if (!localStorage.stamps.includes("st") || !localStorage.stamps.includes("lt")) {
      timeButton("#section1", stringTimeStamp(), "btn-sect-1", true, "font-size", "9vw");
    }
    oneMinute();
  }
};
setInterval(myPlogTimer, 1000);

// --
// flip the coin
// --
timeButton("#section7", "Flip The Coin", "btn btn-success btn-lg btn-fix-width btn-block");

// --
// QR Code
// --
timeButton("#section11", "QR-CODE Generator", "btn btn-danger btn-lg btn-fix-width btn-block");

// --
// Download TXT file
// --
timeButton("#section12", "TXT File Generator", "btn btn-primary btn-lg btn-fix-width btn-block");

// =======================================================================================================
// =======================================================================================================
// PLOG
// =======================================================================================================
// =======================================================================================================

timeButton("#section14", "PLOG", "btn btn-secondary btn-lg btn-fix-width btn-block");
let xx = [];
localStorage.setItem("proTask", JSON.stringify(xx));

const recordPlog = () => {
  const myTimer = () => {
    document.getElementById("section14").innerHTML = date;
    date === 0 ? (audio.play(), myStopFunction()) : (date = date - 1000);
  };

  const recordTime = () => {
    let recordPrompt = prompt("How long do you want to focus on your task? \n\n (Make it 2 minutes or more! Type only numbers)", 9);
    // return isNaN(recordPrompt) || recordPrompt - 1 <= 0 ? recordTime() : recordPrompt;
    return recordPrompt;
  };

  let date = parseInt(recordTime() * 60 * 1000);

  const myInterval = setInterval(myTimer, 1000);

  const myStopFunction = () => {
    clearInterval(myInterval);
    const x = prompt("What is the task for?");
    const d = new Date();
    let y = `${d}\n\n${x}, finished in ${recordTime} minutes.`;
    /* download task in text format */
    // download(makeTextFile(y));
    xx = JSON.parse(localStorage.getItem("proTask"));
    console.log(xx);
    let yy = {};
    yy["id"] = xx.length + 1;
    yy["created_at"] = new Date();
    yy["time_worked"] = date / 1000 + " minutes";
    yy["text"] = x;
    yy["due"] = null;
    xx.push(yy);
    localStorage.setItem("proTask", JSON.stringify(xx));
    // locationReload();
  };
};
