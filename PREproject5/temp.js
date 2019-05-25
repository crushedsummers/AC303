//Method 1: OOP

//creating objects - prototype
//performing object with few properties
//method a of creating object

function person(firstName, lastName, gender, age){
	//create object, has properties, refers to person
	//everything you put as parameters is put as properties
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = gender;
	this.age = age;
}

var personA = new person("Amy", "chan", "F", "16");
//it will look like: person {firstName: "Amy", lastName: "chan", gender: "F", age: "16"}

//you can inherit properties of different object- such as a twin
var amysTwin = Object.create(personA);
amysTwin.firstName = "Emily";

//create new object prototype
function teacher(firstName, lastName, gender, age, subject){
	//inherits properties of person
	//teacher is also person with additional properties
	person.call(this, firstName, lastName, gender, age);
	//this = teacher, you're calling teacher as person
	this.subject = subject;
}

var personB = new teacher ("Abby", "Lee", "F", 30, "English");
//
//
//
//Animal object with two properties (name, gender)
//Human also animal, three properties (name, gender, nationality)

function animal(name, gender){
	this.name = name;
	this.gender = gender;

	//behaviours
	this.eat = function(){
		console.log("hunger");
	}
}

var lion = new animal("Bob", "M");


function human(name, gender, nationality){
	animal.call(this, name, gender);
	this.nationality = nationality;
}

var personC = new human("Bobx2", "M", "Russian");





//Method 2: Syntax Sugar
class Person{
	//Function will only be called once
	//the first time you make obj
	//everyime you call new
	//assign values to properties
	constructor(firstName, lastName, gender, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	}
}

//basically person.call
class Teacher extends Person {
	constructor(firstName, lastName, gender, age, subject){
		super(firstName, lastName, gender, age);
		this.subject = subject;
	}
	greet(){
		console.log("Hello World");
	}
}
var teacherA = new Teacher("Mark", "Yo", "M", 30, "Math");







