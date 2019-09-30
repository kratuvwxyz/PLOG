//change one digit to two digit function
aa = (num) => {
    return ( num < 10 ? '0' : '') + num;
}

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

// year
let mY = moment().year().toString().slice(2);
// month
let mM = moment().month()+1;
// week
let mW = moment().isoWeek();
// date
let mD = moment().date();
// hour
let mH = moment().hour();
// minutes
let mI = moment().minute();
// adding all in one code
let code = `${mY}${aa(mM)}${aa(mD)}${aa(mH)}${aa(mI)}`;
console.log(code);
// adding weekly log code2
let code2 = `${mY}${aa(mW)}`;
console.log(code2);

// adding value in section one
$("#section1").text(code).css('font-size', wW+"%").addClass('btn btn-light').click((event) => {clickCopy(event);});

// adding value in section two
$("#section2").text(code2).addClass('btn btn-info').click((event) => {clickCopy(event);});