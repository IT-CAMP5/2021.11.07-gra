var haslo = "it camp jest fajny";
haslo = haslo.toUpperCase();

var ukryte_haslo = "";

var skuchy = 0;

for(i = 0; i < haslo.length; i++) {
	if(haslo.charAt(i) == " ") {
		ukryte_haslo = ukryte_haslo + " ";
	} else {
		ukryte_haslo = ukryte_haslo + "-";
	}
}

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function generate_letters() {
	var wynik = '';
	
	for(i = 0; i < litery.length; i++) {
		var temp = '<div class="letter" onClick="check(' + i + ')" id="l' + i +'">' + litery[i] + '</div>';
		wynik = wynik + temp;
		if((i + 1) % 7 == 0) {
			wynik = wynik + '<br>';
		}
	}
	
	document.getElementById("litery").innerHTML = wynik;
}

function set_password() {
	document.getElementById("haslo").innerHTML = ukryte_haslo;
}

function start() {
	generate_letters();
	set_password();
}

window.onload = start;

function check(nr) {
	var trafienie = false;
	for(i = 0; i < haslo.length; i++) {
		if(haslo.charAt(i) == litery[nr]) {
			ukryte_haslo = ukryte_haslo.substr(0, i) + litery[nr] + ukryte_haslo.substr(i+1);
			trafienie = true;
		}
	}
	
	var clickedLetterId = 'l' + nr;
	
	if(!trafienie) {
		skuchy = skuchy + 1;
		var obrazek = '<img src="img/s' + skuchy + '.jpg"/>';
		document.getElementById("szubienica").innerHTML = obrazek;
		document.getElementById(clickedLetterId).style.background = "#550000";
		document.getElementById(clickedLetterId).style.color = "#FF0000";
		document.getElementById(clickedLetterId).style.border = "3px solid #550000";
	} else {
		document.getElementById(clickedLetterId).style.background = "#005500";
		document.getElementById(clickedLetterId).style.color = "#00FF00";
		document.getElementById(clickedLetterId).style.border = "3px solid #005500";
	}
	
	document.getElementById(clickedLetterId).setAttribute("onClick", ";");
	
	if(skuchy >= 9) {
		document.getElementById("litery").innerHTML = "Przegrana !!";
	}
	
	if(haslo == ukryte_haslo) {
		document.getElementById("litery").innerHTML = "Wygrana !!";
	}
	
	set_password();
}