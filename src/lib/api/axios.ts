// lib/axios.ts
import axios, { AxiosRequestConfig } from 'axios';

const __DEV__: boolean = true;
let baseURL: string = 'https://jeonjupos.kr';

if (__DEV__) {
    baseURL = 'http://127.0.0.1:3001';
}

export const authInstance = axios.create({
    baseURL: baseURL, // .env.local에서 관리
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 쿠키 전송
});

// Access Token 저장소 → localStorage
function getAccessToken() {
    return typeof window !== "undefined" ? localStorage.getItem("accesstoken") : null;
}

function setAccessToken(token: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("accesstoken", token);
    }
}

function clearAccessToken() {
    if (typeof window !== "undefined") {
        localStorage.removeItem("accesstoken");
    }
}


function attachAuthHeader(config: AxiosRequestConfig) {
    const at = getAccessToken();
    if (at) {
        config.headers = { ...(config.headers || {}), Authorization: `Bearer ${at}` };
    }
    return config;
}

// 요청 인터셉터 (예: 인증 토큰 자동 첨부)
// @ts-expect-error: 라이브러리 타입 정의 오류 (임시 우회)
authInstance.interceptors.request.use((config) => attachAuthHeader(config));

// 응답 인터셉터: 401 → refresh 후 재시도
authInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // 공통 에러 처리
        return Promise.reject(error);
    }
);


// 👉 인터셉터 없는 인스턴스 (토큰 없이 요청)
const unAuthInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// 응답 인터셉터
unAuthInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // 공통 에러 처리
        return Promise.reject(error);
    }
);

const instance = {
    authInstance, unAuthInstance
}

export default instance;