import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-navy-700 bg-background-light/80 dark:bg-navy-900/80 backdrop-blur-md">
      <div className="layout-container flex justify-center">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-4 py-4 md:px-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-2xl">
                shield_lock
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">
              ClauseShield AI
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Product
            </a>
            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Solutions
            </a>
            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Pricing
            </a>
            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              Resources
            </a>
          </nav>
          <div className="flex gap-3">
            <ThemeToggle />
            <button className="hidden md:flex h-10 items-center justify-center rounded-lg px-4 bg-transparent border border-slate-200 dark:border-navy-700 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-900 dark:text-slate-100 text-sm font-bold transition-colors">
              Log In
            </button>
            <button className="flex h-10 items-center justify-center rounded-lg px-4 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
