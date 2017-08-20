var Person = function(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}
Person.prototype.greet = function(){
	return "Hey there, i am "+ this.firstName +" "+this.lastName;
}

var Gaurang = new Person("Gaurang","Manjrekar");
var Aman = new Person("Aman","Kulkarni");