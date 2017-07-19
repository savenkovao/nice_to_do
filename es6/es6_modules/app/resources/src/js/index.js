
import { PageModule } from './page.module';

class App {
    constructor() {
        this.pageModule = new PageModule();
    }
}

window.App = new App();