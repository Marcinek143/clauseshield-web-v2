import FooterLinksColumn from "./FooterLinksColumn";

const productLinks = [
  { label: "Features", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Changelog", href: "#" },
];

const resourcesLinks = [
  { label: "Documentation", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Community", href: "#" },
  { label: "Blog", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Legal", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-navy-700 bg-background-light dark:bg-navy-900 pt-16 pb-8">
      <div className="layout-container max-w-[1080px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-xl">
              <span className="material-symbols-outlined size-6 rounded bg-primary text-white flex items-center justify-center text-base">
                shield_lock
              </span>
              ClauseShield AI
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
              The enterprise standard for AI-powered contract analysis and
              financial reconciliation.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
            </div>
          </div>
          <FooterLinksColumn title="Product" links={productLinks} />
          <FooterLinksColumn title="Resources" links={resourcesLinks} />
          <FooterLinksColumn title="Company" links={companyLinks} />
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2024 ClauseShield AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
