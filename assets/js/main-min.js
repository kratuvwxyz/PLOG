$(document).ready(() => {}),
  (clickCopy = (e) => {
    let t = $("<textarea></textarea>"),
      o = "#" + e.target.id,
      a = "#section8" === o ? lorIpsText() : $(o).text();
    $(t).val(a), $("#app").append(t), $(t).select(), document.execCommand("copy"), $(t).remove();
  });
const camelize = (e) => e.replace(/(?:^\w|[A-Z]|\b\w)/g, (e, t) => (0 === t ? e.toLowerCase() : e.toUpperCase())).replace(/\s+/g, ""),
  randombetween = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
  randomArrayShuffle = (e) => {
    for (var t, o, a = e.length; 0 !== a; ) (o = Math.floor(Math.random() * a)), (t = e[(a -= 1)]), (e[a] = e[o]), (e[o] = t);
    return e;
  };
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
let audio = document.getElementById("audio");
const timeButton = (e, t, o, a, n, i) => {
    $(e)
      .text(t)
      .addClass(o)
      .css(n, i)
      .click((e) => {
        !0 === a && (clickCopy(e), audio.play());
      });
  },
  inputs = document.querySelectorAll("input");
inputs.forEach((e) => {
  e.setAttribute("autocomplete", "off"), e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !1);
}),
  $(window).resize(() => {
    $("#showQR").empty().addClass("invisible d-none");
  });
const selectText = (e) => {
  if (document.body.createTextRange) (t = document.body.createTextRange()).moveToElementText(e), t.select();
  else if (window.getSelection) {
    var t,
      o = window.getSelection();
    (t = document.createRange()).selectNodeContents(e), o.removeAllRanges(), o.addRange(t);
  }
};
$(".copyable").click((e) => {
  $(this).attr("contenteditable", !0), selectText($(this).get(0)), document.execCommand("copy"), window.getSelection().removeAllRanges(), $(this).removeAttr("contenteditable"), audio.play();
});
const makeTextFile = (e) => {
    let t = null,
      o = new Blob([e], { type: "text/plain" });
    return (t = window.URL.createObjectURL(o)), t;
  },
  download = (e) => {
    const t = document.createElement("a");
    (t.href = e), (t.download = Date.now()), document.body.appendChild(t), t.click(), document.body.removeChild(t);
  },
  locationReload = () => {
    location.reload();
  };
let password;
const createPassword = () => {
    password = [];
    let e = "$#@abcdefghkmnpqrstuvwxyz23456789&%?",
      t = e.toUpperCase(),
      o = e.concat(t).split("");
    for (let e = 0; e < 20; e++) {
      let e = Math.floor(Math.random() * o.length);
      password.push(o[e]);
    }
    return password.join("");
  },
  thousandNoun = "ability absence abuse access accident accommodation account acid act action activity addition address administration adult advance advantage advice afternoon age agency agent agreement agriculture aid aim air aircraft alan alternative amount analysis animal answer appeal appearance application appointment approach approval area argument arm army arrival art article artist aspect assembly assessment assistance association atmosphere attack attempt attention attitude audience author authority autumn average award awareness baby back background bag balance ball band bank bar base basis bath battle beach beauty bed bedroom behalf behaviour belief benefit bill bird birth bishop block blood board boat bob body book border bottle bottom box boy brain branch bread break breakfast breath bridge brother brown budget bus bush business cabinet call campaign cancer candidate capacity capital captain car card care career cash castle cat cause cell centre century chain chair chairman challenge championship chance chancellor change channel chapter character charge charity chest chief child china choice christ church city claim clause client club coal coast code coffee collection college colour combination command commission commitment committee communication community company comparison competition computer concentration concept concern conclusion condition conference confidence conflict congress connection consequence consideration constitution construction consumer contact content context contract contrast contribution control convention conversation copy core corner corporation cost council country countryside county couple course court cover creation credit crime crisis criticism cross crowd crown culture cup currency curriculum customer dad damage danger date daughter day deal death debate debt decade decision decline defence definition degree delivery demand democracy department deputy description design desire desk detail development diet difference difficulty dinner direction director discipline discussion disease display distance distinction distribution district division doctor document dog door doubt drama dream dress drink drive driver drug duty earth east economy edge editor education effect efficiency effort election electricity element emergency emphasis empire employment end energy engine english enterprise entry environment equipment error establishment estate evidence examination example exchange executive exercise exhibition existence expansion expenditure experience expert explanation expression extension extent eye face fact factor factory failure faith fall family farm fashion father favour fear feature field figure file film finance fire firm fish flat flight floor flow focus food foot football force forest form formation foundation framework frank freedom friend front fruit fuel fun fund furniture future gallery game gap garden gas gate general generation gentleman girl glass goal god gold golf government graham grant grass green group growth guide gun guy hair half hall hand head health heart heat height hell help henry hill history hole holiday home hope horse hospital hotel hour house household husband ice idea identity image impact importance impression improvement incident income increase independence index individual industry inflation influence information initiative injury inquiry instance institute institution insurance intelligence intention interest interpretation interview introduction investigation investment involvement iron island issue item jack jane japan job joe john jones journey judge justice key kind king kingdom kitchen knowledge labour lack lady lake land lane language law lead leader leadership league lee leg legislation length letter level lewis liability library licence life lifespan light limit line link list literature loan location look lord loss lot love lunch machine magazine maintenance major majority man management manager manchester manner map march mark market marriage martin mary mass master match material may meal measure meat member membership memory message metal method middle mike milk mill mind minister ministry minority minute mirror miss mistake model moment money month morning mother motion motor mountain mouth move movement mum murder museum music name nation nature neck need network news newspaper night noise north northern nose note notice notion object occasion offence offer office officer oil operation opinion opportunity opposition option order organisation organization other outcome output owner oxford page pain pair palace panel paper parent parish park parliament part partner partnership party passage past path patient pattern paul pay payment peace pension performance period person peter phase philosophy phone picture piece place plan plane plant plastic plate play player pleasure point police policy pollution pool population port position possibility post potential pound power practice presence present president press pressure price prince principle priority prison problem procedure process product production professor profit program programme progress project property proportion proposal protection provision pub public publication purpose quality quarter queen question race radio rail railway rain range rate reaction reader reality reason recession recognition record recovery reduction ref reference reform regime region relation relationship release relief religion report representation republic reputation request research resistance resolution respect response responsibility rest restaurant result retirement revenue review revolution right ring rise risk river road rock role roof room round route row rugby rule run safety sale sample scale scene scheme school science scope screen sea search season seat second secretary section sector security selection self sense sentence sequence series service session set settlement sex shape share sheet ship shock shop shoulder show side sight sign significance silence silver simon sir sister site situation size skill skin sky sleep smile smith snow society software soil solution son song sort sound source south space speaker specialist species speech speed spirit spokesman sport spot spring square st staff stage standard star start state statement station status steel step stock stone store strategy street strength stress strike structure struggle student study stuff style subject success sugar sum summer sun supply support surface surprise survey system table talk tape target task tax taylor tea teacher team technique technology telephone television temperature term test text thatcher theatre theme theory thing threat time title tom tone tony top total touch tour town track trade tradition traffic train transfer transport travel treatment treaty tree trial trip trouble trust truth turn tv type un uncle unemployment union unit university us use user valley value van variety vehicle version victim victory video view village violence vision visit voice volume vote walk wall war waste water way wealth weather week weekend weight welfare west white whole wife will wind window wine winter woman wood word work worker world writer year youth";
let words = thousandNoun;
const a3 = words
    .replace(/(\b(\w{1,2})\b(\s|$))/g, "")
    .replace(/(\b(\w{4,20})\b(\s|$))/g, "")
    .split(" "),
  a4 = words
    .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
    .replace(/(\b(\w{5,20})\b(\s|$))/g, "")
    .split(" "),
  a5 = words
    .replace(/(\b(\w{1,4})\b(\s|$))/g, "")
    .replace(/(\b(\w{6,20})\b(\s|$))/g, "")
    .split(" "),
  a6 = words
    .replace(/(\b(\w{1,5})\b(\s|$))/g, "")
    .replace(/(\b(\w{7,20})\b(\s|$))/g, "")
    .split(" "),
  a7 = words
    .replace(/(\b(\w{1,6})\b(\s|$))/g, "")
    .replace(/(\b(\w{8,20})\b(\s|$))/g, "")
    .split(" "),
  a8 = words
    .replace(/(\b(\w{1,7})\b(\s|$))/g, "")
    .replace(/(\b(\w{9,20})\b(\s|$))/g, "")
    .split(" "),
  a9 = words
    .replace(/(\b(\w{1,8})\b(\s|$))/g, "")
    .replace(/(\b(\w{10,20})\b(\s|$))/g, "")
    .split(" ");
let drowCheck, drow;
const fourArray = (e, t, o, a, n, i, s, r) => {
    let l = randombetween(e, t),
      c = randombetween(o, a),
      u = randombetween(n, i),
      m = l + c + u;
    return randomArrayShuffle([l, c, u, r - m > s ? s : r - m]);
  },
  createRandomWord = () => {
    let e = fourArray(3, 5, 4, 6, 5, 7, 9, 20),
      t = [];
    for (let o = 0; o < e.length; o++) {
      let a = 3 === e[o] ? a3[Math.floor(Math.random() * a3.length)] : 4 === e[o] ? a4[Math.floor(Math.random() * a4.length)] : 5 === e[o] ? a5[Math.floor(Math.random() * a5.length)] : 6 === e[o] ? a6[Math.floor(Math.random() * a6.length)] : 7 === e[o] ? a7[Math.floor(Math.random() * a7.length)] : 8 === e[o] ? a8[Math.floor(Math.random() * a8.length)] : a9[Math.floor(Math.random() * a9.length)];
      t.push(a);
    }
    return camelize(t.join(" "));
  };
let lorIps = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound on the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", "In a free hour, when our power of choice is untrammeled and when nothing prevents our ability to do what we like best, every pleasure is welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures must be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."],
  lorIpsText = () => lorIps[Math.floor(Math.random() * lorIps.length)];
const flipCoin = () => {
  let e = ["HEAD", "TAIL"];
  alert("First, select your side. \n\nClick OK to next.");
  let t,
    o = "";
  confirm("Is it HEAD? \n\nClick OK to confirm. CANCLE to select TAIL.") ? (alert("Good choice, you select HEAD. \n\nClick OK to next."), (o = "HEAD")) : (alert("Good choice, you select TAIL. \n\nClick OK to next."), (o = "TAIL"));
  do {
    t = parseInt(prompt("How many times do you want to flip your coin? \n\nRemember: Flip number has to be an odd number to get the conclusive result.", 1));
  } while (isNaN(t) || t % 2 == 0);
  alert("You choose to flip " + t + " times and we did it for you... \n\nClick OK to next.");
  let a = [];
  for (let o = 0; o < t; o++) {
    let t = Math.floor(2 * Math.random());
    a.push(e[t]);
  }
  (g = {}),
    a.forEach((e) => {
      g[e] = (g[e] || 0) + 1;
    });
  let n,
    i,
    s = g.HEAD,
    r = g.TAIL;
  void 0 === r ? ((r = 0), (n = "HEAD")) : void 0 === s ? ((s = 0), (n = "TAIL")) : (n = s > r ? "HEAD" : "TAIL"), (i = o === n ? "You win." : "You loose."), alert("You got " + s + " times HEAD and " + r + " times TAIL. \n\nAfter all winner is " + n + ". " + i + "\n\nCheck your result:\n\n" + a.join(", "));
};
let rpsResetTimeout,
  rps = ["ROCK", "PAPER", "SCISSORS"];
const result = (e, t) => {
    ("ROCK" === e && "PAPER" === t) || ("PAPER" === e && "SCISSORS" === t) || ("SCISSORS" === e && "ROCK" === t) ? createLayout(e, t, !0, !1) : createLayout(e, t, !1, !0);
  },
  match = (e, t) => {
    $(".sec10").removeClass("btn-primary"), (rpsResetTimeout = setTimeout(createLayout, 3e3)), e != t ? result(e, t) : createLayout(e, t, !0, !0);
  },
  startRPS = (e) => {
    $(".sec10").removeClass("btn-info btn-danger btn-success").addClass("btn-primary");
    let t = rps[Math.floor(Math.random() * rps.length)];
    match(e.toUpperCase(), t);
  },
  getrpsvalue = (e) => {
    clearTimeout(rpsResetTimeout), startRPS(e.value);
  },
  createLayout = (e, t, o, a) => {
    $("#section10").empty();
    for (let n = 0; n < rps.length; n++) {
      let i = $("<button>");
      $(i).addClass("btn btn-lg sec10").text(rps[n]).attr("value", rps[n]).attr("onclick", "getrpsvalue(this)"), e === rps[n] && t === rps[n] && !0 === o && !0 === a ? $(i).css("font-weight", "bold").css("color", "white").css("background-color", "blue") : e === rps[n] && !0 === a ? $(i).css("font-weight", "bold").css("color", "white").css("background-color", "green") : e === rps[n] && !1 === a ? $(i).css("font-weight", "light").css("color", "black").css("text-decoration", "line-through").css("background-color", "red") : t === rps[n] && !0 === o ? $(i).css("font-weight", "bold").css("color", "white").css("background-color", "green") : t === rps[n] && !1 === o ? $(i).css("font-weight", "light").css("color", "black").css("text-decoration", "line-through").css("background-color", "red") : $(i).css("font-weight", "light").css("color", "#8700ff").css("background-color", "var(--cyan)"), $("#section10").append(i);
    }
  };
createLayout();
const generateQR = () => {
  $("#qrInput").removeClass("invisible d-none");
};
$(".inputQR").keyup(() => {
  $("#showQR").empty().addClass("invisible d-none"), $(".inputQR").val().length > 0 ? $("#section11").text("Generate Code").removeClass("btn-danger btn-info").addClass("btn-success qrClass") : $("#section11").text("QR-CODE Generator").removeClass("btn-success btn-info qrClass").addClass("btn-danger");
}),
  $(document).on("click", ".qrClass", () => {
    $("#showQR").empty();
    let e = $(".inputQR").val().replace("'", "&#39;").replace("#", ""),
      t = Math.floor($(".qrClass").width()) < 547 ? Math.floor($(".qrClass").width()) : 547;
    $("#section11").text("QR-CODE Generated").removeClass("btn-success btn-danger").addClass("btn-info"),
      $("#showQR")
        .removeClass("invisible d-none")
        .append("<img src='http://chart.apis.google.com/chart?cht=qr&chl=" + e + "&chs=" + t + "&chd=t:90,1000,2700,3500|3968,-1,1100,2' alt='qr' class='p-3' />");
  });
const downloadTxt = () => {
  $("#txtInput").removeClass("invisible d-none");
};
$(".inputTxt").keyup(() => {
  $(".inputTxt").val().length > 0 ? $("#section12").text("Download TXT File").removeClass("btn-primary").addClass("btn-success txtClass") : $("#section12").text("TXT File Generator").removeClass("btn-success txtClass").addClass("btn-primary");
}),
  $(document).on("click", ".txtClass", () => {
    let e = $(".inputTxt").val();
    download(makeTextFile(e));
  }),
  timeButton("#section13", "Memory Game", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#rollADice", "Roll A Dice", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#colorPicker", "Color Picker", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#meditate", "Meditate", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#calculator", "Calculator", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#metronome", "Metronome", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#tic_tac_toe", "Tic Tac Toe", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#alphabate", "Alphabate", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#bingo", "Bingo", "btn btn-secondary btn-lg btn-fix-width btn-block"),
  timeButton("#weather", "Weather", "btn btn-secondary btn-lg btn-fix-width btn-block");
let stamps = [];
const onResetStamp = (e) => {
    (stamps = ["yt", "mt", "dt", "ht", "it"]), localStorage.setItem("stamps", JSON.stringify(stamps)), onClickTimeStamp(e);
  },
  stringTimeStamp = (e) => {
    (stamps = JSON.parse(localStorage.stamps).filter((e) => null != e)), $(".plt").addClass("disabled").removeClass("active"), stamps.includes(e) ? stamps.splice(stamps.indexOf(e), 1) : stamps.push(e), stamps.includes("lt") ? ((str = Date.now()), (stamps = ["lt"])) : (str = `${stamps.includes("yt") ? moment().format("YY") : ""}${stamps.includes("qt") ? moment().format("Q") : ""}${stamps.includes("mt") ? moment().format("MM") : ""}${stamps.includes("wt") ? moment().format("WW") : ""}${stamps.includes("at") ? moment().day() + 1 : ""}${stamps.includes("dt") ? moment().format("DD") : ""}${stamps.includes("ht") ? moment().format("HH") : ""}${stamps.includes("it") ? moment().format("mm") : ""}${stamps.includes("st") ? moment().format("ss") : ""}`);
    for (let e in stamps) "resetTimeDate" != stamps[e] && $(`#${stamps[e]}`).addClass("active").removeClass("disabled");
    return localStorage.setItem("stamps", JSON.stringify(stamps)), str;
  },
  onClickTimeStamp = (e) => {
    timeButton("#section1", stringTimeStamp(e.value), "btn-sect-1", !0, "font-size", "9vw");
  };
onResetStamp("");
const oneMinute = () => {
  timeButton("#section6", createPassword(), "btn btn-warning btn-lg btn-block", !0);
  do {
    drow = createRandomWord();
  } while (drow.length <= 19 || drow.length >= 21);
  timeButton("#section9", drow, "btn btn-warning btn-lg btn-block", !0);
};
oneMinute();
const myPlogTimer = () => {
  (localStorage.stamps.includes("st") || localStorage.stamps.includes("lt")) && timeButton("#section1", stringTimeStamp(), "btn-sect-1", !0, "font-size", "9vw"), 0 === moment().second() && ((localStorage.stamps.includes("st") && localStorage.stamps.includes("lt")) || timeButton("#section1", stringTimeStamp(), "btn-sect-1", !0, "font-size", "9vw"), oneMinute());
};
setInterval(myPlogTimer, 1e3), timeButton("#section7", "Flip The Coin", "btn btn-success btn-lg btn-fix-width btn-block"), timeButton("#section8", "Lorem Ipsum", "btn btn-info btn-lg btn-fix-width btn-block", !0), timeButton("#section11", "QR-CODE Generator", "btn btn-danger btn-lg btn-fix-width btn-block"), timeButton("#section12", "TXT File Generator", "btn btn-primary btn-lg btn-fix-width btn-block"), timeButton("#section14", "PLOG", "btn btn-secondary btn-lg btn-fix-width btn-block");
let xx = [];
localStorage.setItem("proTask", JSON.stringify(xx));
const recordPlog = () => {
  const e = () => prompt("How long do you want to focus on your task? \n\n (Make it 2 minutes or more! Type only numbers)", 9);
  let t = parseInt(60 * e() * 1e3);
  const o = setInterval(() => {
      (document.getElementById("section14").innerHTML = t), 0 === t ? (audio.play(), a()) : (t -= 1e3);
    }, 1e3),
    a = () => {
      clearInterval(o);
      const e = prompt("What is the task for?");
      new Date();
      xx = JSON.parse(localStorage.getItem("proTask"));
      let a = {};
      (a.id = xx.length + 1), (a.created_at = new Date()), (a.time_worked = t / 1e3 + " minutes"), (a.text = e), (a.due = null), xx.push(a), localStorage.setItem("proTask", JSON.stringify(xx));
    };
};
