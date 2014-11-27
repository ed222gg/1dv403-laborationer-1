"use strict";

var makePerson = function(persArr){



var ages = persArr.map(function (persArr){ return persArr.age;});
var minAge1 = Math.min.apply(Math, ages); //lägsta åldern.
var maxAge1 =Math.max.apply(Math, ages); //högsta åldern
var avarageAge1 = Math.round(ages.reduce(function(a, b) { return a + b; }) / ages.length);

var names1 = persArr.map(function (persArr){return persArr.name;});
var namesSort = names1.sort(function(a,b){return a.localeCompare(b);});
var namesJoin = namesSort.join(", ").toString();


//returnera objekten med dess värden de har fått efter uträkningarna och modifieringar.
return {minAge: minAge1, maxAge: maxAge1, averageAge: avarageAge1, names: namesJoin};
 
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result); 
	// Din kod här...
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//console.log(myArray[1].namn);
//---------------------------------------------------------------------------
//loopa igenom med en for in. då får man ut namn och age med hjälp av den och så får man anropa OBS unvik for in då man inte kan garantera ordningen
//for (var i in myArray){
//      console.log(typeof myArray[i]);
//}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//använd istället något som heter iterativa metoder.  [].(map)   [].(forEach)    [].(filter)    [].(reduce)    [].(every) = lagt in metoder på arrayerna.
// t ex:

// --map--hämtar ut värdet från varje position i arrayen och så kan vi göra något med värdet. vi kan returnera
// bra om vi vill jobba med alla tal, alla strängar som finns i en array och göra nåt
// tex alla tal ska vi addera med 10

// var n = ["Nisse", "Jenny", "Ellen", "Lisa"].map(funktion(name){
// return "namnet" + name; });
//---Det skapas en ny array med name och vår sträng "namnet" ihop konkantinerat. den nya arrayen hamnar sen i n som vi skriver ut
//console.log(n);//["namnet Nisse", "namnet Jenny", "namnet Ellen", "namnet Lisa"]

//--reduce--  addera alla tal. tar första och andra värdet och gör något med dom. i detta fallet adderas dem.
// när vi ropar på den första gången bli a = 20 och b=30 det returneras och blir 50. nästa gång den anropas kommer den anropas med 50 och 11.
// 50 + 11 = 61. nästa gång den anropas, anropas den med 61 och 56 som blir 117.
//n = [20, 30, 11, 56].reduce(funktion(a,b){
//return a+b; });
//console.log(n); // 117 (20*30*11*56)

//--filter-- filterar en array. den tar med sig alla tal till funktionen ett efter ett och skapar en ny array ut men vi skapar bara en array med det
// som vi returnerars från den. om den returnerar true kommer den sparas i den nya arrayen och returnerar den false kommer den inte att sparas.
// så i detta fallen testar vi vilka tal som är större eller lika med 20. de som är det sparas i den nya arrayen och returneras ut. det andra sparas inte 
//eftersom det är false

//n =[].filter()function(tal){
// return tal<=20; });
//console.log(n); // [20,30,56]

// Referenser
    // Sortering    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // Kombinera elementer till en sträng - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    // maxAge       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    // minAge       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
    // averageAge   - http://stackoverflow.com/questions/10359907/array-sum-and-average
    //              - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // Felhantering - http://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
    //              - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof







