var pubSub = (function(){
	var collection = [];

	var _subscribe = function(key,fn){
		if(!collection[key]){
			collection[key] = [];
		}
		collection[key].push(fn);
	};

	var _publish = function(key){
		for(var i = 0; i<collection[key].length; i++){
			collection[key][i](key);
		}
	}

	return {
		subscribe: _subscribe,
		publish: _publish
	}
}());

pubSub.subscribe("pageLoad",function(key){
	console.log(key+ " isthe event triggered");
})

pubSub.subscribe("dataLoaded",function(key){
	console.log(key+ " isthe event triggered");
})
pubSub.subscribe("dataLoaded",function(key){
	console.log(key+ " isthe event triggered");
})
pubSub.subscribe("dataLoaded",function(key){
	console.log(key+ " isthe event triggered");
})
pubSub.subscribe("dataLoaded",function(key){
	console.log(key+ " isthe event triggered");
})

//pubSub.publish("pageLoad");