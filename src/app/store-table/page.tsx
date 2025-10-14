'use client'

import {useEffect, useState} from "react";
import TableCard from "@/components/store-table/TableCard";
import {getStoreTable} from "@/lib/api/services/store-table-api";

export default function StoreTable() {
    const [storetablelist, setStoretablelist] = useState<any>([]);

    useEffect(() => {
        // 테이블 목록 조회
        fetchStoreTable();
    }, [])

    const fetchStoreTable = async () => {
        try {
            const response = await getStoreTable();
            console.log(response);
            setStoretablelist(response.data.body.storetableset);
        } catch (error) {
            console.log(error);
        }
    }

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