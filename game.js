import Player from './player.js';
import DOMManipulation from './dommanipulation.js';
import Function from './function.js';
import GameMath from './gamemath.js';
//import functionPlot from 'function-plot';



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

        DOMManipulation.addClickEvent('easy',this.gameModeButtonClicked.bind(this,'easy'));
        DOMManipulation.addClickEvent('medium',this.gameModeButtonClicked.bind(this,'medium'));
        DOMManipulation.addClickEvent('hard',this.gameModeButtonClicked.bind(this, 'hard'));
        //WORK ON TRY IT (DOESNT PROPERLY WORK YET)
        DOMManipulation.addClickEvent('tryit',this.tryItButtonClicked.bind(this));
        DOMManipulation.addClickEvent('submit',this.submitButtonClicked.bind(this));
    }

    // function that will be attached to the three gamemode buttons
    gameModeButtonClicked(game_difficulty){
        // Clears all graphs
        options.data = [];
        this.function.actualFunction = this.function.generateRandomFunction(game_difficulty);
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
            this.player.playerGuess = input;
            if (options.data.length == 2){
                options.data[1] = {};
            }
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
            let percentageResult = GameMath.calculatePercentageDifference(this.player.playerGuess, this.function.actualFunction);
            //Makes result visible
            let temporaryDIV = document.getElementById('calculationdisplay');
            temporaryDIV.style.color = 'red';
            DOMManipulation.updateScore('percent',percentageResult);
            DOMManipulation.updateScore('actualfunctiondisplay',this.function.actualFunction);
            this.player.currentScore += GameMath.scoreCalculate(this.game_difficulty, percentageResult);
            DOMManipulation.updateScore('scoreupdate',this.player.currentScore);
            DOMManipulation.displayExplanation(this.function.functionType);
        }
    }
}

let game = new Game();
console.log(Function.isValid('3x^2+2x+9'));


export default Game;

