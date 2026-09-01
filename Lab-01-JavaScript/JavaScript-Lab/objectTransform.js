function isValidPerson(person){
    if (person === null){
        return false;
    }
    if (Array.isArray(person)){
        return false;
    }
    if (typeof person !== "object"){
        return false;
    }
    if (!person.firstName || !person.lastName){
        return false;
    }
    return true;
}
function fullName(person){
    if (!isValidPerson(person)){
        return null;
    }
    return person.firstName.trim() + " " + person.lastName.trim();
}
function isAdult(person) {
    if (!isValidPerson(person)){
        return{
            granted: false,
            message: "invalid person"
        };
    }
    if (person.age >= person.minAge){
        return{
            granted: true,
            message: "Adult"
        };
    }
    return {
        granted: false,
        message: "Not an adult"
    };
}
module.exports = { isValidPerson, isAdult, fullName

};