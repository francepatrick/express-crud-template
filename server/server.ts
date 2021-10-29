import {config} from './config/config';
import app from './app';

const server = () => {
    app.listen(config.PORT, () => {
        console.log('Server started at localhost:' + config.PORT);
        console.log('Database:        ' + config.MONGO_URL);
    });
}

export default server();
