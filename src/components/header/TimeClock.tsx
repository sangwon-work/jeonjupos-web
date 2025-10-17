'use client';

import { useEffect, useRef, useState } from 'react';
import {useRouter} from "next/navigation";

type Props = {
    timeZone?: string;
};

export default function TimeClock({ timeZone = 'Asia/Seoul' }: Props) {
    const [time, setTime] = useState<string>('');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [clickCount, setClickCount] = useState<number>(0);

    const router = useRouter();

    useEffect(() => {
        const fmt = new Intl.DateTimeFormat('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone,
        });

        const tick = () => setTime(fmt.format(new Date()));

        // 즉시 1회 실행
        tick();

        // 다음 분까지 남은 시간 계산
        const now = new Date();
        const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        // 다음 분에 맞춰 interval 시작
        timeoutRef.current = setTimeout(() => {
            tick();
            intervalRef.current = setInterval(tick, 60_000);
        }, msToNextMinute);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [timeZone]);

    if (!time) return null;

    const timeClickAction = () => {
        setClickCount(clickCount + 1);

        if (clickCount === 4) {
            router.replace('/login');
        }
    }

    return <p className='text-orange-400 text-[1.5rem]' onClick={() => {timeClickAction()}}>{time}</p>;
}
