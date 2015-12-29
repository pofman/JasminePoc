var Person = function(firstName, birthDate) {
    if(firstName == null || firstName == "") {
    	throw new Error("First name is required");
    }

    if(birthDate == null || !(birthDate instanceof Date)) {
    	throw new Error("Birth date is required");
    }

    this.firstName = firstName;
    this.birthDate = birthDate;
};

Person.prototype.present = function() {
    return "Hello, I'm " + this.firstName  + " and I born in " + this.birthDate;
};