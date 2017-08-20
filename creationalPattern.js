// 1
var obj = {
	firstName: "Gaurang",
	lastName: "Manjrekar"
};

//2
var obj1 = {};
obj1.firstname = "Gaurang";
obj1.lastName = "Manjrekar";


//3
var obj2 = {};
obj2["firstname"] = "Gaurang";
obj2["lastName"] = "Manjrekar";


//4
var obj3 = {};
Object.defineProperty(obj3,"firstName",{
	"value": "Gaurang"
})
Object.defineProperty(obj3,"lastName",{
	"value": "Manjrekar"
})

//5
var obj4 = {};
Object.defineProperties(obj4,{
	"firstName" : {
		"value": "Gaurang"
	},
	"lastName" :  {
		"value": "Manjrekar"
	}
});

//6 == creating from empty obj
var obj5 = Object.create({},{
	"firstName":{
		"value": "Gaurang"
	},
	"lastName":{
		"value": "Manjrekar"
	}
});

//7 == creating from existing obj
var tempObj = {
	firstName : "Gaurang",
	lastname : "Manjrekar"
}
var obj6 = Object.create(tempObj)


//8 == overiding the value
var obj7 = Object.create(tempObj,{
	"firstName":{
		"value": "Nikita"
	}
})






