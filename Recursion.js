function isEven(positiveWholeNumber) {

    if(positiveWholeNumber < 1){
        return " Negative number provided!!"
    }
    else if (positiveWholeNumber % 2 === 0){
        return true;
    }
    else if (positiveWholeNumber % 2 === 1){
        return false;
    }
    else {
        return isEven(positiveWholeNumber - 2)
    }
}
console.log(isEven(108))
console.log(isEven(879))