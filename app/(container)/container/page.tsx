import ContainerLandingCtaBanner from "@/components/container-landing/ContainerLandingCtaBanner";
import ContainerLandingFeaturesSection from "@/components/container-landing/ContainerLandingFeaturesSection";
import ContainerLandingFooter from "@/components/container-landing/ContainerLandingFooter";
import ContainerLandingHeroSection from "@/components/container-landing/ContainerLandingHeroSection";
import ContainerLandingTrustSection from "@/components/container-landing/ContainerLandingTrustSection";

export default function ContainerLandingPage() {
  return (
    <div className="landing-page bg-surface font-body text-on-surface min-h-screen">
      <main className="overflow-x-hidden">
        <ContainerLandingHeroSection />
        <ContainerLandingFeaturesSection />
        <ContainerLandingTrustSection />
        <ContainerLandingCtaBanner />
      </main>
      <ContainerLandingFooter />
    </div>
  );
}
