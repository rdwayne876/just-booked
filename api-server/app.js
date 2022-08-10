const express = require('express');
const morgan = require('morgan');
const app = express();
const authRouter = require( './routes/auth')
const providerRouter = require( './routes/provider')
const serviceRouter = require( './routes/service')
const userRouter = require( './routes/user')
const appointmentRouter = require( './routes/appointment')

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//Morgan
app.use((req, res, next) =>{
  switch (req.method){
    case 'DELETE':
        console.log(`\x1b[43m\x1b[1m[JUST-BOOKED API V1]\x1b[0m - \x1b[31m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'PUT':
        console.log(`\x1b[44m\x1b[4m[JUST-BOOKED API V1]\x1b[0m - \x1b[32m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'PATCH':
      console.log(`\x1b[43m\x1b[1m[JUST-BOOKED API V1]\x1b[0m - \x1b[34m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'POST':
      console.log(`\x1b[43m\x1b[1m[JUST-BOOKED API V1]\x1b[0m - \x1b[33m${req.method}\x1b[0m - ${req.path}`);
      break;
    case 'GET':
      console.log(`\x1b[43m\x1b[1m[JUST-BOOKED API V1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`);
      break;
    default:
      console.log(`\x1b[43m\x1b[1m[JUST-BOOKED API V1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`);
  }
  next();
})

//Routes
app.use( '/api/v1/auth', authRouter)
app.use( '/api/v1/providers', providerRouter)
app.use( '/api/v1/services', serviceRouter)
app.use( '/api/v1/users', userRouter)
app.use( '/api/v1/appointments', appointmentRouter)

module.exports = app;