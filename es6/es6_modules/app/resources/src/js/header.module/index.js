export class HeaderModule {
    constructor(){
        this.addHeader();
    }
    addHeader() {
        $('body').prepend($('<header></header>').html('<h1>I\'m header</h1>'));
        console.log('asdsadsa');
    }
}