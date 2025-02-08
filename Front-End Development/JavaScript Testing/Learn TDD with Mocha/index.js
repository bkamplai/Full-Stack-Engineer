const Calculate = {
    sum(inputArray) {
        let totalSum = 0;
        const inputArrayLength = inputArray.length;

        for (let i = 0; i < inputArrayLength; i++) {
            totalSum += inputArray[i];
        }

        return totalSum;
    }
};

module.exports = Calculate;