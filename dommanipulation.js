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

    //function that updates text (score/percentage)
    static updateScore(elementID, newScore){
        //id is scoreupdate for main page/score for second page
        //percent
        const element = document.getElementById(elementID);
        if (element){
            element.textContent = newScore;
        }
    }

    static displayExplanation(function_type){
        let text;
        switch (function_type){
            case 'linear':
                text = "To find the linear function based on the graph, observe any transformations applied to the standard linear function y = mx + b. If the line is shifted vertically, the 'b' value changes. If it's tilted, the slope 'm' is altered. Track these transformations from the original function to deduce the equation that represents the graph. Remember, shifts up or down affect 'b,' while slanting indicates changes in the slope 'm'.";
                break;
            case 'quadratic':
                text = "Vertical shifts change the constant term 'c' in the standard form y = ax^2 + bx + c. Horizontal shifts affect the vertex, and changes in 'a' determine the width and direction of the parabola.";
                break;
            case 'exponential':
                text = "Identify any shifts or translations on the graph. Vertical shifts are represented by the constant term 'c,' horizontal shifts by 'b,' and 'a' scales the amplitude. The base 'e' remains constant.";
                break;
            case 'cubic':
                text = "To express the cubic function in written form, observe any shifts or changes in shape. Vertical shifts impact the constant term, horizontal shifts influence the position of the curve, and changes in the coefficient of the cubic term affect the overall shape.";
                break;
            case 'reciprocal':
                text = "Vertical shifts are manifested in changes to the constant term, influencing the position of the asymptotes. Horizontal shifts involve adjustments to the input variable, determining the location of the reciprocal function along the x-axis. Additionally, changes in the coefficient of the variable in the denominator impact the overall shape of the hyperbola, affecting the steepness of the branches. Understanding these transformations will enable you to deduce the specific reciprocal function corresponding to the graph in our game. Keep in mind that the general form of a reciprocal function is y = a/(x + b) + c, where 'a' influences the overall scale, 'b' denotes horizontal shifts, and 'c' represents vertical shifts.";
                break;
            case 'sine':
                text = "Vertical shifts are depicted by changes in the constant term, influencing the amplitude and midline of the sine wave. Horizontal shifts involve alterations to the input variable, determining the phase shift or horizontal displacement of the sine function. The coefficient of the variable affects the frequency or period, influencing how rapidly the sine wave oscillates. Additionally, changes in the amplitude can be observed in the coefficient multiplying the sine function. By understanding these transformations, you can deduce the specific sine function corresponding to the graph in our game. Keep in mind that the general form of a sine function is y = a*sin(bx + c) + d, where 'a' represents the amplitude, 'b' affects the frequency, 'c' denotes the phase shift, and 'd' is the vertical shift.";
                break;
            default:
                text = "Vertical shifts are depicted by changes in the constant term, influencing the amplitude and midline of the cosine wave. Horizontal shifts involve alterations to the input variable, determining the phase shift or horizontal displacement of the cosine function. The coefficient of the variable affects the frequency or period, influencing how rapidly the cosine wave oscillates. Additionally, changes in the amplitude can be observed in the coefficient multiplying the cosine function. By understanding these transformations, you can deduce the specific cosine function corresponding to the graph in our game. Keep in mind that the general form of a cosine function is y = a*cos(bx + c) + d, where 'a' represents the amplitude, 'b' affects the frequency, 'c' denotes the phase shift, and 'd' is the vertical shift.";
        }
        let element = document.querySelector('.explanation');
        element.textContent = text;
    }
}

export default DOMManipulation;