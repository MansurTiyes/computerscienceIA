class Function {
    constructor(){
        this.actualFunction = this.generateRandomFunction('easy');
        this.functionType = null;
    }

    get functionType(){
        return this.function_type;
    }
    set functionType(newFunctionType){
        this.function_type = newFunctionType;
    }

    get actualFunction(){
        return this.actual_function;
    }
    set actualFunction(newActualFunction){
        this.actual_function = newActualFunction;
    }

    randomCoefficientGenerator(min,max){
        //This is random number generator for coefficients that don't need + sign
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
        // The maximum is exclusive and the minimum is inclusive
    }

    randomNumberWithSignsGenerator(min,max){
        //This is random number generator for numbers that include their signs in order 
        //to properly meet the operation writing conventions and simplify the subsequent operations for graphing functions
        const value = this.randomCoefficientGenerator(min,max);
        if (value>0){
            return "+"+value;
        } 
        else if (value<=0){
            return value;
        }
    }

    generateLinear(){
        //generates linear function (easy difficulty)
        let values = [this.randomCoefficientGenerator(-10,11),this.randomNumberWithSignsGenerator(-30,31)];
        let result = values[0]+"x"+values[1];
        this.functionType = 'linear';
        return result;
    }

    generateQuadratic(){
        //generates quadratic function (medium diffiiculty)
        let values = [this.randomCoefficientGenerator(-10,11),this.randomNumberWithSignsGenerator(-10,11),this.randomNumberWithSignsGenerator(-20,21)];
        let result = values[0]+"x^2"+values[1]+"x"+values[2];
        this.functionType = 'quadratic';
        return result;
    }

    generateExp(){
        //generates exponential function (medium difficulty)
        let values = [this.randomCoefficientGenerator(-3,4),this.randomNumberWithSignsGenerator(-20,21),this.randomNumberWithSignsGenerator(-20,21)];
        let result = values[0]+"exp(x"+values[1]+")"+values[2];
        this.functionType = 'exponential';
        return result;
    }

    generateCubic(){
        //generates cubic function (hard difficulty)
        let values = [this.randomCoefficientGenerator(-1,5),this.randomNumberWithSignsGenerator(-10,11),this.randomNumberWithSignsGenerator(-10,11),this.randomNumberWithSignsGenerator(-20,20)];
        let result = values[0]+"x^3"+values[1]+"x^2"+values[2]+"x"+values[3];
        this.functionType = 'cubic';
        return result;
    }

    generateReciprocal(){
        //generates Reciprocal function (hard difficulty)
        let values = [this.randomCoefficientGenerator(-3,4),this.randomNumberWithSignsGenerator(-20,21),this.randomNumberWithSignsGenerator(-20,21)];
        let result = "("+values[0]+"/(x"+values[1]+"))"+values[2];
        this.functionType = 'reciprocal';
        return result;
    }

    generateSine(){
        //generates Sine function (hard difficulty)
        let values= [this.randomCoefficientGenerator(-3,4),this.randomCoefficientGenerator(1,3),this.randomNumberWithSignsGenerator(-10,11),this.randomNumberWithSignsGenerator(-20,21)];
        let result = values[0]+"sin("+values[1]+"x"+values[2]+")"+values[3];
        this.functionType = 'sine';
        return result;
    }

    generateCosine(){
        //generates Cosine function (hard difficulty)
        let values= [this.randomCoefficientGenerator(-3,4),this.randomCoefficientGenerator(1,3),this.randomNumberWithSignsGenerator(-10,11),this.randomNumberWithSignsGenerator(-20,21)];
        let result = values[0]+"cos("+values[1]+"x"+values[2]+")"+values[3];
        this.functionType = 'cosine';
        return result;
    }

    generateRandomFunction(difficulty){
        // function that generates random function depending on the input
        switch (difficulty){
            case 'easy':
                return this.generateLinear();
            case 'medium':
                const mediumDifficulty = [this.generateQuadratic, this.generateExp];
                const method = mediumDifficulty[this.randomCoefficientGenerator(0,mediumDifficulty.length)];
                return method.call(this);
            default:
                const hardDifficulty = [this.generateCubic,this.generateReciprocal,this.generateSine,this.generateCosine];
                const method1 = hardDifficulty[this.randomCoefficientGenerator(0,hardDifficulty.length)];
                return method1.call(this);
        }
    }

    static isValid(expression){
        // This code validates user input to conventions of ECMAscript
        const regex =  /^(?=.*\bx\b)(?=.*\b(?:cos|sin|exp)\b)?.*$/;

        return regex.test(expression);
        // returns true if valid and false if wrong
    }
}

export default Function;

