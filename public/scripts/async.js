//https://jsbin.com/nehululagu/edit?js,console,output
/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
console.log('I am at the beginning of the code');
setTimeout(run,0);
function run (){
  console.log('I am in the setTimeout callback fuction')
}
console.log("I am at the end of the code");



console.log('End of Challenge 1');
//*/// (do not alter this line)


/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse (xmlHttp.responseText);
}

var results = httpGet('https://rest.bandsintown.com/artists/beyonce?app_id=jshp');
console.log('results:',results.name);



console.log('End of Challenge 2');
// */// (do not alter this line)


/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse (xmlHttp.responseText);
}

var results = httpGet('https://rest.bandsintown.com/artists/maroon5/events?app_id=jshp');
console.log('results:',results[0].venue.name);

for (let i = 0; i<results.length; i++) {
  document.getElementById("ch3").innerHTML += results[i].venue.name + '<br>';
}


console.log('End of Challenge 3');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse (xmlHttp.responseText);
}

var results = httpGet('https://rest.bandsintown.com/artists/maroon5/events?app_id=jshp');
console.log('results:',results[0].venue.country);

for (let i = 0; i<results.length; i++) {
  if (results[i].venue.country == "United States") {
  document.getElementById("ch4").innerHTML += results[i].venue.name + '<br>';
  }
}




console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below
function forEach(arr, cb){

}



console.log('End of Challenge 5');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
// ...your code below




// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];

}


// */// (do not alter this line)
