"use strict";
//objekt.metod/egenskap(argument)

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    
    this.setText = function(_text){
        message = _text;    
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
        
    };

}