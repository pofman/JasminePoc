var fs = require('fs');
var personCode = fs.readFileSync('./src/Person.js','utf-8'); // depends on the file encoding
eval(personCode);

describe("Person constructor should handle invalid params", function() {

    it("null name should thorw an exception", function() {
    	expect( function(){ createPerson(null, new Date('2015/12/12'));}).toThrow(new Error("First name is required"));
    });

    it("empty name should thorw an exception", function() {
    	expect( function(){ createPerson("", new Date('2015/12/12'));}).toThrow(new Error("First name is required"));
    });

    it("null birth date should thorw an exception", function() {
    	expect( function(){ createPerson("Test Name", null);}).toThrow(new Error("Birth date is required"));
    });

    it("not date birth date should thorw an exception", function() {
    	expect( function(){ createPerson("Test Name", "not a date");}).toThrow(new Error("Birth date is required"));
    });

    function createPerson(firstName, birthDate) {
    	return new Person(firstName, birthDate);
    };
});

describe("Person verify present method", function() {

	it("Person well created should present him self in a right way", function() {
		var person = new Person("Pepon", new Date("1990/12/12"));

		expect(person.present()).toEqual("Hello, I'm Pepon and I born in Wed Dec 12 1990 00:00:00 GMT-0200 (ARST)");
	});
});