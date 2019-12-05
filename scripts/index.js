
function isSevere(incident) {
    // console.log(incident.severity);
    return incident.severity >= 4;
    // if (incident.severity >= 4) {
    //     return true;
    // } else {
    //     return false;
    // }
}

function isOpen(incident) {
    // console.log(incident.status);
    // console.log(incident.status === "open");
    return incident.status === "open";
}

const caseArray = database.cases;

function crimesPerPerson(caseArray) {
    // Create a histogram
    // which is an object with each key/value
    // pair shaped like so:
    // const result = {
    //         "P. Rogers Nelson": 18,
    //          "B. Builder": 10,
    //     }
    // ;

    const result = {};

    for (let item of caseArray) {
        // console.log(item.name);

        // Have I seen this name
        // before?
        // Is the name already in
        // the result object?
        if (result[item.name]) {
            // If so, get the current
            // value, add 1, save
            // new value to object
            let currentVal = result[item.name];
            let newVal = currentVal + 1;
            result[item.name] = newVal;
        } else {
            // If I have not seen them,
            // add them to object
            // and write down a 1
            result[item.name] = 1;
        }        
    }
    return result;
}

function objectToArray(object) {
    const result = [];
    // Go through the key/value pairs
    for (let key of Object.keys(object)) {
        // Put each one in its own object
        const individual = {
            name: key,
            count: object[key]
        }
        result.push(individual);
        // Push into a new array
        // console.log(object[key]);
    }

    return result;
}

function byCrimeCount(a, b) {
    if (a.count > b.count) {
        return -1;
    }
    if (a.count < b.count) {
        return 1;
    }

    return 0;
}

function mostWanted(caseArray) {
    // Create new array.
    // const wantedArray = [];

    // Figure out who has committed
    // most number of offenses.
    // How many offenses has one individual
    // committed?

    const obj = crimesPerPerson(database.cases);
    const individualsAndCounts = objectToArray(obj);
    individualsAndCounts.sort(byCrimeCount);
    
    // return wantedArray;
    return individualsAndCounts.slice(0, 10);
}
const theMostWanted = mostWanted(database.cases);