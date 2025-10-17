export type OrderInfo = {
    orderinfopkey: number;
    orderstatus: 'PAID' | 'UNPAID' | 'DINING';
    servicetype: 'DINEIN' | 'TAKEOUT' | 'DELIVERY';
    address: string;
    orderprice: number;
    cardprice: number;
    payprice: number;
    regdate: string;
}

export type OrderFoodList = {
    orderfoodpkey: number;
    foodpkey: number;
    foodname: string;
    saleprice: number;
    ordercount: number;
    totalprice: number;
}