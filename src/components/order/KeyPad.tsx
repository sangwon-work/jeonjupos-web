'use client'

import {useState} from "react";

const btnBase = `p-4 flex justify-center items-center rounded-xl bg-[linear-gradient(to_bottom,#6a7282,#333333,#6a7282)] active:bg-[linear-gradient(to_bottom,#818899,#444444,#818899)] text-white font-bold text-2xl`;

type Props = {
    onEnterKeyClickAction: (value: number) => void;
}

export default function KeyPad({ onEnterKeyClickAction }: Props) {
    const [inputValue, setInputValue] = useState<number>(0);

    const KeyPadOnClick = (v: string) => {
        const value = `${inputValue}${v}`;
        setInputValue(parseInt(value));
    }

    const cancelOnClick = () => {
        setInputValue(0);
    }

    const enterOnClick = () => {
        onEnterKeyClickAction(inputValue);
        setInputValue(0);
    }
    return (
        <div className='flex-[1] bg-white rounded-2xl p-1 grid grid-rows-8'>
            <div className='rounded-2xl bg-gray-400 flex justify-end items-center row-start-1 row-end-2'>
                <p className='p-2 font-bold text-lg text-black'>{inputValue.toLocaleString()}</p>
            </div>
            <div className="row-start-2 row-end-9 grid grid-cols-3 grid-rows-5 gap-1 p-1">
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('7')}>7</button>
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('8')}>8</button>
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('9')}>9</button>

                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('4')}>4</button>
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('5')}>5</button>
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('6')}>6</button>

                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('1')}>1</button>
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('2')}>2</button>
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('3')}>3</button>

                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('0')}>0</button>
                <button className={`${btnBase}`} onClick={() => KeyPadOnClick('00')}>00</button>
                <button className={`${btnBase}`} onClick={cancelOnClick}>C</button>

                <button className={`${btnBase} row-start-5 col-start-1 col-end-4`} onClick={() => {enterOnClick()}}>
                    Enter
                </button>
            </div>
        </div>
    )
}