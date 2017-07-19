export class FooterModule {
    constructor(){
        this.addFooter();
    }

    addFooter() {
        $('body').append( $('<footer></footer>').html('<h2>I\'m footer</h2>'));
        console.log('footer');
    }
}
