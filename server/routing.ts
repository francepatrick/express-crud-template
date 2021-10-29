import PhoneRoutes from './app/phone/routes/phone.routes';

class Routing {
    public phoneRoutes: PhoneRoutes = new PhoneRoutes();

    init(app) {
        this.phoneRoutes.routes(app);
    }
}

export const routing = new Routing();
