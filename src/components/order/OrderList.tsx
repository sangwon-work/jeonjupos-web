'use client'

type Props = {
    orderfoodlist?: any[]
}

export default function OrderList({orderfoodlist=[]}: Props) {
    return (
        <div className='border-b-1 flex-[1] flex flex-col'>
            <div className='flex flex-[1] justify-between items-center border-b-1'>
                <p className='flex-[1] text-center'>번호</p>
                <p className='flex-[3] text-center'>메뉴명</p>
                <p className='flex-[1] text-center'>판매가</p>
                <p className='flex-[1] text-center'>수량</p>
                <p className='flex-[2] text-center'>합계</p>
            </div>
            <div className='flex flex-[14] flex-col overflow-y-auto'>
                {orderfoodlist.map((food, index) => (
                    <button
                        key={index}
                        className='flex hover:bg-white'
                        onClick={() => {console.log('주문내역 클릭')}}
                    >
                        <p className='flex-[1] text-center'>{index+1}</p>
                        <p className='flex-[3] text-center'>{food.foodname}</p>
                        <p className='flex-[1] text-center'>{food.saleprice}</p>
                        <p className='flex-[1] text-center'>{food.ordercount}</p>
                        <p className='flex-[2] text-center'>{food.totalprice}</p>
                    </button>
                ))}
            </div>
            <div className='flex flex-[1] justify-between items-center border-t-1'>
                <p className='flex-[1] text-center'>합계</p>
                <p className='flex-[3] text-center'></p>
                <p className='flex-[1] text-center'></p>
                <p className='flex-[1] text-center'>6</p>
                <p className='flex-[2] text-center'>48000</p>
            </div>
        </div>
    )
}