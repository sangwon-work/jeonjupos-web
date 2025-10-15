
type ChildProps = {
    handleOrder: () => void;          // 동기 콜백
    onPayAction: (paytype: 'CASH' | 'CARD') => void;
    onCancelPayAction: () => void;
};

export default function ActionButtons({ handleOrder, onPayAction, onCancelPayAction }: ChildProps) {
    return (
        <div className='flex-[1] rounded-2xl bg-white p-1'>
            <div className='grid grid-cols-5 grid-rows-2 p-1 bg-gray-400 h-full rounded-2xl gap-1'>
                <button className='flex justify-center items-center bg-white rounded-2xl' onClick={() => handleOrder()}>주문</button>
                <button className='flex justify-center items-center bg-white rounded-2xl' onClick={() => {onPayAction('CASH')}}>현금결제</button>
                <button className='flex justify-center items-center bg-white rounded-2xl' onClick={() => {onPayAction('CARD')}}>카드결제</button>
                <button className='flex justify-center items-center bg-white rounded-2xl' onClick={() => {onCancelPayAction()}}>취소</button>
            </div>
        </div>
    )
}