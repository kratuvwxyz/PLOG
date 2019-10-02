// current time
let time = moment();

// window width
let wW = $(document).width();

// click and copy function
clickCopy = (event) => {
    let el = $('<textarea></textarea>');
    let elId = "#"+event.target.id;
    let text = $(elId).text();
    $(el).val(text);
    $("#app").append(el);
    $(el).select();
    document.execCommand('copy');
    $(el).remove();
}

// second
let mS = moment().second();
// set interval for refreshing time at zero
let calRef = ((59 - mS)*1000);
if (calRef < 60000){
    setInterval(() => {
        location.reload();
    }, calRef);
}
console.log(mS);


// adding Year Month Date Hour Minute in one code
let code = `${time.format('YY')}${time.format('MM')}${time.format('DD')}${time.format('HH')}${time.format('mm')}`
console.log(code);
// adding Year Quarter Week log code2
let code2 = `${time.format('YY')}0${time.format('Q')}${time.format('ww')}`;
console.log(code2);

// adding value in section one
$("#section1").text(code).addClass('btn btn-light btn-lg btn-block').css('font-size', wW+"%").click((event) => {clickCopy(event);});

// adding value in section two
$("#section2").text(code2).addClass('btn btn-info btn-lg').click((event) => {clickCopy(event);});


