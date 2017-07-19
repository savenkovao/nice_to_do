//OOP in prototype style
// прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.

// спецификация ECMAScript – свойство __proto__ обозначено в ней как [[Prototype]].
// Двойные квадратные скобки здесь важны, чтобы не перепутать его с совсем
// другим свойством, которое называется prototype

//
// var animal = {
// 	eats: true
// };
//
// var rabbit = {
// 	jumps: true,
// 	__proto__: animal
// };
//
// // rabbit.__proto__= animal;
//
// console.log(rabbit.eats);
// console.log(rabbit.jumps);
//
// for (var key in rabbit) {
// 	console.log(key+' - '+rabbit[key]);
// }

// console.log('hasOwnProperty eats - '+rabbit.hasOwnProperty('eats'));
// console.log('hasOwnProperty jumps - '+rabbit.hasOwnProperty('jumps'));
//
// for (var key in rabbit) {
// 	if(rabbit.hasOwnProperty(key)){
//         console.log(key+' - '+rabbit[key]);
//     }
// }

// ___________________________________________________________________

// var data = Object.create(null);
// data.text = "Привет";
// Объект, создаваемый при помощи Object.create(null) не имеет прототипа,
// а значит в нём нет лишних свойств. Для коллекции – как раз то, что надо.
// //создание объекта без прототипа - коллекция ключ-значение

// var data = Object.create(null);
// data.text='lorem';
// console.log(data.text);
// console.log(data.toString);
// console.log(data);

// ___________________________________________________________________
//

// Чтобы новым объектам автоматически ставить прототип, конструктору
// ставится свойство prototype.
// При создании объекта через new, в его прототип __proto__
// записывается ссылка из prototype функции-конструктора.

// var neDataProto = {
// 	protoText: 'sdsadsadsad'
// };
// var neData = {
// 	text: 'werewrwerew'
// };
//
// // console.log(neData.toString);
// // console.log(Object.getPrototypeOf(neData));
// console.log(Object.setPrototypeOf(neData, neDataProto));
// console.log(Object.getPrototypeOf(neData));

//
// Свойство prototype имеет смысл только у конструктора
// Свойство с именем prototype можно указать на любом объекте, но особый смысл
// оно имеет, лишь если назначено функции-конструктору.
// Само по себе, без вызова оператора new, оно вообще ничего не делает, его
// единственное назначение – указывать __proto__ для новых объектов.

// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
// "При создании объекта через new Rabbit запиши ему __proto__ = animal".
// Значением prototype может быть только объект
// Технически, в это свойство можно записать что угодно.

// Однако, при работе new, свойство prototype будет использовано лишь
// в том случае, если это объект. Примитивное значение, такое как
// число или строка, будет проигнорировано.



// var animal = {
// 	eats: true
// };
// Rabbit.prototype = animal;
//
// function Rabbit(name){
// 	this.name=name;
// 	// this.prototype = animal;
// }
//
// // Rabbit.prototype = {
// //     jumps: true,
// //     constructor: Rabbit
// // };
//
// Rabbit.prototype.jumps = true;
//
//
// var rabbit = new Rabbit('bunny');
// // var newRabbit = new rabbit.constructor('neBunny')
// console.log(rabbit);
// console.log(Rabbit);
//
// // console.log(rabbit.__proto__);
// // console.log(Rabbit.prototype);
// // console.log(Rabbit.__proto__);
//
// // console.log(Object.getOwnPropertyNames(Rabbit.prototype));
// // console.log(Rabbit.prototype.coonstructor == Rabbit);
// // console.log(newRabbit);



// Прототип __proto__ новых объектов, создаваемых через new Person,
// можно задавать при помощи свойства Person.prototype функции конструктора.

// Значением Person.prototype по умолчанию является объект с
// единственным свойством constructor, содержащим ссылку на Person.
// Его можно использовать, чтобы из самого объекта получить функцию,
// которая его создала. Однако, JavaScript никак не поддерживает
// корректность этого свойства, поэтому программист может его изменить или удалить.



// ______________________________________________________________________

// «Псевдоклассом» или, более коротко, «классом», называют функцию-конструктор
// вместе с её prototype. Такой способ объявления классов называют «прототипным стилем ООП».

//При наследовании часть методов переопределяется, например, у массива Array есть свой toString,
// который выводит элементы массива через запятую

//Вызов методов через call и apply из прототипа:

// function showList() {
//     alert( [].join.call(arguments, " - ") );
//     alert( Array.prototype.join.call(arguments, " - ") );
// }
//
// showList("Вася", "Паша", "Маша");

//Примитивы не являются объектами, но методы берут из соответствующих прототипов:
// Number.prototype, Boolean.prototype, String.prototype.

//По стандарту, если обратиться к свойству числа, строки или логического значения,
// то будет создан объект соответствующего типа, например new String для строки,
// new Number для чисел, new Boolean – для логических выражений.

// Далее будет произведена операция со свойством или вызов метода по обычным правилам,
// с поиском в прототипе, а затем этот объект будет уничтожен.

// Методы встроенных объектов хранятся в их прототипах.
// Встроенные прототипы можно расширить или поменять.
// Добавление методов в Object.prototype, если оно не сопровождается Object.defineProperty с установкой enumerable (IE9+), «сломает» циклы for..in, поэтому стараются в этот прототип методы не добавлять.
// Другие прототипы изменять менее опасно, но все же не рекомендуется во избежание конфликтов.
// Отдельно стоит изменение с целью добавления современных методов в старые браузеры, таких как Object.create, Object.keys, Function.prototype.bind и т.п. Это допустимо и как раз делается es5-shim.


// ______________________________________________________________________
//Свои классы на прототипах
// 1. Объявить функцию-конструктор.
// 2. Записать методы и свойства, нужные всем объектам класса, в prototype.


function Animal(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.run = function (speed) {
    this.speed = speed;
    console.log('Speed changed on - '+this.speed);
};

Animal.prototype.stop = function () {
    this.speed = 0;
    console.log("Stop! Speed - "+this.speed);
};

var animal = new Animal('Coca');






function Rabbit(name) {
    //call to parent class (name & speed)
    // Такой вызов запустит функцию Animal в контексте текущего объекта,
    // со всеми аргументами, она выполнится и запишет в this всё, что нужно.
    Animal.apply(this, arguments);
}

// Inheritance
// Метод Object.create() создаёт новый объект с указанными объектом прототипа и свойствами.
// Object.create(proto[, propertiesObject])
// т.е. создание новго объекта класса Animal

Rabbit.prototype = Object.create(Animal.prototype);
//Итак, Rabbit наследует Animal. Теперь если какого-то метода нет в Rabbit.prototype –
// он будет взят из Animal.prototype.


// Желательно и constructor сохранить
Rabbit.prototype.constructor = Rabbit;


Rabbit.prototype.jump = function () {
    this.speed++;
    console.log(this.name + ' jumps! Speep increased - ' + this.speed);
};


// Переопределение метода родительского класса
Rabbit.prototype.run = function (speed) {
    this.speed = speed * 2;
    this.jump();
};

// Более частая ситуация – когда мы хотим не просто заменить метод на свой,
// а взять метод родителя и расширить его.
// Скажем, кролик бежит так же, как и другие звери, но время от времени подпрыгивает.

Rabbit.prototype.run = function() {
    // вызвать метод родителя, передав ему текущие аргументы
    Animal.prototype.run.apply(this, arguments);
    this.jump();
};





var rabbit = new Rabbit('Vasya');


// Неправильный вариант: Rabbit.prototype = new Animal
// В некоторых устаревших руководствах предлагают вместо Object.create(Animal.prototype)
// записывать в прототип new Animal, вот так:

// // вместо Rabbit.prototype = Object.create(Animal.prototype)
//   Rabbit.prototype = new Animal(); - неправильно

// Частично, он рабочий, поскольку иерархия прототипов будет такая же, ведь new Animal –
// это объект с прототипом Animal.prototype, как и Object.create(Animal.prototype).
// Они в этом плане идентичны.

// Но у этого подхода важный недостаток. Как правило мы не хотим создавать Animal,
// а хотим только унаследовать его методы!

// Более того, на практике создание объекта может требовать обязательных аргументов,
// влиять на страницу в браузере, делать запросы к серверу и что-то ещё,
// чего мы хотели бы избежать. Поэтому рекомендуется использовать вариант с Object.create.

// порядок поиска свойств и методов должен быть таким:
// rabbit -> Rabbit.prototype -> Animal.prototype
