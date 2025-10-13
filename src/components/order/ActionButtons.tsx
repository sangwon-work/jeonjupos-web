
type ChildProps = {
    handleOrder: () => void;          // 동기 콜백
};

export default function ActionButtons({ handleOrder }: ChildProps) {
    return (
        <div className='flex-[1] rounded-2xl bg-white p-1'>
            <div className='grid grid-cols-5 grid-rows-2 p-1 bg-gray-400 h-full rounded-2xl gap-1'>
                <button className='flex justify-center items-center bg-white rounded-2xl' onClick={() => handleOrder()}>주문</button>
                <button className='flex justify-center items-center bg-white rounded-2xl'>현금결제</button>
                <button className='flex justify-center items-center bg-white rounded-2xl'>카드결제</button>
                <button className='flex justify-center items-center bg-white rounded-2xl'>취소</button>
            </div>
        </div>
    )
}