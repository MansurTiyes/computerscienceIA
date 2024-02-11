class GameMath {
    //function that calculates percentage difference between two functions
    static calculatePercentageDifference(func1, func2) {
        // this line creates a range of values for x
        const xValues = Array.from({ length: 100 }, (_, i) => i / 10);
    
        // Evaluates the functions for each x value
        const yValues1 = xValues.map(x => math.evaluate(func1, { x }));
        const yValues2 = xValues.map(x => math.evaluate(func2, { x }));
    
        // Calculates the sum of percentage differences
        const sumPercentageDifference = xValues.reduce((sum, x, index) => {
            const diff = Math.abs(yValues1[index] - yValues2[index]);
            const avg = (yValues1[index] + yValues2[index]) / 2;
            const percentageDiff = (diff / avg) * 100;
            return sum + percentageDiff;
        }, 0);
    
        // Calculates the average percentage difference
        const avgPercentageDifference = sumPercentageDifference / xValues.length;
    
        // returns 2 decimal places after percentage
        return avgPercentageDifference.toFixed(2);
    }

    // function that calculates score based on obtained percentage of how close
    static scoreCalculate(difficulty,avgPercentageDifference){
        let newScore = 0;
        if (avgPercentageDifference == 0){
            newScore = 1000;
        } else if (avgPercentageDifference>0 && avgPercentageDifference <= 20){
            newScore = 500;
        } else if (avgPercentageDifference>20 && avgPercentageDifference <=50){
            newScore = 350;
        } else if (avgPercentageDifference>50 && avgPercentageDifference <=100){
            newScore = 100;
        } 
        switch (difficulty){
            case 'hard':
                return newScore*3;
            case 'medium':
                return newScore*2;
            default:
                return newScore;
        }
    }
}

export default GameMath;
