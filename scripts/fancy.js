// .reduce the array of cases into an object of offenses per person
const countPerIndividual = database.cases
            .reduce((result, item) => {
                if (result[item.name]) {
                    result[item.name] = result[item.name] + 1;
                } else {
                    result[item.name] = 1;
                }        
                return result;
            }, {});

// .map over the keys of the object
// and turn it into an array (so that we can sort)
const individualsAndCounts = Object.keys(countPerIndividual)
            .map(key => ({
                name: key,
                count: countPerIndividual[key]
            }));

// .sort by the .count
individualsAndCounts.sort((a, b) => {
    if (a.count > b.count) {
        return -1;
    }
    if (a.count < b.count) {
        return 1;
    }
    return 0;
});

// .filter 
const theMostWanted = individualsAndCounts.filter((individual) => {
    const name = individual.name;
    const openCases = database.cases
                                .filter(c => c.status === "open")
                                .filter(c => c.name === name);
    return openCases.length > 0;
}).slice(0, 10);