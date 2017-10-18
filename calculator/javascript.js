total = 0;
num = "0";
point = "";
symbol = "";

function calc_run(btn) {
	if (!isNaN(btn)) {
	if (symbol == "=") {
		total = 0;
		symbol = "";
	}
	if (!isNaN(point)) {
	if (num == "0") {
		num = ""+btn;
	} else {
		num += ""+btn;
	}
	} else {
		num = ""+btn;
	}
	document.getElementById("output").innerHTML = num;
	} else {
		if (!isNaN(point)) {
		total = eval(total + symbol + num);
		num = "0";
		document.getElementById("output").innerHTML = total;
	}
	symbol = btn;
	}
	document.getElementById("type").innerHTML = symbol;
	point = btn;
}
