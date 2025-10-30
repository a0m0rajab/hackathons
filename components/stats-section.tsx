import { Card } from "@/components/ui/card"

const stats = [
  { icon: "👩‍💻", label: "Participants", value: "68", color: "oklch(0.75_0.15_290)" },
  { icon: "📦", label: "Repositories Contributed", value: "15", color: "oklch(0.82_0.12_30)" },
  { icon: "🔀", label: "PRs Opened", value: "54", color: "oklch(0.85_0.10_180)" },
  { icon: "✅", label: "PRs Accepted", value: "48", color: "oklch(0.80_0.12_210)" },
  { icon: "🌈", label: "New Projects Started", value: "9", color: "oklch(0.88_0.08_330)" },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[oklch(0.96_0.02_180)] to-[oklch(0.94_0.04_290)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[oklch(0.45_0.15_290)]">Hackathon Highlights 💫</h2>
          <p className="text-lg text-muted-foreground">Our community in numbers — every PR is a spark of kindness 💕</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm border-2"
              style={{
                borderColor: stat.color,
                boxShadow: `0 4px 20px ${stat.color}20`,
              }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
