import Player from './player.js';
import DOMManipulation from './dommanipulation.js';
import Function from './function.js';
import GameMath from './gamemath.js';


let options = {
    target: '#mainscreen',
    width: 1000,
    height: 550,
    data: [],
    grid: true
}

class Game{
    constructor(){
        this.player = new Player();
        this.function = new Function();
        this.game_difficulty = 'easy';
        options.data[0] = {
            fn: this.function.actualFunction
        }
        functionPlot(options);

        // Ties all dom Manipulation functions to their respective buttons (all gamemode buttons, try it and submit button)
        DOMManipulation.addClickEvent('easy',this.gameModeButtonClicked.bind(this,'easy'));
        DOMManipulation.addClickEvent('medium',this.gameModeButtonClicked.bind(this,'medium'));
        DOMManipulation.addClickEvent('hard',this.gameModeButtonClicked.bind(this, 'hard'));
        DOMManipulation.addClickEvent('tryit',this.tryItButtonClicked.bind(this));
        DOMManipulation.addClickEvent('submit',this.submitButtonClicked.bind(this));
    }

    // function that will be attached to the three gamemode buttons
    gameModeButtonClicked(game_difficulty){
        // Clears all graphs
        this.game_difficulty = game_difficulty;
        options.data = [];
        // updates actual function with random generated function from Function class with game_difficulty as an input
        this.function.actualFunction = this.function.generateRandomFunction(game_difficulty);
        // adds randomly generated function to functionPlot in order to graph the function
        options.data[0] = {
            fn: this.function.actualFunction
        }
        functionPlot(options);
    }

    // function that will be attached to the try it button
    tryItButtonClicked(){
        const userInput = document.getElementById('userinputfield');
        const input = userInput.value;
        // if the input isn't valid the input field glows red
        if (Function.isValid(input) == false){
            DOMManipulation.glowRed();
        } else {
            // the input from input box is saved as player's guess to be calculated later for score and % difference
            this.player.playerGuess = input;
            // if there are more then 2 already generated graphs, the last one added is removed
            if (options.data.length == 2){
                options.data[1] = {};
            }
            // the player's input is graphed
            options.data[1] = {
                fn: input
            }
            functionPlot(options);
        }
    }

    // function that will be attached to SUBMIT button
    submitButtonClicked(){
        const userInput = document.getElementById('userinputfield');
        const input = userInput.value;
        if (Function.isValid(input) == false){
            DOMManipulation.glowRed();
        } else {
            this.player.playerGuess = input;
            // % difference using GameMath class is calculated 
            let percentageResult = GameMath.calculatePercentageDifference(this.player.playerGuess, this.function.actualFunction);
            //Makes result visible by changing color to red
            let temporaryDIV = document.getElementById('calculationdisplay');
            temporaryDIV.style.color = 'red';
            // DOM updates new score to user
            DOMManipulation.updateScore('percent',percentageResult);
            DOMManipulation.updateScore('actualfunctiondisplay',this.function.actualFunction);
            // player's score is updated inside the software
            this.player.currentScore += GameMath.scoreCalculate(this.game_difficulty, percentageResult);
            DOMManipulation.updateScore('scoreupdate',this.player.currentScore);
            // displays explanation to user
            DOMManipulation.displayExplanation(this.function.functionType);
        }
    }
}

let game = new Game();

export default Game;

