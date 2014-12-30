"use strict"; //objekt.metod/egenskap(argument)


function Window(desk, title, icon) { //konstruktorfunktion
    var template = document.querySelector("#template");
    var windowTemplate = template.content.querySelector(".window"); //hämtar windowtemplate för fönster
    this.wind = windowTemplate.cloneNode(true); //klona ut den  
    var titleElement = this.wind.querySelector(".title");
    titleElement.innerHTML = title;




    var close = this.wind.querySelector(".close");
    var self = this;
    desk.element.appendChild(this.wind);
    this.wind.querySelector(".appIcon").setAttribute("src", icon);
    this.element = this.wind.querySelector(".content"); //lägger contentsökvägen i element där appen kommer laddas in
    this.loadStatus = this.wind.querySelector(".bottombar");
    this.loadingImg = this.wind.querySelector(".loadingImg");
    this.loadingText = this.wind.querySelector(".loadingText");
    this.newBackground = document.querySelector("#desktop");
    close.addEventListener("click", function(){
        self.close();
    });
    //desk.element.removeElement(wind);  
    //"pics/ajax-loader.gif"


}
Window.prototype.close = function() {
    this.wind.parentNode.removeChild(this.wind);
};
