import { log } from 'console';
import app from './app';
import config from './config';


app.listen(config.PORT, () => {
    log(`Listening on http://localhost:${config.PORT}`);
});