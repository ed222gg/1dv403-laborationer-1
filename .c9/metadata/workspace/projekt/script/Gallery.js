{"filter":false,"title":"Gallery.js","tooltip":"/projekt/script/Gallery.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":55,"column":5},"action":"insert","lines":["\"use strict\"; ","function newPicApp() {","","        console.log(\"newPicApp\");","        var xhr = new XMLHttpRequest();","        var heightValue = 0;","        var widthValue = 0;","        xhr.onreadystatechange = function() {","            if (xhr.readyState === 4 && xhr.status === 200) {","                var picArray = JSON.parse(xhr.responseText);","                console.log(JSON.parse(xhr.responseText));","","                for (var i = 0; i < picArray.length; i++) {","                    // en a tagg i en div och i a taggen ska img ligga i","","                    for (var j = 0; j < picArray.length; j++) {","                        compare(picArray[i].thumbHeight, picArray[i].width);","                    }","","                    var img = document.createElement(\"img\");","                    var div = document.createElement(\"div\");","                    var a = document.createElement(\"a\");","","                    img.setAttribute(\"src\", picArray[i].thumbURL);","                    img.setAttribute(\"height\", picArray[i].thumbHeight);","                    img.setAttribute(\"width\", picArray[i].thumbWidth);","","                    a.setAttribute(\"href\", \"#\");","                    div.setAttribute(\"height\", heightValue);","                    div.setAttribute(\"width\", widthValue);","                    div.setAttribute(\"class\", \"imgBox\");","","                    a.appendChild(img);","                    div.appendChild(a);","                    w.content.appendChild(div);","                }","","","","            }","","        };","        xhr.open('GET', 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true);","        xhr.send(null);","","        function compare(height, width) {","            if (height > heightValue) {","                heightValue = height;","            }","","            if (width > widthValue) {","                widthValue = width;","            }","        }","","    }"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":60},"end":{"row":9,"column":60},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1419970438580,"hash":"27d204dc58ab48a9827c163b0eba24b128b90c69"}