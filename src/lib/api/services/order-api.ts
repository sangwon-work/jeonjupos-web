import {authInstance} from '../axios';

export const getOrderInfo = async (storetablepkey: number) => {
    return authInstance.get(`/order/info?storetablepkey=${storetablepkey}`);
};

export const getOrderFoodList = async (orderinfopkey: number) => {
    return authInstance.get(`/order/food/list?orderinfopkey=${orderinfopkey}`);
};