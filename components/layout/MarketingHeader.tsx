"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";

export default function MarketingHeader() {
  const pathname = usePathname();
  const isMarketingHome = pathname === "/";
  const isSolutionsPage = pathname.startsWith("/for-");
  const isRequestDemoPage = pathname === "/request-demo";
  const isAnalyzePage = pathname === "/analyze";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-background-light/80 backdrop-blur-xl dark:border-navy-800/70 dark:bg-navy-900/80">
      <div className="layout-container mx-auto flex h-20 max-w-[1080px] items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-8">
          <Link
            className="text-slate-900 dark:text-slate-100 font-black tracking-tight text-xl"
            href="/"
          >
            ClauseShield AI
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-6">
              <Link
                className={`transition-colors ${
                  isMarketingHome
                    ? "text-slate-900 dark:text-slate-100"
                    : "hover:text-slate-900 dark:hover:text-slate-100"
                }`}
                href="/#features"
              >
                Features
              </Link>
              <Link
                className={`transition-colors ${
                  isSolutionsPage
                    ? "text-slate-900 dark:text-slate-100"
                    : "hover:text-slate-900 dark:hover:text-slate-100"
                }`}
                href="/#solutions"
              >
                Solutions
              </Link>
              <Link
                className={`transition-colors ${
                  isRequestDemoPage
                    ? "text-slate-900 dark:text-slate-100"
                    : "hover:text-slate-900 dark:hover:text-slate-100"
                }`}
                href="/request-demo"
              >
                Demo
              </Link>
            </div>
            <div className="h-6 w-px bg-slate-300/70 dark:bg-navy-700" />
            <Link
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors"
              href="/container"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Container Intelligence
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                Live
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            className={`hidden sm:inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-bold transition-all ${
              isRequestDemoPage
                ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
                : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100 dark:hover:bg-navy-700"
            }`}
            href="/request-demo"
          >
            Request Demo
          </Link>
          <Link
            className={`inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-bold transition-all ${
              isAnalyzePage
                ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
                : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100 dark:hover:bg-navy-700"
            }`}
            href="/analyze"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
