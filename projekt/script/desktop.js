"use strict"; //objekt.metod/egenskap(argument)


function Desktop(){ //konstruktorfunktion
    this.element = document.querySelector("#desktop");
}

Desktop.prototype.newApp = function(app, title, icon){
    var a = document.createElement("a");
    var img = document.createElement("img");
    
    img.setAttribute("src", icon);
    a.setAttribute('href', '#');
    a.setAttribute('id', 'imglink');
    
    a.appendChild(img);
    var start = document.querySelector("#start");
    start.appendChild(a);
    
     //var titleElement = this.wind.querySelector(".title");
    //titleElement.innerHTML = title;
  
    var that = this;
    a.addEventListener("click", function(){
           new app(new Window(that, title, icon));
    });
}
// Desktop.prototype.addApp = function(){
//     var a = document.createElement('a');
//     var img = document.createElement('img');
//     img.setAttribute('src', 'pics/picfolder2.png');
    
//     a.setAttribute('href', '#');
//     document.querySelector('#start').appendChild(a);
//     a.appendChild(img);
//     a.onClick = function(){
//         //var desk = new Desktop();
//         var win  = new Window(desk,"Image Viewer");
      
//     };
// };


// Desktop.prototype.addApp = function(pic, app, namn){//lägga till img, onklick på a. skickar till det js som skall skapa(tex newPhoto)
//     var img = document.createElement('img');
//     img.setAttribute('src', pic);
//     img.setAttribute('width', '50px');
//     img.setAttribute('height', '50px');
//     var a = document.createElement('a');
//     a.setAttribute('href', '#');
//     document.querySelector('#meny').appendChild(a);
//     a.appendChild(img);
    
//     var self = this;//spara gamla this som är knappen
    
//     a.onclick = function(){
//         var wind = new Window(self, namn);
//         var photo = new app(wind);
        
//     };
// };
    
// Desktop.prototype.startTime = function(){//ta bort kommentarerna ifall du vill se sekunder.
//     var today=new Date();
//     var h=today.getHours();
//     var m=today.getMinutes();
//     //var s=today.getSeconds();
//     m = checkTime(m);
//     document.querySelector('#time').innerHTML = h+":"+m; //+":"+s;
//     var t = setTimeout(function(){Desktop.prototype.startTime()},500);

//     function checkTime(i) {
//         if (i<10) {i = "0" + i}  // lägger till nolla om under tio
//         return i;
//     }
// };