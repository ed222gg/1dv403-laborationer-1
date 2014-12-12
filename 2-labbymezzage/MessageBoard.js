"use strict"; //objekt.metod/egenskap(argument)

var MessageBoard = {
     //array för textmeddelanden
    messages: [],
    
    init: function(text) {
    
    
      // Hämtar ut element "button" o variabeler   
       
        var send = document.getElementById("button");
        var textArea = document.getElementById("messageText");
        
        textArea.addEventListener("keypress", function(e){
			if(!e){ e = window.event; }

			if(e.keyCode == 13 && !e.shiftKey){
				e.preventDefault();
				MessageBoard.createNewMessage();			}
		});

	
	
        send.addEventListener("click", MessageBoard.createNewMessage);
      
    },
    
    
    createNewMessage: function() {
        var messageText = document.getElementById("messageText");
        var mess = new Message(messageText.value, new Date());
        MessageBoard.messages.push(mess);
       
        MessageBoard.renderMessage(MessageBoard.messages.length - 1); //kallar på renderMessage som tar med sig längden till messageID
        messageText.value = ""; // tömmer textrutan
    },
    
    
    renderMessages: function() {
        var i = undefined;
        //radera alla meddelanden
        document.getElementById("inputMessage").innerHTML = "";
        
        for (i = 0; i < MessageBoard.messages.length; ++i) {
            MessageBoard.renderMessage(i);
        
        }
    },
     
         
    renderMessage: function(messageID) {
      
        MessageBoard.numberOfMessages();
        var date = document.createElement("p");
        var text = document.createElement("p"); //skapar en p tagg som vi sparar i variebeln text
        var div2 = document.createElement("div"); // skpar en div-tagg i var div
        var inputMessage = document.getElementById("inputMessage"); // vi hämtar en referens till inputMessage
        var imgClock = document.createElement("div"); 
        var imgRemove = document.createElement("div");
        
        
        imgClock.setAttribute('alt', 'En klock-ikon');
        imgClock.setAttribute("class", "imgClock"); // Jag vill sätta attributen innan jag appendar ut dom.
        imgRemove.setAttribute('alt', 'En ikon som raderar meddelandet');  
        imgRemove.setAttribute("class", "imgRemove");
        date.setAttribute("class", "dateClass");
        text.setAttribute("class", "textClass");
        div2.setAttribute("class", "divClass");

        
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText(); 
        date.innerHTML = MessageBoard.messages[messageID].getDateText();
        inputMessage.appendChild(div2); //innuti inputMessage så lägger vi vår div-tagg
        div2.appendChild(imgClock); //..och clock
        div2.appendChild(imgRemove);//..och delete
        div2.appendChild(text); //inut vår div-tagg lägger vi vår text(p-tagg)
        div2.appendChild(date);
        
        

      
        
        var buttonIcons = document.createElement("div"); // skapar en div-tagg i variabeln buttonIcon
        
        imgClock.alt="time";
        imgClock.addEventListener("click", function(){
            alert(MessageBoard.messages[messageID].getDate());
        });
        
        imgRemove.alt="detele";
        imgRemove.addEventListener("click", function(){
            var p = confirm("Vill du ta bort meddelandet?");
            if (p){
                 MessageBoard.removeMessage(messageID);
            }
          
            
        });
        
        
        
        
        

    },
    
    numberOfMessages: function(){
          var messageCount = document.getElementById("count"); //hämtar count och spara den i variabeln messageCount
          messageCount.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length; //lägger meddelandet innuti taggen messagecount aka count + messageID
    },
    
    removeMessage: function(messageID) {
       
        MessageBoard.messages.splice(messageID, 1);
        MessageBoard.renderMessages();
        MessageBoard. numberOfMessages();
    },
     


};



//När sidan har laddads in så anropas init.
window.onload = MessageBoard.init;