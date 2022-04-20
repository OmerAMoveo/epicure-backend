import express = require('express');
import { getAllDishes, getByRestaurantId, getDishById, getSignature } from '../Controller/dishesController';
export const dishesRoutes = express.Router();

dishesRoutes.route('/:resId/:dishName')
.get(async (req: express.Request, res:express.Response)=>{
    const restaurantId = parseInt(req.params.resId);
    const dishName = req.params.dishName;
    const allRes = await getDishById(restaurantId, dishName);
    res.send(allRes);
})

dishesRoutes.route('/getSignature')
.get(async (req: express.Request, res:express.Response)=>{
    const signatures = await getSignature();
    res.send(signatures);
})

dishesRoutes.route('/getByRestaurantId/:resId')
.get(async (req: express.Request, res:express.Response)=>{
    const restaurantId = parseInt(req.params.resId);
    const dishes = await getByRestaurantId(restaurantId);
    res.send(dishes);
})

dishesRoutes.route('/')
.get(async (req: express.Request, res:express.Response)=> {
    const allDishes = await getAllDishes();
    res.send(allDishes);
})

module.exports = dishesRoutes;
