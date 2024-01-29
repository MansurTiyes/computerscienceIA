import Function from './function.js';

class DOMManipulation{
    //adds clicked event for a button
    static addClickEvent(elementId, callback) {
        let element = document.getElementById(elementId);
        if (element) {
          element.addEventListener('click', callback);
        }
    }

    //function that makes the input field grow temporarily red
    static glowRed(){
        const inputField = document.querySelector('.userinputfield');
        inputField.classList.add('glow-red');

        setTimeout(function() {
            inputField.classList.remove('glow-red');
        }, 1000);
    }

    static updateScoreMainPage(newScore){
        const element = document.getElementById('scoreupdate');
        if (element){
            element.textContent = newScore;
        }
    }

    static updateScoreOtherPage(newScore){
        const element = document.getElementById();
    }

}

export default DOMManipulation;