import { HeroSection } from "@/components/home/HeroSection";
import { DealsTicker } from "@/components/home/DealsTicker";
import { FeaturedSpecials } from "@/components/home/FeaturedSpecials";
import { BrandDifferentiators } from "@/components/home/BrandDifferentiators";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { HighMilesFeature } from "@/components/home/HighMilesFeature";
import { CategoryRail } from "@/components/home/CategoryRail";
import { LocationsPreview } from "@/components/home/LocationsPreview";
import { SocialProof } from "@/components/home/SocialProof";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DealsTicker />
      <FeaturedSpecials />
      <BrandDifferentiators />
      <VideoShowcase />
      <HighMilesFeature />
      <CategoryRail />
      <LocationsPreview />
      <SocialProof />
    </div>
  );
}
