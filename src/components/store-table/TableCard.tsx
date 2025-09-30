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
                <p>{storetable.label}</p>
                <div className='flex'>
                    <p className='flex-1'>금액</p>
                    <p className='flex-4 text-end'>{storetable.totalorderprice}</p>
                </div>
            </div>
        </div>
    )
}