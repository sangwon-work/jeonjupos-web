
export default function KeyPad() {
    return (
        <div className='flex-[1] bg-white rounded-2xl p-1 flex flex-col'>
            <div className='flex-[1] rounded-2xl bg-gray-400 flex justify-end items-center'>
                <p className='p-2 font-bold text-lg'>123412323</p>
            </div>
            <div className="flex-[7] grid grid-cols-3 grid-rows-5 gap-1 p-1">
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">7</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">8</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">9</button>

                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">4</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">5</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">6</button>

                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">1</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">2</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">3</button>

                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">0</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">00</button>
                <button className="p-4 flex justify-center items-center rounded-xl bg-gray-400">C</button>

                <button
                    className="p-4 flex justify-center items-center rounded-xl bg-gray-400 row-start-5 col-start-1 col-end-4"
                >
                    Enter
                </button>
            </div>
        </div>
    )
}