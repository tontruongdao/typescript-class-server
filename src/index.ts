import express, { Response, Request } from 'express';
import { router } from './routes/loginRoute'

const app = express();

app.use(router)

app.listen(4000, () => {
    console.log(`Listening from port 4000`)
})