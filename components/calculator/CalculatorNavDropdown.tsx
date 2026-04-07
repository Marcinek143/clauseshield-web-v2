"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const calculatorModes = [
  { href: "/calculator/compact", label: "Compact" },
  { href: "/calculator/split", label: "Split" },
  { href: "/calculator/stepper", label: "Stepper" },
];

type CalculatorNavDropdownProps = {
  activeClassName: string;
  inactiveClassName: string;
  menuClassName: string;
  itemClassName: string;
  activeItemClassName: string;
};

export default function CalculatorNavDropdown({
  activeClassName,
  inactiveClassName,
  menuClassName,
  itemClassName,
  activeItemClassName,
}: CalculatorNavDropdownProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isCalculatorRoute = pathname.startsWith("/calculator");

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openDropdown = () => {
    clearCloseTimeout();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, 120);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={scheduleClose}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`${isCalculatorRoute ? activeClassName : inactiveClassName} inline-flex items-center gap-1`}
        type="button"
        onClick={() => {
          clearCloseTimeout();
          setIsOpen((current) => !current);
        }}
      >
        Calculator
        <span className="material-symbols-outlined text-[18px]">
          arrow_drop_down
        </span>
      </button>
      {isOpen ? (
        <div
          className={menuClassName}
          onMouseEnter={openDropdown}
          onMouseLeave={scheduleClose}
        >
          {calculatorModes.map((mode) => {
            const isActive = pathname === mode.href;

            return (
              <Link
                key={mode.href}
                className={`${itemClassName}${isActive ? activeItemClassName : ""}`}
                href={mode.href}
                onClick={() => setIsOpen(false)}
              >
                {mode.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
