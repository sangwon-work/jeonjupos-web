'use client'

export default function SideNavigation() {
    return (
        <div className='flex flex-col items-center justify-start gap-4 mt-4 me-2'>
            <button className='w-full h-[3rem] rounded-xl bg-white border-gray-500'>메뉴관리</button>
            <button className='w-full h-[3rem] rounded-xl bg-white'>주문관리</button>
            <button className='w-full h-[3rem] rounded-xl bg-white'>배달관리</button>
        </div>
    )
}