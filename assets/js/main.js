/* tooltip */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/* Create Random Words */
const thousandNoun =
  "ability absence abuse access accident accommodation account acid act action activity addition address administration adult advance advantage advice afternoon age agency agent agreement agriculture aid aim air aircraft alan alternative amount analysis animal answer appeal appearance application appointment approach approval area argument arm army arrival art article artist aspect assembly assessment assistance association atmosphere attack attempt attention attitude audience author authority autumn average award awareness baby back background bag balance ball band bank bar base basis bath battle beach beauty bed bedroom behalf behaviour belief benefit bill bird birth bishop block blood board boat bob body book border bottle bottom box boy brain branch bread break breakfast breath bridge brother brown budget bus bush business cabinet call campaign cancer candidate capacity capital captain car card care career cash castle cat cause cell centre century chain chair chairman challenge championship chance chancellor change channel chapter character charge charity chest chief child china choice christ church city claim clause client club coal coast code coffee collection college colour combination command commission commitment committee communication community company comparison competition computer concentration concept concern conclusion condition conference confidence conflict congress connection consequence consideration constitution construction consumer contact content context contract contrast contribution control convention conversation copy core corner corporation cost council country countryside county couple course court cover creation credit crime crisis criticism cross crowd crown culture cup currency curriculum customer dad damage danger date daughter day deal death debate debt decade decision decline defence definition degree delivery demand democracy department deputy description design desire desk detail development diet difference difficulty dinner direction director discipline discussion disease display distance distinction distribution district division doctor document dog door doubt drama dream dress drink drive driver drug duty earth east economy edge editor education effect efficiency effort election electricity element emergency emphasis empire employment end energy engine english enterprise entry environment equipment error establishment estate evidence examination example exchange executive exercise exhibition existence expansion expenditure experience expert explanation expression extension extent eye face fact factor factory failure faith fall family farm fashion father favour fear feature field figure file film finance fire firm fish flat flight floor flow focus food foot football force forest form formation foundation framework frank freedom friend front fruit fuel fun fund furniture future gallery game gap garden gas gate general generation gentleman girl glass goal god gold golf government graham grant grass green group growth guide gun guy hair half hall hand head health heart heat height hell help henry hill history hole holiday home hope horse hospital hotel hour house household husband ice idea identity image impact importance impression improvement incident income increase independence index individual industry inflation influence information initiative injury inquiry instance institute institution insurance intelligence intention interest interpretation interview introduction investigation investment involvement iron island issue item jack jane japan job joe john jones journey judge justice key kind king kingdom kitchen knowledge labour lack lady lake land lane language law lead leader leadership league lee leg legislation length letter level lewis liability library licence life lifespan light limit line link list literature loan location look lord loss lot love lunch machine magazine maintenance major majority man management manager manchester manner map march mark market marriage martin mary mass master match material may meal measure meat member membership memory message metal method middle mike milk mill mind minister ministry minority minute mirror miss mistake model moment money month morning mother motion motor mountain mouth move movement mum murder museum music name nation nature neck need network news newspaper night noise north northern nose note notice notion object occasion offence offer office officer oil operation opinion opportunity opposition option order organisation organization other outcome output owner oxford page pain pair palace panel paper parent parish park parliament part partner partnership party passage past path patient pattern paul pay payment peace pension performance period person peter phase philosophy phone picture piece place plan plane plant plastic plate play player pleasure point police policy pollution pool population port position possibility post potential pound power practice presence present president press pressure price prince principle priority prison problem procedure process product production professor profit program programme progress project property proportion proposal protection provision pub public publication purpose quality quarter queen question race radio rail railway rain range rate reaction reader reality reason recession recognition record recovery reduction ref reference reform regime region relation relationship release relief religion report representation republic reputation request research resistance resolution respect response responsibility rest restaurant result retirement revenue review revolution right ring rise risk river road rock role roof room round route row rugby rule run safety sale sample scale scene scheme school science scope screen sea search season seat second secretary section sector security selection self sense sentence sequence series service session set settlement sex shape share sheet ship shock shop shoulder show side sight sign significance silence silver simon sir sister site situation size skill skin sky sleep smile smith snow society software soil solution son song sort sound source south space speaker specialist species speech speed spirit spokesman sport spot spring square st staff stage standard star start state statement station status steel step stock stone store strategy street strength stress strike structure struggle student study stuff style subject success sugar sum summer sun supply support surface surprise survey system table talk tape target task tax taylor tea teacher team technique technology telephone television temperature term test text thatcher theatre theme theory thing threat time title tom tone tony top total touch tour town track trade tradition traffic train transfer transport travel treatment treaty tree trial trip trouble trust truth turn tv type un uncle unemployment union unit university us use user valley value van variety vehicle version victim victory video view village violence vision visit voice volume vote walk wall war waste water way wealth weather week weekend weight welfare west white whole wife will wind window wine winter woman wood word work worker world writer year youth";

// const thousandWords = "the of to and a in is it you that he was for on are with as I his they be at one have this from or had by not word but what some we can out other were all there when up use your how said an each she which do their time if will way about many then them write would like so these her long make thing see him two has look more day could go come did number sound no most people my over know water than call first who may down side been now find any new work part take get place made live where after back little only round man year came show every good me give our under name very through just form sentence great think say help low line differ turn cause much mean before move right boy old too same tell does set three want air well also play small end put home read hand port large spell add even land here must big high such follow act why ask men change went light kind off need house picture try us again animal point mother world near build self earth father head stand own page should country found answer school grow study still learn plant cover food sun four between state keep eye never last let thought city tree cross farm hard start might story saw far sea draw left late run while press close night real life few north open seem together next white children begin got walk example ease paper group always music those both mark often letter until mile river car feet care second book carry took science eat room friend began idea fish mountain stop once base hear horse cut sure watch color face wood main enough plain girl usual young ready above ever red list though feel talk bird soon body dog family direct pose leave song measure door product black short numeral class wind question happen complete ship area half rock order fire south problem piece told knew pass since top whole king space heard best hour better true during hundred five remember step early hold west ground interest reach fast verb sing listen six table travel less morning ten simple several vowel toward war lay against pattern slow center love person money serve appear road map rain rule govern pull cold notice voice unit power town fine certain fly fall lead cry dark machine note wait plan figure star box noun field rest correct able pound done beauty drive stood contain front teach week final gave green oh quick develop ocean warm free minute strong special mind behind clear tail produce fact street inch multiply nothing course stay wheel full force blue object decide surface deep moon island foot system busy test record boat common gold possible plane stead dry wonder laugh thousand ago ran check game shape equate hot miss brought heat snow tire bring yes distant fill east paint language among grand ball yet wave drop heart am present heavy dance engine position arm wide sail material size vary settle speak weight general ice matter circle pair include divide syllable felt perhaps pick sudden count square reason length represent art subject region energy hunt probable bed brother egg ride cell believe fraction forest sit race window store summer train sleep prove lone leg exercise wall catch mount wish sky board joy winter sat written wild instrument kept glass grass cow job edge sign visit past soft fun bright gas weather month million bear finish happy hope flower clothe strange gone jump baby eight village meet root buy raise solve metal whether push seven paragraph third shall held hair describe cook floor either result burn hill safe cat century consider type law bit coast copy phrase silent tall sand soil roll temperature finger industry value fight lie beat excite natural view sense ear else quite broke case middle kill son lake moment scale loud spring observe child straight consonant nation dictionary milk speed method organ pay age section dress cloud surprise quiet stone tiny climb cool design poor lot experiment bottom key iron single stick flat twenty skin smile crease hole trade melody trip office receive row mouth exact symbol die least trouble shout except wrote seed tone join suggest clean break lady yard rise bad blow oil blood touch grew cent mix team wire cost lost brown wear garden equal sent choose fell fit flow fair bank collect save control decimal gentle woman captain practice separate difficult doctor please protect noon whose locate ring character insect caught period indicate radio spoke atom human history effect electric expect crop modern element hit student corner party supply bone rail imagine provide agree thus capital chair danger fruit rich thick soldier process operate guess necessary sharp wing create neighbor wash bat rather crowd corn compare poem string bell depend meat rub tube famous dollar stream fear sight thin triangle planet hurry chief colony clock mine tie enter major fresh search send yellow gun allow print dead spot desert suit current lift rose continue block chart hat sell success company subtract event particular deal swim term opposite wife shoe shoulder spread arrange camp invent cotton born determine quart nine truck noise level chance gather shop stretch throw shine property column molecule select wrong gray repeat require broad prepare salt nose plural anger claim continent oxygen sugar death pretty skill women season solution magnet silver thank branch match suffix especially fig afraid huge sister steel discuss forward similar guide experience score apple bought led pitch coat mass card band rope slip win dream evening condition feed tool total basic smell valley nor double seat arrive master track parent shore division sheet substance favor connect post spend chord fat glad original share station dad bread charge proper bar offer segment slave duck instant market degree populate chick dear enemy reply drink occur support speech nature range steam motion path liquid log meant quotient teeth shell neck";
let words = thousandNoun;

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

// camel case string
function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
// random between
function randombetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// random array shuffle
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

function fourArray(a, b, c, d, e, f, max, total) {
  let r1 = randombetween(a, b);
  let r2 = randombetween(c, d);
  let r3 = randombetween(e, f);
  let x = r1 + r2 + r3;
  let r4 = total - x > max ? max : total - x;
  let items = [r1, r2, r3, r4];
  return randomArrayShuffle(items);
}

function createRandomWord() {
  let x = fourArray(3, 5, 4, 6, 5, 7, 9, 20);
  let y = [];
  for (let i = 0; i < x.length; i++) {
    let z =
      x[i] === 3
        ? a3[Math.floor(Math.random() * a3.length)]
        : x[i] === 4
        ? a4[Math.floor(Math.random() * a4.length)]
        : x[i] === 5
        ? a5[Math.floor(Math.random() * a5.length)]
        : x[i] === 6
        ? a6[Math.floor(Math.random() * a6.length)]
        : x[i] === 7
        ? a7[Math.floor(Math.random() * a7.length)]
        : x[i] === 8
        ? a8[Math.floor(Math.random() * a8.length)]
        : a9[Math.floor(Math.random() * a9.length)];
    y.push(z);
  }
  return camelize(y.join(" "));
}

let drow = createRandomWord();

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
      "15vw"
    ) /*wW / 1.0625 + "%" || .hover(function(){$(this).css('font-size', (wW/1.0625) + "%")},function(){$(this).css('font-size', (wW/1.075) + "%")}).active(function(){$(this).css('font-size', (wW/1.0725) + "%")}) */
    // .click(function () {
    //   $(this).css("font-size", "14vw");
    // })
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

      // audio
      let audio = document.getElementById("audio");
      audio.play();
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

  // create random words
  $("#section9")
    .text(drow)
    .addClass("btn btn-warning btn-lg btn-block")
    .click((event) => {
      clickCopy(event);

      // audio
      let audio = document.getElementById("audio");
      audio.play();
    });
}

// set interval for every minute
setInterval(oneMinute, 60000);
function oneMinute() {
  // password generator
  password = [];
  let a = "$#@abcdefghkmnpqrstuvwxyz23456789&%?";
  let b = a.toUpperCase();
  let c = a.concat(b).split("");
  for (let i = 0; i < 20; i++) {
    let d = Math.floor(Math.random() * c.length);
    password.push(c[d]);
  }
  // words change
  drow = createRandomWord();
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
        "How many times do you want to flip your coin? \n\nRemember: Flip number has to be an odd number to get the conclusive result."
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
