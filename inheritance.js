var Beverage = function(name, temp){
	this.name = name;
	this.temp = temp;
}
Beverage.prototype.drink = function(){
	console.log("Drinkin, "+ this.name +" & this is "+ this.temp);
}

var Coffe = function(type){
	Beverage.call(this,"Coffe","Hot"); // this will not take care of the prototype proterties if any
	this.type = type;
}
Coffe.prototype = Object.create(Beverage.prototype); //setting the prototype chain here
Coffe.prototype.sip = function(){
	console.log("Sipping "+ this.type);
}

var mocha = new Coffe("Mocha");