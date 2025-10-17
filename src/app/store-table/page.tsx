'use client'

import {useEffect, useState} from "react";
import {getStoreTable} from "@/lib/api/services/store-table-api";
import {useRouter} from "next/navigation";

type StoreTable = {
    storetablepkey: number;
    label: string;
    colstart: number;
    colend: number;
    rowstart: number;
    rowend: number;
    totalorderprice: number;
    regdate: string;
    orderlist: {
        foodname: string;
        ordercount: number;
    }[];
}

export default function StoreTablePage() {
    const [storetablelist, setStoretablelist] = useState<StoreTable[]>([]);

    const router = useRouter();

    useEffect(() => {
        // 테이블 목록 조회
        fetchStoreTable();
    }, [])

    const fetchStoreTable = async () => {
        try {
            const response = await getStoreTable();
            setStoretablelist(response.data.body.storetableset);
        } catch (error) {
            console.log(error);
        }
    }

    const handleOrderPage = (storetablepkey: number) => {
        router.push(`/order?storetablepkey=${storetablepkey}`);
    }

    return (
        <div className='h-[calc(100dvh-5.5rem)] p-4'>
            <div className='h-[calc(100dvh-7.5rem)]'>
                <div className="grid grid-cols-5 grid-rows-8 items-stretch gap-2 w-full h-[calc(100dvh-7.5rem)] p-4">
                    {storetablelist.map((storetable: StoreTable, index: number) => (
                        <div
                            key={index}
                            style={
                                {
                                    '--gr': `${storetable.rowstart} / ${storetable.rowend}`,
                                    '--gc': `${storetable.colstart} / ${storetable.colend}`,
                                } as React.CSSProperties
                            }
                            className="[grid-row:var(--gr)] [grid-column:var(--gc)] h-full"
                            onClick={() => handleOrderPage(storetable.storetablepkey)}
                        >
                            <div className="bg-blue-200 p-4 rounded h-full flex flex-col justify-between">
                                <div className='flex justify-between'>
                                    <p className='font-bold text-xl'>{storetable.label}</p>
                                    <p>{storetable.totalorderprice > 0 ? '식사중' : ''}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-sm'>주문금액</p>
                                    <p className=''>{storetable.totalorderprice.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}