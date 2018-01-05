
var Letter = function (letter) {
    // store letter here
    this.letter = letter;
    //boolean if we can show the letter 
    this.appear= false;

    this.letterRender = function () {
        if (this.letter == ' ') { 
            this.appear = true;
            return '  ';
        } if (this.appear === false) { 
            return ' _ ';
        } else { 
            return this.letter;
        }

    };
};

module.exports = Letter;