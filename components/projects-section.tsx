import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    emoji: "🌈",
    title: "Good Vibes Tracker",
    description: "A React app that celebrates daily gratitude and happy commits.",
    color: "oklch(0.75_0.15_290)",
  },
  {
    emoji: "💬",
    title: "KindPR Bot",
    description: "A GitHub bot that sends encouraging messages on PRs.",
    color: "oklch(0.82_0.12_30)",
  },
  {
    emoji: "🍀",
    title: "Open Source Garden",
    description: "A web gallery where each contributor becomes a blooming flower.",
    color: "oklch(0.85_0.10_180)",
  },
  {
    emoji: "🌻",
    title: "Code Café",
    description: "A cozy chatroom for mentors and new contributors to connect.",
    color: "oklch(0.88_0.08_330)",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[oklch(0.96_0.02_180)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[oklch(0.45_0.15_290)]">Community Creations 🌸</h2>
          <p className="text-lg text-muted-foreground">
            Four heartwarming projects built with creativity, collaboration, and code 💕
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white/90 backdrop-blur-sm border-2 group"
              style={{
                borderColor: project.color,
              }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.emoji}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <Button
                variant="outline"
                className="rounded-full border-2 hover:shadow-lg transition-all bg-transparent"
                style={{
                  borderColor: project.color,
                  color: project.color,
                }}
              >
                View on GitHub →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
