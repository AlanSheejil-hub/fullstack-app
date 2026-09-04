"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid size-10 place-items-center rounded-xl text-lg font-black shadow-sm ${light ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
      >
        K
      </div>
      <span
        className={`text-xl font-semibold tracking-tight ${light ? "text-slate-900" : "text-white"}`}
      >
        Kinetiq
      </span>
    </div>
  );
}



export default function LoginComponent() {
      const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => setIsSubmitting(false), 900);
  }
    return (
         <main className="min-h-screen bg-[#f7f8fc] p-4 text-slate-900 sm:p-6 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-360 overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.08fr_0.92fr]">
        <section className="relative hidden overflow-hidden bg-[#111c3c] p-10 lg:flex lg:flex-col xl:p-14">
          <div className="absolute -left-24 top-44 size-80 rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-16 size-96 rounded-full bg-[#4569ed]/35 blur-3xl" />
          <div className="absolute -bottom-45 left-1/3 size-105 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
          <div className="relative z-10">
            <Logo />
          </div>
          <div className="relative z-10 my-auto max-w-xl pt-20">
            <p className="mb-6 text-sm font-medium tracking-[0.18em] text-indigo-200 uppercase">
              Work better, together
            </p>
            <h1 className="text-5xl leading-[1.08] font-semibold tracking-tight text-white xl:text-6xl">
              The calm, clear way to run your workday.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-slate-300">
              Bring your projects, people, and priorities into one focused
              workspace.
            </p>
          </div>
          <div className="relative z-10 mt-12 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
            <div
              className="flex items-center gap-1 text-amber-300"
              aria-label="Five star rating"
            >
              ★★★★★
            </div>
            <blockquote className="mt-3 text-sm leading-6 text-slate-200">
              “Kinetiq gives our team a single place to move from idea to
              impact. It has changed the way we work.”
            </blockquote>
            <p className="mt-4 text-xs font-medium text-indigo-200">
              Maya Chen · Product Lead, Fable
            </p>
          </div>
        </section>
        <section className="flex min-h-[calc(100vh-2rem)] flex-col px-6 py-7 sm:px-12 sm:py-10 lg:min-h-0 lg:px-[clamp(3rem,7vw,8rem)] lg:py-12">
          <div className="lg:hidden">
            <Logo light />
          </div>
          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12 lg:py-0">
            <div>
              <p className="text-sm font-medium text-indigo-600">
                WELCOME BACK
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Sign in to Kinetiq
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details to access your workspace.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-16 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute inset-y-0 right-0 px-4 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="size-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
                />
                Keep me signed in for 30 days
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#334fd1] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(51,79,209,0.24)] transition hover:bg-[#2942be] focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-wait disabled:opacity-75"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </form>
            <div className="my-7 flex items-center gap-4 text-xs text-slate-400 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">
              OR CONTINUE WITH
            </div>
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
            >
              <span className="grid size-5 place-items-center rounded-full bg-linear-to-tr from-[#4285f4] via-[#34a853] via-50% to-[#fbbc05] text-[10px] font-bold text-white">
                G
              </span>
              Continue with Google
            </button>
            <p className="mt-8 text-center text-sm text-slate-500">
              New to Kinetiq?{" "}
              <Link
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Create an account
              </Link>
            </p>
          </div>
          <p className="text-center text-xs text-slate-400">
            © 2026 Kinetiq, Inc. &nbsp;·&nbsp;{" "}
            <Link href="#" className="hover:text-slate-600">
              Privacy
            </Link>{" "}
            &nbsp;·&nbsp;{" "}
            <Link href="#" className="hover:text-slate-600">
              Terms
            </Link>
          </p>
        </section>
      </div>
    </main>
    );
}