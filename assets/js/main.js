// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// window width
let wW = $(document).width();

// click and copy function
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

// current time
let time = moment();


// set interval for everysecond
setInterval(myTimer, 1000);
function myTimer() {
    // adding Year Month Date Hour Minute in one code
    let code = `${time.format('YY')}${time.format('MM')}${time.format('DD')}${time.format('HH')}${time.format('mm')}`

    // adding value in section one
    $("#section1").text(code).addClass('btn btn-light btn-lg btn-block').css('font-size', wW + "%").click((event) => { clickCopy(event); });

    // adding Year Quarter Week log code2
    let code2 = `${time.format('YY')}0${time.format('Q')}${time.format('ww')}`;

    // adding value in section two
    $("#section2").text(code2).addClass('btn btn-info btn-lg').click((event) => { clickCopy(event); });

    // adding Year Quarter Week log code2
    let code3 = `${time.format('YY')}0${time.format('Q')}${time.format('ww')}0${time.format('E')}${time.format('HH')}${time.format('mm')}`;

    // adding value in section two
    $("#section3").text(code3).addClass('btn btn-warning btn-lg').click((event) => { clickCopy(event); });

    // if you don't want to use moment.js then use this one (vanila javascript)
    let d = new Date();
    let dd = `${d.getFullYear().toString()[2]}${d.getFullYear().toString()[3]}${!d.getMonth().toString()[1] ? 0 + "" + (d.getMonth() + 1) : (d.getMonth() + 1)}${!d.getDate().toString()[1] ? 0 + "" + d.getDate() : d.getDate()}${!d.getHours().toString()[1] ? 0 + "" + d.getHours() : d.getHours()}${!d.getMinutes().toString()[1] ? 0 + "" + d.getMinutes() : d.getMinutes()}${!d.getSeconds().toString()[1] ? 0 + "" + d.getSeconds() : d.getSeconds()}`;

    // adding value in section one
    $("#section4").text(dd).addClass('btn btn-light btn-lg btn-block').click((event) => { clickCopy(event); });
}



