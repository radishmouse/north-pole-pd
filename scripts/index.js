function isSevere (caseObj) {
    return (caseObj.severity >= 4);
}

function isNotSevere(caseObj) {
    return (caseObj.severity < 4);
}
// console.log(isSevere(database.cases[0]));
// console.log(isSevere(database.cases[1]));
// console.log(isSevere(database.cases[2]));
// console.log(isSevere(database.cases[3]));
// works :)
// got confused with what each case object was in the database. Then realized I needed severity, not just case length

function isOpen(caseObj) {
    return (caseObj.status === "open");
}

// console.log(isOpen(database.cases[0]));
// console.log(isOpen(database.cases[1]));
// console.log(isOpen(database.cases[2]));
// works :) and no issues

function openCases(caseObjArray) {
    let openCaseObjArray = caseObjArray.filter(isOpen);
    return openCaseObjArray;
}
let openCasesArray = openCases(database.cases)
console.log(`There are ${database.cases.length} total cases.`)
console.log(`There are ${openCasesArray.length} open cases.`)
// works :) and no issues.

function severeCases(caseObjArray) {
    let severeCasesArray = caseObjArray.filter(isSevere);
    return severeCasesArray;
}

let severeCasesArray = severeCases(database.cases);
console.log(`There are ${severeCasesArray.length} severe cases.`)
// works :) and no issues.

function mehCases(caseObjArray) {
    let openCaseObjArray = caseObjArray.filter(isOpen);
    let mehCasesArray = openCaseObjArray.filter(isNotSevere);
    return mehCasesArray;
}

let mehCasesArray = mehCases(database.cases);
console.log(`There are ${mehCasesArray.length} open and non-severe cases.`)
// works :) and no issues. Is there a way to make it filter based upon the opposite of a function, or do I need to make a function for each individual case?

function getUniqueOffenses(caseObjArray) {
    let setOfUniqueOffenses = new Set();
    for (let caseObj of caseObjArray) {
        setOfUniqueOffenses.add(caseObj.title);
    }
    return setOfUniqueOffenses;
}

let uniqueOffenses = getUniqueOffenses(database.cases);
// console.log(uniqueOffenses);
// Works :)
// sets seem incredibly, incredibly useful, and I wish I knew about them so long ago

function getUniqueOffenders(caseObjArray) {
    let setOfUniqueOffenders = new Set();
    for (let caseObj of caseObjArray) {
        setOfUniqueOffenders.add(caseObj.name);
    }
    return setOfUniqueOffenders;
}

let uniqueOffenders = getUniqueOffenders(database.cases);
// console.log(uniqueOffenders)
console.log(`There are ${uniqueOffenders.size} unique offenders`)


function coalPerPerson(caseArray) {
    // create a histogram, which is an object with each key/value pair shaped like so
//     const result = {
//         "P. Rogers Nelson": 18,
//         };
// 
    const result = {};
    for (let caseObj of caseArray) {
        if (result[caseObj.name]) {
            let currentVal = result[caseObj.name];
            let newVal = currentVal + caseObj.severity; // had issues with caseObj.coals.length returning a value for some reason
            result[caseObj.name] = newVal; 
        } else {
            result[caseObj.name] = caseObj.severity; 
        }
    }
    return result;
}

let coalPerPersonObj = coalPerPerson(database.cases);
console.log(Object.keys(coalPerPersonObj).length); // To compare to the unique offenders number
// works :)

// now realize the following code is not what was asked for. They wanted how much each person that is unique has. The above solves that problem, technically.

function sumCoalPerPerson(object) {
    let result = 0;
    for (let key of Object.keys(object)) {
        result += object[key];
    }
    return result;
}

let totalCoal = sumCoalPerPerson(coalPerPersonObj);
console.log(`The total amount of coal is ${totalCoal}`);
// works :)
// screwed it up at first due to not realizing you can't access the coal amount of each person. I can make an object that has the person's name and total coal. Then sum all the total coal with a for loop and object.values(); I originally tried to create an array of the unique individuals, map the coal to that spot in the array, then reduce the array to a total amount of coal. This did not work at all.

// TODO: write a function that creates an array of the most wanted offenders. A most wanted offender is a person with the most offenses and at least one case open
// TODO: Get an object array of all the people and how many offenses they have committed and whether they have an open case (do it all in one?)

function getMostWanted(caseObjArray) {
    result = {}
    for (let caseObj of caseObjArray) {
        // debugger;
        if (result[caseObj.name]) {
            let currentVal = result[caseObj.name]["offenses"]; // gets previous total offenses
            let newVal = currentVal + 1; // adds one two it
            let wasOpen = result[caseObj.name]["caseOpen"];
            result[caseObj.name] = {
            offenses: newVal, // sets the new amount of offenses
            caseOpen: (wasOpen || isOpen(caseObj)), // checks if any previous cases were open or if this specific case is open
            }
        } else {
            result[caseObj.name] = {
                offenses: 1,
                caseOpen: isOpen(caseObj), // since first case, checks if open
            }
        }
    }
    return result;
}

let mostWantedObj = getMostWanted(database.cases);
console.log(mostWantedObj);
// works :)

// now to find what is the most number of offenses
function getMostOffenses(mostWantedObj) {
    let mostOffenses = 0;
    for (let key of Object.keys(mostWantedObj)) {
        if (mostWantedObj[key]["offenses"] > mostOffenses) {
            mostOffenses = mostWantedObj[key]["offenses"];
        }
    }
    return mostOffenses;
}

const mostOffenses = getMostOffenses(mostWantedObj);
console.log(mostOffenses);

// now make the array with only the top 10
function getMostWantedArray(mostWantedObj, mostOffenses) {
    result = [];
    for (let key of Object.keys(mostWantedObj)) {
        if (mostWantedObj[key]["caseOpen"] && mostWantedObj[key]["offenses"] === mostOffenses) {
            result.push(key);
        }
    }
    return result;
}

const mostOffensesArray = getMostWantedArray(mostWantedObj, mostOffenses);
console.log(mostOffensesArray);



