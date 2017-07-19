// module - создание анонимной самовызывающейся ф-ции с простым публичным api
// для хранения внутри нее свойств, методов и переменных,
// которые не дб доступны снаружи. Только через api
//var module = (function() {
//     ...
//     return { ... }
// }());

// Переменные внутри модуля недоступны в глобальной области видимости
// Модуль - изоляция переменных и функций
// т.е. создание приватных свойств и методов

// Присваивается в переменную. Используется замыкание - самовызывающаяся анонимная функция, которая замыкает
// приватные методы и свойства, чтобы вернуть ОБЪЕКТ

// Жесткая установка зависимостей
// Например, указываем что наш модуль имеет зависимость с jQuery.
// В параметрах вызова передаем саму библиотеку
// а в аргументах указываем то имя, которое удобно использовать
// внутри модуля (вместо jQuery или $)



var counterModule = (function (jq) {
    var counter = 0;
    var increaseCounter = function () {
        jq('div').text('dsfdsfdsfsd');
        counter++;
    };

    var getCounter = function () {
        console.log(this);
        return counter;
    };


    return {
		increaseCounter: increaseCounter,
        // getCounter: getCounter,
        //ИЛИ объявить внутри:
        getCounter: function () {
            console.log(this);
            return counter;
        }

	}
}($));




var basketModule = (function() {
    var goods = [];

    return {
        addGoods: function(item) {
           goods.push(item);
        },
        getGoods: function() {
            // for ( var i = 0; i < goods.length; i++) {
            //     console.log('name '+goods[i].name+' price '+goods[i].name);

            // }
            goods.forEach(function (item) {
                console.log('name '+item.name+' price '+item.name);
            });

        },
        getSum: function() {
            var sum=0;
            goods.forEach(function (item) {
                sum += item.price;
            });
            console.log(sum);
        }

    }
}());


var salt = {
    name: 'salt',
    price: 200
};
var sugar = {
    name: 'sugar',
    price: 750
};

basketModule.addGoods(salt);
basketModule.addGoods(sugar);
basketModule.getGoods();
basketModule.getSum();

