export default function ContainerLandingTrustSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto text-center">
        <p className="text-on-surface-variant font-semibold tracking-widest text-xs uppercase mb-12">
          Trusted by global industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-headline text-2xl font-bold">FREIGHTNET</span>
          <span className="font-headline text-2xl font-bold">LOGISYS</span>
          <span className="font-headline text-2xl font-bold">OCEANIC</span>
          <span className="font-headline text-2xl font-bold">GLOBALPORT</span>
          <span className="font-headline text-2xl font-bold">SHIPSTR</span>
        </div>
      </div>
    </section>
  );
}
