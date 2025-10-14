'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {postAccessTokenValidation} from '@/lib/api/services/user-api';
import { AxiosError } from 'axios';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/store-table");
    }, [])

    // 로그인 여부 체크
    useEffect(() => {
        tokenValidation();
    }, []);

    const tokenValidation = async () => {
        try {
            const response = await postAccessTokenValidation();
            if (response.data.resCode === '0000') {
                // 메인 페이지로 이동
                router.replace("/store-table");
            } else {
                // 로그인 페이지로 이동
                router.replace('/login');
            }
        } catch (error) {
            // 로그인 페이지로 이동
            const axiosError = error as AxiosError;

            // if (axiosError.response?.status === 401) {
            //     router.replace('/login');
            // } else {
            //     console.error('API Error:', axiosError);
            // }
            console.error('API Error:', axiosError);
            router.replace('/login');
        }
    }
  return (
    <></>
  );
}
