var Beverage = function(){
	this._cost = 10;
}
Beverage.prototype.cost = function(){
	return this._cost;
}

// Creating decorator for my Beverage class
var BeverageDecoartor = function(beverage){
	Beverage.call(this);
	this.beverage = beverage;
}
BeverageDecoartor.prototype = Object.create(Beverage.prototype); // setting prototype chain
BeverageDecoartor.prototype.cost = function(){
	return this._cost + this.beverage.cost();
}

//Decorators
var small = function(beverage){
	BeverageDecoartor.call(this,beverage);
	this._cost = -1;
}
small.prototype = Object.create(BeverageDecoartor.prototype); // setting prototype chain

var sugar = function(beverage){
	BeverageDecoartor.call(this,beverage);
	this._cost = 5;
}
sugar.prototype = Object.create(BeverageDecoartor.prototype);// seting prototype chain


// create coffee object

var Coffee = new Beverage(); // cost would be 10 (base cost)
Coffee = new small(Coffee); // cost woluld be 9 (10 - 1) for small cofee
Coffee = new sugar(Coffee); // cost would be 14 (9 +5) for cod=fee with sugar
Coffee.cost();

