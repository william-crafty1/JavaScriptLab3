// FUNCTION TESTS AT BOTTOM OF CODE

const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true},
];

function addSubmission(sArray, newName, newScore, newDate){
    let result;
    if(newScore >= 60){
        result = true;
    }
    else{
        result = false;
    }
    sArray.push({name: newName, score: newScore, date: newDate, passed: result});
    return sArray;
};

function DeleteSubmissionByIndex(sArray, index){
    sArray.splice(index, 1);
    return sArray;
};

function DeleteSubmissionByName(sArray, name){
    sArray.forEach((n, index) => {
        if(n.name === name){
            sArray.splice(index, 1);
        }
    })
    return sArray;
};

function editSubmission(sArray, index, score){
    sArray.forEach((s) => {
        if(index === s.index){
            s.score = score;
            return sArray[s].score;
        }
    })
};

function findSubmissionByName(sArray, name){
    for(let s of sArray){
        if (s.name === name){
            return s;
        }
    }
};


function findLowestScore(sArray){
    let smallest = sArray[0]; 
    sArray.forEach((n) => {
        if(n.score < smallest.score){
            smallest = n;
        }
    })
    return smallest;
}


function findAverageScore(sArray){
    let sum = sArray[0].score;
    let average = 0;
    for(let s of sArray){
        sum.score += sArray[s];
    }
    average = sum / sArray.length;
    return average;

}


function filterPassing(sArray){
    let filteredArray = [];
    for(let s of sArray){
        if(s.passed === true){
            filteredArray.push(s);
        }
    }
    return filteredArray;
}


function filter90AndAbove(sArray){
    let filteredArray = [];
    for(let s of sArray){
        if(s.score >= 90){
            filteredArray.push(s);
        }
    }
    return filteredArray;

}

function createRange(start, end){
    let newArray = [];
    for(let i = start; i <= end; i++){
        newArray.push(i);
    }
    return newArray;
}

function countElements(sArray){
    let count = {};
    sArray.forEach(function(x) { count[x] = (count[x] || 0)+1; });
    return count;
}

// ====RUN FIRST THREE FUNCTIONS ONE AT A TIME====
// console.log(addSubmission(submissions, "William", 100, "2020-05-20"));
// console.log(DeleteSubmissionByIndex(submissions, 0));
// console.log(DeleteSubmissionByName(submissions, "Jill"));
console.log(editSubmission(submissions, 0, 10));
console.log(findSubmissionByName(submissions, "Jack"));
console.log(findLowestScore(submissions));
console.log(findAverageScore(submissions));
console.log(filterPassing(submissions));
console.log(filter90AndAbove(submissions));

const sampleArray = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'c'];
console.log(countElements(sampleArray))
console.log(createRange(2,99));