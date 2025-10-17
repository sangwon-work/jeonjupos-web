import {authInstance} from '../axios';

export const getOrderInfo = async (storetablepkey: number) => {
    return authInstance.get(`/order/info?storetablepkey=${storetablepkey}`);
};

export const getOrderFoodList = async (orderinfopkey: number) => {
    return authInstance.get(`/order/food/list?orderinfopkey=${orderinfopkey}`);
};

export const postFirstOrder = async (
    storetablepkey: number,
    orderfoodlist: { orderfoodpkey: number; foodpkey: number; ordercount: number; }[]
) => {
    return authInstance.post(`/order/first`, {storetablepkey, servicetype: 'DINEIN', orderfoodlist: orderfoodlist});
}

export const postReOrder = async (
    orderinfopkey: number,
    orderfoodlist: { orderfoodpkey: number; foodpkey: number; ordercount: number; }[]
) => {
    return authInstance.post(`/order/re`, {orderinfopkey, orderfoodlist: orderfoodlist});
}