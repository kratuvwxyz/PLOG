// =======================================================================================================
// =======================================================================================================
// Default Functions
/* 
  - click to copy
  - camel case string generator function
  - random number generator between minimum and maximum
  - random array shuffle function
  - window width for resizing fonts
  - tooltip
*/
// =======================================================================================================
// =======================================================================================================
/* click and copy function */
clickCopy = (event) => {
  let el = $("<textarea></textarea>");
  let elId = "#" + event.target.id;
  let text = elId === "#section8" ? lorIpsText() : $(elId).text();
  $(el).val(text);
  $("#app").append(el);
  $(el).select();
  document.execCommand("copy");
  $(el).remove();
};

/* camel case string generator function */
function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

/* random number generator between minimum number and maximum number */
function randombetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* random array shuffle function */
function randomArrayShuffle(array) {
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
}

/* tooltip */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/* audio */
let audio = document.getElementById("audio");

/* button layout */
function timeButton(a, b, c, d, e) {
  $(a)
    .text(b)
    .addClass(c)
    .css(d, e)
    .click((event) => {
      clickCopy(event);
      audio.play();
    });
}

// =======================================================================================================
// =======================================================================================================
// Password Generator
// =======================================================================================================
// =======================================================================================================

let password;
function createPassword() {
  password = [];
  let a = "$#@abcdefghkmnpqrstuvwxyz23456789&%?";
  let b = a.toUpperCase();
  let c = a.concat(b).split("");
  for (let i = 0; i < 20; i++) {
    let d = Math.floor(Math.random() * c.length);
    password.push(c[d]);
  }
  return password.join("");
}

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
function fourArray(a, b, c, d, e, f, max, total) {
  let r1 = randombetween(a, b);
  let r2 = randombetween(c, d);
  let r3 = randombetween(e, f);
  let x = r1 + r2 + r3;
  let r4 = total - x > max ? max : total - x;
  let items = [r1, r2, r3, r4];
  return randomArrayShuffle(items);
}

// using an array getting correct word
function createRandomWord() {
  let x = fourArray(3, 5, 4, 6, 5, 7, 9, 20);
  let y = [];
  for (let i = 0; i < x.length; i++) {
    let z = x[i] === 3 ? a3[Math.floor(Math.random() * a3.length)] : x[i] === 4 ? a4[Math.floor(Math.random() * a4.length)] : x[i] === 5 ? a5[Math.floor(Math.random() * a5.length)] : x[i] === 6 ? a6[Math.floor(Math.random() * a6.length)] : x[i] === 7 ? a7[Math.floor(Math.random() * a7.length)] : x[i] === 8 ? a8[Math.floor(Math.random() * a8.length)] : a9[Math.floor(Math.random() * a9.length)];
    y.push(z);
  }
  return camelize(y.join(" "));
}

// =======================================================================================================
// =======================================================================================================
// LOREM IPSUM
/* 
  - randomly select and copy
*/
// =======================================================================================================
// =======================================================================================================

let lorIps = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."];
let lorIpsText = () => lorIps[Math.floor(Math.random() * lorIps.length)];

// =======================================================================================================
// =======================================================================================================
// FLIP THE COIN
/* 
- add jAlert, jConfirm and jPrompt plugins from jquery
*/
// =======================================================================================================
// =======================================================================================================

function flipCoin() {
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
    l = "You win.";
  } else {
    l = "You loose.";
  }
  alert("You got " + h + " times HEAD and " + j + " times TAIL. \n\nAfter all winner is " + k + ". " + l + "\n\nCheck your result:\n\n" + e.join(", "));
}

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
    x === rps[i] && y === rps[i] && pw === true && uw === true ? $(buttona).css("font-weight", "bold").css("color", "white").css("background-color", "blue") : x === rps[i] && uw === true ? $(buttona).css("font-weight", "bold").css("color", "white").css("background-color", "green") : x === rps[i] && uw === false ? $(buttona).css("font-weight", "light").css("color", "black").css("text-decoration", "line-through").css("background-color", "red") : y === rps[i] && pw === true ? $(buttona).css("font-weight", "bold").css("color", "white").css("background-color", "green") : y === rps[i] && pw === false ? $(buttona).css("font-weight", "light").css("color", "black").css("text-decoration", "line-through").css("background-color", "red") : $(buttona).css("font-weight", "light").css("color", "var(--yellow)").css("background-color", "var(--cyan)");
    $("#section10").append(buttona);
  }
};
createLayout();

// =======================================================================================================
// =======================================================================================================
// Time with Moment JS
// =======================================================================================================
// =======================================================================================================

/* set interval for everysecond */

setInterval(myTimer, 1000);
// set every second and minute changing buttons
function myTimer() {
  // Year Month Date Hour Minute
  timeButton("#section1", `${moment().format("YY")}${moment().format("MM")}${moment().format("DD")}${moment().format("HH")}${moment().format("mm")}`, "btn-sect-1", "font-size", "15vw");
  // Year Quarter Week
  timeButton("#section2", `${moment().format("YY")}0${moment().format("Q")}${moment().format("ww")}`, "btn btn-light btn-lg btn-fix-width btn-block");
  // Year Quarter Week Day Hour Minute
  timeButton("#section3", `${moment().format("YY")}0${moment().format("Q")}${moment().format("ww")}0${moment().format("E")}${moment().format("HH")}${moment().format("mm")}`, "btn btn-light btn-lg btn-fix-width btn-block");
  // Year Quarter Week Day Hour Minute Second
  timeButton("#section4", `${moment().format("YY")}0${moment().format("Q")}${moment().format("ww")}0${moment().format("E")}${moment().format("HH")}${moment().format("mm")}${moment().format("ss")}`, "btn btn-light btn-lg btn-fix-width btn-block");
  // adding time from 1970 till now in microsecond
  timeButton("#section5", Date.now(), "btn btn-light btn-lg btn-fix-width btn-block");

  // set interval for every minute
  if (moment().second() === 0) {
    oneMinute();
  }
}

function oneMinute() {
  // password
  timeButton("#section6", createPassword(), "btn btn-warning btn-lg btn-block");

  // generate random words
  do {
    drow = createRandomWord();
  } while (drow.length <= 19 || drow.length >= 21);
  timeButton("#section9", drow, "btn btn-warning btn-lg btn-block");
}
oneMinute();

// flip the coin
timeButton("#section7", "Flip The Coin", "btn btn-success btn-lg btn-fix-width btn-block");

// Lorem Ipsum
timeButton("#section8", "Lorem Ipsum", "btn btn-info btn-lg btn-fix-width btn-block");
