// =======================================================================================================
// =======================================================================================================
// Default Functions
/*
 **1** document ready
 **2** click to copy
 **3** camel case string generator function
 **4** random number generator between minimum and maximum
 **5** random array shuffle function
 **6** window width for resizing fonts
 **7** tooltip
 **8** audio
 **9** button layout
 **10** turn off autocorrect of input
 **11** window resize // for all
 **12** copy image
 **13** make text file
 **14** download file
 **15** location reload
 **16** popup window at the bottom
 **17** before window close
 **18** math floor random using variable
 */
// =======================================================================================================
// =======================================================================================================
//##1##//
/* document ready */
/* 
If any function that needs to trigger right after webpage launch, add in this function
*/
$(document).ready(() => {});

//##2##//
/* click and copy function */
clickCopy = async (event) => {
  let text = $(event).attr("id") === "sec82" ? lorIpsText() : $(event).attr("id") === "sec81" ? $(event).attr("value") : $("#" + event.target.id).text();

  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied successfully!");

    // Play audio if defined
    if (typeof audio !== "undefined") {
      audio.play();
    }
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

//##3##//
/* camel case string generator function */
const camelize = (str) =>
  str
    .toLowerCase()
    .replace(/(?:^\w|\b\w)/g, (match, index) => (index === 0 ? match : match.toUpperCase()))
    .replace(/\s+/g, "");

//##4##//
/* random number generator between minimum number and maximum number */
const randombetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//##5##//
/* random array shuffle function */
const randomArrayShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap using destructuring
  }
  return array;
};

//##6##//
//##7##//
/* tooltip */
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

//##8##//
/* audio */
const audio = document.getElementById("audio");

//##9##//
/* button layout */
const timeButton = (id, text, classes = "", copyText = false, cssProp, cssValue) => {
  $(id)
    .text(text)
    .addClass(classes)
    .css(cssProp, cssValue)
    .click((event) => copyText && clickCopy(event));
};

//##10##//
/* input autocorrect = off */
$("input").attr({
  autocomplete: "off",
  autocorrect: "off",
  autocapitalize: "off",
  spellcheck: false,
});

//##11##//
/* window resize.. for all */
$(window).resize(() => {
  $("#showQR").empty().addClass("invisible d-none");
});

//QR CODE... ##12##
/* Cross-browser function to select content */
const selectText = (element) => {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

$(".copyable").click(function () {
  $(this).attr("contenteditable", true);

  // Select text inside the clicked element
  selectText(this);

  // Execute copy command (Only works inside an event listener)
  document.execCommand("copy");

  // Unselect the content
  window.getSelection().removeAllRanges();

  // Remove contenteditable attribute
  $(this).removeAttr("contenteditable");

  // Play audio if defined
  if (typeof audio !== "undefined") {
    audio.play();
  }
});

//##13##//
/* make text file */
/* 
http://jsfiddle.net/UselessCode/qm5AG/
*/
const makeTextFile = (text) => URL.createObjectURL(new Blob([text], { type: "text/plain" }));

//##14##//
/* download file */
/* 
https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript
*/
const download = (url) => {
  console.log(url);
  const $a = $("<a>", {
    href: url,
    download: Date.now(),
  }).appendTo("body");
  console.log(a);
  $a[0].click(); // Trigger download
  $a.remove(); // Remove the element after click
};

//##15##//
/* location reload */
const locationReload = () => {
  location.reload();
};

//##16##//
/* popup window */
const showHidePopUp = (trigger, link, linkText) => {
  $(trigger).on("click", () => {
    $("#bottomPopup").slideDown();
    $("#messagePopUp").html(`<p>Explore <a href="${link}" target="_blank">${linkText}</a> for enhanced engagement and a richer interactive experience.</p><br/>`);
  });

  // Close the pop-up when the close button is clicked
  $("#closeButton").on("click", () => $("#bottomPopup").slideUp());
};

//##17##//
/* before window close */
window.addEventListener("beforeunload", function () {
  // localStorage.clear(); // Clears all localStorage data when the window is closed or refreshed
});

//##18##//
// random number mathfloor getting value from array
const mathFloorRandom = (e) => e[Math.floor(Math.random() * e.length)];

