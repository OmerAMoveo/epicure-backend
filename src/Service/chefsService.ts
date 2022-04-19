import { where } from "sequelize/types";
import { Chefs, Restaurant } from "./sqlService";

export const getAll = async () => {
    const res = await Chefs.findAll();
    return res;
}

export const getRestaurantsByChefId = async (chefId: number) => {
    const res = await Restaurant.findAll({where: {
        chef_id: chefId
    }});
    return res;
}

export const getById = async (chefId: number) => {
    const res = await Chefs.findAll({where: {
        id: chefId
    }});
    return res;
}