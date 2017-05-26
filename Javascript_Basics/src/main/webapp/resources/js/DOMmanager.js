function insertTextLine(id, element, text) {

  var el = document.getElementById(id);

  // Add text element.
  var newel = document.createElement(element).appendChild(
      document.createTextNode(text));
  el.appendChild(newel);

  // Add br element.
  var br = document.createElement("br");
  el.appendChild(br);
}

function insertText(id, element, text) {

  var x = document.getElementById(id);
  var y = document.createElement(element).appendChild(
      document.createTextNode(text));
  x.appendChild(y);

}

function insertBreak(id) {

  var el = document.getElementById(id);

  // Add br element.
  var br = document.createElement("br");
  el.appendChild(br);
}