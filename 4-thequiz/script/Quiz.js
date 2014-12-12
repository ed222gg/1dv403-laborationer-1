"use strict"; //objekt.metod/egenskap(argument)

var Quiz = {
    nrOfTriesArray: [],
    quizObj: undefined,
    xhr: new XMLHttpRequest(), // skapar requestObjekt
    countTries: undefined,
    counter: 0, // antal klick
    init: function(e) { 
        
        Quiz.question('http://vhost3.lnu.se:20080/question/1');	
        	
        		if(!e){ e = window.event; }

			if(e.keyCode == 13 && !e.shiftKey){
				e.preventDefault();
				Quiz.messageText();			
		}
    },
        
        
        question: function(url) { 
            var pTag = document.getElementById("question");
               Quiz.countTries = document.getElementById("countTries");
            // Koppla en händelsehanterare på vad som ska hända när vi får ett svar
            // onreadeystaychange = en händelsehanterare. Vi kopplar den till en funktion. Det som står i det blocket är det som
            // ska köras när vi får ett svar.
            Quiz.xhr.onreadystatechange = function(){
                if(Quiz.xhr.readyState === 4 && Quiz.xhr.status === 200){
                   Quiz.quizObj = JSON.parse(Quiz.xhr.responseText);
                    console.log(Quiz.quizObj.question);
                    pTag.innerHTML = Quiz.quizObj.question; // skriver ut frågan
               
                    Quiz.click();
                }
            };
            // nästa gång den körs vill jag att den ska köra url
            Quiz.xhr.open('GET', url, true); // måste köra en open för att konfiguera. Alltså Open("GET", "vad vill vi anropa?")
            Quiz.xhr.send(null);
        },
        
        
        answer: function(url){
                console.log(url);
              var messageText = document.getElementById("messageText");
             
              var quizanswer = {
                  "id": 1,
                  "answer": messageText.value,
              };
                messageText.value = "";
              Quiz.xhr = new XMLHttpRequest();
              Quiz.xhr.onreadystatechange = function(){
                  
                  // rätt
                    if(Quiz.xhr.readyState === 4 && Quiz.xhr.status === 200){
                        Quiz.quizObj = JSON.parse(Quiz.xhr.responseText);
                        Quiz.question(Quiz.quizObj.nextURL); 
                        Quiz.nrOfTriesArray.push(Quiz.counter);
                        Quiz.counter = 0;
                       
                        
                    // slut på frågor
                    if (Quiz.quizObj.nextURL === undefined)
                    {  
                        Quiz.output();
                    }
                    }
                    
                    // fel
                    else if (Quiz.xhr.readyState === 4 && Quiz.xhr.status === 400){
                    Quiz.response.innerHTML = "<br>Fel, försök igen. ";  
                    }
              };
              Quiz.xhr.open('POST', url, true);
              Quiz.xhr.setRequestHeader('Content-Type', 'application/json');
              Quiz.xhr.send(JSON.stringify(quizanswer));
        },
        
        click: function(){  
            document.getElementById("button").onclick = function(e){ // hämtar ut knappen och kopplar en eventhanterare
              Quiz.counter++;
              
            Quiz.answer(Quiz.quizObj.nextURL);
        };
        },
        
        output: function(){
            Quiz.nrOfTriesArray.push(Quiz.counter); // måste pusha den sista frågan
             Quiz.countTries.innerHTML = "Antal försök: ";
           for (var i =1 ; i < Quiz.nrOfTriesArray.length; i++) { // sätter i som 1 då jag vill att den ska börja på 1 och inte på nollan
    Quiz.countTries.innerHTML += "<br>Fråga "+i+": " + Quiz.nrOfTriesArray[i-1]; // får ta minus 1 så att hela arrayen tas med från början från det första indexet eftersom jag satte att den skulle börja på plats ett
}
   console.log(Quiz.nrOfTriesArray);

        },
};
//När sidan har laddads in så anropas init.
window.onload = Quiz.init;






