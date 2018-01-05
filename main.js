var game = require("./game.js");
var Word = require('./word.js');
var inquirer = require("inquirer");
var prompt = require("prompt");

prompt.start();

game = {
    wordList: game.game.wordBank,
    wordsWon: 0,
    guessRemaining: 0,
    currentWord: null,

    startGame: function (word) {
        this.resetGuessesRemaining();
        this.currentWord = new Word.Word(this.wordList[Math.floor(Math.random() * this.wordList.length)]);
        this.currentWord.getLettter();
        console.log("Hangman Super Mario Bros edition!!");
        console.log("Guess this Character");
        this.promptUser();
    },
    resetGuessesRemaining: function () {
        this.guessRemaining = 10;
    },

    promptUser: function () {
        var self = this;
        prompt.get([guess], function (err, res) {
            console.log("You guessed: " + res.guess);
            var findHowManyOfUserGuess = self.currentWord.checkLetter(res.guess);

            if (findHowManyOfUserGuess == 0) {
                console.log('You guessed wrong!');
                self.guessesRemaining--;
            } else {
                console.log('You guessed right!');

                //check if you win only when you are right
                if (self.currentWrd.didWeFindTheWord()) {
                    console.log('You Won!!!');
                    return; //end game
                }
            }
            console.log('Guesses remaining: ', self.guessesRemaining);
            console.log(self.currentWrd.wordRender());
            console.log('Here are the letters you guessed already: ', self.currentWrd.lettersGuessed);

            if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)) {
                self.keepPromptingUser();
            }
            else if (self.guessesRemaining == 0) {
                console.log('Game Over! The word was ', self.currentWrd.word);
                console.log('Better luck next time!');
            } else {
                console.log(self.currentWrd.wordRender());
            }

        });

    }

};



