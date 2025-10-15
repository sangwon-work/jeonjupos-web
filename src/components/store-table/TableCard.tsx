'use client'

import {useRouter} from "next/navigation";

type Props = {
    storetable: any;
    className?: string;
};

export default function TableCard({ storetable, className }: Props) {
    const router = useRouter();

    const handleOrderPage = (storetablepkey: number) => {
        router.push(`/order?storetablepkey=${storetablepkey}`);
    }

    return (
        <div
            className={`${className}`}
            onClick={() => handleOrderPage(storetable.storetablepkey)}
        >
            <div className="bg-blue-200 p-4 rounded h-full flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-bold text-xl'>{storetable.label}</p>
                    <p>{storetable.totalorderprice > 0 ? '식사중' : ''}</p>
                </div>
                <div className='flex justify-between'>
                    <p className=''>주문금액</p>
                    <p className='text-end'>{storetable.totalorderprice.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}