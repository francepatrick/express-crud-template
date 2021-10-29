import {PhoneController} from '../controller/phone.controller';
import {phoneMiddleware} from '../middleware/phone.middleware';

class PhoneRoutes {

    public phoneRoutes: PhoneController = new PhoneController();
    public bindController = this.phoneRoutes;

    public routes(app) {
        app.route('/phone-numbers').get(this.phoneRoutes.get.bind(this.bindController))
        app.route('/phone-number').post(phoneMiddleware, this.phoneRoutes.add.bind(this.bindController))
        app.route('/phone-number/:phone').put(phoneMiddleware, this.phoneRoutes.update.bind(this.bindController))
        app.route('/phone-number/:phone').delete(this.phoneRoutes.delete.bind(this.bindController))
    }
}

export default PhoneRoutes;
