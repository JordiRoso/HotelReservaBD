const router = require("express").Router();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const hotelRouter = require('./routes/hotel');
const reservaRouter = require('./routes/reserva');



router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/hotel', hotelRouter);
router.use('/reserva', reservaRouter);


module.exports = router;