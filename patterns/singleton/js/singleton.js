// https://www.youtube.com/watch?v=0sbR6iOQkWM&index=4&list=PLIcAMDxr6tppz0MDTAj7aj23_E6FwrRfO#t=223.200423
// Singleton - подход, при котором класс может иметь только 1 экземпляр
// и 1 точка доступа к этому экземпляру

// В JS - подход, при котором объект может иметь только 1 экземпляр
// и есть какая-то точка доступа к этому экземпляру

var counterModule = (function() {
	var counter = 0;
	var instance;

	var getCounter = function() {
		return counter;
	};

	var increaseCounter = function() {
		counter++;
	};

	var createInstance = function() {
		return {
			getCounter: getCounter,
			increaseCounter: increaseCounter
		}
	};

	console.log(instance);

	return {
		getInstance: function() {
			return instance || (instance = createInstance());
		}
	}
}());

// Singleton при помощи замыкания
var Singleton = (function() {
	var instance;
	var SERVER = 'localhost';

	function Singleton() {
		if (!instance) {
			instance = this;
		} else {
			return instance;
		}
    }

    var sayHi = function () {
        console.log('hi');
    };

    Singleton.prototype.connect = function () {
    	sayHi();
		console.log('Connect ' + SERVER);
    };


	return Singleton;
}());

// function Singleton() {
// 	var instance = this;
// }

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1==s2);
s2.connect();