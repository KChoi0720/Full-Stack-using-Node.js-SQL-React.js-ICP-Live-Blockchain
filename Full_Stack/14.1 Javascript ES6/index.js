// Go to web developer console
// Sources - on the left (Page + Snippets + Workspace + Overrides + Content scripts)
// Create index.js


var tweet = prompt("Compose your tweet:");
var tweetcount = tweet.length;
alert("You have entered " + tweetcount + " characters, you have " + (140-tweetcount) + " characters remaining.");