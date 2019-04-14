var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },

    'GetNewFactIntent': function () {
        var say = 'Hello Ryan! Lets begin studying for our exam!' + getFact();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Learn everything you need to know about Amazon Web Services to pass your exam by listening to your very own study notes. You can start by saying, Ryan help me study.', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     }
};

//  helper functions  ===================================================================


function getFact() {
  var myFacts = [
  '<audio src=\"https://s3.amazonaws.com/crenwelge-polly-mp3/0f2c7676-ca9c-4709-9e50-5cbf9d6b3b96.mp3" />\'',
  '<audio src=\"https://s3.amazonaws.com/crenwelge-polly-mp3/231692d2-7ea6-4d1a-b66b-fc71c0964ef4.mp3" />\'',
  '<audio src=\"https://s3.amazonaws.com/crenwelge-polly-mp3/93ef27e5-2b8c-4d8c-b27b-677def3f5e1f.mp3" />\'',
  '<audio src=\"https://s3.amazonaws.com/crenwelge-polly-mp3/a8049723-5c13-4581-b4fe-25efbbdd7ca8.mp3" />\'',
  '<audio src=\"https://s3.amazonaws.com/crenwelge-polly-mp3/bbfb29cd-d0ca-4454-a69b-1b9aaf73acb1.mp3" />\''
      ]

    var newFact = randomPhrase(myFacts);

    return newFact;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
