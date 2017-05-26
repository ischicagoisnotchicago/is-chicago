// Expand punctuation as needed.
var Punctuation = {

  COMMA : ',',
  SPACE : ' ',
  PERIOD : '.',
  QUEST : '?',
  EXC : '!'
}

// Object with report stats to be used in html.
var reportMy = {
  text : "",
  numOfWords : 0,
  numOfSents : 0,
  numOfSpaces : 0,
  aveWordsPerSent : 0
}

// Array objects listing my accomplishments.
var accomplishMy = [
    {
      dt : "Personal Website",
      dd : "This is my first Website created for Coding from Scratch using HTML5 and CSS."
    }, {
      dt : "Portfolio Examples",
      dd : "Simple exercises showing my use of HTML, CSS and Javascript."
    }
];

// Generate reports to entered text.
function reportStats() {

  // Set initial.
  var wordStarted = false;

  // Get text from element with id value.
  reportMy.text = document.getElementById("sample").value;

  // Through the entire text length, check char. Update stats as appropriately.
  for ( i = 0; i < reportMy.text.length; i++) {

    switch ( reportMy.text[i]) {

      // If PERIOD, QUESTION, EXCLAMATIONPT, update number of sentences.
      case Punctuation.PERIOD:
      case Punctuation.QUEST:
      case Punctuation.EXC:
        if ( wordStarted === true) {
          reportMy.numOfSents++;
        }
        // break;

        // If either or COMMA, update number of words,
      case Punctuation.COMMA:
        if ( wordStarted === true) {
          reportMy.numOfWords++;
          wordStarted = false;
        }
        break;

      // If COMMA, update number of spaces.
      case Punctuation.SPACE:
        reportMy.numOfSpaces++;
        if ( wordStarted === true) {
          reportMy.numOfWords++;
          wordStarted = false;
        }
        break;

      // Assumes otherwise we are char in a word.
      default: {
        if ( wordStarted === false) {
          wordStarted = true;
        }
      }
    }
  }

  // Once text length has been reached, update average words per sentence.
  reportMy.aveWordsPerSent = parseInt(reportMy.numOfWords / reportMy.numOfSents);

  // Return reportMy object.
  return reportMy;
}

// Create a portfolio report of accomplishments.
function portlist() {

  var port = document.getElementById("portfolio");
  var showt = document.getElementById("showtime");
  port.removeChild(showt);
  var div = appendElementChild("div", port, "accomplish");
  var dl = appendElementChild("dl", div);

  // Build accomplishment listing.
  if ( accomplishMy !== null) {
    var i = 0;
    do {

      var dt = appendElementChild("dt", dl);
      dt.innerHTML = accomplishMy[i].dt;
      var dd = appendElementChild("dd", dl);
      dd.innerHTML = accomplishMy[i].dd;
      appendBreakChild(2, dl);
      i++;

    } while ( i < accomplishMy.length);

  }

  return true;
}

// Create a page with the textreader exercise.
function textreader() {

  // Replace "reserved" report with feature exercise.
  var port = document.getElementById("portfolio");
  var reserved = document.getElementById("reserved");
  port.removeChild(reserved);
  var div = appendElementChild("div", port, "showtime");
  var prompt1 = "First, a simple exercise. Type complete sentences "
      + "in the text area provided then press SUBMIT. I will report "
      + "statistics related to your submission. Cool? ";
  appendTextChild(prompt1, div, "h4");
  var prompt2 = "Text Reader and Statistics";
  var txta = appendElementChild("textarea", div, "sample");
  txta.setAttribute("name", "textReader");
  txta.setAttribute("rows", "5");
  txta.setAttribute("cols", "30");
  appendBreakChild(2, div);

  // Create button to move to next results page.
  var button1 = appendElementChild("button", div, "button1id");
  button1.innerHTML = "Submit";
  button1.setAttribute("name", "button1");
  button1.setAttribute("onClick", "txtrresults()");

  return true;
}

// Create a page of textreader results.
function txtrresults() {

  // First, run reportStats and generate the ReportMy stats to be used.
  reportStats();

  // Then setup report using ReportMy data.
  var prompt1 = "I detect you had entered " + reportMy.numOfSents
      + " sentence(s), consisting of " + reportMy.numOfWords + " words and "
      + reportMy.numOfSpaces
      + " spaces. The average words per sentence therefore is "
      + reportMy.aveWordsPerSent + ". Thanks for playing!";
  var noenter = "I detect you have not entered words in the text area. Ok then.";

  // Create noenter if no words detected in text area.
  if ( reportMy.numOfWords === 0) {
    prompt1 = noenter;
  }

  // If word are detected, create page report.
  var showt = document.getElementById("showtime");
  var button1 = document.getElementById("button1id");
  showt.removeChild(button1);

  var port = document.getElementById("portfolio");
  var div = appendElementChild("div", showt, "txtresults");
  appendTextChild(prompt1, div, "h4");

  var button2 = appendElementChild("button", div, "button2id");
  button2.innerHTML = "Done!";
  button2.setAttribute("name", "button2");
  button2.setAttribute("onClick", "portlist()");
  return;
}

// Replace with whatever exercise you want to display. For now, TextReader().
function showFeature() {

  textreader();
}

// Append text as a child node (w element).
function appendTextChild(text, node, element, idname) {

  // Check input.
  if ( text === undefined || text === null || node === undefined
      || node === null || element === undefined || element === null) {
    return null;
  }

  // Create styled text node.
  var txt = document.createTextNode(text);
  var el = _createel(element, idname);
  el.appendChild(txt);
  node.appendChild(el);

  return el;
}

// Append xtimes of break(s) as child node(s) to node.
function appendBreakChild(xtimes, node) {

  // Check input.
  if ( xtimes === undefined || xtimes === null || node === undefined
      || node === null) {
    return null;
  }

  var i = 0;
  // Create xtimes number of breaks.
  do {

    node.appendChild(document.createElement("br"));
    i++;

  } while ( i < xtimes);

  return true;
}

// Create child node of element with optional idname. You need idname if you
// want to remove later.
function appendElementChild(element, node, idname) {

  if ( element === undefined || element === null || node === undefined
      || node === null) {
    return null;
  }

  var el = _createel(element, idname);
  node.appendChild(el);

  return el;
}

function _createel(element, idname) {

  // Check input.
  if ( element === null) {
    return;
  }

  // Create element with optional id.
  var el = document.createElement(element);
  if ( idname !== undefined && idname !== null) {

    el.setAttribute("id", idname);
  }

  return el;
}
