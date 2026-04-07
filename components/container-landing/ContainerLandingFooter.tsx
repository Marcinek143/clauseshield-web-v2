import Link from "next/link";

export default function ContainerLandingFooter() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 w-full py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-screen-2xl mx-auto font-['Inter'] text-sm text-slate-900 dark:text-slate-50">
        <div className="space-y-4">
          <span className="font-['Manrope'] font-bold text-lg text-slate-900 dark:text-white">
            ClauseShield
          </span>
          <p className="text-slate-500 dark:text-slate-400">
            Enterprise container cost management and port intelligence for
            global supply chains.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity"
                href="/tracking"
              >
                Global Network
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity"
                href="/calculator/compact"
              >
                Cost Calculator
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity"
                href="/dashboard"
              >
                Terminal Data
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <button
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity"
                type="button"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity"
                type="button"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity"
                type="button"
              >
                Contact Support
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">
            Newsletter
          </h4>
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Stay updated with port intelligence alerts.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-white dark:bg-slate-800 border-none rounded-lg px-4 py-2 w-full text-sm"
              placeholder="Email"
              type="email"
            />
            <button className="p-2 bg-primary text-white rounded-lg" type="button">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400">
          © 2024 ClauseShield Container Intelligence. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer transition-colors">
            share
          </span>
          <span className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer transition-colors">
            public
          </span>
        </div>
      </div>
    </footer>
  );
}
