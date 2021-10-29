import express from 'express'
import cors from 'cors'
import route from './src/routes' 

const app = express();
const CORS = cors()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(CORS)
route(app)

const port = 5000;

app.listen(port, () => {
  console.log('App is now running at port ', port)
})