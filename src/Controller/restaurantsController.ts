import express = require('express');
import { getAll, getByChef, getById, getByName, getPopular } from '../Service/restaurantsService';

export const getAllRestaurants = async () => {
    const res = await getAll();
    return res;
}

export const getRestaurantById = async (resId: number) => {
    const res = await getById(resId);
    return res;
}

export const getPopularRestaurants = async () => {
    const res = await getPopular();
    return res;
}

export const getRestaurantByName = async (resName: string) => {
    const res = await getByName(resName);
    return res;
}

export const getRestaurantByChef = async (chefId: number) => {
    const res = await getByChef(chefId);
    return res;
}
