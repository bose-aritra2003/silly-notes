'use client';

import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {Alert} from "@/components/ui/alert";

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
      })
      if (res.ok) {
        await signIn();
      } else {
        setError((await res.json()).error);
      }
    } catch (error: any) {
      setError(error?.message);
    }

    // console.log('RegisterForm submitted');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
      <div className="space-y-2">
        <Label htmlFor="text">Full name</Label>
        <Input
          required
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
      </div>

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

      <Button type="submit">Register</Button>

      <p className="text-sm font-light text-gray-500 space-x-1">
        <span>Already have an account?</span>
        <Link href="/login" className="font-medium text-primary-600 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}