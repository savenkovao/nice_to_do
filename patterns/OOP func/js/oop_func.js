// OOP in functional style

//constructor function
function CoffeeMachine(power, capacity) {


//	Inheritance
// 	Machine.call(this);
	Machine.apply(this, arguments);


// puplic property
// this.waterAmount = 0;

// private property
    var waterAmount = 0;

    this.getWaterAmount = function(){
        return waterAmount;
    };

    this.setWaterAmount = function(amount) {

        if(amount<0) {
            throw new Error('Отрицательное число нельзя');
        } else if (amount>this._capacity) {
            throw new Error('Слишком много воды для объема - '+this._capacity);
        }

        waterAmount = amount;
    };

    // Единый геттер-сеттер

    this.waterAmount = function(amount) {
        if (!arguments.length) {
            return waterAmount;
        } else if(amount<0){
            throw new Error('Отрицательное число нельзя');
        } else if (amount>this._capacity){
            throw new Error('Слишком много воды для объема - '+this._capacity);
        }

        waterAmount = amount;
    };

// public method
    this.run = function() {
        // setTimeout( onReady, getBoilTime.call(this) );
        setTimeout( onReady, getBoilTime.bind(this) );
    };

// Const
    var WATER_HEAT_CAPACITY = 4200;
// private methods


    var self = this;
    function getBoilTime() {
        // getBoilTime получает self из замыкания
        // return self.waterAmount*WATER_HEAT_CAPACITY*80/power;
        return waterAmount*WATER_HEAT_CAPACITY*80/this._power;
    };

    // var getBoilTime = function() {
    // 	return this.waterAmount*WATER_HEAT_CAPACITY*80/power;
    // }.bind(this);

    function onReady() {
        console.log('Кофе готов!');
    };

    //Переопределение метода (не кардинальное)
    //Не конкретное переопределение,а добавление нового функционала

    var parentEnable = this.enable;

    this.enable = function () {
		parentEnable.call(this);
		this.run();

    }

}


function Machine(power, capacity) {
    // var enabled = false;
	this._enabled = false;
	this._power = power;
	this._capacity = capacity;

    this.enable = function() {
        // enabled = true;
        this._enabled = true;

        // console.log('enabled - '+ enabled);
        console.log('enabled - '+ this._enabled);
        setTimeout(function(){
            console.log('enabled - '+ this._enabled);
        	console.log('Устройство включено');
        return}.bind(this), 0);
    };

    this.disable = function () {
        // enabled = false;
        // console.log('enabled - '+ enabled);
		this._enabled = false;
        console.log('enabled - '+ this._enabled);

        setTimeout(function(){
        	console.log('Устройство выключено');
        return}, 1000);
    }
}


var coffeeMachine = new CoffeeMachine(20000, 100);
//Inherited method
coffeeMachine.enable();

// coffeeMachine.waterAmount = 10;
coffeeMachine.setWaterAmount(50);
console.log(coffeeMachine.getWaterAmount());
coffeeMachine.run();


//Inherited method
coffeeMachine.disable();