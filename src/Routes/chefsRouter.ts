import express = require('express');
import { getAllChefs, getChefById, getRestaurantByChefId } from '../Controller/chefsController';
export const chefsRoutes = express.Router();

chefsRoutes.route('/getRestaurantsByChefId/:chefId')
.get(async (req: express.Request, res:express.Response)=> {
    const chefId = parseInt(req.params.chefId);
    const allDishes = await getRestaurantByChefId(chefId);
    res.send(allDishes);
})

chefsRoutes.route('/getChefById/:chefId')
.get(async (req: express.Request, res:express.Response)=> {
    const chefId = parseInt(req.params.chefId);
    const allDishes = await getChefById(chefId);
    res.send(allDishes);
})

chefsRoutes.route('/')
.get(async (req: express.Request, res:express.Response)=> {
    const allDishes = await getAllChefs();
    res.send(allDishes);
})

module.exports = chefsRoutes;
