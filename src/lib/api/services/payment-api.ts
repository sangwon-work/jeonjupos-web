import {authInstance} from '../axios';

export const postPayment = async (orderinfopkey: number, paytype: 'CASH' | 'CARD', payamount: number) => {
    return authInstance.post(`/payment`, {orderinfopkey: orderinfopkey, paytype: paytype, payamount: payamount});
};