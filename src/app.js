import 'jquery';
import 'lib-jquery-notification';
import 'lib-semantic-ui';

export class App {

    configureRouter(config, router) {
        config.title = 'ES6';
        config.map([{
            route: ['', 'welcome'],
            name: 'welcome',
            moduleId: './welcome',
            nav: true,
            title: 'Welcome'
        }]);

        this.router = router;
    }
}
