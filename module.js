/*
This is the worng to the achieve the scenario !!

var dom = {
	counter: 0,
	generateId : function(){
		return "customId"+ this.counter++;
	},
	create : function(tagName){
		var ele = document.createElement(tagName);
		ele.id = this.generateId();
		return ele;
	}
}*/

//correct way is by creating a module (closures)

var dom = (function(){
	var counter = 0;
	var generateId = function(){
		return "customId"+ counter++;
	};
	var _create = function(tagName){
		var ele = document.createElement(tagName);
		ele.id =  generateId();
		return ele;
	}
	return {
		create : _create
	}
}())

// console.log(dom.create("div"));
// console.log(dom.create("div"));

dom.counter = "cool";

// console.log(dom.create("div"));
// console.log(dom.create("div"));
// console.log(dom.create("div"));
// console.log(dom.create("div"));
