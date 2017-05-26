function pooh() {

  var childdiv = createDivision("div1A", "sect1A");
  appendTextChild("Division created!", childdiv, "h1");
  var sect1A = document.getElementById("sect1A");
  sect1A.removeChild(childdiv);
  sect1A.innerHTML = "TaDa! It is gone!";
}

function bear() {

  var div = document.getElementById("div1a");
  div.removeChild();
}

function createDivision(idvalue, pidvalue) {

  // Check input.
  if ( idvalue === undefined || idvalue === null || pidvalue === undefined
      || pidvalue === null) {
    return null;
  }

  // Create element to pidvalue with req id attribute.
  var pid = document.getElementById(pidvalue);
  var div = document.createElement("div");
  div.setAttribute("id", idvalue);
  pid.appendChild(div);

  return div;
}

function createElement(element, node, opttext) {

  if ( element === undefined || element === null || node === undefined
      || node === null) {
    return null;
  }

  var el = _createel(element, opttext);
  node.appendChild(el);

  return el;
}

function appendDLChild(dt, dd, node) {

  var dtel = createElement("dt", node, dt);
  var ddel = createElement("dd", node, dd);
  node.appendChild(dtel);
  node.appendChild(ddel);
  return dtel;

}

function appendSimpleText(text, node) {

  // Check input.
  if ( text === undefined || text === null || node === undefined
      || node === null) {
    return null;
  }

  // Update node.
  node.innerHTML = text;

  return txt;
}

function appendTextChild(text, node, element) {

  // Check input.
  if ( text === undefined || text === null || node === undefined
      || node === null || element === undefined || element === null) {
    return null;
  }

  // Create styled text node.
  var txt = document.createTextNode(text);
  var el = _createel(element);
  el.appendChild(txt);
  node.appendChild(el);

  return txt;
}

function addBreak(xtimes, node) {

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

function _createel(element, opttext) {

  // Check input.
  if ( element === null) {
    return;
  }

  // Create element with class attr. Text is optional.
  var el = document.createElement(element);
  if ( opttext !== undefined && opttext !== null) {

    el.appendChild(document.createTextNode(opttext));
  }

  return el;
}
