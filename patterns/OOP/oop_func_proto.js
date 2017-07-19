// --------------------- functional style ---------------------

function AnimalF(name) {
  this.speed = 0;
  this.name = name;

  this.run = function(speed) {
    this.speed += speed;
  };
  this.stop = function() {
    this.speed = 0;
  };
}

function RabbitF(name) {
    AnimalF.apply(this, arguments);

    this.jump = function () {
        this.speed += 2;
    };
    this.run = function (speed) {
        this.speed += speed;
        this.jump();
    };
}

// ___________________________________________________
var animalF = new AnimalF('Зверь');
var rabbitF = new RabbitF('Кроль');





// --------------------- prototype style ---------------------
// ____________________________________________________________________________
function AnimalP(name) {
  this.name = name;
  this.speed = 0;
}

AnimalP.prototype.run = function(speed) {
  this.speed += speed;
};
AnimalP.prototype.stop = function() {
  this.speed = 0;
};


function RabbitP (name) {
    AnimalP.apply(this, arguments);
}

RabbitP.prototype = Object.create(AnimalP.prototype);
RabbitP.prototype.constructor = RabbitP;
RabbitP.prototype.jump = function () {
    this.speed += 2;
};
RabbitP.prototype.run = function (speed) {
    AnimalP.prototype.run.apply(this);
    this.jump();
};

// ___________________________________________________
var animalP = new AnimalP('Зверь');
var rabbitP = new RabbitP('Кроль');


// ____________________________________________________________________________


// Чем прототипное задание класса лучше и хуже функционального стиля?
//
// Достоинства
// Функциональный стиль записывает в каждый объект и свойства и методы, а
// прототипный – только свойства. Поэтому прототипный стиль – быстрее и
// экономнее по памяти.

// Недостатки
// При создании методов через прототип, мы теряем возможность использовать
// локальные переменные как приватные свойства, у них больше нет общей
// области видимости с конструктором.

// При задании методов в прототипе мы не сможем её так оставить, ведь
// методы находятся вне конструктора, у них нет общей области видимости,
// поэтому приходится записывать name в сам объект, обозначив его как защищённое:


// function Animal(name) {
//   this._name = name;
// }
//
// Animal.prototype.sayHi = function() {
//   alert( this._name );
// }
//
// var animal = new Animal("Зверь");
// animal.sayHi(); // Зверь

// Зачастую вызов конструктора имеет какие-то побочные эффекты,
// например влияет на документ. Если конструктор родителя имеет какое-то поведение,
// которое нужно переопределить в потомке, то в функциональном стиле это невозможно.

// Иначе говоря, в функциональном стиле в процессе создания Rabbit нужно обязательно
// вызывать Animal.apply(this, arguments), чтобы получить методы родителя – и если
// этот Animal.apply кроме добавления методов выполняет какой-то ненужный потомку метод,
// то это проблема - лишний функционал трудно убрать
// Этой проблемы нет в прототипном подходе, потому что в процессе создания new Rabbit
// мы вовсе не обязаны вызывать конструктор родителя. Ведь методы находятся в прототипе.

// Прототипный подход стоит предпочитать функциональному как более быстрый и универсальный.