import PersonaCard from "./PersonaCard";

const personas = [
  {
    imageClassName:
      "bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuA08PkyNben493HpWkUrXQTZ7MT_jbUDLJkXipogelZ8TbrWeXRr-OicpLzg_fd0GvnUGUKyOZExAd0-xauqdgR__nB2nOOBh9PJ0A7KSjmGpzWEwgGkQNk87IaWxdDwLDnYWFzpvBpGJreYSqNH_ZFcMNyNH0W3i64PRJj9Vw4j1w23U2HsrtkDzlbeU_nm2OvyUYv0XCx3ORv_O6-7lotuyRpPA6h3OorzkHJp-0hK-HorkiWy79gxvEA5Q8jjtFbCFqizWW8lg')]",
    imageAlt: "Executive team member leading a meeting in a glass office",
    icon: "verified_user",
    title: "Founders & Executives",
    description:
      "Accelerate decision velocity with high-level insights. See the big picture of your liabilities and assets instantly.",
    cta: "Explore Executive Suite",
  },
  {
    imageClassName:
      "bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_WssGYMLkt_655XhO7uNyJJbPfvEGdnlvm7SN8X1tSy7vEkSQL1k1ma-mGkWK1XYtBx4qb8mmoV1eiZm_87oezkQ9CZU6_n3rdvwytXNISR2FlwsDRl4rA20wK28VLdsI1rmouygFayD91Q_b0QQepVNoRa7W727aLVeobeWACGx6eqJCFxEoU40LyMaE_Ll1GG9lglPMBc_Q8xV5yxbBXqPPjpI1X_bneJtLkrFq6QKLEu5B15uWLHKi46ydGd8qCdvLG2nOdg')]",
    imageAlt: "Legal counsel reviewing documents with a pen",
    icon: "gavel",
    title: "Legal & General Counsel",
    description:
      "Automate compliance checks and risk review. Reduce contract turnaround time by 80% without missing a clause.",
    cta: "Explore Legal Tools",
  },
  {
    imageClassName:
      "bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuDN6LDpjsrw9v5FKUmZAekfbEqlVlj5XmYPxSnp5rI4S2WVP5YmAeBeS6knYpCaa7bE8vomiUvrL5Zfho-M9wyFuxkbqVkpf8KCQhM44AXYMvYdwdyT_Zgtbykp57_JU7wopsmrvhikcrK9c3P7AlamK0i-DcecpyGp1imFg9o-RuUvDVRHX_vl6QrhU8UU21Li-nbvdcImAMGVj8I1vvIOrLwmlJ6Ty7InofwW4SU6bpg_jhY7QtME_FJWbq9vxSm_fae44g9w')]",
    imageAlt: "Finance professional analyzing charts on multiple monitors",
    icon: "attach_money",
    title: "Finance & CFOs",
    description:
      "Streamline AP and optimize cash flow. Automatically match invoices to contracts and prevent overpayment.",
    cta: "Explore Finance Solutions",
  },
];

export default function Personas() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="layout-container max-w-[1080px] mx-auto flex flex-col gap-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Tailored for your role
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Whether you are managing risk, cash flow, or the entire organization,
            ClauseShield gives you the specific insights you need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <PersonaCard key={persona.title} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
}
