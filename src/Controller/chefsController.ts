import { getAll, getById, getRestaurantsByChefId } from "../Service/chefsService";

export const getAllChefs = async () => {
    const chefs = await getAll();
    return chefs;
}

export const getRestaurantByChefId = async (chefId: number) => {
    const res = await getRestaurantsByChefId(chefId);
    return res;
}

export const getChefById = async (chefId: number) => {
    const res = await getById(chefId);
    return res;
}
