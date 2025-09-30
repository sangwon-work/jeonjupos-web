import TimeClock from "@/components/header/TimeClock";

export default function Header() {
    return (
        <div className='h-[5.5rem] w-screen flex justify-center'>
            <div className='w-[98%] flex items-center bg-gradient-to-b from-gray-400 to-gray-950 rounded-bl-2xl rounded-br-2xl'>
                <div className='flex flex-1 items-center'>
                    <div className='flex flex-1 justify-center'>
                        logo
                    </div>
                    <div className='flex flex-5 gap-2 p-2 me-3 border-gray-400 items-center'>
                        <div className='flex-4 flex gap-5 border-e-2'>
                            <div className='flex gap-2'>
                                <p className='text-gray-300'>매장명 : </p>
                                <p className='text-white'>전주손칼국수</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-gray-300'>영업일자 : </p>
                                <p className='text-white'>2025-09-30 (화)</p>
                            </div>
                        </div>
                        <div className='flex-1 flex gap-2 items-center'>
                            <p className='text-white'>2025-09-30 (화)</p>
                            <TimeClock/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}