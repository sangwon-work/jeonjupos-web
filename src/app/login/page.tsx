'use client';
import {useEffect, useState} from 'react';
import {postAccessTokenValidation, postLogin} from "@/lib/api/services/user-api";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);

    const router = useRouter();

    useEffect(() => {
        handleAccessTokenValidation();
    }, []);

    // 토큰 검증
    const handleAccessTokenValidation = async () => {
        try {
            const response = await postAccessTokenValidation();
            console.log(response);
            if (response.status === 200 && response.data.rescode === '0000') {
                router.replace("/store-table");
            } else {
                setError('로그인에 실패했어요. 다시 시도해 주세요.');
            }
        } catch (err: any) {
            setError(err?.message || '로그인에 실패했어요. 다시 시도해 주세요.');
        }
    }

    const onSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setError(null);

        if (!isEmailValid) {
            setError('올바른 이메일 형식을 입력해 주세요.');
            return;
        }

        try {
            setSubmitting(true);
            // await handleLogin(email, password);
            const response = await postLogin(email, password);
            if (response.status === 200 && response.data.rescode === '0000') {
                localStorage.setItem("accesstoken", response.data.body.accesstoken);
                router.replace("/store-table");
            } else {
                // 로그인 실패
                setError(response.data.message);
                return;
            }
        } catch (err: any) {
            setError(err?.message || '로그인에 실패했어요. 다시 시도해 주세요.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
            <div className="w-[20rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem]">
                {/* 카드 */}
                <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/70 shadow-xl backdrop-blur p-6 sm:p-8">
                    {/* 헤더 */}
                    <div className="mb-6 text-center">
                        <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center">
                            <span className="text-xl font-semibold text-indigo-600">Y</span>
                        </div>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            로그인
                        </h1>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            이메일과 비밀번호를 입력해 주세요.
                        </p>
                    </div>

                    {/* 폼 */}
                    <form className="space-y-4" onSubmit={onSubmit} noValidate>
                        {/* 이메일 */}
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                이메일
                            </label>
                            <input
                                id="email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                className="block w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={(!isEmailValid && email.length > 0) ? 'true' : 'false'}
                                aria-describedby="email-help"
                            />
                        </div>

                        {/* 비밀번호 */}
                        <div>
                            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                비밀번호
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPw ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    placeholder="4자 이상"
                                    className="block w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 pr-12 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    aria-invalid={(password.length > 0 && password.length < 8) ? 'true' : 'false'}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPw((v) => !v)}
                                    className="absolute inset-y-0 right-2 my-auto inline-flex items-center rounded-lg px-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    aria-label={showPw ? '비밀번호 숨기기' : '비밀번호 보기'}
                                >
                                    {showPw ? '숨김' : '보기'}
                                </button>
                            </div>
                            {/*<div className="mt-1 flex items-center justify-between">*/}
                            {/*    <label className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">*/}
                            {/*        <input type="checkbox" className="rounded border-gray-300 dark:border-gray-700 text-indigo-600 focus:ring-indigo-500" />*/}
                            {/*        로그인 상태 유지*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                        </div>

                        {/* 에러 */}
                        {error && (
                            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/40 dark:text-red-300">
                                {error}
                            </div>
                        )}

                        {/* 버튼 */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gray-400 text-white px-4 py-3 font-medium shadow hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
                        >
                            {submitting ? '로그인 중…' : '로그인'}
                        </button>
                    </form>
                </div>

                {/* 서브 텍스트 */}
                <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                    보안을 위해 공용 기기에서는 로그아웃을 잊지 마세요.
                </p>
            </div>
        </div>
    );
}
