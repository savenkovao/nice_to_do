import { HeaderModule } from '../header.module';
import { FooterModule } from '../footer.module';

export class PageModule {
    constructor(){
        this.sayHi();
        this.header = new HeaderModule();
        this.footer = new FooterModule();
    }

    sayHi() {
        console.log('hello from module');
        $('div').css({
            color: 'red',
            'font-size': '15px'
        });

        $('div').addClass('container');
    }

}