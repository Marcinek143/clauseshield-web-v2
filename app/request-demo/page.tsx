import { Suspense } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import RequestDemoClient from "./request-demo-client";

export const dynamic = "force-dynamic";

function RequestDemoFallback() {
  return (
    <main
      className="flex-grow flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-8"
      aria-hidden="true"
    >
      <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col gap-8 lg:sticky lg:top-32 pt-4">
          <div className="h-12 w-72 rounded-xl bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
          <div className="space-y-4">
            <div className="h-12 w-5/6 rounded-lg bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
            <div className="h-12 w-2/3 rounded-lg bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
            <div className="h-5 w-full rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
            <div className="h-5 w-4/5 rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="h-5 w-2/3 rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
            <div className="h-5 w-3/4 rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
            <div className="h-5 w-1/2 rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
          </div>
          <div className="pt-8 border-t border-[#e7ebf3] mt-4 dark:border-navy-700 space-y-3">
            <div className="h-4 w-40 rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
            <div className="h-6 w-64 rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e7ebf3] p-6 md:p-8 lg:p-10 w-full max-w-[520px] mx-auto lg:mx-0 dark:bg-navy-800 dark:border-navy-700">
          <div className="space-y-3">
            <div className="h-6 w-56 rounded bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
            <div className="h-4 w-80 rounded bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
          </div>
          <div className="mt-6 space-y-4">
            <div className="h-12 w-full rounded-xl bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
            <div className="h-12 w-full rounded-xl bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
            <div className="h-12 w-full rounded-xl bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
            <div className="h-12 w-full rounded-xl bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
            <div className="h-24 w-full rounded-xl bg-slate-200/70 dark:bg-navy-700 animate-pulse" />
            <div className="h-12 w-full rounded-xl bg-slate-200/80 dark:bg-navy-700 animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function RequestDemoPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <Suspense fallback={<RequestDemoFallback />}>
        <RequestDemoClient />
      </Suspense>
      <Footer />
    </div>
  );
}
