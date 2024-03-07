function findMinimum(FirstNum, SecondNum) {
    if (FirstNum < SecondNum){
        return FirstNum;
    }
    else if (SecondNum < FirstNum){
        return SecondNum;
    }
}

let calculate = findMinimum(3,7)
console.log(calculate)

