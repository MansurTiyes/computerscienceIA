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
}

const percentageDifference = GameMath.calculatePercentageDifference('1/(1+x)','1/(2+3x)');
console.log(percentageDifference);