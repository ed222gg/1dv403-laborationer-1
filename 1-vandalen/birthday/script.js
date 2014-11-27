"use strict";

window.onload = function() {


	var birthday = function(date) {

		var today = new Date(); //dagens datum 
		//console.log(today.getHours());
		//var d = new Date(0, today.getMonth(), today.getDate(), 0, 0, 0, 0);
		//console.log(d.getHours());
		today.setDate(today.getDate() - 1); // sätter datumet till dagensdatum, minus 1 dag.
		var bday = new Date(date); // användarens födelsedag
		//var b = new Date(0, bday.getMonth(), bday.getDate(), 0, 0, 0, 0);
		//console.log(bday.getHours());
		if (isNaN(bday.getTime())) {
			throw new Error("Ange datum enligt följande format: ÅÅÅÅ-MM-DD");
		}
		else {
			bday.setFullYear(today.getFullYear());
		if (today > bday) {
				bday.setFullYear(today.getFullYear() + 1);
			}
			var daysToNextbday = Math.floor((bday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
			return daysToNextbday;

		}
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e) {
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove("error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer) {
				case 0:
					message = "Grattis på födelsedagen!";
					break;
				case 1:
					message = "Du fyller år imorgon!";
					break;
				default:
					message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		}
		catch (error) {
			p.classList.add("error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}

	});



};