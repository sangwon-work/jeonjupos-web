type Props = {
    inputValue?: number
    orderprice?: number
    payprice?: number
}

export default function PaymentSummary({inputValue = 0, orderprice=0, payprice=0}: Props) {
    return (
        <div className='flex-[1] bg-white rounded-2xl p-1'>
            <div className='grid gird-rows-6 h-full bg-[linear-gradient(to_bottom,#6a7282,#333333,#6a7282)] rounded-2xl'>
                <div className='flex flex-[1] justify-center items-center lg:p-1 xl:p-5'>
                    <p className='font-bold xl:text-2xl lg:text-lg text-gray-200'>결제정보</p>
                </div>
                <div className='flex flex-[2] justify-between items-center lg:p-1 xl:p-5 ps-5 pe-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-200'>총 금 액</p>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-50'>{orderprice?.toLocaleString()}</p>
                </div>
                <div className='flex flex-[2] justify-between items-center lg:p-1 xl:p-5 ps-5 pe-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-200'>할인금액</p>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-50'>0</p>
                </div>
                <div className='flex flex-[2] justify-between items-center lg:p-1 xl:p-5 ps-5 pe-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold xl:text-xl lg:text-lg text-yellow-400'>받을금액</p>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-50'>{(orderprice - payprice).toLocaleString()}</p>
                </div>
                <div className='flex flex-[2] justify-between items-center lg:p-1 xl:p-5 ps-5 pe-5 border-b-1 border-gray-500 ms-2 me-2'>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-200'>받은금액</p>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-50'>{inputValue.toLocaleString()}</p>
                </div>
                <div className='flex flex-[2] justify-between items-center lg:p-1 xl:p-5 ps-5 pe-5 ms-2 me-2'>
                    <p className='font-bold xl:text-xl lg:text-lg text-yellow-400'>거스름돈</p>
                    <p className='font-bold xl:text-xl lg:text-lg text-gray-50'>{inputValue === 0 ? 0 : ((orderprice - payprice)-inputValue).toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}