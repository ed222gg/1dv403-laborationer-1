"use strict"; //objekt.metod/egenskap(argument)

var Memory = {
                // 2,2,4,1,0,3,1,3,4
    memoryArray: [],
    imgTagArray: [],
    count: 0, // antal klick
    score: 0,
    firstClick: null,
    firstClickLocation: null,
    gridCol: 4,
    gridRow: 4,
    
    init: function() {
        var board = document.getElementById("grid");

        Memory.memoryArray.push(RandomGenerator.getPictureArray(Memory.gridCol, Memory.gridRow));
        console.log(Memory.memoryArray);
        Memory.memoryBoard(Memory.gridCol, Memory.gridRow, Memory.memoryArray);
        // Memory.click(Memory.MemoryArray); 
        
        
        var colClassList = document.querySelectorAll(".colClass"); // samlar alla element med classen colclass i en lista
       
       // board.addEventListener("click", function(){ Memory.click(colClassList); }); // skapar klickevent till board
        
        // Lopar längden av alla element i colClassen, kallar på eventclick, vi kallar på eventklick 
        //för att jag inte få ha en funktion inuti en loop för då blir i alltid fel nummer.
        for (var i = 0; i < colClassList.length; i++) {
            eventClick(i);
        }
        // funktion som vi kallar på i forlopen ovan, den lägger en eventlistener på alla element i colClassList
        function eventClick(locationId){
             colClassList[locationId].addEventListener("click", function() {
                Memory.count ++;
                console.log(Memory.count);
                        var counter = document.getElementById("counter");
                        counter.innerHTML = "Antal klick: " + Memory.count;

                Memory.click(Memory.memoryArray[0][locationId], locationId);// Kallar på memory.click och skickar med bildnummret från arrayen memoryArray samt locationId som är ett ökande nummer
              //Memory.click(Memory.memoryArray[0][locationId],  Memory.imgTagArray[locationId]);
            });
        }
        
    },
    
    click: function(picId, locationId /*img*/){ // skickar med colclasslist till click funktion
       
       
       /*Om första inte har något värde sätter vi värden på både firstclick och secondclick. 
       om secondclick inte är null så betyder det att första klicket har tryckts och därför har secondclick också den fått ett värde?
       så nu måste det ju vara inne på andra klicket.. kolla om första och andra klicket är lika dana
       */
        var score = document.getElementById("score");
    
       
        if (Memory.firstClick === null) 
        {
            Memory.imgTagArray[locationId].setAttribute("src", "pics/"+picId+".png");
            Memory.firstClick  = picId; 
            Memory.firstClickLocation = locationId;
            console.log("första fungerar");
        }
        else if(Memory.firstClick != null){
           console.log("andra fungerar");
           Memory.imgTagArray[locationId].setAttribute("src", "pics/"+picId+".png");
           
            if (Memory.firstClick === picId){
                Memory.score++;
                score.innerHTML = "Poäng: " + Memory.score;
                
                if(Memory.score === (Memory.gridCol + Memory.gridRow))
                {
                   score.innerHTML += "<br>Grattis du vann!";
                   
                }
            }
            else 
            {   
               
                //vänd tillbaka efter 1 sek, kalla på setTimeout?
                setTimeout(function(){
                    Memory.imgTagArray[locationId].setAttribute("src", "pics/0.png");
                    Memory.imgTagArray[Memory.firstClickLocation].setAttribute("src", "pics/0.png");
                }, 1000);
            }
             Memory.firstClick = null;
        }
   
        //Memory.imgTagArray[locationId].setAttribute("src", "pics/"+picId+".png"); // sätter nya bilder med bildnumret från picId på rätt plats i imgTagArrayen
       
        //img.setAttribute("src", "pics/"+picId+".png")

    },
   //  timer: function(locationId){
        //  Memory.imgTagArray[locationId].setAttribute("src", "pics/0.png");
         
   //  },
   

    memoryBoard: function(rows, cols, memoryArray){
        var grid = document.getElementById("grid");
        var cards = document.getElementById("cards");
        var i = undefined;
        var j = undefined;
        var row = undefined;
        var col = undefined;
        var img = undefined;
        var tiledflipped = 0;
        var output = '';
        var a = undefined;
        
        for (i = 0; i < rows; i++){
            
            row = document.createElement("tr");  
            for (j = 0; j < cols ; j++) {
                //skapar element
                col = document.createElement("td");   
                img = document.createElement("img");
                a = document.createElement("a"); // skapar en a tagg
                
                Memory.imgTagArray.push(img); // lägger in (pushar in) img elementet i en array med namnet imgTagArray
                //Sätter egenskaper
                a.setAttribute("href", "#");
                img.setAttribute("src", "pics/0.png");
                col.setAttribute("class", "colClass"); //mina kort
           
                //Lägger till dom till HTML-sidan
                a.appendChild(img);
                col.appendChild(a);
                row.appendChild(col);
                
            }
            row.setAttribute("class", "rowClass");
            grid.appendChild(row);
           
        }
        //var counter = document.getElementById("counter");
      //  counter.innerHTML = "Antal klick: " + Memory.count;
        
    },
    
    
    
};



//När sidan har laddads in så anropas init.
window.onload = Memory.init;