// Оператор obj instanceof Func проверяет тот факт, что obj является результатом
// вызова new Func. Он учитывает цепочку __proto__, поэтому наследование поддерживается.

// Оператор instanceof особенно востребован в случаях, когда мы работаем с
// иерархиями классов. Это наилучший способ проверить принадлежность тому или
// иному классу с учётом наследования.


function Machine(name) {
    this.name = name;
    this.speed = 0;
}

Machine.prototype.run = function(speed) {
    this.speed += speed;
    console.log(this.speed);
};

Car.prototype = Object.create(Machine.prototype);
function Car (name, price) {
    this.price = price;
    Machine.apply(this, arguments);
}

SuperCar.prototype = Object.create(Car.prototype);
function SuperCar(name, price, seats) {
    this.seats = seats;
    Car.apply(this, arguments)
}


var myCar = new Car('Honda', 324);
var mySuperCar = new SuperCar('Mozeratti', 4545400, 2);

console.log(myCar instanceof Car);
console.log(mySuperCar);

