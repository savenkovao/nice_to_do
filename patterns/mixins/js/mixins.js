// https://www.youtube.com/watch?v=fCWRyUookBM&list=PLIcAMDxr6tppz0MDTAj7aj23_E6FwrRfO&index=2

$(function () {

// Устройство $.extend()
// ______________________________________________________________
	var extend = function(target){
		if(!arguments[1]) {
			return;
		}

		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			console.log(source);

			for (var prop in source) {

				// hasOwnProperty(prop) - свойство объекта, не его прототипа

				if(!target[prop] && source.hasOwnProperty(prop)){
					target[prop] = source[prop];
				}

			}

		}
	}

// ______________________________________________________________


	var Track = function(name){
		this.name = name;
	};

	// Track.prototype.getName = function () {
	// 	return this.name;
	// }

	// Track.prototype.play = function () {
	// 	console.log(this.name+' started playing');
	// }


	var Playlist = function(name){
		this.name = name;
	};

	// Playlist.prototype.getName = function () {
	// 	return this.name;
	// }

	// Playlist.prototype.play = function () {
	// 	console.log(this.name+' started playing');
	// }


// Общие (одинаковые) методы и свойства для разных по логике классов
// (классы абсолютно разные, нельзя экстендить друг от друга
// и не мб одного родительского класса)

var nameMixin = {
	sayHello: function() {
		console.log('Hello, I\'m nameMixin');
	},
	getName: function() {
		return this.name;
	}
};




var controlsMixin = {
	sayHello: function() {
		console.log('Hello, I\'m controlsMixin');
	},
	play: function() {
		console.log(this.name+' started playing');
	}
}

var myProto = {
	sayBye: function () {
		console.log('bye');
	}
}

var meMix = {
	getMe: function() {
		console.log('It\'s me!');
	},
	__proto__: myProto
}
// extends - es6 method
// $.extend() - jquery method (es5)
// используем $.extend()

// Подмешивание миксина

// $.extend(Track.prototype, nameMixin, controlsMixin);
// $.extend(Playlist.prototype, nameMixin, controlsMixin);

// через самописную ф-цию var extend в начале

extend(nameMixin, meMix);
extend(Track.prototype, nameMixin, controlsMixin);
extend(Playlist.prototype, nameMixin, controlsMixin);




var superTrack = new Track('Super track');
var coolPlaylist = new Playlist('Cool playlist');

console.log(superTrack);
console.log(superTrack.getName());
superTrack.play();
console.log(coolPlaylist);
console.log(coolPlaylist.getName());
coolPlaylist.play();
coolPlaylist.sayHello();















});