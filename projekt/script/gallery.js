"use strict"; 
function Gallery(wind) {

        console.log("newPicApp");
        var xhr = new XMLHttpRequest();
        var heightValue = 0;
        var widthValue = 0;
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("klar");
                wind.loadStatus.innerHTML="klar"
                var picArray = JSON.parse(xhr.responseText);
                console.log(JSON.parse(xhr.responseText));

                for (var i = 0; i < picArray.length; i++) {
                    // en a tagg i en div och i a taggen ska img ligga i

                    for (var j = 0; j < picArray.length; j++) {
                        compare(picArray[i].thumbHeight, picArray[i].thumbWidth);
                    }

                    var img = document.createElement("img");
                    var div = document.createElement("div");
                    var a = document.createElement("a");

                    img.setAttribute("src", picArray[i].thumbURL);
                    img.setAttribute("height", picArray[i].thumbHeight);
                    img.setAttribute("width", picArray[i].thumbWidth);

                    a.setAttribute("href", "#");
                    div.style.height = heightValue+'px';
                    div.style.width = widthValue+'px';
                    div.setAttribute("class", "imgBox");
                    

                    a.appendChild(img);
                    div.appendChild(a);
                    wind.element.appendChild(div); // lägger ut img, div , a till klassen content
                    setBackground(div, picArray[i].URL,picArray[i].height, picArray[i].width);
                }

            }

        };
        xhr.open('GET', 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true);
        xhr.send(null);
        console.log("laddar");
        wind.loadingImg.setAttribute("src", "pics/ajax-loade.gif");
        wind.loadingText.innerHTML="laddar"
       
        //   "pics/ajax-loader.gif"
        function compare(height, width) {
            if (height > heightValue) {
                heightValue = height;
            }

            if (width > widthValue) {
                widthValue = width;
            }
        }
        
        function setBackground(div, url, height, width) // url, height, och width från från picArray
        {
            div.addEventListener("click", function(){
                wind.newBackground.style.backgroundImage="url("+url+")"; //  background-image: url("../pics/background.jpg");
                
            });
        }
    }