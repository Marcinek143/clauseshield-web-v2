import { Suspense } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import RequestDemoClient from "./request-demo-client";

export const dynamic = "force-dynamic";

export default function RequestDemoPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <Suspense fallback={null}>
        <RequestDemoClient />
      </Suspense>
      <Footer />
    </div>
  );
}
