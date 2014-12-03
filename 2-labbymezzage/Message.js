"use strict";
//objekt.metod/egenskap(argument)

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    
    this.setText = function(_text){
        message = _text; // ska det vara understreck eller inte där. vad är _text, text och message? hur hänger dom ihop vad är vad och vad gör vad?
    };
    
    this.getDate = function(){
       return date;
    };
    
    this.setDate = function(_date){
        date = _date;
    };
    
    Message.prototype.toString = function (){
        return this.getText() + "("+this.getDate()+")";
    };
    
    //Hämtar texten med \n utbytt mot <br />
    Message.prototype.getHTMLText = function(){
        return this.getText().replace(/\n/g, '<br />');
    };
    
     Message.prototype.getDateText = function(){
            //return dateText
            var timeStamp = this.getDate(),
            dateText = timeStamp.getHours() + ":" + timeStamp.getMinutes() + ":" + timeStamp.getSeconds() + "  ";
            return dateText    
            //http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
    };

}