
// ticking clock. refresh evry 0.5 sec
var myVar = setInterval(myTimer, 500);
function myTimer() {
    var d = new Date();
    document.getElementById("currentTime").innerHTML = d.toLocaleTimeString();
}

// record current times. obsolete.
function recordTime() {
    //current time
    var d = new Date();
    currentTime_string = d.toLocaleTimeString([], { hour12: false });
    // get previous last time
    var prevTime = document.getElementById("recordedTimes").lastElementChild;
    var result = ""
    if (prevTime !== null) {
        prevTime_string = prevTime.innerHTML.substring(0, 8); // HH:MM:ss format
        console.log(d.toLocaleTimeString([], { hour12: false }), " ", prevTime_string);
        result = subtractTime(d.toLocaleTimeString([], { hour12: false }), prevTime_string);
    }


    //create li element with current time
    var node = document.createElement("li");
    var t = document.createTextNode(d.toLocaleTimeString([], { hour12: false }) + " --- " + result + " seconds since last record");
    node.appendChild(t);
    document.getElementById("recordedTimes").appendChild(node);
}

function subtractTime(endTime, startTime) {

    var s = startTime.split(':');
    var e = endTime.split(':');

    // overnight case
    if (e[0] < s[0]) {
        e[0] = parseInt(e[0]) + 24;
    }

    s = parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseInt(s[2]);
    e = parseInt(e[0]) * 3600 + parseInt(e[1]) * 60 + parseInt(e[2]);

    /*var end = new Date(0, 0, 0, parseInt(e[1], 10), parseInt(e[0], 10), 0);
    var start = new Date(0, 0, 0, parseInt(s[1], 10), parseInt(s[0], 10), 0);*/


    var elapsedSeconds = (e - s);

    var result = elapsedSeconds;
    result.toString();
    return result;
}


// change element background color to red onMouseOver
function elementBackgroundToRed(element) {
    element.style.backgroundColor = "red";
}

// change element background color to red onMouseOut
function elementBackgroundToInherit(element) {
    element.style.backgroundColor = "inherit";
}
