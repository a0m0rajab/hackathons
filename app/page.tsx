import { HeroSection } from "@/components/hero-section"
import { EventImagesSection } from "@/components/event-images-section"
import { ScheduleSection } from "@/components/schedule-section"
import { StatsSection } from "@/components/stats-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { ProjectsSection } from "@/components/projects-section"
import { PartnersSection } from "@/components/partners-section"
import { JoinFormSection } from "@/components/join-form-section"
import { ClosingSection } from "@/components/closing-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventImagesSection />
      <ScheduleSection />
      <StatsSection />
      <LeaderboardSection />
      {/* <ProjectsSection /> */}
      {/* <PartnersSection /> */}
      {/* <JoinFormSection /> */}
      <ClosingSection />
    </main>
  )
}
