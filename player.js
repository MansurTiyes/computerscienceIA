class Player{
    #current_score;
    #player_guess;

    constructor(){
        this.#current_score = 0;
        this.#player_guess = "";
    }

    get currentScore() {
        return this.#current_score;
    }

    set currentScore(newScore){
        this.#current_score = newScore;
    }

    get playerGuess() {
        return this.#player_guess;
    }

    set playerGuess(newGuess) {
        this.#player_guess = newGuess;
    }
}

export default Player;