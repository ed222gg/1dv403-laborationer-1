"use strict"; //objekt.metod/egenskap(argument)

var Memory = {
     //array för textmeddelanden
    randomImg: [],
    memoryValue: [],
    memoryTilesId: [],
   
    init: function() {
    
     Memory.randomImg.push(RandomGenerator.getPictureArray(3, 3));
     console.log(Memory.randomImg);
    Memory.memoryBoard(3, 3);
        
    },

    imgArray: function() {
    },
    
    memoryBoard: function(rows, cols){
        var grid =  document.getElementById("grid");
        var i = undefined;
        var j = undefined;
        var row = undefined;
        var col = undefined;
        var img = undefined;
        var tiledflipped = 0;
        var output = '';
        
        for (i = 0; i < rows; i++){
            
            row = document.createElement("tr");  
            for (j = 0; j < cols ; j++) {
                col = document.createElement("td");   
                img = document.createElement("img");
                
                img.setAttribute("src", "pics/0.png");
                col.setAttribute("class", "colClass");
                
                col.appendChild(img);
                row.appendChild(col);
            }
            row.setAttribute("class", "rowClass");
            grid.appendChild(row);
        }
      
                
        
        
    },
    
};



//När sidan har laddads in så anropas init.
window.onload = Memory.init;