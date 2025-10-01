'use client'

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import OrderList from "@/components/order/OrderList";
import KeyPad from "@/components/order/KeyPad";
import PaymentSummary from "@/components/order/PaymentSummary";
import CategoryMenuList from "@/components/order/CategoryMenuList";
import ActionButtons from "@/components/order/ActionButtons";

export default function OrderPage() {
    const [orderlist, setOrderlist] = useState<any>({});
    const searchParams = useSearchParams();
    const router = useRouter();

    const storetablepkey = searchParams.get("storetablepkey");

    useEffect(() => {
        // TODO 주문서 상세 및 주문상품 목록 조회
        console.log(storetablepkey);
        setOrderlist(
            {
                orderinfopkey: 1,
                servicetype: 'DINEIN',
                orderstatus: 'PAID',
                address: '서울 구로구 가마산로 231 보광아파트 6동 404호',
                orderfoodlist: [
                    {
                        orderfoodpkey: 1,
                        foodname: '칼국수',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 2,
                        foodname: '김치찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    },
                    {
                        orderfoodpkey: 3,
                        foodname: '된장찌개',
                        saleprice: 8000,
                        ordercount: 2,
                        totalprice: 16000,
                    }
                ]
            }
        )
    }, [])

    return (
        <div className='h-[calc(100dvh-5.5rem)] p-4 flex'>
            <div className='flex-[2] border'>
                <div className='grid grid-rows-2'>
                    <div className='row-span-1'>
                        <OrderList orderfoodlist={orderlist.orderfoodlist}/>
                    </div>
                    <div className='row-span-1'>
                        <div className='flex'>
                            <PaymentSummary/>
                            <KeyPad/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-[4] border-t-1 border-b-1 border-e-1'>
                <CategoryMenuList/>
                <ActionButtons/>
            </div>
        </div>
    )
}