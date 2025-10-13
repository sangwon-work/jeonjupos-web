export default function PaymentSummary() {
    return (
        <div className='flex-[1] bg-white rounded-2xl p-1'>
            <div className='flex flex-col h-full bg-[linear-gradient(to_bottom,#6a7282,#333333,#6a7282)] rounded-2xl'>
                <div className='flex flex-[1] justify-center items-center p-5'>
                    <p className='font-bold text-2xl text-gray-200'>결제정보</p>
                </div>
                <div className='flex flex-[2] justify-between items-center p-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold text-xl text-gray-200'>총 금 액</p>
                    <p className='font-bold text-xl text-gray-50'>15700</p>
                </div>
                <div className='flex flex-[2] justify-between items-center p-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold text-xl text-gray-200'>할인금액</p>
                    <p className='font-bold text-xl text-gray-50'>0</p>
                </div>
                <div className='flex flex-[2] justify-between items-center p-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold text-xl text-yellow-400'>받을금액</p>
                    <p className='font-bold text-xl text-gray-50'>15700</p>
                </div>
                <div className='flex flex-[2] justify-between items-center p-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold text-xl text-gray-200'>받은금액</p>
                    <p className='font-bold text-xl text-gray-50'>0</p>
                </div>
                <div className='flex flex-[2] justify-between items-center p-5 ms-2 me-2'>
                    <p className='font-bold text-xl text-yellow-400'>거스름돈</p>
                    <p className='font-bold text-xl text-gray-50'></p>
                </div>
            </div>
        </div>
    )
}