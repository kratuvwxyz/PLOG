$(document).ready((()=>{})),clickCopy=e=>{let t=$("<textarea></textarea>"),o="sec82"===$(e).attr("id")?lorIpsText():"sec81"===$(e).attr("id")?$(e).attr("value"):$("#"+e.target.id).text();$(t).val(o),$("#app").append(t),$(t).select(),document.execCommand("copy"),$(t).remove(),audio.play()};const camelize=e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g,((e,t)=>0===t?e.toLowerCase():e.toUpperCase())).replace(/\s+/g,""),randombetween=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),randomArrayShuffle=e=>{for(var t,o,n=e.length;0!==n;)o=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[o],e[o]=t;return e};$((()=>{$('[data-toggle="tooltip"]').tooltip()}));let audio=document.getElementById("audio");const timeButton=(e,t,o,n,a,s)=>{$(e).text(t).addClass(o).css(a,s).click((e=>{n&&clickCopy(e)}))},inputs=document.querySelectorAll("input");inputs.forEach((e=>{e.setAttribute("autocomplete","off"),e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck",!1)})),$(window).resize((()=>{$("#showQR").empty().addClass("invisible d-none")}));const selectText=e=>{if(document.body.createTextRange)(t=document.body.createTextRange()).moveToElementText(e),t.select();else if(window.getSelection){var t,o=window.getSelection();(t=document.createRange()).selectNodeContents(e),o.removeAllRanges(),o.addRange(t)}};$(".copyable").click((e=>{$(this).attr("contenteditable",!0),selectText($(this).get(0)),document.execCommand("copy"),window.getSelection().removeAllRanges(),$(this).removeAttr("contenteditable"),audio.play()}));const makeTextFile=e=>{let t=null,o=new Blob([e],{type:"text/plain"});return t=window.URL.createObjectURL(o),t},download=e=>{const t=document.createElement("a");t.href=e,t.download=Date.now(),document.body.appendChild(t),t.click(),document.body.removeChild(t)},locationReload=()=>{location.reload()},showHidePopUp=(e,t,o,n,a,s,i)=>{$(e).on("click",(()=>{$("#bottomPopup").slideDown(),$("#messagePopUp").html(`<p>Explore <a href=${t} target="_blank">${o}</a> for enhanced engagement and a richer interactive experience.</p><br/>`)})),$("#closeButton").on("click",(function(){$("#bottomPopup").slideUp()}))};let password;const createPassword=()=>{password=[];let e="$#@abcdefghkmnpqrstuvwxyz23456789&%?",t=e.toUpperCase(),o=e.concat(t).split("");for(let e=0;e<20;e++){let e=Math.floor(Math.random()*o.length);password.push(o[e])}return password.join("")},thousandNoun="ability absence abuse access accident accommodation account acid act action activity addition address administration adult advance advantage advice afternoon age agency agent agreement agriculture aid aim air aircraft alan alternative amount analysis animal answer appeal appearance application appointment approach approval area argument arm army arrival art article artist aspect assembly assessment assistance association atmosphere attack attempt attention attitude audience author authority autumn average award awareness baby back background bag balance ball band bank bar base basis bath battle beach beauty bed bedroom behalf behaviour belief benefit bill bird birth bishop block blood board boat bob body book border bottle bottom box boy brain branch bread break breakfast breath bridge brother brown budget bus bush business cabinet call campaign cancer candidate capacity capital captain car card care career cash castle cat cause cell centre century chain chair chairman challenge championship chance chancellor change channel chapter character charge charity chest chief child china choice christ church city claim clause client club coal coast code coffee collection college colour combination command commission commitment committee communication community company comparison competition computer concentration concept concern conclusion condition conference confidence conflict congress connection consequence consideration constitution construction consumer contact content context contract contrast contribution control convention conversation copy core corner corporation cost council country countryside county couple course court cover creation credit crime crisis criticism cross crowd crown culture cup currency curriculum customer dad damage danger date daughter day deal death debate debt decade decision decline defence definition degree delivery demand democracy department deputy description design desire desk detail development diet difference difficulty dinner direction director discipline discussion disease display distance distinction distribution district division doctor document dog door doubt drama dream dress drink drive driver drug duty earth east economy edge editor education effect efficiency effort election electricity element emergency emphasis empire employment end energy engine english enterprise entry environment equipment error establishment estate evidence examination example exchange executive exercise exhibition existence expansion expenditure experience expert explanation expression extension extent eye face fact factor factory failure faith fall family farm fashion father favour fear feature field figure file film finance fire firm fish flat flight floor flow focus food foot football force forest form formation foundation framework frank freedom friend front fruit fuel fun fund furniture future gallery game gap garden gas gate general generation gentleman girl glass goal god gold golf government graham grant grass green group growth guide gun guy hair half hall hand head health heart heat height hell help henry hill history hole holiday home hope horse hospital hotel hour house household husband ice idea identity image impact importance impression improvement incident income increase independence index individual industry inflation influence information initiative injury inquiry instance institute institution insurance intelligence intention interest interpretation interview introduction investigation investment involvement iron island issue item jack jane japan job joe john jones journey judge justice key kind king kingdom kitchen knowledge labour lack lady lake land lane language law lead leader leadership league lee leg legislation length letter level lewis liability library licence life lifespan light limit line link list literature loan location look lord loss lot love lunch machine magazine maintenance major majority man management manager manchester manner map march mark market marriage martin mary mass master match material may meal measure meat member membership memory message metal method middle mike milk mill mind minister ministry minority minute mirror miss mistake model moment money month morning mother motion motor mountain mouth move movement mum murder museum music name nation nature neck need network news newspaper night noise north northern nose note notice notion object occasion offence offer office officer oil operation opinion opportunity opposition option order organisation organization other outcome output owner oxford page pain pair palace panel paper parent parish park parliament part partner partnership party passage past path patient pattern paul pay payment peace pension performance period person peter phase philosophy phone picture piece place plan plane plant plastic plate play player pleasure point police policy pollution pool population port position possibility post potential pound power practice presence present president press pressure price prince principle priority prison problem procedure process product production professor profit program programme progress project property proportion proposal protection provision pub public publication purpose quality quarter queen question race radio rail railway rain range rate reaction reader reality reason recession recognition record recovery reduction ref reference reform regime region relation relationship release relief religion report representation republic reputation request research resistance resolution respect response responsibility rest restaurant result retirement revenue review revolution right ring rise risk river road rock role roof room round route row rugby rule run safety sale sample scale scene scheme school science scope screen sea search season seat second secretary section sector security selection self sense sentence sequence series service session set settlement sex shape share sheet ship shock shop shoulder show side sight sign significance silence silver simon sir sister site situation size skill skin sky sleep smile smith snow society software soil solution son song sort sound source south space speaker specialist species speech speed spirit spokesman sport spot spring square st staff stage standard star start state statement station status steel step stock stone store strategy street strength stress strike structure struggle student study stuff style subject success sugar sum summer sun supply support surface surprise survey system table talk tape target task tax taylor tea teacher team technique technology telephone television temperature term test text thatcher theatre theme theory thing threat time title tom tone tony top total touch tour town track trade tradition traffic train transfer transport travel treatment treaty tree trial trip trouble trust truth turn tv type un uncle unemployment union unit university us use user valley value van variety vehicle version victim victory video view village violence vision visit voice volume vote walk wall war waste water way wealth weather week weekend weight welfare west white whole wife will wind window wine winter woman wood word work worker world writer year youth";let words=thousandNoun;const a3=words.replace(/(\b(\w{1,2})\b(\s|$))/g,"").replace(/(\b(\w{4,20})\b(\s|$))/g,"").split(" "),a4=words.replace(/(\b(\w{1,3})\b(\s|$))/g,"").replace(/(\b(\w{5,20})\b(\s|$))/g,"").split(" "),a5=words.replace(/(\b(\w{1,4})\b(\s|$))/g,"").replace(/(\b(\w{6,20})\b(\s|$))/g,"").split(" "),a6=words.replace(/(\b(\w{1,5})\b(\s|$))/g,"").replace(/(\b(\w{7,20})\b(\s|$))/g,"").split(" "),a7=words.replace(/(\b(\w{1,6})\b(\s|$))/g,"").replace(/(\b(\w{8,20})\b(\s|$))/g,"").split(" "),a8=words.replace(/(\b(\w{1,7})\b(\s|$))/g,"").replace(/(\b(\w{9,20})\b(\s|$))/g,"").split(" "),a9=words.replace(/(\b(\w{1,8})\b(\s|$))/g,"").replace(/(\b(\w{10,20})\b(\s|$))/g,"").split(" ");let drowCheck,drow;const fourArray=(e,t,o,n,a,s,i,r)=>{let l=randombetween(e,t),c=randombetween(o,n),d=randombetween(a,s),m=l+c+d;return randomArrayShuffle([l,c,d,r-m>i?i:r-m])},createRandomWord=()=>{let e=fourArray(3,5,4,6,5,7,9,20),t=[];for(let o=0;o<e.length;o++){let n=3===e[o]?a3[Math.floor(Math.random()*a3.length)]:4===e[o]?a4[Math.floor(Math.random()*a4.length)]:5===e[o]?a5[Math.floor(Math.random()*a5.length)]:6===e[o]?a6[Math.floor(Math.random()*a6.length)]:7===e[o]?a7[Math.floor(Math.random()*a7.length)]:8===e[o]?a8[Math.floor(Math.random()*a8.length)]:a9[Math.floor(Math.random()*a9.length)];t.push(n)}return camelize(t.join(" "))},loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",loremIpsumBtn1=$("<button>");$(loremIpsumBtn1).addClass("btn btn-info btn-lg sec81").text("Lorem Ipsum").attr("id","sec81").attr("value",loremIpsum).attr("onclick","clickCopy(this)"),$("#section8").append(loremIpsumBtn1);const lorIps=["Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible. Honey's unique chemical composition makes it an eternal natural sweetener, preserving it for centuries.","The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted between 38 and 45 minutes. The conflict ended with a decisive British victory, and the sultan's palace was heavily bombarded, leading to a swift conclusion and minimal casualties.","A day on Venus is longer than a year on Venus. It takes about 243 Earth days for Venus to rotate once on its axis but only 225 Earth days to complete one orbit around the sun, creating this fascinating time anomaly that boggles the mind of astronomers and space enthusiasts.","Bananas are berries, but strawberries aren't! Botanically speaking, bananas meet the criteria of a berry, while strawberries do not. A true berry has seeds and pulp that develop from a single ovary, unlike strawberries which develop from a flower with multiple ovaries.","Octopuses have three hearts and blue blood. Two hearts pump blood to the gills, while the third pumps it to the rest of the body. Their blood is blue because it contains a copper-based molecule called hemocyanin, which is more efficient at transporting oxygen in cold water.","The world's largest desert is not the Sahara but Antarctica! While most think of deserts as hot, sandy places, a desert is technically any area that receives very little precipitation. Antarctica fits this definition perfectly with its vast, icy expanses and arid conditions.","There are more possible iterations of a game of chess than there are atoms in the known universe. The number of unique games is estimated to be 10^120, a number so vast it's practically incomprehensible, showcasing the immense complexity and strategic depth of the game.","Cows have best friends and can become stressed when separated. Studies have shown that cows form strong social bonds and have unique personalities. Their friendships can significantly impact their well-being and productivity, highlighting the importance of social connections in animals.","The Eiffel Tower can be 15 cm taller during the summer. When a substance is heated up, its particles move more and it takes up a larger volume. This is known as thermal expansion, which causes the iron structure to grow, showcasing the effects of temperature on materials.","The smell of freshly cut grass is a plant distress call. When you mow your lawn, the grass releases green leaf volatiles (GLVs) as a way of signaling injury. This 'scent' is actually a mix of compounds the plant produces to heal itself and fend off herbivores and pathogens."],lorIpsText=()=>lorIps[Math.floor(Math.random()*lorIps.length)],loremIpsumBtn2=$("<button>");$(loremIpsumBtn2).addClass("btn btn-success btn-lg sec81").text("Mixed Text").attr("id","sec82").attr("onclick","clickCopy(this)"),$("#section8").append(loremIpsumBtn2);const flipCoin=()=>{let e=["HEAD","TAIL"];alert("First, select your side. \n\nClick OK to next.");let t,o="";confirm("Is it HEAD? \n\nClick OK to confirm. CANCLE to select TAIL.")?(alert("Good choice, you select HEAD. \n\nClick OK to next."),o="HEAD"):(alert("Good choice, you select TAIL. \n\nClick OK to next."),o="TAIL");do{t=parseInt(prompt("How many times do you want to flip your coin? \n\nRemember: Flip number has to be an odd number to get the conclusive result.",1))}while(isNaN(t)||t%2==0);alert("You choose to flip "+t+" times and we did it for you... \n\nClick OK to next.");let n=[];for(let o=0;o<t;o++){let t=Math.floor(2*Math.random());n.push(e[t])}g={},n.forEach((e=>{g[e]=(g[e]||0)+1}));let a,s,i=g.HEAD,r=g.TAIL;void 0===r?(r=0,a="HEAD"):void 0===i?(i=0,a="TAIL"):a=i>r?"HEAD":"TAIL",s=o===a?"You win.":"You loose.",alert("You got "+i+" times HEAD and "+r+" times TAIL. \n\nAfter all winner is "+a+". "+s+"\n\nCheck your result:\n\n"+n.join(", "))};let rpsResetTimeout,rps=["ROCK","PAPER","SCISSORS"],win=0,loose=0,tie=0;$("#showScore").hide();const result=(e,t)=>{"ROCK"===e&&"PAPER"===t||"PAPER"===e&&"SCISSORS"===t||"SCISSORS"===e&&"ROCK"===t?(createLayout(e,t,!0,!1),loose++):(createLayout(e,t,!1,!0),win++)},match=(e,t)=>{$(".sec10").removeClass("btn-primary"),rpsResetTimeout=setTimeout(createLayout,3e3),e!=t?result(e,t):(createLayout(e,t,!0,!0),tie++)},startRPS=e=>{$(".sec10").removeClass("btn-info btn-danger btn-success").addClass("btn-primary");let t=rps[Math.floor(Math.random()*rps.length)];match(e.toUpperCase(),t)},getrpsvalue=e=>{clearTimeout(rpsResetTimeout),startRPS(e.value),$("#showScore").show().text(`Wins:${win} Loses:${loose} Ties:${tie}`),showHidePopUp("#section10","https://kratuvwxyz.github.io/Rock-Paper-Scissors/","ROCK - PAPER - SCISSORS")},createLayout=(e,t,o,n)=>{$("#section10").empty();for(let a=0;a<rps.length;a++){let s=$("<button>");$(s).addClass("btn btn-lg sec10").text(rps[a]).attr("value",rps[a]).attr("onclick","getrpsvalue(this)"),e===rps[a]&&t===rps[a]&&!0===o&&!0===n?$(s).css("font-weight","bold").css("color","white").css("background-color","blue"):e===rps[a]&&!0===n?$(s).css("font-weight","bold").css("color","white").css("background-color","green"):e===rps[a]&&!1===n?$(s).css("font-weight","light").css("color","black").css("text-decoration","line-through").css("background-color","red"):t===rps[a]&&!0===o?$(s).css("font-weight","bold").css("color","white").css("background-color","green"):t===rps[a]&&!1===o?$(s).css("font-weight","light").css("color","black").css("text-decoration","line-through").css("background-color","red"):$(s).css("font-weight","light").css("color","#8700ff").css("background-color","var(--cyan)"),$("#section10").append(s)}};createLayout();const generateQR=()=>{$("#qrInput").removeClass("invisible d-none")};$(".inputQR").keyup((()=>{$("#showQR").empty().addClass("invisible d-none"),$(".inputQR").val().length>0?$("#section11").text("Generate Code").removeClass("btn-danger btn-info").addClass("btn-success qrClass"):$("#section11").text("QR-CODE Generator").removeClass("btn-success btn-info qrClass").addClass("btn-danger")})),$(document).on("click",".qrClass",(()=>{$("#showQR").empty();let e=$(".inputQR").val().replace("'","&#39;").replace("#",""),t=Math.floor($(".qrClass").width())<547?Math.floor($(".qrClass").width()):547;$("#section11").text("QR-CODE Generated").removeClass("btn-success btn-danger").addClass("btn-info"),$("#showQR").removeClass("invisible d-none").append("<img src='http://chart.apis.google.com/chart?cht=qr&chl="+e+"&chs="+t+"&chd=t:90,1000,2700,3500|3968,-1,1100,2' alt='qr' class='p-3' />")}));const downloadTxt=()=>{$("#txtInput").removeClass("invisible d-none")};$(".inputTxt").keyup((()=>{$(".inputTxt").val().length>0?$("#section12").text("Download TXT File").removeClass("btn-primary").addClass("btn-success txtClass"):$("#section12").text("TXT File Generator").removeClass("btn-success txtClass").addClass("btn-primary")})),$(document).on("click",".txtClass",(()=>{let e=$(".inputTxt").val();download(makeTextFile(e))})),timeButton("#section13","Memory Game","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#rollADice","Roll A Dice","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#colorPicker","Color Picker","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#meditate","Meditate","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#calculator","Calculator","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#metronome","Metronome","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#tic_tac_toe","Tic Tac Toe","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#alphabate","Alphabate","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#bingo","Bingo","btn btn-secondary btn-lg btn-fix-width btn-block"),timeButton("#weather","Weather","btn btn-secondary btn-lg btn-fix-width btn-block");let stamps=[];const onResetStamp=e=>{stamps=["yt","mt","dt","ht","it"],localStorage.setItem("stamps",JSON.stringify(stamps)),onClickTimeStamp(e)},stringTimeStamp=e=>{stamps=JSON.parse(localStorage.stamps).filter((e=>null!=e)),$(".plt").addClass("disabled").removeClass("active"),stamps.includes(e)?stamps.splice(stamps.indexOf(e),1):stamps.push(e),stamps.includes("lt")?(str=Date.now(),stamps=["lt"]):str=`${stamps.includes("yt")?moment().format("YY"):""}${stamps.includes("qt")?moment().format("Q"):""}${stamps.includes("mt")?moment().format("MM"):""}${stamps.includes("wt")?moment().format("WW"):""}${stamps.includes("at")?moment().day()+1:""}${stamps.includes("dt")?moment().format("DD"):""}${stamps.includes("ht")?moment().format("HH"):""}${stamps.includes("it")?moment().format("mm"):""}${stamps.includes("st")?moment().format("ss"):""}`;for(let e in stamps)"resetTimeDate"!=stamps[e]&&$(`#${stamps[e]}`).addClass("active").removeClass("disabled");return localStorage.setItem("stamps",JSON.stringify(stamps)),str},onClickTimeStamp=e=>{timeButton("#section1",stringTimeStamp(e.value),"btn-sect-1",!0,"font-size","9vw")};onResetStamp("");const oneMinute=()=>{timeButton("#section6",createPassword(),"btn btn-warning btn-lg btn-block",!0),showHidePopUp("#section6","https://kratuvwxyz.github.io/Password-Generator/","Password Generator");do{drow=createRandomWord()}while(drow.length<=19||drow.length>=21);timeButton("#section9",drow,"btn btn-warning btn-lg btn-block",!0),showHidePopUp("#section9","https://kratuvwxyz.github.io/Random-Words-Generator/","Random Words Generator")};oneMinute();const myPlogTimer=()=>{(localStorage.stamps.includes("st")||localStorage.stamps.includes("lt"))&&timeButton("#section1",stringTimeStamp(),"btn-sect-1",!0,"font-size","9vw"),0===moment().second()&&(localStorage.stamps.includes("st")&&localStorage.stamps.includes("lt")||timeButton("#section1",stringTimeStamp(),"btn-sect-1",!0,"font-size","9vw"),oneMinute())};setInterval(myPlogTimer,1e3),timeButton("#section7","Flip The Coin","btn btn-success btn-lg btn-fix-width btn-block"),timeButton("#section11","QR-CODE Generator","btn btn-danger btn-lg btn-fix-width btn-block"),timeButton("#section12","TXT File Generator","btn btn-primary btn-lg btn-fix-width btn-block"),timeButton("#section14","PLOG","btn btn-secondary btn-lg btn-fix-width btn-block");let xx=[];localStorage.setItem("proTask",JSON.stringify(xx));const recordPlog=()=>{const e=()=>prompt("How long do you want to focus on your task? \n\n (Make it 2 minutes or more! Type only numbers)",9);let t=parseInt(60*e()*1e3);const o=setInterval((()=>{document.getElementById("section14").innerHTML=t,0===t?(audio.play(),n()):t-=1e3}),1e3),n=()=>{clearInterval(o);const e=prompt("What is the task for?");new Date;xx=JSON.parse(localStorage.getItem("proTask"));let n={};n.id=xx.length+1,n.created_at=new Date,n.time_worked=t/1e3+" minutes",n.text=e,n.due=null,xx.push(n),localStorage.setItem("proTask",JSON.stringify(xx))}};