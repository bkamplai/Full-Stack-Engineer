const Calculate = {
    sum(inputArray) {
        return inputArray.reduce((sum, value) => {
            return sum + value;
        });
    }
};

module.exports = Calculate;