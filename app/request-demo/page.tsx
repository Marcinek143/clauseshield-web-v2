"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

type Persona = "founder" | "finance" | "legal";

const personaContent: Record<
  Persona,
  { headline: [string, string]; subheadline: string; cta: string }
> = {
  founder: {
    headline: ["Clarity Across", "Contracts and Cash."],
    subheadline:
      "Learn how ClauseShield gives founders confidence and control as the company scales.",
    cta: "Request Demo",
  },
  finance: {
    headline: ["Protect Margins.", "Prevent Overpayments."],
    subheadline:
      "See how ClauseShield helps finance teams detect invoice errors and contract mismatches before money leaves the business.",
    cta: "Request Finance Demo",
  },
  legal: {
    headline: ["See Contract Risk", "Before It Becomes Exposure."],
    subheadline:
      "Discover how ClauseShield gives legal teams defensible AI insights into clauses, obligations, and risk.",
    cta: "Request Legal Demo",
  },
};

const personaOptions: { value: Persona; label: string }[] = [
  { value: "founder", label: "Founder" },
  { value: "finance", label: "Finance" },
  { value: "legal", label: "Legal" },
];

const roleByPersona: Record<Persona, string> = {
  founder: "Founder",
  finance: "Finance",
  legal: "Legal",
};

const basePersonaLabel =
  "cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all";

const activePersonaLabel = "bg-[#f0f4ff] text-[#1354ec]";

const inactivePersonaLabel =
  "text-gray-500 hover:text-gray-900 transition-all";

const normalizePersona = (value: string | null): Persona => {
  if (value === "finance" || value === "legal" || value === "founder") {
    return value;
  }
  return "founder";
};

export default function RequestDemoPage() {
  const searchParams = useSearchParams();
  const personaParam = searchParams.get("persona");
  const [persona, setPersona] = useState<Persona>(() =>
    normalizePersona(personaParam),
  );
  const [role, setRole] = useState<string>(
    roleByPersona[normalizePersona(personaParam)],
  );

  useEffect(() => {
    const nextPersona = normalizePersona(personaParam);
    setPersona(nextPersona);
  }, [personaParam]);

  useEffect(() => {
    setRole(roleByPersona[persona]);
  }, [persona]);

  const content = personaContent[persona];

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-8">
        <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-8 lg:sticky lg:top-32 pt-4">
            <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-[#e7ebf3] w-fit">
              {personaOptions.map((option) => (
                <label
                  key={option.value}
                  className={`${basePersonaLabel} ${
                    persona === option.value
                      ? activePersonaLabel
                      : inactivePersonaLabel
                  }`}
                >
                  <input
                    checked={persona === option.value}
                    className="hidden"
                    name="persona"
                    type="radio"
                    value={option.value}
                    onChange={() => setPersona(option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <div className="space-y-4">
              <h1 className="text-[#0d121b] text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] tracking-[-0.02em]">
                {content.headline[0]} <br className="hidden lg:block" />
                {content.headline[1]}
              </h1>
              <p className="text-[#4c639a] text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                {content.subheadline}
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3 text-[#4c639a]">
                <span className="material-symbols-outlined text-[#1354ec]">
                  verified_user
                </span>
                <span className="text-sm font-medium">
                  Enterprise-grade security (SOC2 Type II)
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#4c639a]">
                <span className="material-symbols-outlined text-[#1354ec]">
                  group
                </span>
                <span className="text-sm font-medium">
                  Built for cross-functional teams
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#4c639a]">
                <span className="material-symbols-outlined text-[#1354ec]">
                  check_circle
                </span>
                <span className="text-sm font-medium">
                  No obligation, personalized demo
                </span>
              </div>
            </div>
            <div className="pt-8 border-t border-[#e7ebf3] mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-4">
                Trusted by modern teams
              </p>
              <div className="flex gap-6 opacity-60 grayscale items-center flex-wrap">
                <div className="h-6 font-bold text-lg text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined">pentagon</span>
                  Acme Corp
                </div>
                <div className="h-6 font-bold text-lg text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined">hexagon</span>
                  GlobalTech
                </div>
                <div className="h-6 font-bold text-lg text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined">token</span>
                  FinScale
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e7ebf3] p-6 md:p-8 lg:p-10 w-full max-w-[520px] mx-auto lg:mx-0">
            <div className="mb-8">
              <h3 className="text-[#0d121b] text-2xl font-bold tracking-tight mb-2">
                Schedule your personalized demo
              </h3>
              <p className="text-[#4c639a] text-sm">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <input name="persona" type="hidden" value={persona} />
              <div className="space-y-1.5">
                <label
                  className="text-[#0d121b] text-sm font-semibold"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <input
                  className="w-full h-12 rounded-xl border border-[#cfd6e7] bg-[#f8f9fc] px-4 text-base text-[#0d121b] focus:border-[#1354ec] focus:ring-1 focus:ring-[#1354ec] focus:outline-none transition-all placeholder:text-[#9ca3af]"
                  id="fullname"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-[#0d121b] text-sm font-semibold"
                  htmlFor="email"
                >
                  Work Email
                </label>
                <input
                  className="w-full h-12 rounded-xl border border-[#cfd6e7] bg-[#f8f9fc] px-4 text-base text-[#0d121b] focus:border-[#1354ec] focus:ring-1 focus:ring-[#1354ec] focus:outline-none transition-all placeholder:text-[#9ca3af]"
                  id="email"
                  placeholder="jane@company.com"
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    className="text-[#0d121b] text-sm font-semibold"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    className="w-full h-12 rounded-xl border border-[#cfd6e7] bg-[#f8f9fc] px-4 text-base text-[#0d121b] focus:border-[#1354ec] focus:ring-1 focus:ring-[#1354ec] focus:outline-none transition-all placeholder:text-[#9ca3af]"
                    id="company"
                    placeholder="Acme Inc."
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    className="text-[#0d121b] text-sm font-semibold"
                    htmlFor="role"
                  >
                    Role
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-12 rounded-xl border border-[#cfd6e7] bg-[#f8f9fc] px-4 text-base text-[#0d121b] focus:border-[#1354ec] focus:ring-1 focus:ring-[#1354ec] focus:outline-none transition-all appearance-none cursor-pointer"
                      id="role"
                      value={role}
                      onChange={(event) => setRole(event.target.value)}
                    >
                      <option disabled value="">
                        Select Role
                      </option>
                      <option value="Founder">Founder / CEO</option>
                      <option value="Finance">Finance</option>
                      <option value="Legal">Legal</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#4c639a]">
                      <span className="material-symbols-outlined text-sm">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-[#0d121b] text-sm font-semibold"
                  htmlFor="message"
                >
                  Anything specific you&apos;d like to see?{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  className="w-full rounded-xl border border-[#cfd6e7] bg-[#f8f9fc] p-4 text-base text-[#0d121b] focus:border-[#1354ec] focus:ring-1 focus:ring-[#1354ec] focus:outline-none transition-all resize-none placeholder:text-[#9ca3af]"
                  id="message"
                  placeholder="I'm interested in contract automation..."
                  rows={3}
                ></textarea>
              </div>
              <button
                className="mt-2 w-full h-12 bg-[#1354ec] hover:bg-[#0f42b8] text-white font-bold rounded-xl text-sm transition-colors shadow-md flex items-center justify-center gap-2 group"
                type="button"
              >
                <span>{content.cta}</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </button>
              <p className="text-xs text-center text-[#9ca3af] mt-2">
                By submitting this form, you agree to our{" "}
                <a className="underline hover:text-[#1354ec]" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="underline hover:text-[#1354ec]" href="#">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
