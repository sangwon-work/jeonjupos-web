'use client'

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { OrderFoodList } from "@/types";

type Props = {
    updateOrderCountAction: (foodpkey: number, type: 'plus' | 'minus') => void;
    orderfoodlist?: OrderFoodList[]
    totalordercount?: number
    totalprice?: number
}

export default function OrderList({updateOrderCountAction, orderfoodlist=[], totalordercount=0, totalprice=0}: Props) {
    const [foodpkey, setFoodpkey] = useState<number>(0);

    const onOrderFoodClick = (foodpkey: number) => {
        setFoodpkey(foodpkey);
    }

    return (
        <div className='row-start-1 row-end-5 flex flex-col bg-white rounded-xl p-1'>
            <div className='flex flex-[2] justify-between items-center bg-gray-900 rounded-t-xl'>
                <p className='flex-[1] text-center text-orange-300 font-bold text-lg'>번호</p>
                <p className='flex-[3] text-center text-orange-300 font-bold text-lg'>메뉴명</p>
                <p className='flex-[1] text-center text-orange-300 font-bold text-lg'>판매가</p>
                <p className='flex-[1] text-center text-orange-300 font-bold text-lg'>수량</p>
                <p className='flex-[2] text-center text-orange-300 font-bold text-lg'>합계</p>
            </div>
            <div className='flex flex-[14] flex-col overflow-y-auto bg-white'>
                {orderfoodlist.map((food, index) => (
                    <button
                        key={index}
                        className={`flex ${food.foodpkey === foodpkey ? 'bg-gray-400' : ''}`}
                        onClick={() => onOrderFoodClick(food.foodpkey)}
                    >
                        <p className='flex-[1] text-center text-lg text-black'>{index+1}</p>
                        <p className='flex-[3] text-center text-lg text-black'>{food.foodname}</p>
                        <p className='flex-[1] text-center text-lg text-black'>{food.saleprice.toLocaleString()}</p>
                        <p className='flex-[1] text-center text-lg text-black'>{food.ordercount.toLocaleString()}</p>
                        <p className='flex-[2] text-center text-lg text-black'>{food.totalprice.toLocaleString()}</p>
                    </button>
                ))}
            </div>
            <div className='flex flex-[2] justify-between items-center bg-gray-900 rounded-b-xl'>
                <p className='flex-[5] text-center text-orange-300 font-bold text-lg'>합계</p>
                <p className='flex-[1] text-center text-orange-300 font-bold text-lg'>{totalordercount.toLocaleString()}</p>
                <p className='flex-[2] text-center text-orange-300 font-bold text-lg'>{totalprice.toLocaleString()}</p>
            </div>
            <div className='grid grid-cols-2 gap-2 p-1'>
                <button
                    className='flex justify-center items-center bg-gray-400 rounded-2xl'
                    onClick={() => updateOrderCountAction(foodpkey, 'plus')}
                >
                    <Plus/>
                </button>
                <button
                    className='flex justify-center items-center bg-gray-400 rounded-2xl'
                    onClick={() => updateOrderCountAction(foodpkey, 'minus')}
                >
                    <Minus/>
                </button>
                {/*<button className='flex justify-center items-center'><ChevronUp/></button>*/}
                {/*<button className='flex justify-center items-center'><ChevronDown/></button>*/}
            </div>
        </div>
    )
}