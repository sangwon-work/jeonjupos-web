'use client'

import {useEffect, useState} from "react";
import {getFoodCategoryList, getFoodList} from "@/lib/api/services/food-api";

type Props = {
    handleFoodAction: (foodpkey: number, foodname: string, saleprice: number) => void;
}

export default function CategoryMenuList({ handleFoodAction }: Props) {
    const [foodcategorylist, setFoodcategorylist] = useState<{ foodcategorypkey: number; foodcategoryname: string }[]>([]);
    const [foodlist, setFoodlist] = useState<{ foodpkey: number; foodname: string; saleprice: number; stock: number; soldoutyn: 'Y' | 'N' }[]>([]);

    useEffect(() => {
        // 메뉴 카테고리 조회
        fetchFoodCategoryList();
    }, [])

    const fetchFoodCategoryList = async () => {
        try {
            const response = await getFoodCategoryList();
            setFoodcategorylist(response.data.body.foodcategorylist);
            const getFoodResponse = await getFoodList(response.data.body.foodcategorylist[0].foodcategorypkey);
            setFoodlist(getFoodResponse.data.body.foodlist);
        } catch (error) {
            console.log(error);
        }
    }

    const handelCategoryClick = async (categorypkey: number) => {
        try {
            const response = await getFoodList(categorypkey);
            setFoodlist(response.data.body.foodlist);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='row-start-1 row-end-8 rounded-2xl bg-white p-1'>
            <div className='flex flex-col gap-1 h-full'>
                <div className='flex-[2] grid grid-cols-5 grid-rows-2 rounded-xl bg-gray-400 w-full gap-2 p-1'>
                    {foodcategorylist.map((item, index) => (
                        <button
                            key={index}
                            className='flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 active:bg-gray-900 active:text-orange-400 '
                            onClick={() => handelCategoryClick(item.foodcategorypkey)}
                        >
                            <p className='font-bold text-md'>{item.foodcategoryname}</p>
                        </button>
                    ))}
                </div>
                <div className='flex-[6] grid grid-cols-5 grid-rows-6 rounded-xl bg-gray-400 w-full gap-2 p-1'>
                    {foodlist.map((item, index) => (
                        <button
                            key={index}
                            className='flex flex-col items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 active:bg-gray-900 active:text-orange-400'
                            disabled={item.soldoutyn === 'Y'}
                            onClick={() => handleFoodAction(item.foodpkey, item.foodname, item.saleprice)}
                        >
                            {item.soldoutyn === 'N' ? (
                                <p className='font-bold'>{item.foodname}</p>
                            ) : (
                                <div>
                                    <p className='font-bold line-through text-gray-400'>{item.foodname}</p>
                                    <p className='text-[13px]'>품절</p>
                                </div>
                            )}
                            <p>{item.saleprice.toLocaleString()}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}