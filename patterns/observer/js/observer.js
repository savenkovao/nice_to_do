
// Observer - наблюдатель
// Observable - наблюдаемый объект. Содержит список наблюдателей (observers).
// Оповещает всех наблюдателей, при изменениях

// [Observer] - массив объектов-наблюдателей, которые подписаны на изменения
// в Observable

// функциональный стиль

// Observable
function Observable() {
    var observers = [];
    this.sendMessage = function ( msg ) {
      for (var i = 0; i < observers.length; i++){
          observers[i].notify( msg );
      }
    };

    this.addObserver = function ( observer ) {
        observers.push( observer );
    }
}

// Observer

function Observer( behaviour ) {
    this.notify = function ( msg ) {
        behaviour( msg );
    };
}

var observable = new Observable();

var obs1 = new Observer(function (msg) { console.log(msg); });
var obs2 = new Observer(function (msg) { console.log(msg + ' - I added some text. I have my own behaviour!'); });

observable.addObserver(obs1);
observable.addObserver(obs2);

setTimeout(function () {
    observable.sendMessage('Current time ' + new Date());
}, 3000);

$(function () {
    $('.btn').on('click', function () {
        observable.sendMessage('Current time ' + new Date());
    });
});







$(function () {
    function Observable() {
        var observers = [];

        this.addObserver = function ( observer ) {
            observers.push( observer );
        };

        this.sendMessage = function ( msg ) {
            observers.forEach(function (item) {
                item.notify( msg );
            })
        };
    }

    function Observer( behaviour ) {
        this.notify = function ( msg ) {
            behaviour( msg );
        }
    }


    var basketObs = new Observer(function (id) {
        $('.basket__products-list').append(
            $('<li></li>')
                .addClass('basket__product')
                .text('Товар '+id)
        );
    });

    var modalObs = new Observer(function ( id ) {
        var msg = "Товар " + id + " добавлен в корзину!";
        $('.buy-modal__message').text( msg );

        $('.buy-modal').fadeIn();

        setTimeout(function () {
            $('.buy-modal').fadeOut();
        }, 2000);
    });

    var serverObs = new Observer(function ( id ) {
        console.log( "id: "+id );
    });

    // Наблюдаемый объект. Его изменения инициализирует клик по кнопке
    var observable = new Observable();

    // Подписка объектов на изменения в Observable
    observable.addObserver( basketObs );
    observable.addObserver( modalObs );
    observable.addObserver( serverObs );


    $('.btn').on('click', function () {
        var id = $(this).attr('data-id');
        observable.sendMessage( id );
    });

});

