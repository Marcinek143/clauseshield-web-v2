import Link from "next/link";

export default function ContainerLandingCtaBanner() {
  return (
    <section className="px-6 md:px-12 mb-24">
      <div className="max-w-screen-2xl mx-auto bg-gradient-to-br from-primary-container to-tertiary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary-container/20">
        <div className="absolute inset-0 opacity-10">
          <img
            alt="Rows of colorful shipping containers in a terminal at dusk with soft ambient lights"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAEuL9hrFp1TryQL9Yt2bwwmJ3SmgzPj5QymeJs-2Iphc7axgmeu2cGHYHaP2XypIpDJQdq8b6Bl7oJR2f955yQ2jJ4-0HPD7sIXb5aUrHykC1NicXM0gR_A8qqT4dfo1UTb2lTHHzB7XsEv8GFlsOXN7ZxdmZpn2UCXGrAbRntOaiij0m5zE9VyFMTnuXb71Wev5JgPCLT9gOb6zULdjauhi0DPhy1uEBTc51LkzKGzlIbGbSpXDYMBA-PeDdHKZM-G6lPS3tbg8"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to optimize your logistics spend?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Join over 1,500 freight forwarders and logistics teams managing
            container costs with ClauseShield intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              className="px-10 py-5 bg-secondary text-white font-bold rounded-xl hover:scale-105 transition-all shadow-xl shadow-secondary/20"
              href="/request-demo"
            >
              Get a Live Demo
            </Link>
            <Link
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10"
              href="/tracking"
            >
              View Global Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
