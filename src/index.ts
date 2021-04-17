import express, { Response, Request } from 'express';
import { router } from './routes/loginRoute'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

const app = express();

app.use(bodyParser.urlencoded({ extended:true }))
app.use(cookieSession({ keys: ['string'] }))

app.use(router)

app.listen(4000, () => {
    console.log(`Listening from port 4000`)
})