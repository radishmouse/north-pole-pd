function isSevere (caseObj) {
    return (caseObj.severity >= 4);
}

// console.log(isSevere(database.cases[0]));
// console.log(isSevere(database.cases[1]));
// console.log(isSevere(database.cases[2]));
// console.log(isSevere(database.cases[3]));
// works :)
// got confused with what each case object was in the database. Then realized I needed severity, not just case length

