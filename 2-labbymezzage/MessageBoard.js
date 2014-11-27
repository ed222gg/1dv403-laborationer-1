"use strict"; //objekt.metod/egenskap(argument)

var MessageBoard = {
 //array för textmeddelanden
 messages: [],

 init: function(text) {

 
  // Hämtar ut element "button" o variabeler   
 
  var send = document.getElementById("button");
  send.addEventListener("click", MessageBoard.createNewMessage);
  
 },
 

 createNewMessage: function() {
  var messageText = document.getElementById("messageText");
  var mess = new Message(messageText.value, new Date());
  MessageBoard.messages.push(mess);
  console.log(MessageBoard.messages);
  console.log(MessageBoard.messages.length);
/* Detta objekt ska innehålla texten
som användaren skrev i och den exakta tidpunkt 
då användaren skapade inlägget.
Detta messageobjekt lägger du sedan till i arrayen 
med messageobjekt. (messages)  vet dock inte hur man gör det...*/
 },


};







//När sidan har laddads in så anropas init.
window.onload = MessageBoard.init;