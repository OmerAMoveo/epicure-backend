import express = require('express');
const restaurantsRoutes = require('../Routes/restaurantsRoutes');
const dishesRoutes = require('../Routes/dishesRoutes');
const chefsRouter = require('../Routes/chefsRouter');

export const router = express.Router();

router.use('/restaurants', restaurantsRoutes);
router.use('/dishes', dishesRoutes);
router.use('/chefs', chefsRouter);

module.exports = router;
