class Player{
    // Private fields - a field that contains player's current score (int) and guess (string)
    current_score = 0;
    player_guess = "";

    // Constructor initializing starting current score as 0 and player's guess as empty
    constructor(){
        this.current_score = 0;
        this.player_guess = "";
    }

    get currentScore() {
        return this.current_score;
    }

    set currentScore(newScore){
        this.current_score = newScore;
    }

    get playerGuess() {
        return this.player_guess;
    }

    set playerGuess(newGuess) {
        this.player_guess = newGuess;
    }
}

export default Player;