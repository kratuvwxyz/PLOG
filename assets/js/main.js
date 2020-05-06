/* tooltip */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// password generator
let password = [];
password = password.join();

/* Window Width for Resizing fonts */
// window width
let wW = $(document).width(); console.log(wW);

function wWf() {
    wW = $(document).width();
    console.log(wW + "new");
    myTimer();

}
// window on resize
window.onresize = wWf; console.log(wW);

/* click and copy function */
clickCopy = (event) => {
    let el = $('<textarea></textarea>');
    let elId = "#" + event.target.id;
    let text = $(elId).text();
    $(el).val(text);
    $("#app").append(el);
    $(el).select();
    document.execCommand('copy');
    $(el).remove();
}

/* set interval for everysecond */
setInterval(myTimer, 1000);
function myTimer() {
    // current time
    let time = moment();

    // adding Year Month Date Hour Minute in one code
    let code = `${time.format('YY')}${time.format('MM')}${time.format('DD')}${time.format('HH')}${time.format('mm')}`

    // adding value in section one
    $("#section1").text(code).addClass('btn-sect-1').css('font-size', (wW / 1.0625) + "%")/* .hover(function(){$(this).css('font-size', (wW/1.0625) + "%")},function(){$(this).css('font-size', (wW/1.075) + "%")}).active(function(){$(this).css('font-size', (wW/1.0725) + "%")}) */.click(function () { $(this).css('font-size', (wW / 1.0725) + "%") }).click((event) => { clickCopy(event); });

    // adding Year Quarter Week log code2
    let code2 = `${time.format('YY')}0${time.format('Q')}${time.format('ww')}`;

    // adding value in section two
    $("#section2").text(code2).addClass('btn btn-info btn-lg btn-fix-width').click((event) => { clickCopy(event); });

    // adding Year Quarter Week log code2
    let code3 = `${time.format('YY')}0${time.format('Q')}${time.format('ww')}0${time.format('E')}${time.format('HH')}${time.format('mm')}`;

    // adding value in section three
    $("#section3").text(code3).addClass('btn btn-warning btn-lg btn-fix-width').click((event) => { clickCopy(event); });

    // if you don't want to use moment.js then use this one (vanila javascript)
    // let d = new Date();
    // let dd = `${d.getFullYear().toString()[2]}${d.getFullYear().toString()[3]}${!d.getMonth().toString()[1] ? 0 + "" + (d.getMonth() + 1) : (d.getMonth() + 1)}${!d.getDate().toString()[1] ? 0 + "" + d.getDate() : d.getDate()}${!d.getHours().toString()[1] ? 0 + "" + d.getHours() : d.getHours()}${!d.getMinutes().toString()[1] ? 0 + "" + d.getMinutes() : d.getMinutes()}${!d.getSeconds().toString()[1] ? 0 + "" + d.getSeconds() : d.getSeconds()}`;
    let code4 = `${time.format('YY')}0${time.format('Q')}${time.format('ww')}0${time.format('E')}${time.format('HH')}${time.format('mm')}${time.format('ss')}`;

    // adding value in section four
    $("#section4").text(code4).addClass('btn btn-light btn-lg btn-fix-width btn-block').click((event) => { clickCopy(event); });

    // adding time from 1970 till now in microsecond
    let code5 = Date.now();
    // adding value in section five
    $("#section5").text(code5).addClass('btn btn-danger btn-lg btn-fix-width btn-block').click((event) => { clickCopy(event); });

    // password
    $("#section6").text(password.join("")).addClass('btn btn-dark btn-lg btn-block').click((event) => { clickCopy(event); });
    
    // flip coin
    $("#section7").text('Flip the Coin').addClass('btn btn-success btn-lg btn-fix-width btn-block');
}



// set interval for every minute
setInterval(oneMinute, 60000);
function oneMinute() {
    // password generator
    password = [];
    let a = "$#@abcdefghkmnpqrstuvwxyz23456789";
    let b = a.toUpperCase();
    let c = a.concat(b).split("");
    for(let i = 0; i < 20; i++){
        let d = Math.floor(Math.random()*c.length);
        password.push(c[d]);
    }
    
}
oneMinute();

function flipCoin() {
    let a = confirm('Select your side: Is it HEAD?');
    if(a){
        alert('Good choice, you select HEAD');
    } else {
        alert('Good choice, you select TAIL');
    }
    let b = prompt('How many times do you want to flip your coin? Remember, it has to be in odd number');
    if(b%2 === 0){
        b++;
    } 
    let d = ['HEAD', 'TAIL'];
    let e = [];
    let f = {};
    for(let i = 0; i < b; i++) {
        let c = Math.floor(Math.random()*2);
        console.log(c);
        e.push(d[c]);
    }
    function result() {
        alert(e);
        e.forEach(function(x) { f[x] = (f[x] || 0) + 1; });
        alert(f);
    }
    result();
}
