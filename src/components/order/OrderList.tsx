'use client'

type Props = {
    orderfoodlist?: any[]
}

export default function OrderList({orderfoodlist=[]}: Props) {
    return (
        <div className='flex-[1] flex flex-col h-[1rem] sm:h-[15rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] bg-white rounded-xl p-1'>
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
                        className='flex hover:bg-white'
                        onClick={() => {console.log('주문내역 클릭')}}
                    >
                        <p className='flex-[1] text-center text-lg'>{index+1}</p>
                        <p className='flex-[3] text-center text-lg'>{food.foodname}</p>
                        <p className='flex-[1] text-center text-lg'>{food.saleprice}</p>
                        <p className='flex-[1] text-center text-lg'>{food.ordercount}</p>
                        <p className='flex-[2] text-center text-lg'>{food.totalprice}</p>
                    </button>
                ))}
            </div>
            <div className='flex flex-[2] justify-between items-center bg-gray-900 rounded-b-xl'>
                <p className='flex-[5] text-center text-orange-300 font-bold text-lg'>합계</p>
                <p className='flex-[1] text-center text-orange-300 font-bold text-lg'>6</p>
                <p className='flex-[2] text-center text-orange-300 font-bold text-lg'>48000</p>
            </div>
        </div>
    )
}