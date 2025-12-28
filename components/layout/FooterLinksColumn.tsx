type FooterLink = {
  label: string;
  href: string;
};

type FooterLinksColumnProps = {
  title: string;
  links: FooterLink[];
};

export default function FooterLinksColumn({
  title,
  links,
}: FooterLinksColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-bold text-slate-900 dark:text-slate-100">{title}</h4>
      {links.map((link) => (
        <a
          key={link.label}
          className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
