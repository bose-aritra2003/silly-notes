'use client';

import React, {useState} from "react";
import {Button} from "@/app/components/ui/button";
import {Input} from "@/app/components/ui/input";
import {Label} from "@/app/components/ui/label";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {Alert} from "@/app/components/ui/alert";
import {useRouter, useSearchParams} from "next/navigation";

export const LoginForm = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/notes';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl
            })
            if(!res?.error) {
                await router.push(callbackUrl);
            } else {
                setError('Invalid email or password');
            }
        } catch (error: any) {

        }

        console.log('LoginForm submitted');
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
            <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                    required
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    required
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
            </div>
            {
                error &&
                <Alert>
                    {error}
                </Alert>
            }

            <Button type="submit">Log in</Button>

            <p className="text-sm font-light text-gray-500 space-x-1">
                <span>Don&apos;t have an account yet?</span>
                <Link href="/register" className="font-medium text-primary-600 hover:underline">
                    Sign up
                </Link>
            </p>
        </form>
    );
}