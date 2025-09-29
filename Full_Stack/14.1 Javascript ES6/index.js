// Go to web developer console
// Sources - on the left (Page + Snippets + Workspace + Overrides + Content scripts)
// Create index.js


var tweet = prompt("Compose your tweet:");
var tweetcount = tweet.length;

alert("You have entered " + tweetcount + " characters, you have " + (140-tweetcount) + " characters remaining.");

var tweetUnder14 = tweet.slice(0,14);
alert(tweetUnder14);

alert(prompt("Compose your tweet:").slice(0,3))

var name = prompt("what is your name: ")
firstLetter = name.slice(0,1).toUpperCase();
RemainingLetter = name. slice(1,);
alert("Hello " + firstLetter+RemainingLetter + ".")

