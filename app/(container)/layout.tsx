import ContainerHeader from "@/components/layout/ContainerHeader";

export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContainerHeader />
      <div className="pt-20">{children}</div>
    </>
  );
}
