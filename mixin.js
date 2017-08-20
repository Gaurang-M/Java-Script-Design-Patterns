function Person(name){
	this.name = name;
}

function Dog(name){
	this.name = name;
}

var mover = {
	run : function(){
		console.log(this.name+ "is running");
	},
	walk : function(){
		console.log(this.name+ "is walking");
	}
}

var arithmatic = {
	add : function(){
		console.log(this.name+ "is adding");
	}
}


// jQuery has itz own API to do the same i.i jQuery.extend.
var extend = function(){
	if(!arguments[1]){
		return;
	}

	var target = arguments[0];

	for(var i=1, ll = arguments.length; i<ll ; i++){
		var source = arguments[i];
		for(var prop in source){
			if(!target[prop] && source.hasOwnProperty(prop)){
				target[prop] = source[prop]
			}
		}
	}

	return target;
}


var PersonObj = extend(new Person("Gaurang"), mover, arithmatic);
var DogObj = extend(new Dog("Tommy"), mover);
