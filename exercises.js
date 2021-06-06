// Objects 

// 1. Create an object literal ‘person’ that contains the keys firstname, lastname, place of birth and country - give them some related values
//  a) Console.log the object ‘person’
//  b) Console.log the country property of the object ‘person’
//  c) Console.log the ‘place of birth’ property of the ‘person’ object

const person = {
	firstName: 'Marc',
	lastName: 'Pulumbarit',
	placeOfBirth: 'Sydney',
	country: 'Australia'
}

console.log(person);
console.log(person.country);
console.log(person.placeOfBirth);

// 2. Create an object in Javascript named ‘school’ that contains the keys ‘name’,’location’,’established year’ - give them some related values
// a) Console.log the school name and location
// b) Console.log the established year
// c) To that ‘school’ object, add a function ‘displayInfo’ to log to the console “My school ____ was established in ___ at ____”
//filling the blanks with the relevant values - Do the above using the ‘this’ keyword
// d) Call the function ‘displayInfo’
// e) Mutate the school object to add a boolean value called graduated and set it to true or false.
// f) Console.log the school object

const school = {
	name: 'Good Samaritan',
	location: 'Hinchinbrook',
	establishedYear: 1990,
	displayInfo() {
		console.log(`My school ${this.name} was established in ${this.establishedYear} at ${this.location}`)
	}

}

console.log(school.name, school.location, school.establishedYear);
school.displayInfo();
school.graduated = true;

console.log(school)

// Classes
// Create a class called person
class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}

// 1. create a static method for creating an Anonymous person
//  a) this should give a name variable as John Doe or Jane Doe depending on a gender parameter (hint: use if else or ternary opertors)
//  b) it should then return a new instance of person with this name

	static anonymousPerson(gender) {
		let name;
		// if (gender === 'm') {
		// 	 name = 'John Doe'
		// } else if (gender === 'f') {
		// 	name = 'Jane Doe'
		// }

		gender === "m" ? name = 'John Doe' : name = 'Jane Doe';
		return  new Person(name);
	}
	
}

// 2. use the static method and save it to a variable and console log it


let anonymousPerson = Person.anonymousPerson('f');
console.log(anonymousPerson);

