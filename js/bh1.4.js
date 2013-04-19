var clockID = 0;

function hamster() {

	clockID = setTimeout("hamster()", 1000);

	var hDate = new Date();

	var hamsterh = hDate.getHours();
	var hamsterhb = hamsterh.toString(2).split("").reverse();

	var timeh = hamsterh.toString();
	if (hamsterh == "0") hamsterhb[0] = 2; // St-u-u-u-pid!
	if (timeh.length == 1) timeh = "0"+timeh;

	for (hamsterhi = 0; hamsterhi <= 4; hamsterhi++) {
		if (hamsterhb[hamsterhi] == 1) {
			document.getElementById("h"+(hamsterhi+1)).src = "/i/1.gif";
		} else if (hamsterhb[hamsterhi] == 0) {
			document.getElementById("h"+(hamsterhi+1)).src = "/i/0.gif";
		} else {
			document.getElementById("h"+(hamsterhi+1)).src = "/i/hole.gif";
		}
	}

	var hamsterm = hDate.getMinutes();
	var hamstermb = hamsterm.toString(2).split("").reverse();

	var timem = hamsterm.toString();
	if (hamsterm == "0") hamstermb[0] = 2; // St-u-u-u-pid!
	if (timem.length == 1) timem = "0"+timem;

	for (hamstermi = 0; hamstermi <= 5; hamstermi++) {
		if (hamstermb[hamstermi] == 1) {
			document.getElementById("m"+(hamstermi+1)).src = "/i/1.gif";
		} else if (hamstermb[hamstermi] == 0) {
			document.getElementById("m"+(hamstermi+1)).src = "/i/0.gif";
		} else {
			document.getElementById("m"+(hamstermi+1)).src = "/i/hole.gif";
		}
	}

	var hamsters = hDate.getSeconds();
	var hamstersb = hamsters.toString(2).split("").reverse();

	var times = hamsters.toString();
	if (hamsters == "0") hamstersb[0] = 2; // St-u-u-u-pid!
	if (times.length == 1) times = "0"+times;

	for (hamstersi = 0; hamstersi <= 5; hamstersi++) {
		if (hamstersb[hamstersi] == 1) {
			document.getElementById("s"+(hamstersi+1)).src = "/i/1.gif";
		} else if (hamstersb[hamstersi] == 0) {
			document.getElementById("s"+(hamstersi+1)).src = "/i/0.gif";
		} else {
			document.getElementById("s"+(hamstersi+1)).src = "/i/hole.gif";
		}
	}

	document.getElementById("time").innerHTML = timeh+"<br />"+timem+"<br />"+times;

}
