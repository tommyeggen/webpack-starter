require('./scss/Main.scss');

class Init {

    constructor() {
        const app: any = document.querySelector('#app');
        app.innerHTML = "<h1>Woop</h1>" + "<p>It seems like webpack is working</p>"
    }

    static init() {
        new Init();
    }
}

Init.init();