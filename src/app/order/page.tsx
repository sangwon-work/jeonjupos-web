'use client'

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import OrderList from "@/components/order/OrderList";
import KeyPad from "@/components/order/KeyPad";
import PaymentSummary from "@/components/order/PaymentSummary";
import CategoryMenuList from "@/components/order/CategoryMenuList";
import ActionButtons from "@/components/order/ActionButtons";
import {getOrderFoodList, getOrderInfo, postFirstOrder, postReOrder} from "@/lib/api/services/order-api";
import {postPayment} from "@/lib/api/services/payment-api";

export default function OrderPage() {
    const searchParams = useSearchParams();
    const [orderinfo, setOrderinfo] = useState<any>(null);
    const [orderfoodlist, setOrderfoodlist] = useState<any>([]);
    const [totalordercount, setTotalordercount] = useState(0);
    const [totalprice, setTotalprice] = useState(0);
    const [inputValue, setInputValue] = useState<number>(0);
    const [orderprice, setOrderprice] = useState<number>(0);
    const [payprice, setPayprice] = useState<number>(0);
    const [payon, setPayon] = useState<boolean>(false);

    const router = useRouter();

    const storetablepkey: number = Number(searchParams.get("storetablepkey") ?? 0);

    useEffect(() => {
        // 주문서 상세 및 주문상품 목록 조회
        fetchOrderInfo();
    }, [payon])

    // 주문버튼 클릭
    const handleOrder = async () => {
        if (orderinfo === null) {
            // 첫 주문
            try {
                const req_orderfoodlist = orderfoodlist.map((orderfood: any) => {
                    return {
                        orderfoodpkey: orderfood.orderfoodpkey,
                        foodpkey: orderfood.foodpkey,
                        ordercount: orderfood.ordercount,
                    }
                })
                const response = await postFirstOrder(storetablepkey, req_orderfoodlist);
                if (response.status === 200 && response.data.rescode === '0000') {
                    router.replace('/store-table');
                } else {
                    alert(response.data.message);
                }
            } catch (err) {
                console.error(err);
            }
        } else {
            // 재 주문
            try {
                const req_orderfoodlist = orderfoodlist.map((orderfood: any) => {
                    return {
                        orderfoodpkey: orderfood.orderfoodpkey,
                        foodpkey: orderfood.foodpkey,
                        ordercount: orderfood.ordercount,
                    }
                })
                const response = await postReOrder(orderinfo.orderinfopkey, req_orderfoodlist);
                if (response.status === 200 && response.data.rescode === '0000') {
                    // router.replace('/store-table');
                } else {
                    alert(response.data.message);
                }
            } catch (err) {
                console.error(err);
            }
        }
        // router.replace('/store-table')
    }

    // 메뉴 추가
    const handleFoodAction = (foodpkey: number, foodname: string, saleprice: number) => {
        setTotalordercount(totalordercount + 1);
        setTotalprice(totalprice + saleprice);

        setOrderfoodlist((prev: any) => {
            const idx = prev.findIndex(
                (of: any) => of.foodpkey === foodpkey
            );

            if (idx > -1) {
                const cur = prev[idx];
                const price = Number(cur.saleprice); // 혹시 문자열일 수 있으니 숫자화
                const nextCount = (cur.ordercount ?? 0) + 1;

                const updated = {
                    ...cur,
                    ordercount: nextCount,
                    totalprice: price * nextCount,
                };

                const next = [...prev];
                next[idx] = updated;
                return next;
            }

            const price = Number(saleprice);
            return [
                ...prev,
                {
                    orderfoodpkey: 0,
                    foodpkey,
                    foodname: `${foodname}`,
                    saleprice: price,
                    ordercount: 1,
                    totalprice: price,
                },
            ];
        });
    }

    // 주문수량 변경
    const updateOrderCountAction = (foodpkey: number, type: 'plus' | 'minus') => {
        setOrderfoodlist((prev: any) => {
            const idx = prev.findIndex(
                (of: any) => of.foodpkey === foodpkey
            );

            if (idx > -1) {
                const cur = prev[idx];
                const price: number = Number(cur.saleprice); // 혹시 문자열일 수 있으니 숫자화
                let nextCount: number = cur.ordercount ?? 0;
                if (nextCount > 0) {
                    if (type === 'plus') {
                        setTotalordercount(totalordercount + 1);
                        setTotalprice(totalprice + price);
                        nextCount = (cur.ordercount ?? 0) + 1;
                    } else {
                        setTotalordercount(totalordercount - 1);
                        setTotalprice(totalprice - price);
                        nextCount = (cur.ordercount ?? 0) - 1;
                    }

                    const updated = {
                        ...cur,
                        ordercount: nextCount,
                        totalprice: price * nextCount,
                    };

                    const next = [...prev];
                    next[idx] = updated;

                    return next;
                } else {
                    return [...prev];
                }
            }
        });
    }

    // 주문정보 조회
    const fetchOrderInfo = async () => {
        try {
            const response = await getOrderInfo(storetablepkey);
            if (response.status === 200 && response.data.rescode === '0000') {
                const { orderinfo } = response.data.body;
                setOrderinfo(orderinfo);
                if (orderinfo !== null) {
                    setOrderprice(orderinfo.orderprice);
                    setPayprice(orderinfo.payprice);
                    // 주문 메뉴 목록 조회
                    const orderFoodResponse = await getOrderFoodList(orderinfo.orderinfopkey);
                    setOrderfoodlist(orderFoodResponse.data.body.orderfoodlist);
                    setTotalordercount(orderFoodResponse.data.body.totalordercount);
                    setTotalprice(orderFoodResponse.data.body.totalprice);
                    return;
                } else {
                    return;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Keypad에서 Enter 클릭 시 결제정보 받은금액 값 변경
    const onEnterKeyClickAction = (value: number) => {
        setInputValue(value);
    }

    // 결제
    const onPayAction = async (paytype: 'CASH' | 'CARD') => {
        // 재 주문
        try {
            const req_orderfoodlist = orderfoodlist.map((orderfood: any) => {
                return {
                    orderfoodpkey: orderfood.orderfoodpkey,
                    foodpkey: orderfood.foodpkey,
                    ordercount: orderfood.ordercount,
                }
            })
            const response = await postReOrder(orderinfo.orderinfopkey, req_orderfoodlist);
            if (response.status === 200 && response.data.rescode === '0000') {
                // router.replace('/store-table');
            } else {
                alert(response.data.message);
                return;
            }
        } catch (err) {
            console.error(err);
            return;
        }

        // 받을 금액 orderprice - payprice;
        let totaldueamount: number = orderprice - payprice;
        let payamount: number;
        if (inputValue === 0) {
            payamount = totaldueamount;
        } else {
            if (inputValue >= totaldueamount) {
                payamount = totaldueamount;
            } else {
                payamount = inputValue;
            }
        }

        try {
            const response = await postPayment(orderinfo.orderinfopkey, paytype, payamount);
            console.log(response);
            if (response.status === 200 && response.data.rescode === '0000') {
                router.replace('/store-table');
            } else {
                setPayon(!payon);
                setInputValue(0);
                alert(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const onCancelPayAction = () => {
        router.replace('/store-table')
    }

    return (
        <div className='h-[calc(100dvh-5.5rem)] p-4 flex gap-2'>
            <div className='flex-[3] flex flex-col gap-2'>
                <OrderList updateOrderCountAction={updateOrderCountAction} orderfoodlist={orderfoodlist} totalordercount={totalordercount} totalprice={totalprice}/>
                <div className='flex gap-2 h-[1rem] sm:h-[15rem] md:h-[15rem] lg:h-[23rem] xl:h-[28rem]'>
                    <PaymentSummary inputValue={inputValue} orderprice={orderprice} payprice={payprice}/>
                    <KeyPad onEnterKeyClickAction={onEnterKeyClickAction}/>
                </div>
            </div>
            <div className='flex flex-col flex-[4] gap-2'>
                <CategoryMenuList handleFoodAction={handleFoodAction}/>
                <ActionButtons
                    handleOrder={handleOrder}
                    onPayAction={onPayAction}
                    onCancelPayAction={onCancelPayAction}
                />
            </div>
        </div>
    )
}