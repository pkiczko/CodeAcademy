let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords.length);
let betterWords = storyWords;
for (i=0; i<3; i++) {
betterWords = betterWords.filter(words =>
  !words.includes(unnecessaryWords[i])
);}
let z = 0;
betterWords.map(word => {

  if (word === overusedWords[0]) z++;
  else if (word === overusedWords[1]) z++;
  else if (word === overusedWords[2]) z++;

});
//console.log(betterWords);
console.log(betterWords.length);
console.log('Number of overused words: ' + z);
 // now number of sentences in 2 steps
let sentencesOne = story.split('.');
let sentencesTwo = story.split('!');
//seems to be a problem here, for some reason these two arrays got a bonus cell at the end, so might as well just pop them
sentencesOne.pop();
sentencesTwo.pop();
console.log('number of sentences in the story: ' + (sentencesOne.length + sentencesTwo.length));
console.log('number of sentences in the story ending with a dot: ' + sentencesOne.length);
console.log('Number of sentences ending with an exclamation mark: ' + sentencesTwo.length);
//console.log(sentencesOne);
// now a function from StackOverflow
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
//code taken from https://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string, one of the answers by Vitim.us
console.log(`Checking results with another script:  \n dots: ${occurrences(story, '.')}\n exclamations:  ${occurrences(story, '!')}`);
console.log(`Number of words in the story after corrections ${betterWords.length}`);
//console.log(sentencesOne);
console.log(betterWords.join(' '));
