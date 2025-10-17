'use client'

import TimeClock from "@/components/header/TimeClock";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Header() {
    const [today, setToday] = useState<string>('');
    const router = useRouter();
    // 요일 배열
    const week = ["일", "월", "화", "수", "목", "금", "토"];

    useEffect(() => {
        const today = new Date();

        // 구성
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const dayOfWeek = week[today.getDay()];

        // 결과
        const formatted = `${year}-${month}-${day} (${dayOfWeek})`;

        setToday(formatted);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='h-[5.5rem] w-screen flex justify-center'>
            <div className='w-[98%] flex items-center bg-gradient-to-b from-gray-400 to-gray-950 rounded-bl-2xl rounded-br-2xl'>
                <div className='flex flex-1 items-center'>
                    <div className='flex flex-1 justify-center text-white'>
                        <Image
                            src='/logo/jeonjupos-logo.svg'
                            alt='jeonjupos logo'
                            width={180}
                            height={100}
                            className="invert brightness-100"
                            onClick={() => {router.push('/store-table')}}
                        />
                    </div>
                    <div className='flex flex-5 gap-2 p-2 me-3 border-gray-400 items-center'>
                        <div className='flex-4 flex gap-5 border-e-2'>
                            <div className='flex gap-2'>
                                <p className='text-gray-300'>매장명 : </p>
                                <p className='text-white'>전주손칼국수</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-gray-300'>영업일자 : </p>
                                <p className='text-white'>{today}</p>
                            </div>
                        </div>
                        <div className='flex-1 flex gap-2 items-center'>
                            <p className='text-white'>{today}</p>
                            <TimeClock/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}