// ideas
// instructions function activates an alert that tells you what to do
// add feature to select colors from list or color wheel

var colors = ["green", "yellow", "black", "white"];
var numOfRows = 10;
var row = 1;
var rowHighlight = true;

//add event listener for key strokes toggle up function and toggle down row function

//easy version - don't store states
//cooler version - store states in array of arrays (or hash) that
//way cooler version, have alert or opening page where user checks colors - populates array.


//store color data in array of arrays

document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "a":
      var a = document.getElementById(event.key + row);
      toggleColor(a);
      break;

    case "s":
      var s = document.getElementById(event.key + row);
      toggleColor(s);
      break;

    case "d":
      var d = document.getElementById(event.key + row);
      toggleColor(d);
      break;

    case "f":
      var f = document.getElementById(event.key + row);
      toggleColor(f);
      break;

    case "g":
      var g = document.getElementById(event.key + row);
      toggleColor(g);
      break;

    case "v":
      toggleDown();
      break;

    case "u":
      toggleUp();
      break;

    case "h":
      var h = document.getElementById(event.key + row);
      toggleColor(h);
      break;

    case "j":
      var j = document.getElementById(event.key + row);
      toggleColor(j);
      break;

    case "k":
      var k = document.getElementById(event.key + row);
      toggleColor(k);
      break;

    case "l":
      var l = document.getElementById(event.key + row);
      toggleColor(l);
      break;

    case ";":
      var colon = document.getElementById(event.key + row);
      toggleColor(colon);
      break;

    case "q":
      toggleRowHighlight();
      break;

    default:
      console.log(event.key);
  }
});

function toggleUp() {
  var previousRow = row;

  if (row === 1) {
    row = numOfRows;
  } else {
    row -= 1;
  }
  moveRowHighlight(previousRow);
}

function toggleDown() {
  var previousRow = row;

  if (row === numOfRows) {
    row = 1;
  } else {
    row += 1;
  }
  moveRowHighlight(previousRow);
}

function toggleColor(elem) {
  for (var i = 0; i < colors.length; i++) {
    if (elem.classList.contains(colors[i])) {
      if (i === colors.length - 1) {
        elem.classList.remove(colors[i]);
        elem.classList.add(colors[0]);
        break;
      } else {
        elem.classList.remove(colors[i]);
        elem.classList.add(colors[i + 1]);
        break;
      }
    }
  }
}

function toggleRowHighlight() {
  var currRow = document.getElementById("row" + row);

  if (rowHighlight) {
    rowHighlight = false;
    currRow.classList.remove("highlighted");
  } else {
    rowHighlight = true;
    currRow.classList.add("highlighted");
  }
}

function moveRowHighlight(previousRow) {
  if (rowHighlight) {
    //add highlight to curr row
    document.getElementById("row" + row).classList.add("highlighted");
    //remove highlight from previous row
    document.getElementById("row" + previousRow).classList.remove("highlighted");
  }
}
