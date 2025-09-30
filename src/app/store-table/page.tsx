'use client'

import {useEffect, useState} from "react";
import TableCard from "@/components/store-table/TableCard";

// col-start-4 col-end-5 row-start-1 row-end-3
const storetablesetDumy: {
    storetablepkey: number;
    label: string;
    totalorderprice: number;
    regdate: string;
    orderlist: any[];
    colstart: number;
    colend: number;
    rowstart: number;
    rowend: number;
}[] = [
    {
        "storetablepkey": 1,
        "label": "1",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 1,
        "colend": 2,
        "rowstart": 1,
        "rowend": 3,
    },
    {
        "storetablepkey": 2,
        "label": "2",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 2,
        "colend": 3,
        "rowstart": 1,
        "rowend": 3,
    },
    {
        "storetablepkey": 3,
        "label": "3",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 4,
        "colend": 5,
        "rowstart": 1,
        "rowend": 3,
    },
    {
        "storetablepkey": 4,
        "label": "4",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 5,
        "colend": 6,
        "rowstart": 1,
        "rowend": 3,
    },
    {
        "storetablepkey": 5,
        "label": "5",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 1,
        "colend": 2,
        "rowstart": 3,
        "rowend": 5,
    },
    {
        "storetablepkey": 6,
        "label": "6",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 2,
        "colend": 3,
        "rowstart": 3,
        "rowend": 5,
    },
    {
        "storetablepkey": 7,
        "label": "7",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 1,
        "colend": 2,
        "rowstart": 5,
        "rowend": 7,
    },
    {
        "storetablepkey": 8,
        "label": "8",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 4,
        "colend": 5,
        "rowstart": 3,
        "rowend": 5,
    },
    {
        "storetablepkey": 9,
        "label": "9",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 5,
        "colend": 6,
        "rowstart": 3,
        "rowend": 5,
    },
    {
        "storetablepkey": 10,
        "label": "10",
        "totalorderprice": 0,
        "regdate": "",
        "orderlist": [],
        "colstart": 5,
        "colend": 6,
        "rowstart": 5,
        "rowend": 7,
    }
]

export default function StoreTable() {
    const [storetablelist, setStoretablelist] = useState<any>([]);

    useEffect(() => {
        // 테이블 목록 조회
        setStoretablelist(storetablesetDumy);
    }, [])

    return (
        <div className='h-[calc(100dvh-5.5rem)] p-4'>
            <div className='h-[calc(100dvh-7.5rem)]'>
                <div className="grid grid-cols-5 grid-rows-8 auto-rows-[10rem] gap-4 w-full h-[calc(100dvh-7.5rem)] p-4">
                    {storetablelist.map((storetable: any, index: number) => (
                        <TableCard
                            key={index}
                            className={`col-start-${storetable.colstart} col-end-${storetable.colend} row-start-${storetable.rowstart} row-end-${storetable.rowend}`}
                            storetable={storetable}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}